# Colors and Theming

USWDS has an amazing and extensive system for dealing with colors, which is detailed [here](https://designsystem.digital.gov/design-tokens/color/overview/). USWDS in general is designed to be a super flexible framework, but this can be a overwhelming. Drawing inspiration from [Bootstrap](https://getbootstrap.com/), uswds-vue instead uses a simple color theme which makes it much simpler to manage and keep colors consistent across all of the components. But you can always go deeper and apply the color styles from USWDS manually.

## Variants

The basis for the theming setup in uswds-vue is `variants`. There are {{btnVariants.length}} variants, and these are applied to *every* component to keep a consistent look and make themeing much simpler.

<div class="mt-3 mb-3 usx-color-docs">
    <div v-for="(variant,index) in btnVariants" :key="index" class="usx-block" :class="[`bg-${variant}`, `text-${variant}`, `border-${variant}`]">
        {{variant}}
    </div>
</div>



<script>
export default {
    data() {
        return {
            txtShort: 'Lorem ipsum dolor sit amet, consectetur...',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ]
        };
    }
}
</script>
<style lang="scss">
    .usx-color-docs {
        .usx-block {
            width: 120px;
            height: 100px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            line-height: 100px;
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 5px;
        }
    }
</style>