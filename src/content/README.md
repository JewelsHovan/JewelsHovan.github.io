# Field Notes prototype

This site uses a deliberately small, file-first blog prototype so notes can ship with the rest of the site.

## Add a note

1. Open `src/content/fieldNotes.js`.
2. Copy an entry in the `fieldNotes` array.
3. Give it a unique `id`, `label`, `date`, `readTime`, `title`, `excerpt`, and an array of paragraph strings in `body`.
4. Run `npm start` to preview it, then `npm run build` before publishing.

The Field Notes index and reader are rendered from this array automatically. Keep paragraphs public-safe; drafts or private research should stay outside this repository until ready to publish.
