<template>
    <div class="usx-list-group-item" @click="onClick()">
        <slot>
            <span>Simple link</span>
        </slot>
    </div>
</template>

<script>
/**
 * USWDS alert component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
export default {
    name: 'us-list-group-item',
    props: {
        href: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: null
        }
    },
    methods: {
        onClick(){
            this.$emit('click');
        }
    }
};
</script>
<style lang="scss">

.usx-list-group-item {

    cursor: pointer;
    position: relative;
    padding: .5rem 1rem;
    //background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);

    &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &:last-child {
        border-bottom-right-radius: inherit;
        border-bottom-left-radius: inherit;
    }

    &:hover {
        z-index: 2;
        background-color: #f8f9fa;
    }

    &.active {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

}

</style>
