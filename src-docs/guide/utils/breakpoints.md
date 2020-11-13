# Responsive Breakpoints

USWDS uses the responsive classes `card`, `card-lg`, `mobile`, `mobile-lg`, `tablet`, `tablet-lg`, `desktop-lg` and `widescreen` (see [here](https://designsystem.digital.gov/design-tokens/spacing-units/)). However, **USWDS-Vue** takes a slightly different philosophy and has adopted the terminology in common use by other css frameworks such as [Bootstrap](https://getbootstrap.com/docs/4.5/utilities/spacing/) and [Foundation](https://get.foundation/) which instead use t-shirt sizing, `small`, `medium`, `large` etc. 

The reasoning is two-fold, first is that it's generally considered best-practice to not consider the target *device*, but rather target the screen size (especially given the diverse range of mobile device screen sizes). Second, it's just simpler to think in terms of *small*, *medium*, *large* rather than the target device - that way there is no confusion in cases where a tablet screen is actually bigger than a desktop screen.  

You can see the breakpointsin action below, try resizing the browser and see the effect using the debug `us-responsive-info` component.

<div>
    <us-responsive-info />
</div>

## Default Values

The default values are shown in the following *sass* code. You can change these value by overriding in your own sass, but make sure you include those new values before you import the **USWDS-Vue** styles. 
Here we are simplu mapping the existing USWDS breakpoints to the new ones. And note the breakpoint `xs` is just a default that covers everything from a screen size of 0 up t the first breakpoint (`sm`) to give complete coverage.

```sass
// The uswds breakpoints
$theme-utility-breakpoints: (
  'card': 160px,
  'card-lg': 240px,
  'mobile': 320px,
  'mobile-lg': 480px,
  'tablet': 640px,
  'tablet-lg': 800px,
  'desktop': 1040px,
  'desktop-lg': 1200px, // 1200px,
  'widescreen': 1400px, // 1400px
) !default;

// Map breakpoints to a simpler scheme, sm/md/lg/xl that we'll use in the components
$usx-breakpoint-mapping: (
  sm: 'mobile-lg',
  md: 'tablet',
  lg: 'desktop',
  xl: 'desktop-lg'
) !default;
```