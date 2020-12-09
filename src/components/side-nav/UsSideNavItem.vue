<template>
    <li 
        class="usx-component usx-sidenav-item usa-sidenav__item"        
        ref="sidenavRef"
        @click="onClick()"
        :aria-label="ariaLabel"
        :aria-expanded="ariaExpanded"
        :aria-controls="ariaControls"
        :disabled="disabled"            
    > 
        <div v-if="!hasSubNav" class="usx-sidenav-item-content" :class="{'no-focus': noFocus, 'usa-current': isActive}">
            <slot></slot>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </li>

        <!--
        <ul class="usa-sidenav">
            
            <li class="usa-sidenav__item">
                <a href="">Parent link</a>
            </li>

            <li class="usa-sidenav__item">
                <a href="" class="usa-current">Current page</a>
                
                <ul class="usa-sidenav__sublist">
                    <li class="usa-sidenav__item">
                        <a href="">Child link</a>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="">Child link</a>
                        <ul class="usa-sidenav__sublist">
                            <li class="usa-sidenav__item">
                                <a href="">Grandchild link</a>
                            </li>
                            <li class="usa-sidenav__item">
                                <a href="">Grandchild link</a>
                            </li>
                            <li class="usa-sidenav__item">
                                <a href="" class="usa-current">Grandchild link</a>
                            </li>
                        </ul>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="">Child link</a>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="">Child link</a>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="">Child link</a>
                    </li>
                </ul>
            </li>

            <li class="usa-sidenav__item">
                <a href="">Parent link</a>
            </li>
        </ul>
        -->



</template>

<script>

import {upperFirst, map} from 'lodash';
import CoreMixin from '../mixins/CoreMixin';

export default {
    name: 'us-sidenav-item',
    mixins: [CoreMixin],
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        ariaExpanded: {
            type: Boolean,
            default: false
        },
        ariaControls: {
            type: String,
            default: ''
        },
        ariaLabel: {
            type: String,
            default: ''
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
        },
        disabled: {
            type: Boolean,
            default: false
        },
        noFocus: {
            type: Boolean,
            default: true
        },        
        activeClass: {
            type: String,
            default: 'active'
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    computed:{
        hasSubNav(){ 
            let hasSub = false;      
            this.$children.map((child)=>{    
                console.log(child.$options.name)
                if (child.$options && child.$options.name == 'us-sidenav'){
                    hasSub = true;
                }
            });
            return hasSub;
        }        
    },     
    watch: {
        '$refs.sidenavRef': () => {
            this.onClassChange();
        }
    },
    mounted() {
        this.onClassChange();
    },
    methods: {

        /**
         * If the 'active' class changes, we need to flag this item as active
         * so we can see apply hard coded uswds active class, 'usa-current' and
         * allow for flexibility in the actual active class to use (so for example
         * to be compatible with vue-router)
         */
        onClassChange() {
            let classes = this.$refs.sidenavRef.getAttribute('class');
            if (classes && classes.includes(this.activeClass)){
                this.isActive = true;
            }            
        },

        onClick() {

            // Remove the active state from all other nav items
            this.$parent.$children.map((child)=>{                
                if (child.$options && child.$options.name == 'us-sidenav-item'){
                    if (child.divId != this.divId){      
                        child.isActive = false;
                    }
                }
            });

            this.isActive = true;

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
            } 
            else {
                // Bubble up the button click
                this.$emit('click');
            }
        }
    }
};
</script>
<style lang="scss">
.usx-sidenav-item {

    cursor: pointer;

    &:hover {
        :not(ul>li){
            background-color:#f0f0f0;
            color:#005ea2;
            text-decoration:none;
        }
    }

    &.no-focus {
        outline: none !important;
    }

    .usx-sidenav-item-content {
        padding: 0.5rem 1rem !important;        
    }

}
</style>