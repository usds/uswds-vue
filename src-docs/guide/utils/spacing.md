# Spacing

**USWDS-Vue** includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.

## How it works

Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built using the default USWDS spacing token, of 8px.

## Notation

Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for xs and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

Where property is one of:

`m` - for classes that set margin
`p` - for classes that set padding

Where sides is one of:

`t` - for classes that set margin-top or padding-top
`b` - for classes that set margin-bottom or padding-bottom
`l` - for classes that set margin-left or padding-left
`r` - for classes that set margin-right or padding-right
`x` - for classes that set both *-left and *-right
`y` - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

`0` - for classes that eliminate the margin or padding by setting it to 0
`05` - for classes that set the margin or padding to $step * 0.5
`1` - for classes that set the margin or padding to $step * 1
`105` - for classes that set the margin or padding to $step * 1.5
`2` - for classes that set the margin or padding to $step * 2
`3` - for classes that set the margin or padding to $step
`4` - for classes that set the margin or padding to $step * 1.5
`5` - for classes that set the margin or padding to $step * 3
`auto` - for classes that set the margin to auto

(You can add more sizes by adding entries to the $steps Sass map variable.)

### Examples

Here are some representative examples of these classes:

```css

.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: ($step * .1) !important;
}

.px-2 {
  padding-left: ($step * 2) !important;
  padding-right: ($step * 2) !important;
}

.p-3 {
  padding: ($step * 3) !important;
}
```

## Horizontal centering

Additionally, uswds-vue also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.

Centered element

```html
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
```

## Negative margin

In CSS, margin properties can utilize negative values (padding cannot). The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here’s an example class that’s the opposite of `.mt-1`:

```css
.mt-n1 {
  margin-top: -$step !important;
}
```