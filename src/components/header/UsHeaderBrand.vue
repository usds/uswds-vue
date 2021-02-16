<template>
    <div class="usx-component usx-header-brand usa-navbar">
        <div class="usa-logo" style="width:auto">
            <img v-if="image" :src="image" class="usx-header-brand-logo d-none d-lg-inline-block"/>
            <us-button v-if="to || href" variant="link" :href="href" :to="to" :title="title" :aria-label="title">
                <slot></slot>
            </us-button>
            <slot v-else></slot>
        </div>
        <button class="usa-menu-btn">Menu</button>
    </div>
</template>

<script>
/**
 * USWDS nav link component
 */
export default {
    name: 'us-header-brand',

    props: {
        title: {
            type: String,
            default: 'Home'
        },
        image: {
            type: String,
            default: null
        },        
        href: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: null
        }
    }
};
</script>
<style lang="scss">
    
.usx-header-brand {

    .usa-logic {
        font-weight: 700;
    }

    .usx-header-brand-logo {
        height:1em; 
        width: auto; 
        position: relative; 
        top: 4px
    }

}
</style>