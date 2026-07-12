// The harness guide is a teaching-oriented snapshot of how Julien thinks about
// agentic engineering. It is intentionally a model, not a claim that every
// agent system must use the same architecture.

export const harnessStages = [
  {
    id: 'intent',
    label: '01 / Intent',
    title: 'Start with a real question.',
    summary: 'A harness begins before the model runs. It needs a clear job, an owner, and a useful boundary around what success looks like. Ambiguity should be surfaced here—not discovered after an agent has confidently headed in the wrong direction.',
    buildingBlocks: ['goal + constraints', 'human decision point', 'definition of useful'],
    failure: 'A vague request becomes confident-looking activity with no shared definition of done.',
  },
  {
    id: 'context',
    label: '02 / Context',
    title: 'Build the smallest useful world around the task.',
    summary: 'Project rules, source material, decisions, active tickets, and relevant memory should be selected for the work at hand—not poured into one giant prompt.',
    buildingBlocks: ['project context', 'just-in-time recall', 'freshness checks'],
    failure: 'More context becomes noise, stale knowledge gets treated as fact, and the useful signal disappears.',
  },
  {
    id: 'route',
    label: '03 / Route',
    title: 'Give the work a shape.',
    summary: 'A strong harness decides whether to reason in one place, use a specialized skill, call a tool, or split bounded work across agents. The routing is part of the engineering.',
    buildingBlocks: ['planning', 'skill selection', 'bounded handoffs'],
    failure: 'An agent treats every task alike, uses the wrong capability, or creates coordination overhead without a payoff.',
  },
  {
    id: 'work',
    label: '04 / Work',
    title: 'Let tools and workers do legible work.',
    summary: 'Tools, agents, and automation should have clear contracts. Isolated work keeps noisy outputs local; summaries make the durable result portable.',
    buildingBlocks: ['tools + environments', 'isolated worker context', 'summary contracts'],
    failure: 'Raw output floods the main session, parallel work conflicts, or nobody can tell what actually happened.',
  },
  {
    id: 'verify',
    label: '05 / Verify',
    title: 'Ask for proof, not reassurance.',
    summary: 'Tests, previews, reviewers, guards, and explicit approvals turn an impressive-looking output into a change someone can trust.',
    buildingBlocks: ['ground-truth checks', 'review gates', 'human approval'],
    failure: 'The system accepts a plausible self-report instead of checking the thing it was meant to accomplish.',
  },
  {
    id: 'memory',
    label: '06 / Remember',
    title: 'Keep the lesson, not the whole transcript.',
    summary: 'After a run, harvest decisions, failures, and patterns into durable memory. The next session should inherit the useful part without carrying every token of the last one.',
    buildingBlocks: ['distilled learnings', 'retrieval + curation', 'next-session handoff'],
    failure: 'The team repeats the same exploration, or stale notes become a new source of confident mistakes.',
  },
];

export const harnessResearch = [
  {
    type: 'Agent systems survey',
    title: 'AI Agent Systems: Architectures, Applications, and Evaluation',
    insight: 'A broad taxonomy of agent components—memory, planners, tool routers, critics—and the trade-offs between latency, controllability, capability, and reliability.',
    href: 'https://arxiv.org/abs/2601.01743',
  },
  {
    type: 'Software engineering research',
    title: 'Rethinking Software Engineering for Agentic AI Systems',
    insight: 'Argues that agentic software work raises the importance of orchestration, verification, and structured human–AI collaboration rather than making engineering disappear.',
    href: 'https://arxiv.org/abs/2604.10599',
  },
];
