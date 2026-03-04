# Vidkit Docs

Documentation site for [Vidkit](https://github.com/vidkit-ai), built with [Nextra](https://nextra.site) Docs Theme.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (or npm / yarn)

## Setup

```bash
pnpm install
```

## Scripts

| Command       | Description                |
| ------------- | ------------------------- |
| `pnpm dev`    | Start dev server (Turbopack) |
| `pnpm build`  | Build for production      |
| `pnpm start`  | Serve production build    |

## Project structure

- `app/` – App Router pages and layout (`layout.tsx`, `page.mdx`, `get-started/page.mdx`)
- `components/` – Shared MDX components used in docs
- `mdx-components.tsx` – MDX component provider (required by Nextra)
- `next.config.ts` – Next.js + Nextra config

## Editing docs

- Add or edit `.mdx` files under `app/` for new pages.
- Use frontmatter for `sidebarTitle`, `icon`, and other [Nextra metadata](https://nextra.site/docs/docs-theme/page-configuration).
- Sidebar order is controlled by `app/_meta.global.ts`.

## License

MIT
