<template>
<div class="usx-component accordion" :class="[{'accordion-flush':!bordered}, variant]" :id="divId" v-if="divId">
    <slot></slot>
</div>
</template>

<script>
import uuid from '../../utils/uuid';
/**
 * USWDS accordion component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    bordered (boolean): (defaults to false) gives the content a border
 *    multiSelect (boolean): (defaults to false) allows multiple slots to be open at once
 *    title (string):
 */
export default {
    name: 'us-accordion',
    props: {
        variant: {
            type: String,
            default: 'light'
        },
        bordered: {
            type: Boolean,
            default: false
        },
        multiSelect: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            divId: null,
        };
    },
    mounted() {
        this.divId = `accordion${uuid()}`;
    }
};
</script>
<style lang="scss">

//$accordion-border-color: red;
// $theme-accordion-border-width 

@import "~bootstrap/scss/bootstrap.scss";


.usx-component.accordion {

    .accordion-item {
        border: none;
    }

    &.accordion-flush {
        

    }

    @each $variant, $token in $theme-colors {

        $color: map-get($theme-colors, $variant);

        &.#{$variant}{
            &:not(.accordion-flush){ 
                .accordion-body {
                    border-left: 5px solid $color;
                    border-right: 5px solid $color;
                    border-bottom: 5px solid $color;
                }                
            }
        }
             
    }

    &:not(.accordion-flush){

        .accordion-item { 
            margin-top: 10px;
        }
        .accordion-header {
            padding-bottom: 0px !important;
            //margin-top: 0.3em;
        }
    }

    .accordion-item {

        .accordion-header {
            padding-bottom: 0.5rem;
        }

        .accordion-button {
            border-radius: 0px;
            background-color: #f0f0f0;
            color: black;
            box-shadow: none;
        }

        .accordion-button:not(.collapsed) {
            border-radius: 0px;
            background-color: #f0f0f0;
        }

    }

}

</style>
