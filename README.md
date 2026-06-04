# Sashakt Docs

Documentation site for [Sashakt](https://projecttech4dev.org/sashakt) — an open-source assessment platform that makes it effortless for organizations to create, customize, and conduct assessments at scale.

Built with [Docusaurus 3](https://docusaurus.io/).

## Local development

```bash
pnpm install
pnpm start
```

Opens at `http://localhost:3000/` with hot reload.

## Production build

The site is served from `https://sashakt-platform.github.io/docs/`, so the production build needs `BASE_URL=/docs/`:

```bash
BASE_URL=/docs/ pnpm build
```

The built static site lands in `build/`.

## Deployment

The site deploys to GitHub Pages from the `gh-pages` branch of [`sashakt-platform/docs`](https://github.com/sashakt-platform/docs).

To deploy manually from your machine:

```bash
BASE_URL=/docs/ GIT_USER=<your-github-username> pnpm deploy
```

## Contributing

Each doc page lives under `docs/` as a Markdown file. Folders and files are numerically prefixed (`01.`, `02.`) to control sidebar order — Docusaurus strips the prefixes when rendering labels.

To add a new section, create a numbered folder under `docs/` with a `_category_.json` file:

```json
{
  "label": "Your Section",
  "position": 5,
  "link": { "type": "generated-index" }
}
```

Cross-link between pages with relative file paths (e.g. `./quick-start`). Use `>` blockquote for screenshot placeholders (`> _📷 Screenshot placeholder: ..._`).
