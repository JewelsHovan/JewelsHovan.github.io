import React from 'react';

const nodeRotations = [-1.4, 1.2, -.8, 1.5, -.9, 1.1];

function SketchNode({ x, y, index, title, note, tone = 'default', width = 132 }) {
  const rotation = nodeRotations[index % nodeRotations.length];
  return (
    <g className={`sketch-node sketch-node--${tone}`} transform={`translate(${x} ${y}) rotate(${rotation})`}>
      <rect width={width} height="66" rx="2" />
      <rect className="sketch-node-echo" x="3" y="3" width={width - 2} height="64" rx="2" />
      <text className="sketch-node-index" x="12" y="18">{String(index + 1).padStart(2, '0')}</text>
      <text className="sketch-node-title" x="12" y="39">{title}</text>
      <text className="sketch-node-note" x="12" y="54">{note}</text>
    </g>
  );
}

function ArrowDefs({ markerId }) {
  return (
    <defs>
      <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
    </defs>
  );
}

function SketchLine({ d, markerId, loop = false, reverse = false }) {
  return <><path className={`sketch-line ${loop ? 'sketch-line--loop' : ''}`} d={d} markerEnd={`url(#${markerId})`} markerStart={reverse ? `url(#${markerId})` : undefined} /><path className="sketch-line-echo" d={d} /></>;
}

export function SessionLoopSketch({ id = 'session-loop', className = '' }) {
  const markerId = `${id}-arrow`;
  return (
    <svg className={`diagram-svg ${className}`} viewBox="0 0 900 330" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>A legible request-to-handoff loop</title>
      <desc id={`${id}-desc`}>A human need becomes an explicit ticket, selected context, bounded work, visible evidence, and a handoff that makes the next step clearer.</desc>
      <ArrowDefs markerId={markerId} />
      <path className="sketch-guide" d="M72 162 C190 52 360 52 464 148 S690 256 817 130" />
      <SketchLine markerId={markerId} d="M166 170 C188 117 214 103 244 94" />
      <SketchLine markerId={markerId} d="M385 94 C408 113 427 127 451 145" />
      <SketchLine markerId={markerId} d="M587 161 C616 129 644 107 679 94" />
      <SketchLine markerId={markerId} d="M751 135 C753 171 731 196 706 221" />
      <SketchLine markerId={markerId} d="M581 245 C469 286 318 286 165 225" loop />
      <SketchNode x={36} y={145} index={0} title="Need" note="person + outcome" tone="warm" />
      <SketchNode x={244} y={58} index={1} title="Ticket" note="criteria + risk" tone="mint" />
      <SketchNode x={451} y={133} index={2} title="Context" note="rules + decisions" tone="aqua" />
      <SketchNode x={657} y={58} index={3} title="Work" note="people + tools" tone="violet" />
      <SketchNode x={643} y={211} index={4} title="Evidence" note="tests + preview" tone="lime" />
      <SketchNode x={256} y={211} index={5} title="Handoff" note="status + lesson" tone="coral" />
      <text className="sketch-whisper" x="352" y="315">the work should be clearer at the end than at the start</text>
    </svg>
  );
}

