<template>
    <li class="usx-component usa-nav__primary-item">
        <us-button @click="onClick()" variant="link" class="usa-nav__link" :class="`navbar-link-${variant}`" :href="href" :to="to" :title="title" :aria-label="title">            
            <slot>
                <span>Simple link</span>
            </slot>
        </us-button>      
    </li>
</template>

<script>
/**
 * USWDS nav link component
 */
export default {
    name: 'us-nav-item',
    props: {
        title: {
            type: String,
            default: 'Home'
        },
        href: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: null
        }
    },
    data() {
        return {
            variant: null,
        };
    }, 
    mounted(){
        // usx-component usa-button  usa-nav__link active usa-button--unstyled  link no-focus navbar-link-null
        // If no variant is set, inherit from us-header-nav (which in turn will inherit from us-header)
        if (!this.variant && this.$parent.$options && (this.$parent.$options.name == 'us-header' || this.$parent.$options.name == 'us-header-nav')){
            this.variant = this.$parent.variant;
        }
    },
    methods: {
        onClick() {
            // Bubble up the button click
            this.$emit('click');
        }
    }    
};
</script>
<style lang="scss">

.bg-dark {

    .navbar-link-dark {
        color: light;
    }


}
</style>