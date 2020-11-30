<template>
    <div class="usa-card usx-card" :class="{
            'usa-card--flag':imgSrc && imgPos=='left', 
            'usa-card--flag usa-card--media-right': imgSrc && imgPos=='right',
            'usa-card--header-first': imgSrc && imgPos == 'top-body'
        }">
        <div :class="['usa-card__container', `bg-${variant}`, `border-${variant}`]">

            <header class="usa-card__header" v-if="title">
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
            default: false
        },             
        cardExdent: {
            type: Boolean,
            default: false
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
    //.usa-card__header > :first-child, .usa-card__body > :first-child {
    //    padding: unset !important;
    //}
}

</style>
