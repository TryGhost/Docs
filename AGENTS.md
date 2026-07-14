# AGENTS.md

This repository contains Ghost's Mintlify-powered developer documentation. See
`README.md` for the human-facing overview.

## Tooling

- Use Node.js v20.17.0 or later.
- Install the CLI with `npm i -g mint`.
- There is no package manifest or repository-local dependency installation.

## Commands

```sh
# Preview at http://localhost:3000
mint dev

# Preview on a different port
mint dev --port 3333

# Run documentation checks
mint validate
mint broken-links --check-anchors --check-redirects --check-snippets
mint a11y

# Clear the local cache when preview behavior is stale
rm -rf ~/.mintlify && mint dev
```

The validation commands currently report known findings on `main`. Compare
results with `main` and do not introduce additional failures.

## Repository conventions

- `docs.json` owns site configuration and navigation. Update it when adding,
  moving, or removing a navigable page.
- Content is MDX at the repository root and in topic directories such as
  `admin-api/`, `content-api/`, `themes/`, `install/`, and `migration/`.
- Reusable components live in `snippets/`; site assets live in `images/` and
  `logo/`.
- Preserve existing frontmatter and Mintlify component conventions.
- Give informative images alt text and use root-relative paths for site assets.
- Keep secrets and local environment files out of the repository.

## Pull requests and deployment

The Mintlify GitHub App creates pull request previews and deploys changes merged
to `main`. Check the `Mintlify Deployment` result before handing off a pull
request.
