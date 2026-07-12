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
import { fieldNotes, nextNotePrompt } from './content/fieldNotes';
import { harnessResearch, harnessStages } from './content/harnessGuide';
import { SessionLoopSketch } from './components/HarnessDiagrams';
import discoveryLoopImage from './assets/harness/discovery-loop.webp';
import externalizedCapabilityImage from './assets/harness/externalized-capability.webp';
import harnessSystemImage from './assets/harness/harness-system.webp';
import humanGuidedDeliveryImage from './assets/harness/human-guided-delivery.webp';

const email = 'JulienH15@icloud.com';
const newsletterUrl = 'https://jewelshovan.github.io/AI-News-Reports/';
const newsletterArchiveUrl = 'https://jewelshovan.github.io/AI-News-Reports/archive/';

const filters = [
  { id: 'all', label: 'Everything' },
  { id: 'now', label: 'In motion' },
  { id: 'systems', label: 'Working with agents' },
  { id: 'workflows', label: 'How it ships' },
  { id: 'public', label: 'For people' },
];

const projects = [
  {
    id: 'fluence',
    name: 'Compass Fluence',
    eyebrow: 'Context engineering',
    type: 'Internal system',
    tags: ['now', 'systems'],
    color: 'mint',
    short: 'A working context layer for a project’s intent, decisions, and source material.',
    detail: 'Fluence is a git-native way to keep product intent, decisions, delivery context, and source material close to the work. I’m helping build it so people and agents can find the useful slice when they need it instead of starting from a pile of docs.',
    proof: 'Useful context should travel with the work, not get buried in old documents.',
  },
  {
    id: 'hub',
    name: 'Compass Hub',
    eyebrow: 'Memory + shared practice',
    type: 'Internal system',
    tags: ['now', 'systems'],
    color: 'aqua',
    short: 'A shared place for team memory, skills, agents, and the setup worth reusing.',
    detail: 'Compass Hub is a files-first place for teams to publish, find, and pull the things that make AI-assisted work less improvised: working memory, skills, agents, and team config. It puts shared knowledge where people already work.',
    proof: 'When a harness works, its good bits should be easy to pass on.',
  },
  {
    id: 'superpowers',
    name: 'Pi Compass Superpowers',
    eyebrow: 'Harness engineering',
    type: 'Internal ecosystem',
    tags: ['now', 'systems'],
    color: 'lime',
    short: 'Portable tools for ticketed work, memory, review, and bounded autonomy.',
    detail: 'I’m building Pi-native packages for the less glamorous side of agentic development: context, delegating work, keeping an eye on it, browser tools, quality checks, memory, and the small automations that keep a loop running.',
    proof: 'An agent workflow should be easy to inspect, share, and improve after it runs.',
  },
  {
    id: 'news',
    name: 'AI News Reports',
    eyebrow: 'Personal publishing system',
    type: 'Public project',
    tags: ['now', 'systems', 'public'],
    color: 'coral',
    short: 'My AI news habit turned into a public newsletter.',
    detail: 'I use it to follow the field without letting it take over my week. It brings together different sources, works through the research, then turns it into a digest for the email list and public archive.',
    proof: 'A reading habit that is useful enough to pass on.',
    link: newsletterUrl,
    linkLabel: 'Read the newsletter',
  },
  {
    id: 'noro',
    name: 'Noro',
    eyebrow: 'Multi-agent creation',
    type: 'Compass build',
    tags: ['systems'],
    color: 'violet',
    short: 'A presentation system that turns a prompt and source material into a branded deck.',
    detail: 'Noro coordinates research, planning, writing, layout choices, image placement, and a check of the finished deck. It takes away some tedious steps while leaving a person in charge of what the deck says and why.',
    proof: 'Generating slides is easy. Checking that the deck makes sense is the interesting part.',
  },
  {
    id: 'analyst',
    name: 'Data Analyst AI',
    eyebrow: 'Agentic analysis',
    type: 'Prototype',
    tags: ['systems'],
    color: 'blue',
    short: 'A LangGraph workflow that plans, checks its work, iterates, and writes reports.',
    detail: 'I built this to see what an analysis agent needs beyond a chat box: clear stages, structured state, checkpoints, data checks, and a critique before it calls a result done.',
    proof: 'Good analysis needs checks and a way back when something goes wrong.',
  },
  {
    id: 'delivery',
    name: 'Delivery control plane',
    eyebrow: 'Client delivery',
    type: 'Client system',
    tags: ['now', 'workflows'],
    color: 'gold',
    short: 'A route from a plain-language request to a reviewed change you can preview.',
    detail: 'For a connected multi-application client platform, I designed an agent-assisted delivery loop that links requests, source material, implementation, reviews, and release decisions. It lets a nontechnical owner see the work and weigh in without having to become a developer.',
    proof: 'The people closest to the work can see what is happening and decide what comes next.',
  },
  {
    id: 'luccas-agent',
    name: 'Luccas Studio Agent',
    eyebrow: 'Discord-native delivery',
    type: 'Client system',
    tags: ['now', 'workflows', 'systems'],
    color: 'coral',
    short: 'A request-to-release loop that lets a creative studio change its apps from Discord.',
    detail: 'A Discord-native agentic workflow for a non-technical creative owner: describe a change in plain language, refine a code-aware spec, trigger a scoped implementation, review a preview, and explicitly choose whether it ships. It keeps the human in the loop without making them learn the development stack.',
    proof: 'The person closest to the website can ask for a change, see the result, and decide when it goes live.',
  },
  {
    id: 'lco-os',
    name: 'LCO Project OS',
    eyebrow: 'Product + delivery workflow',
    type: 'Internal system',
    tags: ['now', 'workflows', 'systems'],
    color: 'gold',
    short: 'A living project surface that keeps PMs, designers, and engineering closer to the same work.',
    detail: 'A configurable project-management layer that combines shared views of work, Jira synchronization, safe staging, and an agent-ready project knowledge base. The point is to give PMs and designers more agency in the development process without creating a disconnected shadow workflow.',
    proof: 'Product decisions stay near the implementation instead of getting lost in the handoff between tools and roles.',
  },
  {
    id: 'agentic-data',
    name: 'Ticket → data pipeline',
    eyebrow: 'Agentic data engineering',
    type: 'Internal demo',
    tags: ['systems', 'workflows'],
    color: 'aqua',
    short: 'A visible loop from delivery tickets to a validated, running data pipeline.',
    detail: 'An end-to-end data-engineering demonstration where an agent turns a set of tickets into dependency-aware work, builds a Lakeflow pipeline, validates it, deploys it, reads real failures, and retries. It makes the value of agentic engineering concrete: not a chat, but a recoverable delivery loop.',
    proof: 'Automation earns trust when people can see the plan, the checks, the failure, and the recovery.',
  },
  {
    id: 'roadwatch',
    name: 'RoadWatch',
    eyebrow: 'Data + decision support',
    type: 'Public project',
    tags: ['public'],
    color: 'blue',
    short: 'An interactive exploration of work-zone data, risk signals, and traffic impact.',
    detail: 'A data-focused project on how roadwork conditions, traffic, and context can be brought together to help make work zones safer and easier to plan around. It is part of the data-engineering and decision-support thread that still shapes how I approach AI systems today.',
    proof: 'Before an agent can help, the underlying data needs to become legible enough to make a decision with.',
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
    short: 'A conversational assistant that joins team chat with the codebase and working knowledge.',
    detail: 'An exploration of meeting people where they already work: a team-chat assistant that can draw on code and organizational knowledge through an agent SDK and MCP-connected tools. It is another version of the same question—how do we make useful context feel close at hand?',
    proof: 'The best internal tool is often one that reduces the distance between a question and the relevant context.',
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes Pipeline',
    eyebrow: 'Context ingestion',
    type: 'Internal system',
    tags: ['workflows', 'systems'],
    color: 'aqua',
    short: 'A route from meeting transcripts to searchable context that agents can use.',
    detail: 'A scheduled, read-only workflow that turns existing transcripts into material for search, summaries, and team memory. Important context does not have to disappear after the call.',
    proof: 'What a team already said should be there for the next decision.',
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
    detail: 'A full application that uses guided creation, reflective prompts, and careful UX to give people a little more room to work through difficult experiences.',
    proof: 'Some useful AI tools give people room to process difficult things. Speed is beside the point.',
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
    label: '01 / Context',
    title: 'Start with the context behind the request.',
    body: 'I bring together the things that usually end up scattered: project docs, decisions, tickets, source data, notes from meetings, and the small details behind a request. I do not want one giant brain. I want the useful bit of context to show up when someone starts the work.',
    trace: ['docs + data', 'the right project context', 'agents start informed'],
  },
  motion: {
    label: '02 / Motion',
    title: 'Let agents help without making the work a black box.',
    body: 'A useful agent workflow has roles, routines, memory, and clear points where people can step in. I design for the actual work: research, planning, building, reviewing, keeping watch, then learning from what happened.',
    trace: ['a trigger + a routine', 'agents with jobs', 'review + lessons carried forward'],
  },
  delivery: {
    label: '03 / Delivery',
    title: 'Make it easy to see what is about to ship.',
    body: 'Good ideas only count if they make it into the real world. I connect a request to the build, the checks, the preview, GitOps, and the release decision. Teams can move without losing the ability to see, test, or roll back a change.',
    trace: ['request becomes a plan', 'checks leave evidence', 'preview, release, learn'],
  },
};

