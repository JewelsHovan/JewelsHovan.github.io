const toneClass = (tone) => `diagram-node diagram-node--${tone}`;

function DiagramDefs({ id }) {
  return (
    <defs>
      <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" className="diagram-grid-line" />
      </pattern>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 10 5 0 10Z" className="diagram-arrow-head" />
      </marker>
      <filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>
  );
}

function DiagramFrame({ id, label }) {
  return (
    <>
      <rect className="diagram-surface" x="1" y="1" width="898" height="348" />
      <rect className="diagram-grid" x="1" y="1" width="898" height="348" fill={`url(#${id}-grid)`} />
      <path className="diagram-corner" d="M22 44V22H44 M856 22H878V44 M22 306V328H44 M856 328H878V306" />
      <text className="diagram-plate-label" x="34" y="42">{label}</text>
    </>
  );
}

function FlowPath({ id, d, returnPath = false, muted = false }) {
  return (
    <path
      className={`diagram-flow${returnPath ? ' diagram-flow--return' : ''}${muted ? ' diagram-flow--muted' : ''}`}
      d={d}
      markerEnd={`url(#${id}-arrow)`}
    />
  );
}

function Node({ x, y, width = 132, height = 66, step, title, note, tone = 'aqua', align = 'left' }) {
  const textX = align === 'center' ? width / 2 : 14;
  return (
    <g className={toneClass(tone)} transform={`translate(${x} ${y})`}>
      <rect className="diagram-node-halo" x="-5" y="-5" width={width + 10} height={height + 10} />
      <rect className="diagram-node-body" width={width} height={height} />
      <path className="diagram-node-rule" d={`M0 23H${width}`} />
      <text className="diagram-node-step" x={align === 'center' ? width / 2 : 14} y="16" textAnchor={align === 'center' ? 'middle' : 'start'}>{step}</text>
      <text className="diagram-node-title" x={textX} y="43" textAnchor={align === 'center' ? 'middle' : 'start'}>{title}</text>
      <text className="diagram-node-note" x={textX} y="57" textAnchor={align === 'center' ? 'middle' : 'start'}>{note}</text>
    </g>
  );
}

function Gate({ x, y, label, note, tone = 'lime' }) {
  return (
    <g className={`diagram-gate diagram-gate--${tone}`} transform={`translate(${x} ${y})`}>
      <path className="diagram-gate-halo" d="M0 -30 42 0 0 30 -42 0Z" />
      <path className="diagram-gate-body" d="M0 -25 35 0 0 25 -35 0Z" />
      <text className="diagram-gate-title" x="0" y="-2" textAnchor="middle">{label}</text>
      <text className="diagram-gate-note" x="0" y="11" textAnchor="middle">{note}</text>
    </g>
  );
}

