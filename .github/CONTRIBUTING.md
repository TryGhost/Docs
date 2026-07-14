# Contributing to Ghost

We welcome contributions to help improve Ghost's documentation!

---

## Contributor License Agreement

By contributing your code to Ghost you grant the Ghost Foundation a non-exclusive, irrevocable, worldwide, royalty-free, sublicenseable, transferable license under all of Your relevant intellectual property rights (including copyright, patent, and any other rights), to use, copy, prepare derivative works of, distribute and publicly perform and display the Contributions on any licensing terms, including without limitation:
(a) open source licenses like the MIT license; and (b) binary, proprietary, or commercial licenses. Except for the licenses granted herein, You reserve all right, title, and interest in and to the Contribution.

You confirm that you are able to grant us these rights. You represent that You are legally entitled to grant the above license. If Your employer has rights to intellectual property that You create, You represent that You have received permission to make the Contributions on behalf of that employer, or that Your employer has waived such rights for the Contributions.

You represent that the Contributions are Your original works of authorship, and to Your knowledge, no other person claims, or has the right to claim, any right in any invention or patent related to the Contributions. You also represent that You are not legally obligated, whether by entering into an agreement or otherwise, in any way that conflicts with the terms of this license.

The Ghost Foundation acknowledges that, except as explicitly described in this Agreement, any Contribution which you provide is on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.

## Working on the documentation

This repository contains the Mintlify source for
[docs.ghost.org](https://docs.ghost.org/). Local previews require Node.js
v20.17.0 or later and the Mintlify CLI:

```sh
npm i -g mint
mint dev
```

The preview is available at `http://localhost:3000` by default.

Before opening a pull request, run:

```sh
mint validate
mint broken-links --check-anchors --check-redirects --check-snippets
mint a11y
```

These checks currently expose known findings on `main`. Compare your results
with `main` and avoid introducing additional failures.

Documentation pages use MDX. When adding, moving, or removing a navigable page,
update `docs.json` as part of the same change. Store reusable components in
`snippets/` and site assets in `images/` or `logo/`.

Keep each pull request focused and explain why the change is needed, what it
changes, and how it helps Ghost users or developers. The Mintlify GitHub App
creates a preview for pull requests. After a change is merged to `main`, the app
deploys it to [docs.ghost.org](https://docs.ghost.org/).
