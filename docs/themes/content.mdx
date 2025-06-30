---
title: "Content"
description: The open-source Ghost editor is robust and extensible.
---

***

More than just a formatting toolbar, the rich editing experience within Ghost allows authors to pull in dynamic blocks of content like photos, videos, tweets, embeds, code and markdown.

For author-specified options to work, themes need to support the HTML markup and CSS classes that are output by the `{{content}}` helper. Use the following examples to ensure your theme is compatible with the latest version of the Ghost editor.

## `<figure>` and `<figcaption>`

Images and embeds will be output using the semantic `<figure>` and `<figcaption>` elements. For example:

```html
{{/*  Output  */}}
<figure class="kg-image-card">
    <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg" width="1600" height="2400" loading="lazy" srcset="..." sizes="...">
    <figcaption>An example image</figcaption>
</figure>
```

The following CSS classes are used:

* `.kg-image-card` is used on the `<figure>` element for all image cards
* `.kg-image` is used on the `<img>` element for all image cards
* `.kg-embed-card` is used on the `<figure>` element on all embed cards

This is only relevant when authors use the built-in image and embed cards, and themes must also support images and embeds that are not wrapped in `<figure>` elements to maintain compatibility with the Markdown and HTML cards.

## Image size options

The editor allows three size options for images: normal, wide and full width. These size options are achieved by adding `kg-width-wide` and `kg-width-full` classes to the `<figure>` elements in the HTML output. Here’s an example for wide images:

```html
{{/*  Output  */}}
<figure class="kg-image-card kg-width-wide">
    <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg" width="1600" height="2400" loading="lazy" srcset="..." sizes="...">
</figure>
```

Normal width image cards do not have any extra CSS classes.

Image cards have `width` and `height` attributes when that data is available. Width and height correspond to the size and aspect ratio of the source image and do not change when selecting different size options in the editor. *If your theme has a `max-width` style set for images it’s important to also have `height: auto` to avoid images appearing stretched or squashed.*

The specific implementation required for making images wider than their container width will depend on your theme’s existing styles. The default Ghost theme Casper uses flexbox to implement layout using the following HTML and CSS:

```html
<!-- Output -->

<div class="content">
  <article>
    <h1>Image size implementation</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at interdum ipsum.</p>


    <figure class="kg-image-card kg-width-full">
      <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-2.jpg" width="1600" height="2400" loading="lazy" srcset="..." sizes="...">
      <figcaption>A full-width image</figcaption>
    </figure>

    <p>Fusce interdum velit tristique, scelerisque libero et, venenatis nisi. Maecenas euismod luctus neque nec finibus.</p>

    <figure class="kg-image-card kg-width-wide">
      <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg" width="1600" height="2400" loading="lazy" srcset="..." sizes="...">
      <figcaption>A wide image</figcaption>
    </figure>

    <p>Suspendisse sed lacus efficitur, euismod nisi a, sollicitudin orci.</p>
  </article>
</div>

<footer>An example post</footer>
```

And the CSS:

```css
/* style.css */

.content {
  width: 70%;
  margin: 0 auto;
 }

article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

article img {
  display: block;
  max-width: 100%;
  height: auto;
}

.kg-width-wide img {
  max-width: 85vw;
}

.kg-width-full img {
  max-width: 100vw;
}

article figure {
  margin: 0;
}

article figcaption {
  text-align: center;
}

body {
  margin: 0;
}

header, footer {
  padding: 15px 25px;
  background-color: #000;
  color: #fff;
}

h1 {
  width: 100%;
}
```

### Negative margin and transforms example

Traditional CSS layout doesn’t support many elegant methods for breaking elements out of their container. The following example uses negative margins and transforms to achieve breakout. Themes that are based on Casper use similar techniques.

```css
/* style.css */

.content {
  width: 70%;
  margin: 0 auto;
 }

article img {
  display: block;
  max-width: 100%;
  height: auto;
}

.kg-width-wide {
  position: relative;
  width: 85vw;
  min-width: 100%;
  margin: auto calc(50% - 50vw);
  transform: translateX(calc(50vw - 50%));
}

.kg-width-full {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

article figure {
  margin: 0;
}

article figcaption {
  text-align: center;
}

body {
  margin: 0;
}

header, footer {
  padding: 15px 25px;
  background-color: #000;
  color: #fff;
}
```

