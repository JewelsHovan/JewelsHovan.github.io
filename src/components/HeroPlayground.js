import { useEffect, useRef, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import './HeroPlayground.css';

const sketches = [
  {
    id: 'threads',
    label: 'Threads',
    composition: 'loose threads',
    note: 'Relevant context first.',
    href: '#notes',
    action: 'Explore my field notes',
  },
  {
    id: 'system',
    label: 'System',
    composition: 'working system',
    note: 'Bounded work, visible checks.',
    href: '#projects',
    action: 'Explore system patterns',
  },
  {
    id: 'signal',
    label: 'Signal',
    composition: 'signal report',
    note: 'Noise becomes a useful signal.',
    href: 'https://jewelshovan.github.io/AI-News-Reports/',
    action: 'Read AI News Reports',
    external: true,
  },
];

const particleColors = ['#9ce8c4', '#d9f66c', '#69cdd2', '#f28973', '#a4a2e6'];

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && Boolean(window.matchMedia('(prefers-reduced-motion: reduce)')?.matches);
}

function sendTactileFeedback(duration = 8) {
  if (prefersReducedMotion()) return;
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    navigator.vibrate(duration);
  }
}

function sampleComposition(id, width, height) {
  const buffer = document.createElement('canvas');
  buffer.width = Math.max(1, Math.floor(width));
  buffer.height = Math.max(1, Math.floor(height));
  const context = buffer.getContext('2d');
  if (!context) return [];

  const x = (value) => width * value;
  const y = (value) => height * value;
  context.clearRect(0, 0, width, height);
  context.strokeStyle = '#fff';
  context.fillStyle = '#fff';
  context.lineCap = 'round';
  context.lineJoin = 'round';

  if (id === 'threads') {
    const nodes = [[.2,.34],[.32,.22],[.43,.39],[.29,.57],[.52,.62],[.61,.43],[.72,.3],[.79,.55]];
    const links = [[0,1],[0,3],[1,2],[2,3],[2,5],[3,4],[4,5],[5,6],[5,7],[6,7]];
    context.lineWidth = Math.max(5, width * .009);
    links.forEach(([a,b]) => { context.beginPath(); context.moveTo(x(nodes[a][0]),y(nodes[a][1])); context.quadraticCurveTo(x((nodes[a][0]+nodes[b][0]) / 2),y((nodes[a][1]+nodes[b][1]) / 2 - .035),x(nodes[b][0]),y(nodes[b][1])); context.stroke(); });
    nodes.forEach(([nx,ny], index) => { context.beginPath(); context.arc(x(nx),y(ny),Math.max(8,width * (index % 3 === 0 ? .025 : .018)),0,Math.PI * 2); context.fill(); });
  } else if (id === 'system') {
    const boxes = [[.13,.38,.18,.23],[.41,.18,.2,.2],[.41,.6,.2,.2],[.71,.38,.18,.23]];
    context.lineWidth = Math.max(5,width * .009);
    boxes.forEach(([bx,by,bw,bh]) => { context.strokeRect(x(bx),y(by),x(bw),y(bh)); });
    [[.31,.495,.41,.28],[.31,.495,.41,.7],[.61,.28,.71,.495],[.61,.7,.71,.495]].forEach(([ax,ay,bx,by]) => { context.beginPath(); context.moveTo(x(ax),y(ay)); context.lineTo(x(bx),y(by)); context.stroke(); });
    boxes.forEach(([bx,by,bw,bh]) => { context.beginPath(); context.arc(x(bx+bw/2),y(by+bh/2),Math.max(6,width*.012),0,Math.PI*2); context.fill(); });
  } else {
    context.lineWidth = Math.max(5,width * .009);
    for (let index = 0; index < 23; index += 1) {
      const nx = .12 + ((index * 37) % 23) / 58;
      const ny = .2 + ((index * 17) % 19) / 32;
      context.beginPath(); context.arc(x(nx),y(ny),Math.max(3,width*.006),0,Math.PI*2); context.fill();
    }
    context.beginPath(); context.moveTo(x(.47),y(.2)); context.lineTo(x(.62),y(.36)); context.lineTo(x(.62),y(.64)); context.lineTo(x(.47),y(.8)); context.stroke();
    context.strokeRect(x(.62),y(.2),x(.25),y(.6));
    [.34,.46,.58,.7].forEach((lineY,index) => { context.beginPath(); context.moveTo(x(.67),y(lineY)); context.lineTo(x(index === 0 ? .82 : .79),y(lineY)); context.stroke(); });
  }

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
      const targets = sampleComposition(activeSketchRef.current.id, width, height);
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

    const burst = (originX = width / 2, originY = height / 2, intensity = 1) => {
      if (reduceMotion) return;
      particles.forEach((particle, index) => {
        const dx = particle.x - originX;
        const dy = particle.y - originY;
        const distance = Math.max(18, Math.sqrt(dx * dx + dy * dy));
        const kick = (3.3 + (index % 13) * 0.14) * intensity;
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

    const pressPointer = (event) => {
      setPointer(event);
      if (event.pointerType === 'touch' || event.pointerType === 'pen') {
        burst(pointer.x, pointer.y, 0.38);
      }
    };

    const clearPointer = () => {
      pointer.active = false;
      if (cursorRef.current) cursorRef.current.dataset.visible = 'false';
    };

    stage.addEventListener('pointerdown', pressPointer);
    stage.addEventListener('pointermove', setPointer);
    stage.addEventListener('pointerup', clearPointer);
    stage.addEventListener('pointercancel', clearPointer);
    stage.addEventListener('pointerleave', clearPointer);

    return () => {
      disposed = true;
      observer?.disconnect();
      visibilityObserver?.disconnect();
      window.removeEventListener('resize', resize);
      stage.removeEventListener('pointerdown', pressPointer);
      stage.removeEventListener('pointermove', setPointer);
      stage.removeEventListener('pointerup', clearPointer);
      stage.removeEventListener('pointercancel', clearPointer);
      stage.removeEventListener('pointerleave', clearPointer);
      if (frameId) window.cancelAnimationFrame(frameId);
      rebuildRef.current = null;
      burstRef.current = null;
    };
  }, [reduceMotion]);

  const selectSketch = (index, shouldBurst = true) => {
    if (shouldBurst) {
      burstRef.current?.();
      sendTactileFeedback(8);
    }
    setActiveIndex(index);
  };

  const cycleSketch = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    burstRef.current?.(event.clientX ? event.clientX - bounds.left : undefined, event.clientY ? event.clientY - bounds.top : undefined);
    sendTactileFeedback(12);
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
        <p id="hero-playground-title"><span /> Context → work → signal</p>
        <p>Drag through it · it settles back</p>
      </div>

      <div className="playground-stage" id="hero-sketch-panel" role="tabpanel" aria-labelledby={`hero-sketch-tab-${activeSketch.id}`} ref={stageRef}>
        <canvas ref={canvasRef} />
        <button
          className="playground-hitarea"
          type="button"
          aria-label={`Interactive particle composition showing ${activeSketch.composition}. Activate to recompose.`}
          onClick={cycleSketch}
        >
          <span className="sr-only">Recompose the particle sketch</span>
        </button>
        <span className="playground-cursor" ref={cursorRef} data-visible="false" aria-hidden="true"><i /></span>
        <p className="playground-instruction" aria-hidden="true"><span>Drag through the dots</span><span>Tap to reshape</span></p>
      </div>

      <div className="playground-footer">
        <div className="playground-copy">
          <span>{particleCount ? `${particleCount} PARTICLES IN THIS COMPOSITION` : 'A PARTICLE COMPOSITION'}</span>
          <p>{activeSketch.note}</p>
          <a className="playground-route" href={activeSketch.href} target={activeSketch.external ? '_blank' : undefined} rel={activeSketch.external ? 'noreferrer' : undefined}>{activeSketch.action} <FiArrowDown size={13} /></a>
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
