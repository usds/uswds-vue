<template>
    <div class="usa-card">
        <div :class="['usa-card__container', `bg-${variant}`, `border-${variant}`]">

            <header class="usa-card__header">
                <slot name="title">
                    <h2 v-if="title" class="usa-card__heading">{{ title }}</h2>
                </slot>
            </header>

            <div class="usa-card__body">
                <slot name="default"></slot>
            </div>

            <div class="usa-card__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * USWDS card component
 * Supports a default slot for the body content, and a 'header' and 'footer' slot
 * @props
 */
export default {
    name: 'us-card',
    props: {
        title: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: 'none'
        }
    },
    computed: {
        alertClass() {
            /*

Card variants
usa-card--flag: Display in a horizontal ("flag") orientation at a specified width.($theme-card-flag-min-width)
usa-card--header-first: Displays the header element before the media element.
usa-card--media-right: In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.)
usa-card__media--indent: Indents the media element so it doesn't extend to the edge of the card.
usa-card__media--set-aspect: Sets a fixed aspect ratio on the card media. The default is 16x9, but this can be changed 
by adding an add-aspect utility to the media element, like usa-card__media--set-aspect.add-aspect-1x1
usa-card__media--exdent: Extends the media element out over the card border. Useful for light-bordered cards.
usa-card__body--exdent: Extends the body element out over the card border. Useful for light-bordered cards.
usa-card__footer--exdent: Extends the footer element out over the card border. Useful for light-bordered cards.

            */

            let variant = '';

            return variant;
        }
    }
};
</script>
<style lang="scss">

</style>
