# Colors and Theming

USWDS has an amazing and extensive system for dealing with colors, which is detailed [here](https://designsystem.digital.gov/design-tokens/color/overview/). USWDS in general is designed to be a super flexible framework, but this can be a overwhelming. Drawing inspiration from [Bootstrap](https://getbootstrap.com/), uswds-vue instead uses a simple color theme which makes it much simpler to manage and keep colors consistent across all of the components. But you can always go deeper and apply the color styles from USWDS manually.

## Variants

The basis for the theming setup in uswds-vue is `variants`. There are {{btnVariants.length}} variants, and these are applied to *every* component to keep a consistent look and make themeing much simpler.

<div class="mt-3 mb-3 usx-color-docs">
    <div v-for="(variant,index) in btnVariants" :key="index" class="usx-block" :class="[`bg-${variant}`, `text-${variant}`, `border-${variant}`]">
        {{variant}}
    </div>
</div>

## Theme Playground

<div class="mt-3 mb-3 usx-color-docs">  
    <div v-for="color in colors" :key="color">
        <div v-for="grade in grades" :key="grade">
            <div :class="`bg-${color}-${grade}`">
                {{color}} {{grade}}
            </div>                    
            <div :class="`bg-${color}-${grade}v`">
                {{color}} {{grade}} vivid
            </div>               
        </div>
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
            ],
            grades: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            colors: [
                'blue',
                'blue-cool',
                'blue-warm',
                'cyan',
                'gold',
                'gray',
                'gray-cool',
                'gray-warm',
                'green',
                'green-cool',
                'green-warm',
                'indigo',
                'indigo-cool',
                'indigo-warm',
                'magenta',
                'mint',
                'mint-cool',
                'orange',
                'orange-warm',
                'red',
                'red-cool',
                'red-warm',
                'violet',
                'violet-warm',
                'yellow' 
            ]
        };
    }
}
</script>
<style lang="scss">
    
    @import "../../../src/styles/all-colors.scss";

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