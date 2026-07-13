export const harnessStages = [
  {
    id: 'intent',
    label: '01 / Intent',
    title: 'Start with a real question.',
    summary: 'Before the model does anything, I want to know what someone needs, who will use the result, and what a useful outcome would look like. If the question is still fuzzy, this is the time to talk about it.',
    buildingBlocks: ['the person and their goal', 'important limits', 'what a useful result looks like'],
    failure: 'The system can produce a lot of confident activity without solving the right problem.',
  },
  {
    id: 'context',
    label: '02 / Context',
    title: 'Give it the background that matters.',
    summary: 'A model may need project rules, source material, earlier decisions, current tasks, or a little history. I try to select what is useful for this piece of work instead of pouring everything into one enormous prompt.',
    buildingBlocks: ['relevant project history', 'the right source material', 'a check that it is still current'],
    failure: 'Too much background becomes noise, while old information can look more trustworthy than it is.',
  },
  {
    id: 'route',
    label: '03 / Route',
    title: 'Choose a sensible way to do the work.',
    summary: 'Some questions need a quick answer. Others need a plan, a particular tool, or a few separate pieces of work. I design the route so the system does not make a small task complicated or treat a hard task casually.',
    buildingBlocks: ['a simple plan', 'the right tool for the job', 'clear handoffs when work is split'],
    failure: 'The system uses the same approach for everything and creates more coordination than progress.',
  },
  {
    id: 'work',
    label: '04 / Work',
    title: 'Make the work easy to follow.',
    summary: 'Tools and AI workers need clear jobs. I keep separate pieces from getting tangled, then bring back a short account of what happened and what changed.',
    buildingBlocks: ['a clear job', 'a safe place to work', 'a useful summary at the end'],
    failure: 'Work overlaps, noisy output hides the result, or nobody can explain what the system actually did.',
  },
  {
    id: 'verify',
    label: '05 / Verify',
    title: 'Look at the result instead of taking its word for it.',
    summary: 'Tests, previews, reviews, and a person’s approval help answer a basic question: did the work actually do what we wanted?',
    buildingBlocks: ['checks against the real result', 'a preview someone can try', 'a person’s decision'],
    failure: 'A convincing explanation gets mistaken for a correct result.',
  },
  {
    id: 'memory',
    label: '06 / Remember',
    title: 'Remember the lesson, not every word.',
    summary: 'After the work, I keep the decisions, mistakes, and patterns that may help next time. A later session gets a useful memory without inheriting the entire conversation.',
    buildingBlocks: ['a short account of what we learned', 'careful updates to shared memory', 'a useful starting point next time'],
    failure: 'The same ground gets covered again, or an old note quietly turns into a new mistake.',
  },
];

export const harnessResearch = [
  {
    type: 'Agent systems survey',
    title: 'AI Agent Systems: Architectures, Applications, and Evaluation',
    insight: 'A broad map of the parts inside agent systems, including memory, planning, tools, and review, plus the trade-offs between speed, control, capability, and reliability.',
    href: 'https://arxiv.org/abs/2601.01743',
  },
  {
    type: 'Software engineering research',
    title: 'Rethinking Software Engineering for Agentic AI Systems',
    insight: 'Argues that AI agents make coordination, checking, and thoughtful collaboration between people and AI more important, not less.',
    href: 'https://arxiv.org/abs/2604.10599',
  },
];
