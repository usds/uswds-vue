# Card

<us-card title="This is the title" variant="info" class="mb-2">This is a card with some content.</us-card>

```vue
    <us-card title="This is the title" variant="info">
        This is a card with some content.
    </us-card>
```

## Contextual variants

<div v-for="(variant, index) in variants" :key="index">
    <us-card title="This is the card title" :variant="variant" class="my-2">
        Card with <strong>{{ variant }}</strong> variant
    </us-card>
</div>

## Header slot

<us-card variant="info" class="m-2"><template v-slot:title><h2>A <i>custom</i> html header</h2></template>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</us-card>

## More docs coming soon....



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
                'muted',
                //'transparent',
                'white',
                'black'
            ]
        };
    }
}
</script>