export function HarnessMapSketch({ id = 'harness-map', className = '' }) {
  const markerId = `${id}-arrow`;
  return (
    <svg className={`diagram-svg ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>The model sits inside a designed harness</title>
      <desc id={`${id}-desc`}>A model is surrounded by the intent, curated context, bounded tools, evidence, durable memory, and human judgment that make a system dependable.</desc>
      <ArrowDefs markerId={markerId} />
      <path className="sketch-guide" d="M72 114 C220 7 671 5 834 115 M72 239 C219 344 677 345 835 239" />
      <SketchLine markerId={markerId} d="M176 95 C254 108 303 128 376 160" />
      <SketchLine markerId={markerId} d="M697 95 C620 108 568 127 526 160" />
      <SketchLine markerId={markerId} d="M176 250 C252 237 309 211 376 188" />
      <SketchLine markerId={markerId} d="M526 190 C593 213 646 238 697 250" />
      <SketchLine markerId={markerId} d="M450 250 C450 239 450 228 450 217" loop />
      <SketchNode x={44} y={61} index={0} title="Intent" note="outcome + boundary" tone="warm" />
      <SketchNode x={690} y={61} index={1} title="Context" note="rules + memory" tone="mint" />
      <SketchNode x={44} y={218} index={2} title="Capabilities" note="skills + tools" tone="aqua" />
      <SketchNode x={690} y={218} index={3} title="Proof" note="tests + preview" tone="violet" />
      <SketchNode x={384} y={150} index={4} title="Model" note="one instrument" tone="lime" />
      <SketchNode x={384} y={250} index={5} title="Judgment" note="human decides" tone="coral" />
      <text className="sketch-whisper" x="298" y="337">the harness is the operating system around the model</text>
    </svg>
  );
}

export function TicketHandoffSketch({ id = 'ticket-handoff', className = '' }) {
  const markerId = `${id}-arrow`;
  return (
    <svg className={`diagram-svg ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>A ticket becomes shared working context</title>
      <desc id={`${id}-desc`}>A piece of work gains outcome, constraints, risks, a plan, evidence, and a completion lesson. It can then support different views of the same shared work.</desc>
      <ArrowDefs markerId={markerId} />
      <path className="sketch-guide" d="M68 217 C221 62 583 63 830 209" />
      <SketchLine markerId={markerId} d="M171 149 C190 149 205 149 226 149" />
      <SketchLine markerId={markerId} d="M359 149 C380 149 394 149 415 149" />
      <SketchLine markerId={markerId} d="M548 149 C569 149 583 149 604 149" />
      <SketchLine markerId={markerId} d="M737 149 C758 149 771 149 791 149" />
      <SketchLine markerId={markerId} d="M292 216 C292 241 292 254 292 270" loop />
      <SketchLine markerId={markerId} d="M480 216 C480 241 480 254 480 270" loop />
      <SketchLine markerId={markerId} d="M668 216 C668 241 668 254 668 270" loop />
      <SketchNode x={39} y={116} index={0} title="Outcome" note="what changes" tone="warm" />
      <SketchNode x={226} y={116} index={1} title="Explore" note="risks + unknowns" tone="mint" />
      <SketchNode x={415} y={116} index={2} title="Plan" note="scope + sequence" tone="aqua" />
      <SketchNode x={604} y={116} index={3} title="Evidence" note="what proves it" tone="violet" />
      <SketchNode x={791} y={116} index={4} title="Handoff" note="what we learned" tone="lime" width={100} />
      <SketchNode x={226} y={268} index={5} title="Flow view" note="now / next / blocked" tone="coral" />
      <SketchNode x={414} y={268} index={6} title="Priority view" note="value + urgency" tone="warm" />
      <SketchNode x={603} y={268} index={7} title="Build view" note="decisions + proof" tone="mint" />
      <text className="sketch-whisper" x="256" y="342">one work record, many useful ways to see it</text>
    </svg>
  );
}

export function MemoryCycleSketch({ id = 'memory-cycle', className = '' }) {
  const markerId = `${id}-arrow`;
  return (
    <svg className={`diagram-svg ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>Knowledge compounds through curation</title>
      <desc id={`${id}-desc`}>A working session creates observations. Valuable patterns are promoted and curated into durable knowledge, then selected as relevant context for later work. Outdated items can be merged, updated, superseded, or archived.</desc>
      <ArrowDefs markerId={markerId} />
      <path className="sketch-guide" d="M50 250 C165 50 676 37 846 230" />
      <SketchLine markerId={markerId} d="M166 151 C188 151 203 151 225 151" />
      <SketchLine markerId={markerId} d="M357 151 C379 151 394 151 415 151" />
      <SketchLine markerId={markerId} d="M547 151 C570 151 584 151 604 151" />
      <SketchLine markerId={markerId} d="M735 151 C764 157 775 190 763 217" />
      <SketchLine markerId={markerId} d="M626 247 C490 304 264 303 105 214" loop />
      <SketchLine markerId={markerId} d="M480 216 C480 237 480 250 480 267" loop />
      <SketchNode x={34} y={118} index={0} title="Session" note="work in motion" tone="warm" />
      <SketchNode x={225} y={118} index={1} title="Observe" note="notes + signals" tone="mint" />
      <SketchNode x={415} y={118} index={2} title="Promote" note="keep the pattern" tone="aqua" />
      <SketchNode x={604} y={118} index={3} title="Recall" note="relevant context" tone="violet" />
      <SketchNode x={604} y={218} index={4} title="Durable memory" note="curated knowledge" tone="lime" />
      <SketchNode x={414} y={265} index={5} title="Curate" note="merge / update / retire" tone="coral" />
      <text className="sketch-whisper" x="256" y="342">keep the lesson, not every word that passed through</text>
    </svg>
  );
}

export function DeliveryLoopSketch({ id = 'delivery-loop', className = '' }) {
  const markerId = `${id}-arrow`;
  return (
    <svg className={`diagram-svg ${className}`} viewBox="0 0 900 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>A high-trust delivery loop</title>
      <desc id={`${id}-desc`}>A plain-language request becomes a shared specification, a scoped change, visible evidence, and an explicit human decision. Revision returns to the specification rather than bypassing it.</desc>
      <ArrowDefs markerId={markerId} />
      <path className="sketch-guide" d="M67 278 C129 138 300 29 478 72 S737 223 826 99" />
      <SketchLine markerId={markerId} d="M173 171 C203 134 220 115 254 91" />
      <SketchLine markerId={markerId} d="M384 90 C425 116 454 136 486 154" />
      <SketchLine markerId={markerId} d="M620 170 C649 142 680 119 706 93" />
      <SketchLine markerId={markerId} d="M771 129 C785 170 766 209 733 241" />
      <SketchLine markerId={markerId} d="M641 268 C524 306 344 301 173 221" loop />
      <SketchNode x={45} y={145} index={0} title="Request" note="plain language" tone="warm" />
      <SketchNode x={252} y={55} index={1} title="Shared spec" note="scope + criteria" tone="mint" />
      <SketchNode x={486} y={145} index={2} title="Scoped work" note="bounded change" tone="aqua" />
      <SketchNode x={698} y={55} index={3} title="Preview" note="tests + review" tone="violet" />
      <SketchNode x={642} y={238} index={4} title="Decision" note="approve / redirect" tone="lime" />
      <SketchNode x={255} y={238} index={5} title="Release note" note="what changed + why" tone="coral" />
      <text className="sketch-whisper" x="298" y="333">confidence should come from evidence, not a confident answer</text>
    </svg>
  );
}
