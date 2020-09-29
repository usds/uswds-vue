<template>
    <span class="usa-tag" :class="[`bg-${variant}`, `border-${variant}`, {'radius-pill': pill}]">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'us-tag',
    props: {
        variant: {
            type: String,
            default: 'none'
        },
        pill: {
            type: Boolean,
            default: null
        }
    },    
};
</script>
<style lang="scss">

// Add support for matchin font size of parent
.usa-tag {

    &:only-of-type {    
        margin-right: unset !important;
    } 

    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;

}
</style>