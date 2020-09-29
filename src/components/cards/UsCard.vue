<template>
    <div class="usa-card usx-card" :class="{
            'usa-card--flag':imgSrc && imgPos=='left', 
            'usa-card--flag usa-card--media-right': imgSrc && imgPos=='right',
            'usa-card--header-first': imgSrc && imgPos == 'top-body'
        }">
        <div :class="['usa-card__container', `bg-${variant}`, `border-${variant}`]">

            <header class="usa-card__header">
                <slot name="title">
                    <h2 v-if="title" class="usa-card__heading">{{ title }}</h2>
                </slot>
            </header>

            <div v-if="imgSrc" class="usa-card__media" :class="{'usa-card__media--inset': imgInset, 'usa-card__media--exdent': cardExdent}">
                <div class="usa-card__img">
                    <img :src="imgSrc" :alt="imgAlt"/>
                </div>
            </div>
                    
            <div class="usa-card__body" :class="{'usa-card__body--exdent': cardExdent}">
                <slot name="default"></slot>
            </div>

            <div class="usa-card__footer" :class="{'usa-card__footer--exdent': cardExdent}">
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
        },
        imgSrc: {
            type: String,
            default: null
        },
        imgAlt: {
            type: String,
            default: null
        },
        imgPos: {
            type: String,
            default: 'top'
        },
        imgInset: {
            type: Boolean,
            default: true
        },    
        imgInset: {
            type: Boolean,
            default: false
        },             
        cardExdent: {
            type: Boolean,
            default: false
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
// Fix style bug in uswds for right images
@media (min-width: 40em) {
    .usa-card--flag .usa-card__media {
        width: unset !important;
    }
}

</style>
