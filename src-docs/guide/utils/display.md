# Display property

Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

## How it works

Change the value of the [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for display. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

`.d-{value}` for xs
`.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

Where value is one of:

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

The media queries affect screen widths with the given breakpoint or larger. For example, `.d-lg-none` sets `display: none;` on both `lg` and `xl` screens.

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the .d-none class or one of the .d-{sm,md,lg,xl}-none classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one .d-*-none class with a .d-*-* class, for example .d-none .d-md-block .d-xl-none will hide the element for all screen sizes except on medium and large devices.

| Screen Size  | Class |
| ------------- | ------- | 
| Hidden on all  | `.d-none` |
| Hidden only on xs	| `.d-none .d-sm-block` |
| Hidden only on sm	| `.d-sm-none .d-md-block` |
| Hidden only on md	| `.d-md-none .d-lg-block` |
| Hidden only on lg	| `.d-lg-none .d-xl-block` |
| Hidden only on xl	| `.d-xl-none` |
| Visible on all | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block` |

### Examples

<div class="mt-3 mb-3">
    <div class="d-inline p-2 bg-primary text-white">d-inline</div>
    <div class="d-inline p-2 bg-dark text-white">d-inline</div>
</div>

```html
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
```

<div class="mt-3 mb-3">
    <span class="d-block p-2 bg-primary text-white">d-block</span>
    <span class="d-block p-2 bg-dark text-white">d-block</span>
</div>

```html
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
```

<div class="mt-3 mb-3">
    <div class="d-lg-none">hide on lg and wider screens</div>
    <div class="d-none d-lg-block">hide on screens smaller than lg</div>
</div>

### Responsive display example

Change the screen size to see the following examples in action.

```html
<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
```

#### Debug

You can use the `us-responsive-info` component to help you debug, as this will show which breakpoints are currently active. Change the screen width to see it in action below.

<div>
    <ClientOnly>
        <us-responsive-info />
    </ClientOnly>
</div>

```html
<us-responsive-info />
```

The following code shows how this component works to show more advanced usage of this display classes with respect to responsive breakpoints.

```html

<div class="resp-info resp-current d-none d-xs-inline-block d-sm-none">xs</div>
<div class="resp-info resp-current d-none d-sm-inline-block d-md-none">sm</div>
<div class="resp-info resp-current d-none d-md-inline-block d-lg-none">md</div>
<div class="resp-info resp-current d-none d-lg-inline-block d-xl-none">lg</div>
<div class="resp-info resp-current d-none d-xl-inline-block">xl</div>

<div class="resp-info resp-visible d-none d-xs-inline-block">xs</div>
<div class="resp-info resp-hidden d-inline-block d-xs-none">xs</div>

<div class="resp-info resp-visible d-none d-sm-inline-block">sm</div>
<div class="resp-info resp-hidden d-inline-block d-sm-none">sm</div>

<div class="resp-info resp-visible d-none d-md-inline-block">md</div>
<div class="resp-info resp-hidden d-inline-block d-md-none">md</div>

<div class="resp-info resp-visible d-none d-lg-inline-block">lg</div>
<div class="resp-info resp-hidden d-inline-block d-lg-none">lg</div>

<div class="resp-info resp-visible d-none d-xl-inline-block">xl</div>
<div class="resp-info resp-hidden d-inline-block d-xl-none">xl</div>

<div class='resp-help text-muted'>
    Current breakpoint is 
    <span class="text-info d-none d-xs-inline-block d-sm-none">XS</span>
    <span class="text-info d-none d-sm-inline-block d-md-none">SM</span>
    <span class="text-info d-none d-md-inline-block d-lg-none">MD</span>
    <span class="text-info d-none d-lg-inline-block d-xl-none">LG</span>
    <span class="text-info d-none d-xl-inline-block">XL</span>
</div>

<style lang="scss">
.resp-info {
    text-transform: uppercase;
    text-align: center;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    color: black;
    width: 35px;
    height: 35px;
    line-height: 25px;
    margin-right: 3px;
}

.resp-help {
    font-size: 12px;
    margin-top: 5px;
}

.resp-visible {
    background-color: #70e17b;
}

.resp-current {
    background-color: #00bde3;
}

.resp-hidden {
    background: #d3d3d3;
    -webkit-box-shadow: inset 0px 0px 5px #707070;
    -moz-box-shadow: inset 0px 0px 5px #707070;
    box-shadow: inset 0px 0px 5px #707070;
    outline: none;
}
</style>

```


