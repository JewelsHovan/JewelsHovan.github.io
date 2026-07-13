import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiChevronRight,
  FiCompass,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiX,
} from 'react-icons/fi';
import './App.css';
import {
  CapabilityBridgeSketch,
  DeliveryLoopSketch,
  DiscoveryLoopSketch,
  HarnessMapSketch,
  SessionLoopSketch,
} from './components/HarnessDiagrams';
import HeroPlayground from './components/HeroPlayground';
import { fieldNotes, nextNotePrompt } from './content/fieldNotes';
import { harnessResearch, harnessStages } from './content/harnessGuide';

const email = 'JulienH15@icloud.com';
const newsletterUrl = 'https://jewelshovan.github.io/AI-News-Reports/';
const newsletterArchiveUrl = 'https://jewelshovan.github.io/AI-News-Reports/archive/';

const filters = [
  { id: 'all', label: 'Everything' },
  { id: 'now', label: 'What I’m making now' },
  { id: 'systems', label: 'AI systems' },
  { id: 'workflows', label: 'Ways of working' },
  { id: 'public', label: 'Things you can visit' },
];

const projects = [
  {
    id: 'fluence',
    name: 'Compass Fluence',
    eyebrow: 'Project memory',
    type: 'Internal system',
    tags: ['now', 'systems'],
    color: 'mint',
    short: 'A way to keep what a team decided, why it mattered, and the sources behind it.',
    detail: 'Fluence keeps the history behind a project close to the work itself: what people decided, why they decided it, and which source material matters. I’m helping build it so a person or an AI assistant can find what they need without digging through a pile of old documents.',
    proof: 'I like the idea that a project can remember why it became what it is.',
  },
  {
    id: 'hub',
    name: 'Compass Hub',
    eyebrow: 'Sharing what a team learns',
    type: 'Internal system',
    tags: ['now', 'systems'],
    color: 'aqua',
    short: 'A library where people can pass along useful AI tools, instructions, and project knowledge.',
    detail: 'Compass Hub is a shared library for the useful things a team learns while working with AI: instructions, tools, project memory, and setups worth reusing. It means a good idea can move between people and projects instead of living on one laptop.',
    proof: 'I enjoy turning one person’s useful discovery into something the rest of the team can pick up.',
  },
  {
    id: 'superpowers',
    name: 'Pi Compass Superpowers',
    eyebrow: 'Tools around coding agents',
    type: 'Internal ecosystem',
    tags: ['now', 'systems'],
    color: 'lime',
    short: 'Tools that help coding agents remember a project, divide work, and check what they changed.',
    detail: 'This is a collection of tools I’m building around coding agents. They help an agent remember a project, break work into sensible pieces, use a browser, check its results, and leave a clear record for the person working with it.',
    proof: 'The interesting part is making an AI collaborator easier to understand and steer.',
  },
  {
    id: 'news',
    name: 'AI News Reports',
    eyebrow: 'Personal publishing system',
    type: 'Public project',
    tags: ['now', 'systems', 'public'],
    color: 'coral',
    short: 'My AI news habit turned into a public newsletter.',
    detail: 'I made this to follow AI without letting the news take over my week. It collects stories from different sources, helps me compare them, and turns my reading into a digest for the email list and public archive.',
    proof: 'It began as a personal reading habit and became something I could share.',
    link: newsletterUrl,
    linkLabel: 'Read the newsletter',
  },
  {
    id: 'noro',
    name: 'Noro',
    eyebrow: 'Making presentations with AI',
    type: 'Compass build',
    tags: ['systems'],
    color: 'violet',
    short: 'Several AI roles turn a question and its source material into one coherent presentation.',
    detail: 'Noro helps turn a prompt and a set of source documents into a presentation. Several AI roles handle research, structure, writing, layout, and a final review, while a person stays responsible for what the deck actually says.',
    proof: 'I’m less interested in generating slides than in helping someone make a coherent point.',
  },
  {
    id: 'analyst',
    name: 'Data Analyst AI',
    eyebrow: 'An AI data analyst',
    type: 'Personal exploration',
    tags: ['systems'],
    color: 'blue',
    short: 'An analysis assistant that makes a plan, checks the data, reviews its work, and writes a report.',
    detail: 'I built this to explore what an AI data analyst needs beyond a chat box. It plans an analysis, checks the data, reviews its own work, and can return to an earlier step when something does not add up.',
    proof: 'I wanted the analysis process to be visible, including the moments when it changes its mind.',
  },
  {
    id: 'delivery',
    name: 'Delivery control plane',
    eyebrow: 'A visible way to make changes',
    type: 'Private work project',
    tags: ['now', 'workflows'],
    color: 'gold',
    short: 'A route from a plain-language request to a reviewed change you can preview.',
    detail: 'I designed a way for someone to describe a change to a group of connected applications, follow it as it is built, try a preview, and decide whether it should go live. AI helps with the work, but the owner can always see and redirect what is happening.',
    proof: 'The person asking for a change should not lose sight of it once the technical work begins.',
  },
  {
    id: 'luccas-agent',
    name: 'Luccas Studio Agent',
    eyebrow: 'Making changes through Discord',
    type: 'Private studio project',
    tags: ['now', 'workflows', 'systems'],
    color: 'coral',
    short: 'A request-to-release loop that lets a creative studio change its apps from Discord.',
    detail: 'This lets a creative studio owner ask for a website change from Discord, talk through the details, and see a preview before deciding whether it goes live. The complicated development work stays in the background without hiding the result.',
    proof: 'I like giving someone a direct relationship with the software they use, even if they do not write code.',
  },
  {
    id: 'lco-os',
    name: 'LCO Project OS',
    eyebrow: 'Product + delivery workflow',
    type: 'Internal system',
    tags: ['now', 'workflows', 'systems'],
    color: 'gold',
    short: 'A shared project view that keeps product managers, designers, and engineers close to the same work.',
    detail: 'This brings project plans, Jira work, design context, and technical knowledge into one connected view. I’m exploring how product managers, designers, and engineers can stay close to the same work instead of passing partial context between separate tools.',
    proof: 'A shared picture of the work makes it easier for different people to contribute.',
  },
  {
    id: 'agentic-data',
    name: 'Ticket → data pipeline',
    eyebrow: 'AI-assisted data engineering',
    type: 'Technical experiment',
    tags: ['systems', 'workflows'],
    color: 'aqua',
    short: 'An experiment where an AI agent plans, builds, and checks a working data pipeline.',
    detail: 'This experiment gives an AI agent a set of data-engineering tickets and asks it to build a working Lakeflow pipeline. You can follow the plan, watch the checks run, see a real failure, and see how the agent recovers.',
    proof: 'Failures tell you much more about an automated system than a perfect first run.',
  },
  {
    id: 'roadwatch',
    name: 'RoadWatch',
    eyebrow: 'Data + decision support',
    type: 'Public project',
    tags: ['public'],
    color: 'blue',
    short: 'An interactive exploration of work-zone data, risk signals, and traffic impact.',
    detail: 'RoadWatch brings together roadwork conditions, traffic, and surrounding context to explore what makes a work zone risky. It came from my data-engineering work and still influences how I think about building technology around real decisions.',
    proof: 'This project taught me to make the underlying data understandable before trying to make it clever.',
    link: 'https://github.com/JewelsHovan/Capstone-SIADS699-Team-RoadWatch',
    linkLabel: 'Explore on GitHub',
  },
  {
    id: 'team-knowledge',
    name: 'Team Knowledge Assistant',
    eyebrow: 'Conversational context',
    type: 'Internal experiment',
    tags: ['systems'],
    color: 'violet',
    short: 'A chat assistant that can answer questions using both the code and the team’s project knowledge.',
    detail: 'This is a team-chat assistant that can look at both a codebase and the working knowledge around it. I’m exploring whether people can ask useful project questions in the chat they already use instead of opening another tool.',
    proof: 'Sometimes the friendliest interface is simply the place where the conversation is already happening.',
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes Pipeline',
    eyebrow: 'Context ingestion',
    type: 'Internal system',
    tags: ['workflows', 'systems'],
    color: 'aqua',
    short: 'A way to turn meeting transcripts into notes that people and AI assistants can find later.',
    detail: 'This reads existing meeting transcripts on a schedule and turns them into searchable notes and summaries. It helps a team find what was discussed without treating every passing comment as a permanent decision.',
    proof: 'Meetings are more useful when the important parts can be found later.',
  },
  {
    id: 'football',
    name: 'The Football Field Guide',
    eyebrow: 'Learning by interaction',
    type: 'Personal project',
    tags: ['public'],
    color: 'lime',
    short: 'A friendly, interactive way to see football tactics more clearly.',
    detail: 'I made this because explaining the game should be as fun as watching it. Small interactions, visual cues, and plain language make xG, pressing, and shape easier to get a feel for.',
    proof: 'A good interface can make a complicated idea feel welcoming.',
    link: 'https://jewelshovan.github.io/football-concepts-learning/',
    linkLabel: 'Open the guide',
  },
  {
    id: 'pain-plus',
    name: 'Pain+',
    eyebrow: 'Creative wellbeing',
    type: 'Personal project',
    tags: ['public'],
    color: 'coral',
    short: 'An art and reflection space for people living with pain.',
    detail: 'Pain+ is an art and reflection space for people living with pain. It uses gentle prompts and guided creation to offer another way to sit with a difficult experience.',
    proof: 'I wanted to explore AI as a quiet creative aid, not a machine for doing things faster.',
    link: 'https://github.com/JewelsHovan/ArtTherapy-plus',
    linkLabel: 'See the project',
  },
  {
    id: 'quiz',
    name: 'Claude Code Quiz',
    eyebrow: 'Learning tools',
    type: 'Public project',
    tags: ['public'],
    color: 'violet',
    short: 'An adaptive study space for the Claude Certified Architect foundations exam.',
    detail: 'A playful study tool with adaptive questions, personal progress, and more personality than a static study guide.',
    proof: 'I like building the tools I wish I’d had when learning something new.',
    link: 'https://github.com/JewelsHovan/ClaudeCodeQuiz',
    linkLabel: 'Explore on GitHub',
  },
];