### Responsive image sizes

Where possible images will have `srcset` and `sizes` attributes to allow for smaller images to be served to devices with smaller screens. Full output will look similar to this:

```html
{{/*  Output  */}}
<figure class="kg-card kg-image-card">
    <img src="https://myghostsite.com/content/images/2021/03/coastline.jpg"
        class="kg-image"
        alt="A rugged coastline with small groups of people walking around rock pools"
        loading="lazy"
        width="2000"
        height="3000"
        srcset="https://myghostsite.com/content/images/size/w600/2021/03/coastline.jpg 600w,
                https://myghostsite.com/content/images/size/w1000/2021/03/coastline.jpg 1000w,
                https://myghostsite.com/content/images/size/w1600/2021/03/coastline.jpg 1600w,
                https://myghostsite.com/content/images/size/w2400/2021/03/coastline.jpg 2400w"
        sizes="(min-width: 720px) 720px">
</figure>
```

## Editor cards

Each of the content cards available in the editor require CSS and Javascript to display and function correctly. These default CSS and Javascript assets are provided automatically by Ghost, and output as `cards.min.css` and `cards.min.js` in the `{{ghost_head}}` helper.

You can override the default styles and behaviour for individual cards by configuring your theme’s `package.json` to exclude the assets for specific cards:

```json
"card_assets": {
    "exclude": ["bookmark", "gallery"]
}
```

Alternatively you can disable all cards, by setting `card_assets` to false (the default is true).

```json
"card_assets": false
```

The available cards are `audio`, `blockquote`, `bookmark`, `button`, `callout`, `file`, `gallery`, `header`, `nft`, `product`, `toggle`, `video`, and `signup`.

You can customize the styles of individual cards by using custom CSS. Each card has a unique class name that you can target to apply your own styles. Here’s a list of the class names for each card type:

* Audio: `.kg-audio-card`
* Blockquote: `blockquote` or `.kg-blockquote-alt`
* Bookmark: `.kg-bookmark-card`
* Button: `.kg-button-card`
* Callout: `.kg-callout-card`
* File: `.kg-file-card`
* Gallery: `.kg-gallery-card`
* Header: `.kg-header-card`
* NFT: `.kg-nft-card`
* Product: `.kg-product-card`
* Toggle: `.kg-toggle-card`
* Video: `.kg-video-card`
* Signup: `.kg-signup-card`

```css
.kg-product-card .kg-product-card-container {
    background-color: #f0f0f0;
}
```

### Gallery card

The image gallery card requires some CSS and JS in your theme to function correctly. Themes will be validated to ensure they have styles for the gallery markup:

* `.kg-gallery-container`
* `.kg-gallery-row`
* `.kg-gallery-image`

Example gallery HTML:

```html
{{/*  Output  */}}
<figure class="kg-card kg-gallery-card kg-width-wide">
    <div class="kg-gallery-container">
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/1.jpg" width="6720" height="4480" loading="lazy" srcset="..." sizes="...">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/2.jpg" width="4946" height="3220" loading="lazy" srcset="..." sizes="...">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/3.jpg" width="5560" height="3492" loading="lazy" srcset="..." sizes="...">
            </div>
        </div>
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/4.jpg" width="3654" height="5473" loading="lazy" srcset="..." sizes="...">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/5.jpg" width="4160" height="6240" loading="lazy" srcset="..." sizes="...">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/6.jpg" width="2645" height="3967" loading="lazy" srcset="..." sizes="...">
            </div>
        </div>
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/7.jpg" width="3840" height="5760" loading="lazy" srcset="..." sizes="...">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/8.jpg" width="3456" height="5184" loading="lazy" srcset="..." sizes="...">
            </div>
        </div>
    </div>
</figure>
```

