<template>

    <router-link 
        @click="onClick"
        v-if="to"
        :to="to"
        :href="href"
        :target="target"
        tag='a'
        class="usx-component nav-link"
        :class="{'active':isActive}">
        <slot></slot>
    </router-link>

    <a v-else 
        ref="sidenavRef"
        class="usx-component nav-link" 
        :class="{'active':isActive}" 
        aria-current="page" 
        href="#" 
        @click="onClick">
        <slot></slot>
        <us-badge :variant="(isSubNav) ? 'success' : 'secondary'">isSubNav</us-badge>
        <us-badge :variant="(hasSubNav) ? 'success' : 'secondary'">hasSubNav</us-badge>
        <us-badge :variant="(isParentActive) ? 'success' : 'secondary'">isParentActive</us-badge>
    </a>


    <!--            
    <li 
        class="usx-component usx-sidenav-item usa-sidenav__item"        
        ref="sidenavRef"        
        :aria-label="ariaLabel"
        :aria-expanded="isParentActive"
        :aria-controls="ariaControls"
        :disabled="disabled"            
    > 
        
        <div v-if="title" class="usa-sidenav__item usx-sidenav-item">     
            <div class="usx-sidenav-item-content" @click="onClick()" :class="{'no-focus': noFocus, 'usa-current': isActive}">
                {{title}}
            </div>
            <ul class="usx-component usa-sidenav__sublist" v-if="isActive">
                <slot></slot>
            </ul>
        </div>
        <div v-else class="usx-sidenav-item-content" @click="onClick()" :class="{'no-focus': noFocus, 'usa-current': isActive}">
            <slot></slot>
        </div>

    </li>
-->
</template>

<script>

//import CoreMixin from '../../mixins/CoreMixin';

export default {
    name: 'us-side-nav-item',
    props: {
        title: {
            type: String,
            default: null
        }, 
        to: {
            type: [String, Object],
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
        disabled: {
            type: Boolean,
            default: false
        },
        noFocus: {
            type: Boolean,
            default: true
        },        
        active: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    computed:{
        /**
         * Determine if this nav-item is part of a sub nav or primary.
         */
        hasSubNav(){ 
            let hasSub = false;      
            this.$children.map((child)=>{    
                if (child.$options && child.$options.name == 'us-side-nav'){
                    hasSub = true;
                }
            });
            return hasSub;
        },     

        /**
         * Determine if this nav-item is part of a sub nav or primary.
         */
        isSubNav(){ 
            if (this.$parent.$options && this.$parent.$options.name == 'us-side-nav'){
                if (this.$parent.$parent && this.$parent.$parent.$options && this.$parent.$parent.$options.name == 'us-side-nav-item'){
                    return true;
                }
            }
            return false;
        },         
        
        isParentActive(){ 

            console.log(this.$parent.$options.name )
            if (this.$parent.$options && this.$parent.$options.name == 'us-side-nav'){

                if (this.$parent.$parent && this.$parent.$parent.$options && this.$parent.$parent.$options.name == 'us-side-nav-item'){
                    return (this.$parent.$parent.isActive) ? this.$parent.$parent.isActive : false;
                // Get the classes applied to the parent (if the parent is of type 'us-side-nav')
                //let classes = this.$parent.$refs.sidenavParentRef.getAttribute('class');
                //const htmlStr = this.$parent['$el'];
                //console.log('htmlStr = ', htmlStr, typeof htmlStr);         

                //console.log(this.$parent.$refs.sidenavParentRef.getAttribute('class'));

                //if (htmlStr){
                //    const classes = htmlStr.match(/class="(.*?)"/g)[1].split(' ');
                //    console.log(classes, this.activeClass);
                //}       
                // Then check if the parent is active, if so we'll need to expand any subnavs
                //if (classes && classes.includes(this.activeClass)){
                //    return true;
                //}                     
                
                }
            }
            return false;
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
            if (!this.$refs.sidenavRef || !this.$refs.sidenavRef.getAttribute){
                return;
            }
            
            let classes = this.$refs.sidenavRef.getAttribute('class');
            if (classes && classes.includes(this.activeClass)){
                this.isActive = true;
            }            
        },

        onClick() {

            // Remove the active state from all other nav items
            const removeActiveFromSiblings = ($ele) => {                                
                $ele.$children.map((child)=>{               
                    this.$log(child.$options.name ) 
                    if (child.$options && child.$options.name == 'us-side-nav-item'){
                        if (child.divId != this.divId){      
                            child.isActive = false;
                        }
                    }
                    if (child.$options && child.$options.name == 'us-side-nav'){
                        removeActiveFromSiblings(child);
                    }
                });
            }
            
            removeActiveFromSiblings(this.$parent);

            if (this.$parent.$options.name == 'us-side-nav'){
                removeActiveFromSiblings(this.$parent.$parent);
            }
            

            this.isActive = !this.isActive;

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






/*

.usx-sidenav-item {

    cursor: pointer;

    &.no-focus {
        outline: none !important;
    }

    &:hover {
        background-color: transparent !important;
    }

    .usa-sidenav__sublist {
        padding-left: 2rem !important;
    }

    .usx-sidenav-item-content {

        padding: 0.5rem 1rem !important;        

        &:hover {
            background-color:#f0f0f0;
            color:#005ea2;
            text-decoration:none;            
        }        
    }

}
*/
</style>