const workflowViews = {
  context: {
    label: '01 / Understand',
    title: 'First, I try to understand what is really being asked.',
    body: 'I gather the useful pieces that tend to be scattered across project documents, decisions, tickets, data, and meeting notes. The aim is not to collect everything. It is to give the person or AI doing the work enough background to make a sensible start.',
    trace: ['listen to the request', 'find the useful context', 'agree on what good looks like'],
  },
  motion: {
    label: '02 / Make',
    title: 'Then I give the work a shape people can follow.',
    body: 'I decide what AI can help with, what needs a person’s judgment, and where we should pause to look at the result. That might include research, planning, coding, review, or simply keeping track of what changed.',
    trace: ['choose the next step', 'people and AI do their parts', 'stop and look together'],
  },
  delivery: {
    label: '03 / Share',
    title: 'A working result should be easy to see and respond to.',
    body: 'I connect the original request to a preview, the checks behind it, and a clear decision about what happens next. That way, the person who asked for the work can try it, question it, and change direction before anything becomes final.',
    trace: ['turn the idea into something visible', 'try it and check it', 'keep, revise, or undo'],
  },
};

const waypoints = [
  { id: 'top', index: '00', label: 'Start', detail: 'welcome' },
  { id: 'now', index: '01', label: 'On my desk', detail: 'what has my attention' },
  { id: 'roots', index: '02', label: 'How I got here', detail: 'software, data, and AI' },
  { id: 'harness', index: '03', label: 'A guide to my work', detail: 'what helps AI work well' },
  { id: 'projects', index: '04', label: 'Project garden', detail: 'things I have made' },
  { id: 'workflow', index: '05', label: 'How I work', detail: 'from question to something useful' },
  { id: 'notes', index: '06', label: 'Field notes', detail: 'ideas I am turning over' },
  { id: 'about', index: '07', label: 'A bit more', detail: 'who I am beyond the projects' },
];