For a better view of how to support the gallery card in your theme, use the default implementation of the [CSS](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/gallery.css) and [Javascript](https://github.com/TryGhost/Ghost/blob/3d989eba2371235d41468f7699a08e46fc2b1e87/ghost/core/core/frontend/src/cards/js/gallery.js) assets provided by Ghost, which is a generic solution that works for most themes.

### Bookmark card

Here’s an example of the HTML structure that’s created by the editor:

```html
{{/*  Output  */}}
<figure class="kg-card kg-bookmark-card">
    <a href="/" class="kg-bookmark-container">
        <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">The bookmark card</div>
            <div class="kg-bookmark-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at interdum ipsum.</div>
            <div class="kg-bookmark-metadata">
                <img src="/content/images/author-icon.jpg" class="kg-bookmark-icon">
                <span class="kg-bookmark-author">David Darnes</span>
                <span class="kg-bookmark-publisher">Ghost</span>
            </div>
        </div>
        <div class="kg-bookmark-thumbnail">
            <img src="/content/images/article-image.jpg">
        </div>
    </a>
</figure>
```

The default CSS for the bookmark card [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/bookmark.css) should be used as a reference for custom implementations.

### Embed card

If a video is used with the theme then some CSS will be needed in order to maintain a good aspect ratio.

Example HTML:

```html
<figure class="kg-card kg-embed-card">
    <iframe ...></iframe> <!-- <iframe> represents card content -->
</figure>
```

The CSS:

```css
.fluid-width-video-wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

.fluid-width-video-wrapper iframe,
.fluid-width-video-wrapper object,
.fluid-width-video-wrapper embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### NFT card

NFT embeds are provided by [OpenSea](https://opensea.io).

Example HTML:

```html
<figure class="kg-card kg-embed-card kg-nft-card">
    <a class="kg-nft-card"> <!-- Link to NFT on OpenSea -->
        <img class="kg-nft-image"> <!-- Image of NFT -->
        <div class="kg-nft-metadata">
            <div class="kg-nft-header">
                <h4 class="kg-nft-title"> NFT Name </h4>
            </div>
            <div class="kg-nft-creator">
                Created by <span class="kg-nft-creator-name"> Creator Name </span>
                • Collection
            </div>
        </div>
    </a>
</figure>
```

The default CSS for the NFT card [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/nft.css) should be used as a reference for custom implementations.

### Button card

Button cards insert a link that is styled like a button using the site’s configured accent color and can be left or center aligned.

Example HTML:

```html
<div class="kg-card kg-button-card kg-align-center">
    <a href="https://example.com/signup/" class="kg-btn kg-btn-accent">Sign up now</a>
</div>
```

The default CSS for the button card [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/button.css) should be used as a reference for custom implementations.

### Callout card

Callout cards show a highlighted box with an emoji and a paragraph of text.

Example HTML:

```html
<div class="kg-card kg-callout-card kg-callout-card-accent">
    <div class="kg-callout-emoji">💡</div>
    <div class="kg-callout-text">Did you know about the callout card?</div>
</div>
```

The default CSS for the callout card [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/callout.css) should be used as a reference for custom implementations.

### Toggle card

Toggle cards show a collapsible content box with heading and arrow icon.

Example HTML:

```html
<div class="kg-card kg-toggle-card" data-kg-toggle-state="close">
    <div class="kg-toggle-heading">
        <h4 class="kg-toggle-heading-text">Do you give any discounts ?</h4>
        <button class="kg-toggle-card-icon">
            <svg id="Regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"/></svg>
        </button>
    </div>
    <div class="kg-toggle-content">Yes, we give 20% off on annual subscriptions.</div>
</div>
```

The default CSS for the toggle card [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/toggle.css) should be used as a reference for custom implementations.

### Alternative blockquote style

There are two styles of blockquote available that can by cycled through by repeatedly pressing the blockquote toolbar icon.

Example HTML:

```html
<blockquote>Standard blockquote style</blockquote>

<blockquote class="kg-blockquote-alt">Alternative blockquote style</blockquote>
```

The default CSS for the alternative style [provided by Ghost](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/blockquote.css) should be used as a reference for custom implementations.

### Audio upload card

Audio card allows uploading custom audio files.

Example HTML:

```html
<div class="kg-card kg-audio-card">
    <img src="https://example.com/blog/content/media/2021/12/file_example_MP3_thumb.png?v=1639412501826" alt="audio-thumbnail" class="kg-audio-thumbnail">
    <div class="kg-audio-thumbnail placeholder kg-audio-hide">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 15.33a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM15 13.83a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.486 6.81A2.25 2.25 0 0 1 17.25 9v5.579a.75.75 0 0 1-1.5 0v-5.58a.75.75 0 0 0-.932-.727.755.755 0 0 1-.059.013l-4.465.744a.75.75 0 0 0-.544.72v6.33a.75.75 0 0 1-1.5 0v-6.33a2.25 2.25 0 0 1 1.763-2.194l4.473-.746Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V5.133a.75.75 0 0 0-.225-.535l-.002-.002-3-2.883A.75.75 0 0 0 18 1.5H3ZM1.409.659A2.25 2.25 0 0 1 3 0h15a2.25 2.25 0 0 1 1.568.637l.003.002 3 2.883a2.25 2.25 0 0 1 .679 1.61V21.75A2.25 2.25 0 0 1 21 24H3a2.25 2.25 0 0 1-2.25-2.25V2.25c0-.597.237-1.169.659-1.591Z"></path></svg>
    </div>
    <div class="kg-audio-player-container" style="--buffered-width:0.757576%;">
        <audio src="https://example.com/content/media/2021/12/file_example_MP3.mp3" preload="metadata"></audio>
        <div class="kg-audio-title">File example MP3</div><div class="kg-audio-player">
            <button class="kg-audio-play-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"></path></svg>
            </button>
            <button class="kg-audio-pause-icon kg-audio-hide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"></rect><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"></rect></svg>
            </button>
            <span class="kg-audio-current-time">0:00</span>
            <div class="kg-audio-time">
                /<span class="kg-audio-duration">2:12</span>
            </div>
            <input type="range" class="kg-audio-seek-slider" max="132" value="0">
            <button class="kg-audio-playback-rate">1×</button>
            <button class="kg-audio-unmute-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"></path></svg>
            </button>
            <button class="kg-audio-mute-icon kg-audio-hide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"></path></svg>
            </button>
            <input type="range" class="kg-audio-volume-slider" max="100" value="100">
        </div>
    </div>
</div>
```

The default [CSS](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/audio.css) and [Javascript](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/js/audio.js) for the audio card provided by Ghost should be used as a reference for custom implementations.

### Video upload card

Video card allows uploading custom video files.

Example HTML:

```html
<figure class="kg-card kg-video-card"><div class="kg-video-container"><video src="https://example.com/video.mp4" poster="https://img.spacergif.org/v1/640x480/0a/spacer.png" width="640" height="480" playsinline preload="metadata" style="background: transparent url('https://example.com/video.png') 50% 50% / cover no-repeat;" /></video><div class="kg-video-overlay"><button class="kg-video-large-play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button></div><div class="kg-video-player-container"><div class="kg-video-player"><button class="kg-video-play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button class="kg-video-pause-icon kg-video-hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span class="kg-video-current-time">0:00</span><div class="kg-video-time">/<span class="kg-video-duration"></span></div><input type="range" class="kg-video-seek-slider" max="100" value="0"><button class="kg-video-playback-rate">1×</button><button class="kg-video-unmute-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button class="kg-video-mute-icon kg-video-hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range" class="kg-video-volume-slider" max="100" value="100"></div></div></div></figure>
```

The default [CSS](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/video.css) and [Javascript](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/js/video.js) for the video card provided by Ghost should be used as a reference for custom implementations.

### File upload card

File card allows uploading custom files for download.

Example HTML:

```html

<div class="kg-card kg-file-card ">
    <a class="kg-file-card-container" href="https://ghost.org/uploads/2017/11/file_example_PDF.pdf" title="Download">
        <div class="kg-file-card-contents">
            <div class="kg-file-card-title">Sample File</div>
            <div class="kg-file-card-caption">Sample file caption</div>
            <div class="kg-file-card-metadata">
                <div class="kg-file-card-filename">file_example_PDF.pdf</div>
                <div class="kg-file-card-filesize">488 KB</div>
            </div>
        </div>
        <div class="kg-file-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>download-circle</title><polyline class="a" points="8.25 14.25 12 18 15.75 14.25"/><line class="a" x1="12" y1="6.75" x2="12" y2="18"/><circle class="a" cx="12" cy="12" r="11.25"/></svg>
        </div>
    </a>
</div>
```

The default [CSS](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/file.css) for the file card provided by Ghost should be used as a reference for custom implementations.

### Header card

The header card gives you the ability to add headers to your posts and pages.

Example HTML:

```html
<div class="kg-card kg-header-card kg-width-full kg-size-<size> kg-style-<style>" style="" data-kg-background-image="https://example.com/image.jpg">
    <h2 class="kg-header-card-header">Header</h2>
    <h3 class="kg-header-card-subheader">Subheader</h3>
    <a href="" class="kg-header-card-button">
        Button Text
    </a>
</div>
```

The main card can have a `kg-size-` class of either: `kg-size-small`, `kg-size-medium` or `kg-size-large` and a `kg-style-` class of either `kg-style-dark`, `kg-style-light`, `kg-style-accent, or `kg-style-image\`.

The default [CSS](https://github.com/TryGhost/Ghost/blob/c667620d8f2e32c96fe376ad0f3dabc79488532a/ghost/core/core/frontend/src/cards/css/header.css) for the card can be used as a reference implementation.

### Signup card

The signup card adds a customizable signup form to posts. (Only available in the [new beta editor](https://ghost.org/changelog/editor-beta/).)

```html
<div
  class="kg-card kg-signup-card kg-width-<size>"
  data-lexical-signup-form=""
  style=""
>
  <div class="kg-signup-card-content">
    <!-- image in split layout -->
    <picture
      ><img
        class="kg-signup-card-image"
        src=""
        alt=""
    /></picture>

    <div class="kg-signup-card-text">
      <h2 class="kg-signup-card-heading" style="">
        <span>Heading</span>
      </h2>
      <h3 class="kg-signup-card-subheading" style="">
        <span>Subheading</span>
      </h3>

      <form class="kg-signup-card-form" data-members-form="signup">
        <div class="kg-signup-card-fields">
          <input
            class="kg-signup-card-input"
            id="email"
            data-members-email=""
            type="email"
            required="true"
            placeholder="Your email"
          />
          <button
            class="kg-signup-card-button kg-style-accent"
            style=""
            type="submit"
          >
            <span class="kg-signup-card-button-default">Subscribe</span>
            <span class="kg-signup-card-button-loading"
              ><!-- SVG loading icon --></span
            >
          </button>
        </div>
        <div class="kg-signup-card-success" style="">
          Email sent! Check your inbox to complete your signup.
        </div>
        <div
          class="kg-signup-card-error"
          style=""
          data-members-error=""
        ></div>
      </form>

      <p class="kg-signup-card-disclaimer" style="">
        <span>No spam. Unsubscribe anytime.</span>
      </p>
    </div>
  </div>
</div>
```

For `kg-width-<size>`, `size` can be `kg-width-regular`, `kg-width-wide`, or `kg-width-full`.

Full-width and split-layout with contained image cards provide a `kg-content-wide` class. Use this class to ensure card content is properly positioned and sized. See [Casper’s implementation](https://github.com/TryGhost/Casper/blob/2fafe722d1ee997f5f1b597de859fe2462090e42/assets/css/screen.css#L1298-L1312) for a guide.

Split-layout signup cards, which include an image adjacent to the text content, provide the `kg-layout-split` class.

See the [default CSS](https://github.com/TryGhost/Ghost/blob/4c72f4567600a59a64be10f38acf851bffaa6dec/ghost/core/core/frontend/src/cards/css/signup.css) included with this card.