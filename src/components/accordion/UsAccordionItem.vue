<template>

<div class="usx-component accordion-item " v-if="divId">
    <h2 class="accordion-header" :id="`heading-${divId}`" >
        <button 
            type="button" 
            class="accordion-button collapsed fw-bold" 
            :class="[`bg-${variant}`, `text-${variant}-contrast`]"
            data-bs-toggle="collapse" 
            :data-bs-target="`#collapse-${divId}`" 
            :aria-expanded="expanded" 
            :aria-controls="`collapse-${divId}`">
            <slot name="heading">
                {{heading}}
            </slot>
        </button>
    </h2>
    <div :id="`collapse-${divId}`" 
        class="accordion-collapse collapse" 
        :class="{'show':expanded}"
        :aria-labelledby="`heading${divId}`" 
        :data-bs-parent="(!multiSelect) ? `#${parentDivId}` : false">
        <div class="accordion-body" :class="`border-${variant}`">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import uuid from '../../utils/uuid';

/**
 * USWDS accordion item component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    bordered (boolean): (defaults to false) gives the content a border
 *    multiSelect (boolean): (defaults to false) allows multiple slots to be open at once
 *    title (string):
 */
export default {
    name: 'us-accordion-item',
    props: {
        expanded: {
            type: Boolean,
            default: false
        },
        heading: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            divId: null,
            parentDivId: null,
            variant: '',
            multiSelect: false
        };
    },
    mounted() {
        this.divId = uuid();
        this.parentDivId = this.$parent.divId;
        this.variant = this.$parent.variant;
        this.multiSelect = this.$parent.multiSelect;
        this.$log(this.parentDivId)
    },
    methods: {

    }
};
</script>
<style lang="scss">

.usx-component.accordion-item {
/*
    border: none;

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
*/
}

</style>