const heroModes = [
  {
    id: 'context',
    label: 'Context',
    center: ['assembling', 'useful', 'context'],
    cards: [
      { index: '01', title: 'Fluence', detail: 'context that sticks' },
      { index: '02', title: 'Compass Hub', detail: 'memory + practice' },
      { index: '03', title: 'LCO Project OS', detail: 'work close to delivery' },
    ],
    caption: 'Follow the context, not the noise.',
  },
  {
    id: 'harness',
    label: 'Harness',
    center: ['building', 'the', 'harness'],
    cards: [
      { index: '01', title: 'Pi ecosystem', detail: 'skills, tools + memory' },
      { index: '02', title: 'Workshop', detail: 'make the system visible' },
      { index: '03', title: 'Verify', detail: 'proof over reassurance' },
    ],
    caption: 'Ambiguity is the enemy. A harness makes work legible.',
  },
  {
    id: 'people',
    label: 'People',
    center: ['making', 'room', 'for people'],
    cards: [
      { index: '01', title: 'Luccas agent', detail: 'an idea to a preview' },
      { index: '02', title: 'AI News', detail: 'research made shareable' },
      { index: '03', title: 'Field Notes', detail: 'thinking out loud' },
    ],
    caption: 'Useful systems leave people more agency.',
  },
];

