---
title: "social_accounts"
description: 'Usage: `{{#social_accounts @site}}{{/social_accounts}}`'
---

***

`{{#social_accounts}}` is a block helper that iterates over the connected social accounts on a given source object — usually `@site` or an author. The source must be passed as a positional argument.

### Simple Example

Render a row of links for the social accounts configured under Settings > General > Social accounts:

```handlebars
{{#social_accounts @site}}
<a href="{{href}}" target="_blank" rel="noopener" aria-label="{{name}}">
  <span class="icon icon-{{type}}">{{name}}</span>
</a>
{{/social_accounts}}
```

## Data Variables

When inside a `{{#social_accounts}}` block, the following properties are available for each account:

* **type** (string) - the platform key (e.g. `x`, `bluesky`)
* **href** (string) - the full URL to the profile
* **username** (string) - the raw stored handle or URL fragment
* **name** (string) - the human-readable platform label (e.g. `X`, `Facebook`)

The standard iteration variables are also available:

* **@index** (number) - the 0-based index of the current iteration
* **@number** (number) - the 1-based index of the current iteration
* **@first** (boolean) - true if this is the first iteration
* **@last** (boolean) - true if this is the last iteration
* **@odd** (boolean) - true if the @index is odd
* **@even** (boolean) - true if the @index is even

## Usage

### Per-author accounts

When used inside `{{#foreach authors}}`, pass `this` to iterate the current author’s accounts:

```handlebars
{{#foreach authors}}
<h3>{{name}}</h3>
{{#social_accounts this}}
  <a href="{{href}}" aria-label="{{name}}">
    <span class="icon icon-{{type}}">{{name}}</span>
  </a>
{{/social_accounts}}
{{/foreach}}
```

On an author page, the author is named `author`:

```handlebars
{{#social_accounts author}}
<a href="{{href}}" aria-label="{{name}}">
  <span class="icon icon-{{type}}">{{name}}</span>
</a>
{{/social_accounts}}
```

### \{\{else}} and negation

Like all block helpers, `{{#social_accounts}}` supports an `{{else}}` block, which is executed when there are no connected accounts:

```handlebars
{{#social_accounts @site}}
<a href="{{href}}">{{name}}</a>
{{else}}
<p>No social accounts connected yet.</p>
{{/social_accounts}}
```

### Using partials

Most themes ship a separate icon partial per platform — `partials/icons/x.hbs`, `partials/icons/facebook.hbs`, and so on — and want `{{#social_accounts}}` to pull in the right one based on `{{type}}`.

This needs a **dynamic partial**, and the partial must be invoked using the **block form** (`{{#> …}}…{{/undefined}}`):

```handlebars
{{#social_accounts @site}}
<a href="{{href}}" target="_blank" rel="noopener" aria-label="{{name}}">
  {{#> (concat "icons/" type)}}
    {{!-- Fallback rendered when no per-platform icon partial exists --}}
    <span class="icon icon-web">{{name}}</span>
  {{/undefined}}
</a>
{{/social_accounts}}
```

The inline form (`{{> (concat "icons/" type)}}`) looks tempting, but it throws a page error if the named partial doesn't exist — for example, when a new platform ships before a theme adds the matching icon. gscan rejects the inline form on purpose for this reason. The block form falls back to the inner content instead, so the page keeps rendering.

Note the closing tag must be `{{/undefined}}`. This looks unusual, but it's the only form Handlebars accepts when closing a dynamic partial block.

## Supported platforms

`x`, `facebook`, `linkedin`, `bluesky`, `threads`, `mastodon`, `tiktok`, `youtube`, `instagram`. Platforms without a value set on the source are skipped.