function GeneratedDiagram({ children, notes = [], variant }) {
  return (
    <div className="atlas-visual-block">
      <p className="diagram-pan-hint">Swipe sideways to inspect the diagram.</p>
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: Horizontal diagrams need a keyboard-scrollable viewport. */}
      <section className={`generated-diagram generated-diagram--${variant}`} tabIndex={0} aria-label="Scrollable teaching diagram">
        {children}
      </section>
      {notes.length > 0 && <ul className="atlas-callouts">{notes.map((note) => <li key={note}><span />{note}</li>)}</ul>}
    </div>
  );
}

function ProjectDetail({ className = '', id, project }) {
  return (
    <article className={`project-detail detail-${project.color} ${className}`.trim()} id={id} aria-live="polite">
      <div className="detail-topline"><span>{project.type}</span><span className="detail-mark">✦</span></div>
      <p className="detail-label">{project.eyebrow}</p>
      <h3>{project.name}</h3>
      <p className="detail-body">{project.detail}</p>
      <div className="detail-proof"><span>What interests me</span><p>{project.proof}</p></div>
      {project.link ? (
        <a className="detail-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <FiArrowUpRight size={17} /></a>
      ) : (
        <p className="detail-private"><FiCheck size={15} /> This project is not public, so I have kept the description to what I can share.</p>
      )}
    </article>
  );
}

function useMediaQuery(query) {
  const readMatch = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
  const [matches, setMatches] = useState(readMatch);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    if (media.addEventListener) media.addEventListener('change', update);
    else media.addListener?.(update);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update);
      else media.removeListener?.(update);
    };
  }, [query]);

  return matches;
}

function moveTabFocus(event, ids, activeId, selectId, prefix) {
  const moves = {
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowRight: 1,
    ArrowUp: -1,
  };
  if (!(event.key in moves) && event.key !== 'Home' && event.key !== 'End') return;

  event.preventDefault();
  const currentIndex = Math.max(0, ids.indexOf(activeId));
  const nextIndex = event.key === 'Home'
    ? 0
    : event.key === 'End'
      ? ids.length - 1
      : (currentIndex + moves[event.key] + ids.length) % ids.length;
  const nextId = ids[nextIndex];
  selectId(nextId);
  requestAnimationFrame(() => document.getElementById(`${prefix}-${nextId}`)?.focus());
}

