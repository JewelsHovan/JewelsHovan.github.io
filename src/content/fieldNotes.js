// A deliberately small, file-first blog prototype.
// Add a new object here and it automatically appears in the Field Notes reader.
// See src/content/README.md for the entry shape and publishing checklist.

export const fieldNotes = [
  {
    id: 'build-for-someone-real',
    label: 'Coding note',
    date: 'Now',
    readTime: '1 min read',
    title: 'Build for someone real.',
    excerpt: 'My best coding advice is to make something for yourself or someone you know, then let their real needs shape the work.',
    body: [
      'The best coding advice I have is to build something for yourself or someone you know. A real person gives the work a purpose. You stop adding things because they sound impressive and start paying attention to what would make the tool genuinely useful.',
      'Whether you are thinking about the product or the engineering underneath it, the person at the other end is still human. Can they understand it? Can they use it without fighting it? Can they trust it when something goes wrong?',
      'Perfect code is not the goal. The goal is software that works for someone today, holds up in real use, and has room to grow. That does not mean predicting every future need. It means leaving the code sturdy and clear enough for the next change.',
    ],
  },
  {
    id: 'the-difficult-bit',
    label: 'Personal note',
    date: 'Now',
    readTime: '2 min read',
    title: 'I like the difficult bit.',
    excerpt: 'I tend to get attached to a hard problem and stay with it until there is a way through.',
    body: [
      'I like problems that make you slow down. The tangled ones: where the people, the process, the data, and the software are all pulling in slightly different directions. I can happily hyperfocus on that knot until there is a useful way through it.',
      'That also means I get personally attached to the things I build. It does not matter whether a project starts as a tiny personal experiment or a serious piece of client work. If someone is going to use it, I want the details to hold up and the experience to feel like it was made with them in mind.',
      'That is a big part of why consulting fits me. I get to make things for people: tools that take friction out of a day, systems that make a difficult decision clearer, and workflows that let someone participate in the work without needing to become an engineer first.',
    ],
  },
  {
    id: 'change-is-a-human-skill',
    label: 'Personal note',
    date: 'On the horizon',
    readTime: '2 min read',
    title: 'Change is coming. We get to choose how we meet it.',
    excerpt: 'I care about AI because technology changes culture, work, and the stories people can tell about what they are capable of.',
    body: [
      'I have always been drawn to technology beyond the screen. I build my own computers, love learning how systems fit together, and keep coming back to the way technical change reshapes culture, work, and everyday life.',
      'AI makes that question feel immediate. I want to use what I know to help people use it responsibly, with enough context and agency to understand what is changing around them. The point is not to hand everything over to a machine; it is to give people more ways to think, make, and decide well.',
      'What I find remarkable about people is our ability to notice an instinct, learn from it, and choose a better response. Adaptation might be one of our strongest traits. I want to build systems that make that capacity easier to practice, not harder.',
    ],
  },
];

export const nextNotePrompt = {
  title: 'Your next note can start small.',
  body: 'Add a title, a short excerpt, and a few paragraphs in src/content/fieldNotes.js. The index and reader update automatically—no CMS required.',
};
