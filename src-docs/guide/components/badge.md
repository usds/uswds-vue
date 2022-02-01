# Badges & Pills

## Overview

<h1>
    <us-badge class="mt-1 mb-1" variant="secondary">Badge</us-badge>
    <us-badge class="mt-1 mb-1" pill variant="secondary">Pill</us-badge>
</h1>

```vue
<us-badge variant="secondary">
    Badge
</us-badge>

<us-badge pill variant="secondary">
    Pill
</us-badge>

```

badges can be used as part of links or buttons to provide a counter (or similar flag).

<div class="mb-3">
    <us-button variant="primary">
        Notifications <us-badge variant="danger" class="ml-1">4</us-badge>
    </us-button>
</div>

```vue
<div>
    <us-button variant="primary">
        Notifications <us-badge variant="danger" class="ml-1">4</us-badge>
    </us-button>
</div>
```

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text. For exmaple;

```vue
<div>
    <us-button variant="primary">
        Notifications 
        <us-badge variant="light" class="ml-1">
            4 <span class="sr-only">unread messages</span>
        </us-badge>
    </us-button>
</div>
```

## Size

badges scale to match the size of the immediate parent element by using relative font sizing and em units.

<div>
  <h2 class="m-0" style="border:none">Example heading <us-badge>New</us-badge></h2>
  <h3 class="m-0">Example heading <us-badge>New</us-badge></h3>
  <h4 class="m-0">Example heading <us-badge>New</us-badge></h4>
  <h5 class="m-0">Example heading <us-badge>New</us-badge></h5>
  <h6 class="m-0 mb-4">Example heading <us-badge>New</us-badge></h6>
</div>


```vue
<div>
  <h2>Example heading <us-badge>New</us-badge></h2>
  <h3>Example heading <us-badge>New</us-badge></h3>
  <h4>Example heading <us-badge>New</us-badge></h4>
  <h5>Example heading <us-badge>New</us-badge></h5>
  <h6>Example heading <us-badge>New</us-badge></h6>
</div>
```

## Contextual variants

<div class="mt-2"> 
  <us-badge variant="primary">Primary</us-badge>
  <us-badge variant="secondary">Secondary</us-badge>
  <us-badge variant="success">Success</us-badge>
  <us-badge variant="danger">Danger</us-badge>
  <us-badge variant="warning">Warning</us-badge>
  <us-badge variant="info">Info</us-badge>
  <us-badge variant="light">Light</us-badge>
  <us-badge variant="dark">Dark</us-badge>
</div>

```vue
<div> 
  <us-badge variant="primary">Primary</us-badge>
  <us-badge variant="secondary">Secondary</us-badge>
  <us-badge variant="success">Success</us-badge>
  <us-badge variant="danger">Danger</us-badge>
  <us-badge variant="warning">Warning</us-badge>
  <us-badge variant="info">Info</us-badge>
  <us-badge variant="light">Light</us-badge>
  <us-badge variant="dark">Dark</us-badge>
</div>
```

## Pills

Use the pill prop to make badges more rounded (with a larger border-radius and additional horizontal padding).

<div class="mt-2"> 
  <us-badge pill variant="primary">Primary</us-badge>
  <us-badge pill variant="secondary">Secondary</us-badge>
  <us-badge pill variant="success">Success</us-badge>
  <us-badge pill variant="danger">Danger</us-badge>
  <us-badge pill variant="warning">Warning</us-badge>
  <us-badge pill variant="info">Info</us-badge>
  <us-badge pill variant="light">Light</us-badge>
  <us-badge pill variant="dark">Dark</us-badge>
</div>

```vue
<div> 
  <us-badge variant="primary">Primary</us-badge>
  <us-badge variant="secondary">Secondary</us-badge>
  <us-badge variant="success">Success</us-badge>
  <us-badge variant="danger">Danger</us-badge>
  <us-badge variant="warning">Warning</us-badge>
  <us-badge variant="info">Info</us-badge>
  <us-badge variant="light">Light</us-badge>
  <us-badge variant="dark">Dark</us-badge>
</div>
```

<script>
export default {
    data() {
        return {
            variants: [
                'primary',
                'secondary',
                'success',
                'warning',
                'info',
                'danger',
                'dark',
                'light',
                //'transparent',
                'white',
                'black'
            ]
        };
    }
}
</script>