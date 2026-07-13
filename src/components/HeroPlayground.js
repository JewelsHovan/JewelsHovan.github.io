import { useEffect, useRef, useState } from 'react';
import './HeroPlayground.css';

const sketches = [
  {
    id: 'monogram',
    label: 'JH',
    word: 'JH',
    note: 'A personal corner of the web.',
  },
  {
    id: 'make',
    label: 'Make',
    word: 'MAKE',
    note: 'Turn an idea until it becomes tangible.',
  },
  {
    id: 'play',
    label: 'Play',
    word: 'PLAY',
    note: 'Keep curiosity in the finished thing.',
  },
];

const particleColors = ['#9ce8c4', '#d9f66c', '#69cdd2', '#f28973', '#a4a2e6'];

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function sampleWord(word, width, height) {
  const buffer = document.createElement('canvas');
  buffer.width = Math.max(1, Math.floor(width));
  buffer.height = Math.max(1, Math.floor(height));
  const context = buffer.getContext('2d');
  if (!context) return [];

  const availableWidth = width * 0.78;
  let fontSize = Math.min(height * 0.54, width * 0.42);
  context.font = `800 ${fontSize}px "Bricolage Grotesque", sans-serif`;
  const measured = context.measureText(word).width;
  if (measured > availableWidth) fontSize *= availableWidth / measured;

  context.clearRect(0, 0, width, height);
  context.fillStyle = '#ffffff';
  context.font = `800 ${fontSize}px "Bricolage Grotesque", sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(word, width / 2, height / 2 - height * 0.015);

  const pixels = context.getImageData(0, 0, buffer.width, buffer.height).data;
  const step = width < 430 ? 4 : 5;
  const candidates = [];

  for (let y = step; y < buffer.height; y += step) {
    for (let x = step; x < buffer.width; x += step) {
      if (pixels[(y * buffer.width + x) * 4 + 3] > 110) candidates.push({ x, y });
    }
  }

  const limit = width < 430 ? 520 : 760;
  if (candidates.length <= limit) return candidates;

  const sampled = [];
  const stride = candidates.length / limit;
  for (let index = 0; index < limit; index += 1) {
    sampled.push(candidates[Math.floor(index * stride)]);
  }
  return sampled;
}

function HeroPlayground() {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const cursorRef = useRef(null);
  const rebuildRef = useRef(null);
  const burstRef = useRef(null);
  const activeSketchRef = useRef(sketches[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [particleCount, setParticleCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);
  const activeSketch = sketches[activeIndex];

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    if (media.addEventListener) media.addEventListener('change', update);
    else media.addListener?.(update);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update);
      else media.removeListener?.(update);
    };
  }, []);

  useEffect(() => {
    activeSketchRef.current = activeSketch;
    rebuildRef.current?.();
  }, [activeSketch]);

  useEffect(() => {
    if (reduceMotion || isHovered || hasFocus || !isInView) return undefined;
    const timer = window.setInterval(() => {
      burstRef.current?.();
      setActiveIndex((index) => (index + 1) % sketches.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [hasFocus, isHovered, isInView, reduceMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage || typeof canvas.getContext !== 'function') return undefined;

    let context;
    try {
      context = canvas.getContext('2d');
    } catch {
      return undefined;
    }
    if (!context) return undefined;

    let frameId;
    let disposed = false;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let lastTime = performance.now();
    const particles = [];
    const pointer = { active: false, x: 0, y: 0 };

    const draw = (time = performance.now()) => {
      frameId = undefined;
      if (disposed || (!isVisible && !reduceMotion)) return;
      const elapsed = Math.min(2, Math.max(0.35, (time - lastTime) / 16.67));
      lastTime = time;
      context.clearRect(0, 0, width, height);

      context.save();
      context.globalCompositeOperation = 'lighter';
      particles.forEach((particle, index) => {
        if (!reduceMotion) {
          let forceX = (particle.targetX - particle.x) * 0.032;
          let forceY = (particle.targetY - particle.y) * 0.032;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distanceSquared = dx * dx + dy * dy;
            const radius = Math.min(118, width * 0.24);
            if (distanceSquared > 0 && distanceSquared < radius * radius) {
              const distance = Math.sqrt(distanceSquared);
              const strength = (1 - distance / radius) * 1.8;
              forceX += (dx / distance) * strength;
              forceY += (dy / distance) * strength;
            }
          }

          particle.velocityX = (particle.velocityX + forceX * elapsed) * 0.84;
          particle.velocityY = (particle.velocityY + forceY * elapsed) * 0.84;
          particle.x += particle.velocityX * elapsed;
          particle.y += particle.velocityY * elapsed;
        }

        const shimmer = reduceMotion ? 1 : 0.82 + Math.sin(time * 0.0018 + particle.phase) * 0.18;
        const radius = particle.size * shimmer;
        context.globalAlpha = 0.7 + (index % 9) * 0.025;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fill();

        if (index % 31 === 0) {
          context.globalAlpha = 0.15;
          context.beginPath();
          context.arc(particle.x, particle.y, radius * 3.8, 0, Math.PI * 2);
          context.fill();
        }
      });
      context.restore();

      if (!reduceMotion) frameId = window.requestAnimationFrame(draw);
    };

    const rebuild = () => {
      if (!width || !height) return;
      const targets = sampleWord(activeSketchRef.current.word, width, height);
      if (!targets.length) return;

      while (particles.length < targets.length) {
        const index = particles.length;
        const angle = (index / targets.length) * Math.PI * 8;
        const radius = Math.max(width, height) * (0.38 + (index % 17) / 80);
        particles.push({
          x: width / 2 + Math.cos(angle) * radius,
          y: height / 2 + Math.sin(angle) * radius,
          targetX: width / 2,
          targetY: height / 2,
          velocityX: 0,
          velocityY: 0,
          phase: index * 0.47,
          size: 0.72 + (index % 7) * 0.11,
          color: particleColors[index % particleColors.length],
        });
      }
      if (particles.length > targets.length) particles.splice(targets.length);

      particles.forEach((particle, index) => {
        particle.targetX = targets[index].x;
        particle.targetY = targets[index].y;
        if (reduceMotion) {
          particle.x = particle.targetX;
          particle.y = particle.targetY;
        }
      });
      setParticleCount(targets.length);
      if (reduceMotion) draw();
    };

    const resize = () => {
      width = Math.max(1, Math.round(stage.clientWidth));
      height = Math.max(1, Math.round(stage.clientHeight));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      pointer.x = width / 2;
      pointer.y = height / 2;
      rebuild();
    };

    const burst = (originX = width / 2, originY = height / 2) => {
      if (reduceMotion) return;
      particles.forEach((particle, index) => {
        const dx = particle.x - originX;
        const dy = particle.y - originY;
        const distance = Math.max(18, Math.sqrt(dx * dx + dy * dy));
        const kick = 3.3 + (index % 13) * 0.14;
        particle.velocityX += (dx / distance) * kick;
        particle.velocityY += (dy / distance) * kick;
      });
    };

    rebuildRef.current = rebuild;
    burstRef.current = burst;

    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(resize) : null;
    const visibilityObserver = typeof IntersectionObserver === 'function'
      ? new IntersectionObserver(([entry]) => {
        if (disposed) return;
        isVisible = entry.isIntersecting;
        setIsInView(isVisible);
        if (isVisible && !reduceMotion && !frameId) {
          lastTime = performance.now();
          frameId = window.requestAnimationFrame(draw);
        }
      }, { threshold: 0 })
      : null;
    observer?.observe(stage);
    visibilityObserver?.observe(stage);
    window.addEventListener('resize', resize);
    resize();

    if (document.fonts?.ready) document.fonts.ready.then(() => {
      if (!disposed) rebuild();
    });
    if (!reduceMotion) frameId = window.requestAnimationFrame(draw);

    const setPointer = (event) => {
      const bounds = stage.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * width;
      pointer.y = ((event.clientY - bounds.top) / bounds.height) * height;
      pointer.active = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
        cursorRef.current.dataset.visible = 'true';
      }
    };

    const clearPointer = () => {
      pointer.active = false;
      if (cursorRef.current) cursorRef.current.dataset.visible = 'false';
    };

    stage.addEventListener('pointermove', setPointer);
    stage.addEventListener('pointerleave', clearPointer);

    return () => {
      disposed = true;
      observer?.disconnect();
      visibilityObserver?.disconnect();
      window.removeEventListener('resize', resize);
      stage.removeEventListener('pointermove', setPointer);
      stage.removeEventListener('pointerleave', clearPointer);
      if (frameId) window.cancelAnimationFrame(frameId);
      rebuildRef.current = null;
      burstRef.current = null;
    };
  }, [reduceMotion]);

  const selectSketch = (index, shouldBurst = true) => {
    if (shouldBurst) burstRef.current?.();
    setActiveIndex(index);
  };

  const cycleSketch = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    burstRef.current?.(event.clientX ? event.clientX - bounds.left : undefined, event.clientY ? event.clientY - bounds.top : undefined);
    setActiveIndex((index) => (index + 1) % sketches.length);
  };

  const moveModeFocus = (event) => {
    const directions = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -1, ArrowDown: 1 };
    if (!(event.key in directions) && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? sketches.length - 1
        : (activeIndex + directions[event.key] + sketches.length) % sketches.length;
    selectSketch(nextIndex);
    requestAnimationFrame(() => document.getElementById(`hero-sketch-tab-${sketches[nextIndex].id}`)?.focus());
  };

  return (
    <section
      className="hero-playground"
      aria-labelledby="hero-playground-title"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >
      <div className="playground-topline">
        <p id="hero-playground-title"><span /> A small thing to play with</p>
        <p>Move it around · it settles back</p>
      </div>

      <div className="playground-stage" id="hero-sketch-panel" role="tabpanel" aria-labelledby={`hero-sketch-tab-${activeSketch.id}`} ref={stageRef}>
        <canvas ref={canvasRef} />
        <button
          className="playground-hitarea"
          type="button"
          aria-label={`Interactive particle sketch showing ${activeSketch.word}. Activate to recompose.`}
          onClick={cycleSketch}
        >
          <span className="sr-only">Recompose the particle sketch</span>
        </button>
        <span className="playground-cursor" ref={cursorRef} data-visible="false" aria-hidden="true"><i /></span>
        <p className="playground-instruction" aria-hidden="true"><span>Move through it</span><span>Click to recompose</span></p>
      </div>

      <div className="playground-footer">
        <div className="playground-copy">
          <span>{particleCount ? `${particleCount} little points` : 'A cloud of little points'}</span>
          <p>{activeSketch.note}</p>
        </div>
        <div className="playground-modes" role="tablist" aria-label="Choose a live sketch">
          {sketches.map((sketch, index) => (
            <button
              type="button"
              id={`hero-sketch-tab-${sketch.id}`}
              role="tab"
              tabIndex={activeIndex === index ? 0 : -1}
              aria-controls="hero-sketch-panel"
              aria-selected={activeIndex === index}
              className={activeIndex === index ? 'active' : ''}
              key={sketch.id}
              onClick={() => selectSketch(index)}
              onKeyDown={moveModeFocus}
            >
              {sketch.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroPlayground;