const waypoints = [
  { id: 'top', index: '00', label: 'Start', detail: 'the front door' },
  { id: 'now', index: '01', label: 'In motion', detail: 'what I am exploring' },
  { id: 'roots', index: '02', label: 'Roots', detail: 'where the work started' },
  { id: 'harness', index: '03', label: 'Harness guide', detail: 'context, tools, proof' },
  { id: 'projects', index: '04', label: 'Project garden', detail: 'systems and experiments' },
  { id: 'workflow', index: '05', label: 'How it ships', detail: 'delivery with guardrails' },
  { id: 'notes', index: '06', label: 'Field notes', detail: 'thinking in public' },
  { id: 'about', index: '07', label: 'A bit more', detail: 'the person in the loop' },
];

function GeneratedDiagram({ alt, image, notes = [], variant }) {
  return (
    <div className="atlas-visual-block">
      <p className="diagram-pan-hint">Swipe sideways to inspect the diagram.</p>
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: Horizontal diagrams need a keyboard-scrollable viewport. */}
      <section className={`generated-diagram generated-diagram--${variant}`} tabIndex={0} aria-label="Scrollable teaching diagram">
        <img src={image} alt={alt} loading="eager" />
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
      <div className="detail-proof"><span>Why it matters</span><p>{project.proof}</p></div>
      {project.link ? (
        <a className="detail-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <FiArrowUpRight size={17} /></a>
      ) : (
        <p className="detail-private"><FiCheck size={15} /> The useful parts are real. The private parts stay private.</p>
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
  const [activeHeroModeId, setActiveHeroModeId] = useState('context');
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
  const activeHeroMode = heroModes.find((mode) => mode.id === activeHeroModeId) || heroModes[0];
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
          <span>Julien Hovan<small>Projects, AI, and things I&apos;m figuring out</small></span>
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
            <p id="field-map-description">Pick a waypoint. The map follows you as you move through the garden.</p>
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
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse-dot" /> Things I&apos;m working on</p>
            <h1>I build useful systems and make <em>odd little things.</em></h1>
            <p className="hero-summary">
              Hi, I&apos;m Julien—an AI engineer and systems builder. I came up through data engineering and software engineering, and now lead software delivery at Compass Data while helping shape how we work with AI. Outside work, I make things because I want to understand them better. This is where the projects, research rabbit holes, and half-finished ideas end up.
            </p>
            <div className="hero-actions">
              <a className="button button-mint" href="#projects">See the work <FiArrowDown size={18} /></a>
              <a className="soft-link" href={newsletterUrl} target="_blank" rel="noreferrer">Read my AI newsletter <FiArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className={`hero-orbital mode-${activeHeroMode.id}`}>
            <div className="orbit-scene" id="hero-lens-panel" role="tabpanel" aria-labelledby={`hero-tab-${activeHeroMode.id}`}>
              <div className="orbit-glow" />
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />
              <span className="star star-one" /><span className="star star-two" /><span className="star star-three" />
              <div className="orbital-core"><small>current lens</small><strong>{activeHeroMode.center.map((line, index) => <React.Fragment key={line}>{line}{index < activeHeroMode.center.length - 1 && <br />}</React.Fragment>)}</strong></div>
              <article className="orbit-card card-fluence"><span>{activeHeroMode.cards[0].index}</span><b>{activeHeroMode.cards[0].title}</b><small>{activeHeroMode.cards[0].detail}</small></article>
              <article className="orbit-card card-pi"><span>{activeHeroMode.cards[1].index}</span><b>{activeHeroMode.cards[1].title}</b><small>{activeHeroMode.cards[1].detail}</small></article>
              <article className="orbit-card card-news"><span>{activeHeroMode.cards[2].index}</span><b>{activeHeroMode.cards[2].title}</b><small>{activeHeroMode.cards[2].detail}</small></article>
              <p className="orbit-caption">{activeHeroMode.caption}</p>
            </div>
            <div className="orbit-mode-picker" role="tablist" aria-label="Choose a lens for Julien's work">
              {heroModes.map((mode) => <button type="button" id={`hero-tab-${mode.id}`} role="tab" tabIndex={activeHeroMode.id === mode.id ? 0 : -1} aria-controls="hero-lens-panel" aria-selected={activeHeroMode.id === mode.id} className={activeHeroMode.id === mode.id ? 'active' : ''} key={mode.id} onClick={() => setActiveHeroModeId(mode.id)} onKeyDown={(event) => moveTabFocus(event, heroModes.map(({ id }) => id), activeHeroMode.id, setActiveHeroModeId, 'hero-tab')}>{mode.label}</button>)}
            </div>
          </div>
        </section>

        <section className="now-section" id="now">
          <div className="section-wrap now-inner">
            <div className="now-heading"><p className="eyebrow"><span className="pulse-dot" /> On my desk</p><h2>Lately, I&apos;ve been thinking most about everything around the model.</h2></div>
            <div className="now-list">
              <p><span>↗</span> Taking scattered delivery knowledge and making it useful when agents need it.</p>
              <p><span>↗</span> Giving agent workflows routines, memory, and someone watching the edges.</p>
              <p><span>↗</span> Making AI News Reports public, because keeping up with the field is better when it helps someone else too.</p>
              <p><span>↗</span> Giving a creative studio a Discord-native path from an idea to a preview.</p>
              <p><span>↗</span> Keeping PMs, designers, and engineers closer to the same live development loop.</p>
            </div>
          </div>
        </section>

        <section className="roots-section section-wrap" id="roots">
          <div className="roots-copy">
            <p className="eyebrow">A few roots</p>
            <h2>I didn&apos;t arrive at AI from a single direction.</h2>
            <p>I&apos;m an AI engineer now, but it began with Python web scrapers and a need to understand how things worked. That curiosity pulled me through software design, data work, architecture, and the systems I make now.</p>
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
              <p>I learned that a useful system starts beneath the interface—clean inputs, dependable pipelines, and data people can genuinely make decisions with.</p>
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
              <p className="eyebrow"><span className="pulse-dot" /> Where I build with other people</p>
              <h2>Compass Data is where difficult ideas become useful things.</h2>
              <p>Compass works with organizations to design, build, and deploy data and AI projects—from strategy and data foundations to agents, automation, and the software people use every day.</p>
              <p>My role sits close to the build: I lead software delivery, help turn ambiguous needs into workable systems, and bring the context, checks, and care that make an AI idea hold up outside a demo.</p>
              <a className="compass-link" href="https://compassdata.ca" target="_blank" rel="noreferrer">Meet Compass Data <FiArrowUpRight size={17} /></a>
            </div>
            <div className="compass-bearings">
              <article><span>N / Foundations</span><h3>Data that can carry the work.</h3><p>Models, pipelines, and infrastructure that turn scattered inputs into a useful base.</p></article>
              <article><span>E / Intelligence</span><h3>AI with a job to do.</h3><p>Agents, analytical systems, and automation built around a real decision or workflow.</p></article>
              <article><span>S / Software</span><h3>Tools people want to open.</h3><p>Business applications and interfaces that make a complicated process feel clearer.</p></article>
              <article><span>W / Delivery</span><h3>Change people can follow.</h3><p>Shared context, previews, review loops, and a path from request to release.</p></article>
            </div>
          </div>
        </section>

        <section className="harness-section section-wrap" id="harness">
          <div className="section-heading harness-heading">
            <div><p className="eyebrow">Harness field guide</p><h2>The model is one instrument. The harness is the practice around it.</h2></div>
            <p>When I say “harness engineering,” I mean designing the context, tools, memory, checks, and human moments that let an AI system do useful work without becoming a black box.</p>
          </div>

          <div className="harness-axiom"><span>Working rule</span><p>Ambiguity is the enemy of agentic workflows.</p><small>A coding agent cannot resolve a boundary that nobody has named. Give it a clear outcome, the relevant context, and a way to prove the work.</small></div>

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
              <div className="harness-inspector-top"><span>{activeHarnessStage.label}</span><span>Live lens</span></div>
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
              <p>Turn a human need into shared context, bounded work, evidence, and a handoff. The point is not automation theatre—it&apos;s making useful progress easier to inspect and continue.</p>
              <button className="diagram-atlas-button" type="button" onClick={openHarnessAtlas}>Open the diagram atlas <FiArrowUpRight size={15} /></button>
            </div>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: Horizontal diagrams need a keyboard-scrollable viewport. */}
            <section className="diagram-teaser-canvas" tabIndex={0} aria-label="Scrollable request-to-handoff diagram"><span className="diagram-pan-hint">Swipe sideways to follow the loop.</span><SessionLoopSketch id="main-session-loop" /></section>
          </article>

          <div className="harness-footer-grid">
            <article className="workshop-card">
              <p className="eyebrow"><span className="pulse-dot" /> I teach this too</p>
              <h3>From a workshop table to the working system.</h3>
              <p>I run practical harness and context-engineering workshops for new people joining Compass Data, and have shared versions of this work in industry rooms and at McGill MMA. The aim is not to make everyone an AI engineer. It&apos;s to help people see what an agentic system is actually made of—and where they should stay involved.</p>
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
          <p className="harness-disclaimer">This is my working model, informed by research and the systems I build—not a claim that every good AI system needs the same stack.</p>
        </section>

        <section className="project-section section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div><p className="eyebrow">Project garden</p><h2>Things I&apos;ve made, am making, and keep coming back to.</h2></div>
            <p>This isn&apos;t a résumé. It&apos;s a rough map of the systems, experiments, and human problems I keep coming back to.</p>
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
            There&apos;s more in the archive, too <FiGithub size={17} />
          </a>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="section-wrap">
            <div className="section-heading light-heading">
              <div><p className="eyebrow">How I build</p><h2>I&apos;m always trying to make the next good decision easier.</h2></div>
              <p>I care about the conditions that let people and agents do better work together.</p>
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
                    <span>{view.label}</span>{id === 'context' ? 'Roots' : id === 'motion' ? 'Motion' : 'Release'}
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
            <div><p className="eyebrow">Field notes</p><h2>A small blog for the things I&apos;m still turning over.</h2></div>
            <p>Some notes will be practical. Some will be personal. Some will be a useful idea I don&apos;t want to lose before it has somewhere else to go.</p>
          </div>

          <div className="notes-grid">
            <article className="newsletter-card">
              <div className="newsletter-top"><span className="note-spark">✦</span><span>AI NEWS REPORTS</span><span>OPEN ARCHIVE</span></div>
              <h3>A personal research loop that helps me follow AI without losing the plot.</h3>
              <p>I read widely, compare notes, and turn the useful bits into a calmer update for the email list and archive. It&apos;s public now, and I&apos;m still tinkering with it.</p>
              <div className="newsletter-flow"><span>8 source feeds</span><i>→</i><span>research pass</span><i>→</i><span>digest + archive</span></div>
              <div className="newsletter-actions">
                <a href={newsletterUrl} target="_blank" rel="noreferrer">Subscribe <FiArrowUpRight size={17} /></a>
                <a href={newsletterArchiveUrl} target="_blank" rel="noreferrer">Browse issues <FiArrowUpRight size={17} /></a>
              </div>
            </article>

            <aside className="notes-index" aria-label="Field Notes index">
              <p className="queue-title">The notebook</p>
              <p className="notes-index-intro">A tiny, file-first blog prototype. Pick a note to read it here; add the next one when it&apos;s ready.</p>
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
              <div className="note-template"><span>Next entry</span><b>{nextNotePrompt.title}</b><p>{nextNotePrompt.body}</p></div>
            </aside>
          </div>

          {activeNote && (
            <article className="note-reader" aria-live="polite">
              <header><span>{activeNote.label}</span><span>{activeNote.date} · {activeNote.readTime}</span></header>
              <h3>{activeNote.title}</h3>
              <div className="note-reader-body">{activeNote.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <footer><span>Field Notes is a living corner of this site.</span><span>Add the next one in <code>src/content/fieldNotes.js</code></span></footer>
            </article>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-copy"><p className="eyebrow"><span className="pulse-dot" /> A bit more about me</p><h2>I care enough about a problem to stay with it.</h2><p>I&apos;m happiest somewhere between a product question, a messy workflow, and a blank repository. My path through software and data engineering is why I care as much about reliable foundations as I do about what AI can unlock.</p><p>I tend to get personally attached to the things I build. If a problem is difficult and worth solving, I&apos;ll happily hyperfocus on the tricky part until there&apos;s a useful way through—whether it&apos;s a personal experiment or a serious piece of work for someone else.</p><p>Outside work, I build my own computers and keep learning because I&apos;m interested in the whole shape of technology: the parts inside the machine, the design around it, and the way it changes culture and everyday life.</p><p>Change is coming fast. I want to help people use AI responsibly, with enough context and agency to respond thoughtfully. That&apos;s why consulting fits me: I love making things for people—tools that remove friction from a day, systems that make a hard decision clearer, and workflows that let someone participate without having to become an engineer first.</p><div className="tenet-list"><p className="tenet-title">Core tenets</p><div><span>01</span><p><b>Respect human time.</b><small>Use it carefully, share it well, and spend it where judgment, care, and conversation really matter.</small></p></div><div><span>02</span><p><b>Automate for more life.</b><small>Automate the repeatable parts so there is more room for the work, people, and ideas I actually enjoy.</small></p></div><div><span>03</span><p><b>Keep creative energy in the loop.</b><small>Good systems should make more space for curiosity and making, not turn every minute into output.</small></p></div><p className="tenet-close">It&apos;s a constant struggle. It&apos;s also a fulfilling one.</p></div></div>
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
            <header className="atlas-header"><div><p className="eyebrow">Expanded field guide</p><h2 id="harness-atlas-title">The harness atlas</h2><p id="harness-atlas-description">Working models from the systems I make: make work legible, give context a shape, build trust through proof, and leave the next person better prepared.</p></div><button type="button" onClick={closeHarnessAtlas} aria-label="Close the diagram atlas"><FiX size={20} /><span>Close</span></button></header>
            <div className="atlas-plates">
              <figure className="atlas-plate"><figcaption><span>Plate 01 · Harness</span><h3>The model is one instrument.</h3><p>A dependable harness gives a model a designed environment: memory, capabilities, protocols, permission boundaries, visibility, and human control.</p></figcaption><GeneratedDiagram variant="harness" image={harnessSystemImage} alt="A circular harness diagram with six labelled areas surrounding a central model core: Memory, Skills + Tools, Observability, Permissions, Human Control, and Protocols." notes={['The model does not get to define its own boundaries.', 'Useful work should leave traces a person can inspect.']} /></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 02 · Shared work</span><h3>Uncertainty deserves a real loop.</h3><p>Good work does not rush through ambiguity. It discovers, clarifies, plans, reviews, and hands off something the next person can confidently start from.</p></figcaption><GeneratedDiagram variant="discovery" image={discoveryLoopImage} alt="A five-stage discovery and planning flow: Discover, Clarify, Plan, Review, Ready, with arrows showing clarification and revision loops." notes={['Ambiguity is a signal to investigate—not an invitation to guess.', 'A plan can be rejected safely before costly work begins.']} /></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 03 · Capability</span><h3>Make knowledge usable outside a single mind.</h3><p>We have always extended thought through language, writing, records, and tools. Agentic systems extend capability through shared memory, skills, protocols, and a harness that coordinates them.</p></figcaption><GeneratedDiagram variant="externalization" image={externalizedCapabilityImage} alt="Two parallel timelines: Human externalization (Thought, Writing, Records, Tools, Data) and Agentic externalization (Model, Memory, Skills, Protocols, Harness), connected by flows of knowledge." notes={['Human side: make an idea recordable, inspectable, and shareable.', 'System side: make capability reusable without hiding the human decision.']} /></figure>
              <figure className="atlas-plate"><figcaption><span>Plate 04 · Trust</span><h3>Keep people present at every gate.</h3><p>Plain-language intent becomes a shared specification, scoped work, visible evidence, and an explicit decision—not a black-box leap to “done.”</p></figcaption><GeneratedDiagram variant="delivery" image={humanGuidedDeliveryImage} alt="A six-stage delivery pipeline with a human guide connected to every stage: Need, Shared Spec, Design, Scoped Work, Evidence, Handoff." notes={['People can clarify, redirect, review, and approve at any point.', 'Evidence earns confidence; automation does not replace accountability.']} /></figure>
            </div>
            <footer className="atlas-footer"><span>These are teaching diagrams, not a one-size-fits-all architecture.</span><button type="button" onClick={closeHarnessAtlas}>Back to the garden <FiArrowDown size={15} /></button></footer>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
