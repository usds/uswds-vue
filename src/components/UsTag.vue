<template>
    <div class="usx-component d-inline-block" @click="onClick()">
        <span class="usa-tag" :class="[`bg-${variant}`, {'radius-pill': pill}]" >
            <slot></slot>
        </span>
    </div>
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
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: '_self'
        },
        to: {
            type: [String, Object],
            default: null
        }        
    }, 
    methods: {
        onClick() {
            // If this is a link, go to that link
            if (this.href) {
                if (this.target == '_self') {
                    window.location.replace(this.href);
                } else {
                    window.open(this.href, this.target);
                }
            }
            // if there is a 'to' prop, and vue-router is being used, go to the route
            else if (this.to && this.$router) {
                this.$router.push(this.to);
            } else {
                // Bubble up the button click
                this.$emit('click');
            }
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