function App() {
  const [fieldMapOpen, setFieldMapOpen] = useState(false);
  const [activeWaypointId, setActiveWaypointId] = useState('top');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(projects[0].id);
  const [activeWorkflow, setActiveWorkflow] = useState('context');
  const [activeNoteId, setActiveNoteId] = useState(fieldNotes[0].id);
  const [activeHarnessId, setActiveHarnessId] = useState('context');
  const [harnessAtlasOpen, setHarnessAtlasOpen] = useState(false);
  const fieldMapPanelRef = useRef(null);
  const fieldMapTriggerRef = useRef(null);
  const atlasDialogRef = useRef(null);
  const atlasTriggerRef = useRef(null);
  const useInlineProjectDetails = useMediaQuery('(max-width: 930px)');

  useEffect(() => {
    document.title = 'Julien Hovan | AI systems, projects & field notes';
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observed = waypoints.map((waypoint) => document.getElementById(waypoint.id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (mostVisible) setActiveWaypointId(mostVisible.target.id);
    }, { rootMargin: '-18% 0px -58%', threshold: [0, .15, .45, .75] });
    observed.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setFieldMapOpen(false);
        setHarnessAtlasOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('field-map-open', fieldMapOpen);
    if (!fieldMapOpen) return () => document.body.classList.remove('field-map-open');

    const background = [...document.querySelectorAll('.site-header, main, .site-footer')];
    background.forEach((element) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });

    const keepFocusInMap = (event) => {
      if (event.key !== 'Tab' || !fieldMapPanelRef.current) return;
      const focusable = [...fieldMapPanelRef.current.querySelectorAll('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !fieldMapPanelRef.current.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    fieldMapPanelRef.current?.querySelector('button')?.focus();
    document.addEventListener('keydown', keepFocusInMap);
    return () => {
      document.body.classList.remove('field-map-open');
      document.removeEventListener('keydown', keepFocusInMap);
      background.forEach((element) => {
        element.removeAttribute('inert');
        element.removeAttribute('aria-hidden');
      });
      fieldMapTriggerRef.current?.focus();
    };
  }, [fieldMapOpen]);

  useEffect(() => {
    document.body.classList.toggle('atlas-open', harnessAtlasOpen);
    if (!harnessAtlasOpen) return () => document.body.classList.remove('atlas-open');

    const background = [...document.querySelectorAll('.site-header, main, .site-footer, .field-map')];
    background.forEach((element) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });

    const keepFocusInDialog = (event) => {
      if (event.key !== 'Tab' || !atlasDialogRef.current) return;
      const focusable = [...atlasDialogRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !atlasDialogRef.current.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    atlasDialogRef.current?.querySelector('button')?.focus();
    document.addEventListener('keydown', keepFocusInDialog);
    return () => {
      document.body.classList.remove('atlas-open');
      document.removeEventListener('keydown', keepFocusInDialog);
      background.forEach((element) => {
        element.removeAttribute('inert');
        element.removeAttribute('aria-hidden');
      });
      atlasTriggerRef.current?.focus();
    };
  }, [harnessAtlasOpen]);

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'all' || project.tags.includes(activeFilter)),
    [activeFilter]
  );
  const selected = projects.find((project) => project.id === selectedProject) || visibleProjects[0];
  const activeView = workflowViews[activeWorkflow];
  const activeNote = fieldNotes.find((note) => note.id === activeNoteId) || fieldNotes[0];
  const activeHarnessStage = harnessStages.find((stage) => stage.id === activeHarnessId) || harnessStages[0];
  const activeWaypoint = waypoints.find((waypoint) => waypoint.id === activeWaypointId) || waypoints[0];

  const chooseFilter = (filter) => {
    setActiveFilter(filter);
    const firstVisible = projects.find((project) => filter === 'all' || project.tags.includes(filter));
    if (firstVisible) setSelectedProject(firstVisible.id);
  };

  const toggleFieldMap = (event) => {
    if (!fieldMapOpen) fieldMapTriggerRef.current = event.currentTarget;
    setFieldMapOpen((open) => !open);
  };

  const closeFieldMap = () => setFieldMapOpen(false);

  const goToWaypoint = (event, waypointId) => {
    event.preventDefault();
    setActiveWaypointId(waypointId);
    setFieldMapOpen(false);
    window.history.pushState(null, '', `#${waypointId}`);
    requestAnimationFrame(() => {
      const destination = document.getElementById(waypointId);
      const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (destination) {
        window.scrollTo({ top: destination.getBoundingClientRect().top + window.scrollY - 24, behavior: reduceMotion ? 'auto' : 'smooth' });
        const hadTabIndex = destination.hasAttribute('tabindex');
        destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
        if (!hadTabIndex) destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
      }
    });
  };

  const openHarnessAtlas = (event) => {
    atlasTriggerRef.current = event.currentTarget;
    setFieldMapOpen(false);
    setHarnessAtlasOpen(true);
  };

  const closeHarnessAtlas = () => setHarnessAtlasOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to the good part
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Julien Hovan home">
          <span className="wordmark-orbit"><i /> <b>JH</b></span>
          <span>Julien Hovan<small>Things I make and ideas I&apos;m following</small></span>
        </a>

        <div className="header-actions">
          <button className="header-map-trigger" type="button" aria-label={`${fieldMapOpen ? 'Close' : 'Open'} field map`} aria-expanded={fieldMapOpen} aria-controls="field-map" onClick={toggleFieldMap}>
            <FiCompass size={16} /><span>Field map</span>
          </button>
          <a className="nav-note" aria-label="Say hello by email" href={`mailto:${email}?subject=Hello%20Julien`}><span>Say hello</span> <FiArrowUpRight size={15} /></a>
        </div>
      </header>

      <aside className={`field-map ${fieldMapOpen ? 'is-open' : ''}`} aria-label="Navigate the project garden">
        {fieldMapOpen && <button className="field-map-scrim" type="button" tabIndex={-1} aria-label="Close field map" onClick={closeFieldMap} />}
        <button className="field-map-toggle" type="button" tabIndex={fieldMapOpen ? -1 : 0} aria-label={`${fieldMapOpen ? 'Close' : 'Open'} field map. Current waypoint: ${activeWaypoint.label}`} aria-expanded={fieldMapOpen} aria-controls="field-map" onClick={toggleFieldMap}>
          <span className="map-radar"><i /><i /><i /></span>
          <span><small>You are here</small><b>{activeWaypoint.label}</b></span>
          <FiCompass size={16} />
        </button>
        {fieldMapOpen && (
          <div className="field-map-panel" id="field-map" ref={fieldMapPanelRef} role="dialog" aria-modal="true" aria-labelledby="field-map-title" aria-describedby="field-map-description">
            <div className="field-map-panel-head"><span id="field-map-title">Field map</span><button type="button" aria-label="Close field map" onClick={closeFieldMap}><FiX size={18} /></button></div>
            <p id="field-map-description">Pick a place to visit, or keep scrolling and wander through.</p>
            <nav aria-label="Field map waypoints">
              <ol>
                {waypoints.map((waypoint) => <li className={activeWaypoint.id === waypoint.id ? 'active' : ''} key={waypoint.id}><a href={`#${waypoint.id}`} aria-current={activeWaypoint.id === waypoint.id ? 'location' : undefined} onClick={(event) => goToWaypoint(event, waypoint.id)}><span>{waypoint.index}</span><b>{waypoint.label}</b><small>{waypoint.detail}</small></a></li>)}
              </ol>
            </nav>
          </div>
        )}
      </aside>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-wrap" id="top">
          <div className="hero-copy hero-intro">
            <p className="eyebrow"><span className="pulse-dot" /> Hello, I&apos;m Julien</p>
            <h1>I build useful systems and make <em>odd little things.</em></h1>
          </div>

          <HeroPlayground />

          <div className="hero-copy hero-support">
            <p className="hero-summary">
              I&apos;m an AI engineer with a background in software and data. I spend a lot of time figuring out how people and AI can work together without making everything feel more complicated. This is where I collect the projects, experiments, and ideas that come out of that.
            </p>
            <div className="hero-actions">
              <a className="button button-mint" href="#projects">See what I make <FiArrowDown size={18} /></a>
              <a className="soft-link" href={newsletterUrl} target="_blank" rel="noreferrer">Read my AI newsletter <FiArrowUpRight size={16} /></a>
            </div>
            <p className="hero-sketch-note"><span>Try the sketch</span> Move through the letters and watch them settle back.</p>
          </div>
        </section>

        <section className="now-section" id="now">
          <div className="section-wrap now-inner">
            <div className="now-heading"><p className="eyebrow"><span className="pulse-dot" /> On my desk</p><h2>Lately, I&apos;ve been interested in what helps AI fit into real work.</h2></div>
            <div className="now-list">
              <p><span>↗</span> Helping an AI assistant find the few project details that matter instead of handing it every document.</p>
              <p><span>↗</span> Giving coding agents memory, routines, and clear moments for a person to step in.</p>
              <p><span>↗</span> Turning my AI reading habit into a public newsletter that is calmer than the usual news cycle.</p>
              <p><span>↗</span> Letting a studio owner ask for a website change in Discord and try the result before it goes live.</p>
              <p><span>↗</span> Helping product, design, and engineering work from the same picture of a project.</p>
            </div>
          </div>
        </section>

        <section className="roots-section section-wrap" id="roots">
          <div className="roots-copy">
            <p className="eyebrow">How I got here</p>
            <h2>Before AI, there were web scrapers, software, and a lot of data.</h2>
            <p>I started with small Python scripts because I wanted to understand how websites worked. One question led to another, then into software engineering, data systems, and eventually the AI work I do now.</p>
          </div>
          <ol className="roots-trail">
            <li>
              <span>01 / Software</span>
              <h3>Software engineering intern</h3>
              <p>Small Python scripts and web scrapers got me into programming. Software engineering taught me how that early curiosity becomes something another person can understand, trust, and build on.</p>
            </li>
            <li>
              <span>02 / Data</span>
              <h3>Data engineer</h3>
              <p>I learned that a useful system often starts beneath the interface, with clean inputs, dependable pipelines, and data that people can make decisions with.</p>
            </li>
            <li>
              <span>03 / AI</span>
              <h3>AI engineer</h3>
              <p>Now I build the environment around the model: context, tools, reviews, memory, and the moments where people should stay in control.</p>
            </li>
          </ol>
        </section>

        <section className="compass-section">
          <div className="section-wrap compass-inner">
            <div className="compass-copy">
              <p className="eyebrow"><span className="pulse-dot" /> Where I work</p>
              <h2>Compass Data is where I make things with other people.</h2>
              <p>Compass is a data and AI company in Montreal. We work with organizations that have a messy question, scattered information, or a process that could be made easier.</p>
              <p>I lead software delivery there. In practice, that means listening to what someone is trying to do, helping shape the idea, building the system with a team, and making sure the person who asked for it can follow along.</p>
              <a className="compass-link" href="https://compassdata.ca" target="_blank" rel="noreferrer">Visit Compass Data <FiArrowUpRight size={17} /></a>
            </div>
            <div className="compass-bearings">
              <article><span>N / Data</span><h3>Make the information usable.</h3><p>Organize scattered data so people and software can do something sensible with it.</p></article>
              <article><span>E / AI</span><h3>Give the model a clear role.</h3><p>Build AI around a real question, task, or decision instead of adding it everywhere.</p></article>
              <article><span>S / Software</span><h3>Make a place people can use.</h3><p>Turn the work behind the scenes into an application or interface that feels clear.</p></article>
              <article><span>W / Working together</span><h3>Keep the process visible.</h3><p>Share early versions, ask questions, and make room for people to change their minds.</p></article>
            </div>
          </div>
        </section>

        <section className="harness-section section-wrap" id="harness">
          <div className="section-heading harness-heading">
            <div><p className="eyebrow">A guide to my AI work</p><h2>The model is one part. I work on everything around it.</h2></div>
            <p>A model needs instructions, useful background, tools, memory, checks, and places where a person can step in. People sometimes call this a harness. I think of it as giving AI a well-designed place to work.</p>
          </div>

          <div className="harness-axiom"><span>A rule I come back to</span><p>An AI cannot clarify a boundary that nobody has noticed.</p><small>Start with a clear purpose, share the background that matters, and decide how a person will check the result.</small></div>

          <div className="harness-explorer">
            <div className="harness-map" role="tablist" aria-label="Explore a practical AI engineering harness">
              {harnessStages.map((stage) => (
                <button
                  type="button"
                  id={`harness-tab-${stage.id}`}
                  key={stage.id}
                  role="tab"
                  tabIndex={activeHarnessStage.id === stage.id ? 0 : -1}
                  aria-controls="harness-stage-panel"
                  aria-selected={activeHarnessStage.id === stage.id}
                  className={activeHarnessStage.id === stage.id ? 'active' : ''}
                  onClick={() => setActiveHarnessId(stage.id)}
                  onKeyDown={(event) => moveTabFocus(event, harnessStages.map(({ id }) => id), activeHarnessStage.id, setActiveHarnessId, 'harness-tab')}
                >
                  <span>{stage.label}</span><b>{stage.title}</b>
                </button>
              ))}
            </div>

            <div className="harness-inspector" id="harness-stage-panel" role="tabpanel" aria-labelledby={`harness-tab-${activeHarnessStage.id}`} aria-live="polite">
              <div className="harness-inspector-top"><span>{activeHarnessStage.label}</span><span>One part of the picture</span></div>
              <h3>{activeHarnessStage.title}</h3>
              <p>{activeHarnessStage.summary}</p>
              <div className="harness-pairs">
                <div><span>Building blocks</span><ul>{activeHarnessStage.buildingBlocks.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><span>When it&apos;s missing</span><p>{activeHarnessStage.failure}</p></div>
              </div>
            </div>
          </div>

          <article className="harness-diagram-teaser">
            <div className="diagram-teaser-copy">
              <p className="eyebrow">A picture before the jargon</p>
              <h3>A useful run leaves the next person better prepared.</h3>
              <p>Start with what a person needs, gather the right background, do a manageable piece of work, and show what happened. The point is to make progress that another person can understand and continue.</p>
              <button className="diagram-atlas-button" type="button" onClick={openHarnessAtlas}>Open the diagram atlas <FiArrowUpRight size={15} /></button>
            </div>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: Horizontal diagrams need a keyboard-scrollable viewport. */}
            <section className="diagram-teaser-canvas" tabIndex={0} aria-label="Scrollable request-to-handoff diagram"><span className="diagram-pan-hint">Swipe sideways to follow the loop.</span><SessionLoopSketch id="main-session-loop" /></section>
          </article>

          <div className="harness-footer-grid">
            <article className="workshop-card">
              <p className="eyebrow"><span className="pulse-dot" /> Talking it through</p>
              <h3>I like making the technical picture easier to see.</h3>
              <p>I run practical workshops for people joining Compass Data and have shared versions with industry groups and students at McGill MMA. We take apart an AI system together so people can see what the model does, what surrounds it, and where their own judgment belongs.</p>
            </article>
            <div className="reading-shelf">
              <p className="queue-title">On my reading desk</p>
              {harnessResearch.map((paper) => (
                <a href={paper.href} target="_blank" rel="noreferrer" key={paper.href}>
                  <span>{paper.type}</span><b>{paper.title}</b><p>{paper.insight}</p><i>Read paper <FiArrowUpRight size={14} /></i>
                </a>
              ))}
            </div>
          </div>
          <p className="harness-disclaimer">This is how I currently make sense of the work. It keeps changing as I read, build, and learn from other people.</p>
        </section>

        <section className="project-section section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div><p className="eyebrow">Project garden</p><h2>Things I&apos;ve made, am making, and keep coming back to.</h2></div>
            <p>Some are part of my work, some began as questions, and some exist because I thought they would be fun to make.</p>
          </div>

          <div className="filter-bar" role="toolbar" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={activeFilter === filter.id ? 'active' : ''}
                type="button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => chooseFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="project-layout">
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <React.Fragment key={project.id}>
                  <button
                    className={`project-node node-${project.color} ${selected?.id === project.id ? 'selected' : ''}`}
                    type="button"
                    aria-controls={selected?.id === project.id ? (useInlineProjectDetails ? `project-detail-${project.id}` : 'project-detail-panel') : undefined}
                    aria-expanded={selected?.id === project.id}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <span className="node-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="node-type">{project.eyebrow}</span>
                    <strong>{project.name}</strong>
                    <span className="node-short">{project.short}</span>
                    <span className="node-open">{selected?.id === project.id ? (useInlineProjectDetails ? 'Open below' : 'Viewing now') : 'Take a look'} <FiChevronRight size={15} /></span>
                  </button>
                  {useInlineProjectDetails && selected?.id === project.id && <ProjectDetail className="project-detail--inline" id={`project-detail-${project.id}`} project={project} />}
                </React.Fragment>
              ))}
            </div>

            {!useInlineProjectDetails && selected && <ProjectDetail id="project-detail-panel" project={selected} />}
          </div>

          <a className="archive-link" href="https://github.com/JewelsHovan?tab=repositories" target="_blank" rel="noreferrer">
            Browse more of my projects on GitHub <FiGithub size={17} />
          </a>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="section-wrap">
            <div className="section-heading light-heading">
              <div><p className="eyebrow">How I work</p><h2>Most projects start with listening, not building.</h2></div>
              <p>Here is the simple version of how I move from a question to something a person can try.</p>
            </div>

            <div className="workflow-shell">
              <div className="workflow-tabs" role="tablist" aria-label="Explore Julien's workflow">
                {Object.entries(workflowViews).map(([id, view]) => (
                  <button
                    type="button"
                    id={`workflow-tab-${id}`}
                    key={id}
                    role="tab"
                    tabIndex={activeWorkflow === id ? 0 : -1}
                    aria-controls="workflow-stage-panel"
                    aria-selected={activeWorkflow === id}
                    className={activeWorkflow === id ? 'active' : ''}
                    onClick={() => setActiveWorkflow(id)}
                    onKeyDown={(event) => moveTabFocus(event, Object.keys(workflowViews), activeWorkflow, setActiveWorkflow, 'workflow-tab')}
                  >
                    <span>{view.label}</span>{id === 'context' ? 'Understand' : id === 'motion' ? 'Make' : 'Share'}
                  </button>
                ))}
              </div>
              <div className="workflow-stage" id="workflow-stage-panel" role="tabpanel" aria-labelledby={`workflow-tab-${activeWorkflow}`}>
                <div className="stage-copy"><p>{activeView.label}</p><h3>{activeView.title}</h3><p>{activeView.body}</p></div>
                <ol className="trace-list">
                  {activeView.trace.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b></li>)}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="notes-section section-wrap" id="notes">
          <div className="section-heading notes-heading">
            <div><p className="eyebrow">Field notes</p><h2>A place for ideas I&apos;m still turning over.</h2></div>
            <p>I write about making software, living with fast-moving technology, and whatever else keeps following me around.</p>
          </div>

          <div className="notes-grid">
            <article className="newsletter-card">
              <div className="newsletter-top"><span className="note-spark">✦</span><span>AI NEWS REPORTS</span><span>OPEN ARCHIVE</span></div>
              <h3>The newsletter I wanted when keeping up with AI started to feel like a second job.</h3>
              <p>I read across a handful of sources, compare what they are saying, and turn the useful parts into one calmer update. It is as much a way to organize my own thoughts as it is a newsletter.</p>
              <div className="newsletter-flow"><span>read widely</span><i>→</i><span>compare notes</span><i>→</i><span>write the digest</span></div>
              <div className="newsletter-actions">
                <a href={newsletterUrl} target="_blank" rel="noreferrer">Subscribe <FiArrowUpRight size={17} /></a>
                <a href={newsletterArchiveUrl} target="_blank" rel="noreferrer">Browse issues <FiArrowUpRight size={17} /></a>
              </div>
            </article>

            <aside className="notes-index" aria-label="Field Notes index">
              <p className="queue-title">The notebook</p>
              <p className="notes-index-intro">A few short pieces about what I make, how I think, and what I&apos;m learning along the way.</p>
              {fieldNotes.map((note) => (
                <button
                  className={activeNote?.id === note.id ? 'active' : ''}
                  type="button"
                  key={note.id}
                  aria-pressed={activeNote?.id === note.id}
                  onClick={() => setActiveNoteId(note.id)}
                >
                  <span>{note.label} · {note.date}</span>
                  <b>{note.title}</b>
                  <small>{note.excerpt}</small>
                  <i>{activeNote?.id === note.id ? 'Reading now' : 'Open note'} <FiArrowUpRight size={13} /></i>
                </button>
              ))}
              <div className="note-template"><span>A thought for later</span><b>{nextNotePrompt.title}</b><p>{nextNotePrompt.body}</p></div>
            </aside>
          </div>

          {activeNote && (
            <article className="note-reader" aria-live="polite">
              <header><span>{activeNote.label}</span><span>{activeNote.date} · {activeNote.readTime}</span></header>
              <h3>{activeNote.title}</h3>
              <div className="note-reader-body">{activeNote.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <footer><span>Field Notes is a living corner of this site.</span><span>More when I have something worth writing down.</span></footer>
            </article>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-copy"><p className="eyebrow"><span className="pulse-dot" /> A bit more about me</p><h2>I like staying with a difficult problem until it starts to make sense.</h2><p>I&apos;m happiest somewhere between a product question, a messy workflow, and a blank repository. Because I came through software and data engineering, I tend to care about both the visible experience and all the quiet plumbing underneath it.</p><p>I get attached to the things I build. If a problem feels worthwhile, I can spend a long time on the awkward detail that keeps it from being genuinely useful. That is true whether I am making something for work, for a friend, or just for myself.</p><p>Outside work, I build my own computers, read a lot, and follow technology as a part of culture rather than a separate world. I am interested in what new tools let people do, but also in how they change our habits and expectations.</p><p>AI is moving quickly, and I do not think the answer is to automate every available moment. I want to make tools that give people more understanding and room to act. Sometimes that means removing a tedious step. Sometimes it means slowing the process down enough for someone to make a real choice.</p><div className="tenet-list"><p className="tenet-title">Things I try to remember</p><div><span>01</span><p><b>Respect human time.</b><small>Use it carefully and save it for judgment, care, conversation, and the parts of life that matter.</small></p></div><div><span>02</span><p><b>Automate with a reason.</b><small>Remove repetition when it gives someone more room, not simply because it can be removed.</small></p></div><div><span>03</span><p><b>Leave space to make things.</b><small>A good system should support curiosity and creative work rather than turning every minute into output.</small></p></div><p className="tenet-close">I do not always get the balance right, but I like trying.</p></div></div>
            <div className="about-actions">
              <a className="button button-outline" href={`mailto:${email}?subject=Hello%20Julien`}><FiMail size={17} /> Write to me</a>
              <a href="https://www.linkedin.com/in/julien-hovan/" target="_blank" rel="noreferrer"><FiLinkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/JewelsHovan" target="_blank" rel="noreferrer"><FiGithub size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Julien Hovan</span><span>Built with curiosity, context, and a decent amount of tea.</span></footer>

      {harnessAtlasOpen && (
        <div className="harness-atlas-backdrop" role="presentation">
          <section className="harness-atlas" ref={atlasDialogRef} role="dialog" aria-modal="true" aria-labelledby="harness-atlas-title" aria-describedby="harness-atlas-description">
            <header className="atlas-header"><div><p className="eyebrow">A closer look</p><h2 id="harness-atlas-title">The harness atlas</h2><p id="harness-atlas-description">Four diagrams that show how I think about AI work: give it context, keep it understandable, check the result, and leave a useful trail for the next person.</p></div><button type="button" onClick={closeHarnessAtlas} aria-label="Close the diagram atlas"><FiX size={20} /><span>Close</span></button></header>
            <div className="atlas-plates">
              <figure className="atlas-plate"><figcaption><span>Plate 01 · Around the model</span><h3>The model is one part of the system.</h3><p>It also needs memory, tools, clear boundaries, ways to check its work, and a person who can stay in control.</p></figcaption><GeneratedDiagram variant="harness" notes={['A model should not get to choose its own boundaries.', 'A person should be able to see what the system did.']}><HarnessMapSketch id="atlas-harness-map" /></GeneratedDiagram></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 02 · Shared work</span><h3>Uncertainty needs conversation.</h3><p>When a request is unclear, it helps to investigate, ask questions, make a plan, and look at it together before the costly work begins.</p></figcaption><GeneratedDiagram variant="discovery" notes={['An unclear detail is a reason to ask, not to guess.', 'It is much easier to change a plan than rebuild the wrong thing.']}><DiscoveryLoopSketch id="atlas-discovery-loop" /></GeneratedDiagram></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 03 · Shared knowledge</span><h3>Make a useful idea easy to pass on.</h3><p>People have always used writing, records, and tools to share what they know. AI systems also need memory and reusable instructions, but they should not hide the human choices behind them.</p></figcaption><GeneratedDiagram variant="externalization" notes={['Write down enough for another person to understand the idea.', 'Reuse what works without erasing who made the decision.']}><CapabilityBridgeSketch id="atlas-capability-bridge" /></GeneratedDiagram></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 04 · Staying involved</span><h3>Keep people present at the important moments.</h3><p>A plain-language request can become a plan, a manageable change, something visible to review, and then a real choice about what happens next.</p></figcaption><GeneratedDiagram variant="delivery" notes={['People can clarify, redirect, review, and approve along the way.', 'A checked result is more useful than a confident answer.']}><DeliveryLoopSketch id="atlas-delivery-loop" /></GeneratedDiagram></figure>
            </div>
            <footer className="atlas-footer"><span>These diagrams are how I explain the ideas today. They are allowed to change.</span><button type="button" onClick={closeHarnessAtlas}>Back to the garden <FiArrowDown size={15} /></button></footer>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
