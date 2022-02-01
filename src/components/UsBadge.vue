<template>

    <span ref="usxBadgeRef" class="usx-component badge" :class="[`bg-${variant}`, `text-${variant}-contrast`, (pill)?'':'rounded-pill']">
        <slot></slot>
    </span>

<!--
    <div class="usx-component d-inline-block" @click="onClick()">
        <span class="usa-tag" :class="[`bg-${variant}`, {'radius-pill': pill}]" >
            <slot></slot>
        </span>
    </div>
    -->
</template>

<script>
// https://designsystem.digital.gov/components/tag/
export default {
    name: 'us-badge',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        pill: {
            type: Boolean,
            default: null
        }       
    }
};
</script>
<style lang="scss">

// Add support for matchin font size of parent
.usa-tag {

    &:only-of-type {    
        margin-right: unset;
    } 

    display: inline-block;
    padding: .5em .6em;
    font-size: 0.75em;
    line-height: 1;
    max-height: 2em;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;

}
</style>