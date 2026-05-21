---
title: "partials"
description: 'Usage: `{{> "partial-name"}}`'
---

***


`{{> "partials"}}` is a helper for reusing chunks of template code in handlebars files. This can be useful for any repeating elements, such as a post card design, or for splitting out components like a header for easier to manage template files.

All partials are stored in the `partials/` directory of the theme. Partials will inherit context and make that context available within the partial file.

### Example

```handlebars
{{#foreach posts}}

  {{> "post-card"}}

{{/foreach}}
```

```html
<!-- partials/post-card.hbs -->
<article class="post-card.hbs">
  <h2 class="post-card-title">
    <a href="{{url}}">{{title}}</a>
  </h2>
  <p>{{excerpt words="30"}}</p>
</article>
```

### Partial properties

Partials can take properties as well which provide the option to set contextual values per use case.

#### Properties example

```handlebars
{{> "call-to-action" heading="Sign up now"}}
```

```html
<!-- partials/call-to-action.hbs -->
<aside>
  {{#if heading}}
    <h2>{{heading}}</h2>
  {{/if}}
  <form>
    <!-- ... -->
  </form>
</aside>
```

### Dynamic partials

You can pick a partial name dynamically with a sub-expression rather than a string literal. This is useful when iterating over a collection where each item needs a different partial, for example rendering per-platform social icons.

Use the **block form** for dynamic partials, not the inline form. The block form falls back to its inner content when the named partial doesn’t exist; the inline form throws a page error and breaks the rendered page.

```handlebars
{{#> (concat "icons/" type)}}
  {{!-- Fallback rendered when no matching partial exists --}}
  <span class="icon icon-default">{{name}}</span>
{{/undefined}}
```

Note the closing tag must be `{{/undefined}}`. This looks unusual, but it’s the only form Handlebars accepts when closing a dynamic partial block.