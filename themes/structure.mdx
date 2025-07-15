---
title: "Structure"
description: A Ghost theme contains static HTML templates that make use of helpers to output data from your site, and custom CSS for styling.
---

***

The recommended file structure for a Ghost theme is:

```bash
# Structure

.
├── /assets
|   └── /css
|       ├── screen.css
|   ├── /fonts
|   ├── /images
|   ├── /js
├── default.hbs
├── index.hbs [required]
└── post.hbs [required]
└── package.json [required]
```

An optional `/partials` directory allows you to use partial templates across your site to share blocks of HTML between multiple templates and reduce code duplication.

```bash
# Structure

.
├── /assets
    ├── /css
        ├── screen.css
    ├── /fonts
    ├── /images
    ├── /js
├── /partials
    ├── list-post.hbs
├── default.hbs
├── index.hbs [required]
└── post.hbs [required]
└── package.json [required]
```

### Templates

Two template files are required: `index.hbs` and `post.hbs`. All other templates are optional.

It’s recommended using a `default.hbs` file as a base layout for your theme. If you have significantly different layouts for different pages or content types, use the [dynamic routing](/themes/routing) configuration layer, or use partials to encapsulate common parts of your theme.

Theme templates are hierarchical, so one template can extend another template. This prevents base HTML from being repeated. Here are some commonly used templates and their uses:

#### default.hbs

`default.hbs` is a base template that contains the boring bits of HTML that exist on every page such as `<html>`, `<head>` or `<body>` as well as the required `{{ghost_head}}` and `{{ghost_foot}}` and any HTML for the header and footer.

#### index.hbs

This is the standard required template for a list of posts. It is also used if your theme does not have a `tag.hbs`, `author.hbs` or `index.hbs` template. The `index.hbs` template usually extends `default.hbs` and is passed a list of posts using the `{{#foreach}}` helper.

#### home.hbs

An optional template to provide special content for the home page. This template is only used to render `/`.

#### post.hbs

The required template for a single post which extends `default.hbs` and uses the `{{#post}}` helper to output the post details. Custom templates for individual posts can be created using `post-:slug.hbs`.

#### page.hbs

An optional template for static pages. If this is not specified then `post.hbs` will be used. Custom templates for individual pages can be mapped to the page using `page-:slug.hbs`.

#### custom-\{\{template-name}}.hbs

Optional custom templates that can be selected in the admin interface on a per-post basis. They can be used for both posts and pages.

#### tag.hbs

An optional template for tag archive pages. If not specifed the `index.hbs` template is used. Custom templates for individual tags can be created using `tag-:slug`.

#### author.hbs

An optional template for author archive pages. If not specified the `index.hbs` template is used. Custom templates for individual authors can be created using `author{{slug}}`.

#### private.hbs

An optional template for the password form page on password protected publications.

#### error.hbs

An optional theme template for any `404` or `500` errors that are not otherwise handled by error- or class-specific templates. If one is not specified Ghost will use the default.

#### error-\{\{error-class}}xx.hbs

An optional theme template for errors belonging to a specific class (e.g. `error-4xx.hbs` for `400`-level errors). A matching error class template is prioritized over both `error.hbs` and the Ghost default template for rendering the error.

#### error-\{\{error-code}}.hbs

An optional theme template for status code-specific errors (e.g. `error-404.hbs`). A matching error code template is prioritized over all other error templates for rendering the error.

#### robots.txt

Themes can include a robots.txt which overrides the default robots.txt provided by Ghost.

The development version of the default theme [Casper](https://github.com/TryGhost/Casper) can be used to explore how Ghost themes work, or you can customise Casper and make it your own!

***

## Helpers

Ghost templates are constructed from HTML and handlebars helpers. There are a few requirements:

In order for a Ghost theme to work, you must make use of the required helpers: `{{asset}}`, `{{body_class}}`, `{{post_class}}`, `{{ghost_head}}`, `{{ghost_foot}}`.

## Contexts

Each page in a Ghost theme belongs to a [context](/themes/contexts/) which is determined by the URL. The context will decide what template will be used, what data is available and what is output by the `{{body_class}}` helper.

## Styling

When building themes it is important to consider the scope of classes and IDs to avoid clashes between your main styling and your post styling. IDs are automatically generated for headings and used inside a post, so it’s best practice to scope things to a particular part of the page. For example: `#themename-my-id` is preferrable to `#my-id`.

## Development mode

It is recommended to use a local install to build a custom theme using development mode – review the [local install guide](/install/local/) to get started with your own local install for development.

In production mode, template files are loaded and cached by the server. For any changes in a `hbs` file to be reflected, use the `ghost restart` command.

Ghost will automatically check for fatal errors when you upload your theme into Ghost admin. For a full validation report during development, use the [GScan tool](https://gscan.ghost.org/).

## Package.json

The `package.json` file is required, and sets some information about your theme, so it’s important to keep it up to date with relevant information.

To reference a working example of a `package.json` file, review the [Casper file](https://github.com/TryGhost/Casper/blob/main/package.json/), and for further information about specific details of `package.json` handling, read the [npm docs](https://docs.npmjs.com/files/package.json).

```json
// package.json

{
    "name": "your-theme-name",
    "description": "A brief explanation of your theme",
    "version": "0.5.0",
    "license": "MIT",
    "author": {
        "email": "your@email.here"
    },
    "screenshots": {
        "desktop": "assets/screenshot-desktop.jpg",
        "mobile": "assets/screenshot-mobile.jpg"
    },
    "config": {
        "posts_per_page": 10,
        "image_sizes": {},
        "card_assets": true
    }
}
```

The data in the file must be valid JSON, including double quotes around all property names. Every property except the last one should be separated by a comma.

## Additional properties

Here are some of the most common optional properties that can be used in the `package.json` file:

* `config.posts_per_page` — the default number of posts per page is 5
* `config.image_sizes` — read more about using [image sizes](/themes/assets/) guide for more details
* `config.card_assets` — configure the [card CSS and JS](/themes/content/#editor-cards) that Ghost automatically includes
* `config.custom` - add [custom settings](/themes/custom-settings/) to your theme
* `description` — provides a short description about your theme and what makes it unique
* `docs` - include a URL to docs about how to use the theme. The link to the docs will be available in Ghost Admin on the **Design** page
* `license` — use a valid licence string, we recommend `MIT` 😉

Changes to the `package.json` require a restart using the `ghost restart` command.

## Next steps

The rest of the theme documentation explores how [contexts](/themes/contexts/) and [helpers](/themes/helpers/) work, and serves as a useful reference list for your theme development.

For community led support about theme development, visit [the forum](https://forum.ghost.org/c/themes/).