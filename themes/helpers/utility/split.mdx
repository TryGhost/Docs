---
title: "split"
description: 'Usage: `{{#split "apple-banana-pear" separator="-"}}`'
---

***

The `{{#split}}` helper is designed to split a string into separate strings.  It can be used in block or inline mode.

The `{{#split}}` helper returns an array, suitable for iteration with `{{#foreach}}`, with individual elements of the array suitable for any helper that expects a string.

Individual elements of the array may be addressed as `{{this}}` within a `{{#foreach}}` loop.

## Examples

### Block mode:
```handlebars
{{#split "hello,world" as |elements|}}
  {{#foreach elements}}
    |{{this}}|
  {{/foreach}}
{{/split}}

Outputs:

|hello||world|
```
### Inline mode:
```handlebars
{{#foreach (split "hello, world" separator=",")}}
   {{this}} {{#unless @last}}<br>{{/unless}}
{{/foreach}}

Outputs:

hello<br> world
```

`{{split}}` is designed for strings. If it receives a non-string, it attempts to convert it to a string first.


## The separator attribute

By default, strings are split at each ",". The `separator=""` attribute allows settings the split location to an arbitrary value.

Passing an empty string for the separator results in splitting to single characters.

Separators may be multiple characters.


### Additional examples

```handlebars
{{#foreach (split "my-slug-is-long-too-long" separator="-")}}
  {{#unless @first}}{{#unless @last}}-{{/unless}}{{/unless}}{{#unless @last}}
    {{this}}
  {{/unless}}
{{/foreach}}

Outputs: 

my-slug-is-long-too

```

```handlebars
{{#foreach (split "remove-this-from-my-slug" separator="remove-this-")}}
  {{this}}
{{/foreach}}

Outputs:

from-my-slug
```

```handlebars
{{!-- custom.list-of-tags is a comma-separated list like apple,banana,pear --}}
{{#foreach (split @custom.list-of-tags)}} 
   {{> tag-loop slug=this}}
{{/foreach}}
```


### No empty strings
Split filters the array to exclude any empty strings from the final result.  Sequential separators will not result in empty strings.

```handlebars
{{#foreach (split ",banana,,apple,")}}
  {{#unless @first}}{{#unless @last}}-{{/unless}}{{/unless}}{{#unless @last}}
    ({{this}})
  {{/unless}}
{{/foreach}}

Outputs: 

(banana)(apple)

Not: ()(banana)()(apple)() 
```
