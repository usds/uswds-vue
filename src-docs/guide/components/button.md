# Button

Custom `<us-button>` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, as well as programtic navigation.

## Overview

<us-button variant="primary" class="mt-4">This is a button</us-button>

``` vue
<us-button variant="primary">
    This is a button
</us-button>
```

## Links

The component has built-in support href, simply add a href property to use;

<us-button variant="info" href="https://news.bbc.co.uk" target="_blank" class="mb-1">Go somewhere</us-button>

``` vue
<us-button variant="info" href="https://news.bbc.co.uk" target="_blank">
    Go somewhere
</us-button>
```

## Focus Indication

USWDS, by default, applies a blue rectangle around a button to show focus. This can break some UI, so you have the option to toggle this on or off. But be mindful of accessability implications.

<div class="mt-3 mb-3">
<us-row>
    <us-col md="6">
        <us-button variant="primary" :no-focus="false">Click me to see focus indicator</us-button>
    </us-col>
    <us-col md="6">
        <us-button variant="primary" :no-focus="true">Click me, but you won't see that focus indicator</us-button>
    </us-col>
</us-row>
</div>

``` vue
<us-button variant="primary" :no-focus="false">click me to see focus</us-button>
<us-button variant="primary" :no-focus="true">click me, but you won't see focus</us-button>
```

## Progmatic navigation

The component has built-in support for [vue-router](https://router.vuejs.org/), simply add a `to` property to any button such as;

<div class="mt-3 mb-3">
<us-button variant="danger" :to="{name: 'nowhere'}" class="mb-1">Go somewhere</us-button>
<us-button variant="link" :to="{name: 'nowhere'}" class="mb-1">Go somewhere with a link variant</us-button>
</div>

``` vue
<us-button variant="link" :to="{name: 'nowhere'}">
    Take me home
</us-button>
```


## Loading animation

Set the `isLoading` property to display a loading spinner, this will also put the button into a disabled state so it can not be clicked again.

<div class="mt-3 mb-3">
<us-button variant="primary" :is-loading="isLoading">Submit</us-button>
<us-button variant="outline-primary" @click="isLoading = !isLoading">Toggle Loading Flag</us-button>
</div>

``` vue
<us-button variant="primary" :is-loading="isLoading">
    Submit
</us-button>

<!-- Button to toggle isLoading flag for testing -->
<us-button variant="outline-primary" @click="isLoading = !isLoading">
    Toggle Loading Flag
</us-button>
```

## Contextual variants

For proper styling of `<us-button>`, use one of the contextual variants by setting the variant prop to one of the following: primary,
secondary,info, success, danger, warning, outline-primary, outline-secondary, outline-info, outline-success, outline-danger,
outline-warning, inverse, link. The default is info.

<div class="mt-3 mb-3">
    <span v-for="(variant,index) in btnVariants" :key="index">
        <us-button :variant="variant" class="mb-1">{{variant}}</us-button>
    </span>
    <span v-for="(variant,index) in btnVariants" :key="index">
        <us-button :variant="`outline-${variant}`" class="mb-1">{{variant}}</us-button>
    </span>    
    <us-button variant="link" class="mb-1">A link</us-button>
</div>

## Component Reference

### `<us-button>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| block | string | null | Creates the button as a block element |
| type | string | 'button' | Sets the type, such as 'button' or 'submit'
| title | string | null | Sets the title prop, for hover over text  |
| size | string | null | The size, supports 'lg' and omit for normal |
| aria-expanded | string | null | Support for arial-expanded |
| aria-controls | string | null | Support for arial-controls |
| aria-Label | | string  | null | Support for arial-label |
| no-focus | boolean | true | Turn focus indication on or off |
| href | string | null | If set, creates a link |
| target | string  | null | If href is set, this can be one of the href targets so as '_self' |
| to | string/object | null | Support for vue-router programtic navigation |
| disabled | boolean | null | Disables button |
| is-loading | boolean | false | If set, display a loading animation and disable button |

<script>
export default {
    data() {
        return {
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark'
            ]
        };
    }
}
</script>