export function SessionLoopSketch({ id = 'session-loop', className = '' }) {
  return (
    <svg className={`diagram-svg diagram-svg--schematic ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>From a human need to a useful handoff</title>
      <desc id={`${id}-desc`}>A six-step loop connects a need to a clear request, selected context, bounded work, visible evidence, and a handoff. The handoff feeds what was learned into the next need.</desc>
      <DiagramDefs id={id} />
      <DiagramFrame id={id} label="REQUEST → HANDOFF / ONE TRACEABLE LOOP" />
      <FlowPath id={id} d="M159 174H221" />
      <FlowPath id={id} d="M353 174H415" />
      <FlowPath id={id} d="M547 174H609" />
      <FlowPath id={id} d="M741 174H790" />
      <FlowPath id={id} d="M806 224C749 303 212 303 94 224" returnPath />
      <Node x={35} y={141} step="01 / NEED" title="Need" note="person + outcome" tone="coral" />
      <Node x={221} y={141} step="02 / REQUEST" title="Make it clear" note="scope + risk" tone="mint" />
      <Node x={415} y={141} step="03 / CONTEXT" title="Gather" note="rules + decisions" tone="aqua" />
      <Node x={609} y={141} step="04 / WORK" title="Do the work" note="people + tools" tone="violet" />
      <Node x={768} y={141} width={100} step="05 / CHECK" title="Evidence" note="tests + preview" tone="lime" />
      <g transform="translate(350 263)">
        <rect className="diagram-caption-box" width="200" height="38" />
        <text className="diagram-caption-title" x="100" y="16" textAnchor="middle">06 / HANDOFF</text>
        <text className="diagram-caption-note" x="100" y="29" textAnchor="middle">status + lesson + next step</text>
      </g>
    </svg>
  );
}

export function HarnessMapSketch({ id = 'harness-map', className = '' }) {
  const modules = [
    { x: 68, y: 82, title: 'Intent', note: 'purpose + boundary', tone: 'coral' },
    { x: 68, y: 210, title: 'Context', note: 'rules + memory', tone: 'mint' },
    { x: 700, y: 82, title: 'Tools', note: 'allowed actions', tone: 'aqua' },
    { x: 700, y: 210, title: 'Evidence', note: 'tests + traces', tone: 'violet' },
  ];
  return (
    <svg className={`diagram-svg diagram-svg--schematic ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>The model is one part of a larger system</title>
      <desc id={`${id}-desc`}>A model core receives intent and selected context, can use bounded tools, produces evidence, and remains inside a human decision boundary.</desc>
      <DiagramDefs id={id} />
      <DiagramFrame id={id} label="SYSTEM MAP / CONTROL FLOWS INWARD, EVIDENCE FLOWS OUT" />
      <rect className="diagram-boundary" x="247" y="61" width="406" height="234" rx="117" />
      <text className="diagram-boundary-label" x="450" y="80" textAnchor="middle">HUMAN DECISION BOUNDARY</text>
      <circle className="diagram-core-glow" cx="450" cy="178" r="75" filter={`url(#${id}-glow)`} />
      <circle className="diagram-core-ring diagram-core-ring--outer" cx="450" cy="178" r="80" />
      <circle className="diagram-core-ring" cx="450" cy="178" r="55" />
      <circle className="diagram-core" cx="450" cy="178" r="37" />
      <text className="diagram-core-kicker" x="450" y="172" textAnchor="middle">ONE INSTRUMENT</text>
      <text className="diagram-core-title" x="450" y="191" textAnchor="middle">MODEL</text>
      <FlowPath id={id} d="M200 115C285 115 330 140 371 161" />
      <FlowPath id={id} d="M200 243C285 243 330 218 371 196" />
      <FlowPath id={id} d="M529 161C574 139 616 115 700 115" />
      <FlowPath id={id} d="M529 196C575 218 617 243 700 243" />
      {modules.map((module, index) => <Node key={module.title} x={module.x} y={module.y} step={`0${index + 1} / ${module.title.toUpperCase()}`} title={module.title} note={module.note} tone={module.tone} />)}
      <g className="diagram-human-key" transform="translate(363 287)">
        <circle cx="10" cy="10" r="5" />
        <path d="M10 15V25M3 34C4 25 16 25 17 34" />
        <text x="30" y="15">A person can inspect, stop, or redirect the system</text>
      </g>
    </svg>
  );
}

export function DiscoveryLoopSketch({ id = 'discovery-loop', className = '' }) {
  const stages = [
    { x: 34, title: 'Need', note: 'what should change?', tone: 'coral' },
    { x: 198, title: 'Explore', note: 'facts + unknowns', tone: 'mint' },
    { x: 362, title: 'Clarify', note: 'ask, do not guess', tone: 'aqua' },
    { x: 526, title: 'Plan', note: 'scope + sequence', tone: 'violet' },
    { x: 690, title: 'Ready', note: 'shared next step', tone: 'lime' },
  ];
  return (
    <svg className={`diagram-svg diagram-svg--schematic ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Uncertainty becomes a shared plan through discovery</title>
      <desc id={`${id}-desc`}>A need moves through exploration, clarification, and planning. A human review gate either marks it ready or sends it back to clarify the question.</desc>
      <DiagramDefs id={id} />
      <DiagramFrame id={id} label="DISCOVERY LOOP / QUESTIONS ARE PART OF THE WORK" />
      <path className="diagram-lane" d="M92 174H806" />
      {stages.slice(0, -1).map((stage, index) => <FlowPath key={stage.title} id={id} d={`M${stage.x + 132} 174H${stages[index + 1].x}`} />)}
      {stages.map((stage, index) => <Node key={stage.title} x={stage.x} y={141} step={`0${index + 1} / ${stage.title.toUpperCase()}`} title={stage.title} note={stage.note} tone={stage.tone} />)}
      <FlowPath id={id} d="M756 141C744 72 619 67 592 132" returnPath />
      <text className="diagram-loop-label" x="680" y="80" textAnchor="middle">REVIEW: WHAT IS STILL UNCLEAR?</text>
      <FlowPath id={id} d="M428 207C407 280 256 280 264 207" returnPath />
      <text className="diagram-loop-label" x="344" y="283" textAnchor="middle">NEW INFORMATION CHANGES THE PLAN</text>
      <g className="diagram-status-key" transform="translate(682 299)">
        <circle className="status-ask" cx="7" cy="7" r="5" /><text x="18" y="10">ask</text>
        <circle className="status-agree" cx="72" cy="7" r="5" /><text x="83" y="10">agree</text>
        <circle className="status-ready" cx="145" cy="7" r="5" /><text x="156" y="10">ready</text>
      </g>
    </svg>
  );
}

export function CapabilityBridgeSketch({ id = 'capability-bridge', className = '' }) {
  const top = ['Thought', 'Writing', 'Records', 'Tools', 'Shared use'];
  const bottom = ['Question', 'Prompt', 'Memory', 'Skill', 'Useful run'];
  const xPositions = [55, 216, 377, 538, 699];
  return (
    <svg className={`diagram-svg diagram-svg--schematic ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Knowledge becomes reusable when people make it explicit</title>
      <desc id={`${id}-desc`}>Two parallel lanes show a human idea becoming writing, records, tools, and shared use, while an AI task becomes a prompt, selected memory, a reusable skill, and a useful run. Human judgment connects the lanes.</desc>
      <DiagramDefs id={id} />
      <DiagramFrame id={id} label="CAPABILITY BRIDGE / MAKE THE USEFUL PART EXPLICIT" />
      <text className="diagram-lane-title" x="36" y="91">PEOPLE MAKE KNOWLEDGE DURABLE</text>
      <text className="diagram-lane-title" x="36" y="242">AI REUSES ONLY WHAT PEOPLE CHOOSE</text>
      <FlowPath id={id} d="M121 143H214 M282 143H375 M443 143H536 M604 143H697" />
      <FlowPath id={id} d="M121 282H214 M282 282H375 M443 282H536 M604 282H697" />
      {top.map((title, index) => (
        <g className={`diagram-chip diagram-chip--${index === 4 ? 'lime' : 'mint'}`} transform={`translate(${xPositions[index]} 116)`} key={title}>
          <rect width="112" height="54" />
          <text className="diagram-chip-step" x="12" y="17">0{index + 1}</text>
          <text className="diagram-chip-title" x="12" y="37">{title}</text>
        </g>
      ))}
      {bottom.map((title, index) => (
        <g className={`diagram-chip diagram-chip--${index === 4 ? 'lime' : 'aqua'}`} transform={`translate(${xPositions[index]} 255)`} key={title}>
          <rect width="112" height="54" />
          <text className="diagram-chip-step" x="12" y="17">0{index + 1}</text>
          <text className="diagram-chip-title" x="12" y="37">{title}</text>
        </g>
      ))}
      {[111, 272, 433, 594, 755].map((x, index) => (
        <g key={x}>
          <path className="diagram-bridge-line" d={`M${x} 173V252`} />
          <circle className="diagram-bridge-joint" cx={x} cy="211" r="4" />
          {index === 2 && <text className="diagram-bridge-label" x={x + 10} y="215">human choice</text>}
        </g>
      ))}
    </svg>
  );
}

export function DeliveryLoopSketch({ id = 'delivery-loop', className = '' }) {
  return (
    <svg className={`diagram-svg diagram-svg--schematic ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>People stay involved at the moments that change direction</title>
      <desc id={`${id}-desc`}>A request becomes a shared specification, scoped work, evidence, and a handoff. Human gates clarify the request before work and approve or redirect the result before release.</desc>
      <DiagramDefs id={id} />
      <DiagramFrame id={id} label="HUMAN-GUIDED DELIVERY / TWO DECISIONS, ONE VISIBLE TRAIL" />
      <text className="diagram-lane-title" x="36" y="96">SHAPE THE WORK</text>
      <text className="diagram-lane-title" x="538" y="96">CHECK THE RESULT</text>
      <Node x={35} y={141} step="01 / REQUEST" title="Need" note="plain language" tone="coral" />
      <Gate x={224} y={174} label="CLARIFY" note="ask + agree" />
      <Node x={303} y={141} step="02 / SHARED SPEC" title="Plan" note="scope + criteria" tone="mint" />
      <Node x={493} y={141} step="03 / WORK" title="Build" note="bounded change" tone="aqua" />
      <Node x={683} y={141} step="04 / EVIDENCE" title="Preview" note="tests + result" tone="violet" />
      <FlowPath id={id} d="M167 174H184" />
      <FlowPath id={id} d="M259 174H303" />
      <FlowPath id={id} d="M435 174H493" />
      <FlowPath id={id} d="M625 174H683" />
      <FlowPath id={id} d="M815 174H844" />
      <Gate x={844} y={174} label="DECIDE" note="keep / revise" tone="coral" />
      <FlowPath id={id} d="M844 206C809 301 363 304 224 207" returnPath />
      <text className="diagram-loop-label" x="558" y="294" textAnchor="middle">REDIRECT THE PLAN, NOT JUST THE OUTPUT</text>
      <g className="diagram-human-key" transform="translate(34 304)">
        <circle cx="10" cy="10" r="5" />
        <path d="M10 15V25M3 34C4 25 16 25 17 34" />
        <text x="30" y="15">Human gates change direction</text>
      </g>
      <g className="diagram-trace-key" transform="translate(704 311)">
        <path d="M0 0H26" /><circle cx="13" cy="0" r="3" />
        <text x="36" y="4">visible trail</text>
      </g>
    </svg>
  );
}

export function TicketHandoffSketch(props) {
  return <DiscoveryLoopSketch {...props} />;
}

export function MemoryCycleSketch(props) {
  return <CapabilityBridgeSketch {...props} />;
}
