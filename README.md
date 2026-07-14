# Ghost Docs

This repository contains the official developer documentation for
[Ghost](https://github.com/TryGhost/Ghost), published at
[docs.ghost.org](https://docs.ghost.org/).

## Local development

Local previews require Node.js v20.17.0 or later and the Mintlify CLI:

```sh
npm i -g mint
mint dev
```

The preview is available at `http://localhost:3000` by default.

## Validation

Run the documentation checks before opening a pull request:

```sh
mint validate
mint broken-links --check-anchors --check-redirects --check-snippets
mint a11y
```

These checks currently expose known findings on `main`. Compare your results
with `main` and avoid introducing additional failures.

See the [contribution guide](.github/CONTRIBUTING.md) for the repository
workflow.

## Deployment

The Mintlify GitHub App creates pull request previews. Merging to `main`
triggers deployment to [docs.ghost.org](https://docs.ghost.org/); monitor the
`Mintlify Deployment` check for the result.

---

## Copyright & License

Copyright (c) 2013-2026 Ghost Foundation. All rights reserved.

This code is considered closed-source and not for distribution. There is no
open source license associated with this project.
