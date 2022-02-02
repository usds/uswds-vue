<template>

    <router-link 
        @click="onClick"
        v-if="to"
        :to="to"
        :href="href"
        :target="target"
        tag='a'
        class="usx-component usx-sidenav-item nav-link"
        :class="{'active':isActive}">
        <slot></slot>
    </router-link>

    <a v-else
        ref="sidenavRef"
        class="usx-component usx-sidenav-item nav-link" 
        :class="[{'active':isActive, 'usx-sidenav-top':depth==1}, 'ml-'+(depth*2)]" 
        aria-current="page" 
        href="#" 
        @click="onClick">
        <slot></slot>
        <us-badge>{{depth}}</us-badge>
    </a>

    <!--            
        <us-badge :variant="(isActive) ? 'success' : 'secondary'">isActive</us-badge>
        <us-badge :variant="(isParentActive) ? 'success' : 'secondary'">isParentActive</us-badge>
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
            isActive: false,
            depth: 0
        }
    },
    mounted() {
        let depth = 0;

        const checkDepth = ($ele) => {
            if ($ele.$parent.$options.name == 'us-side-nav'){
                $ele.$parent.hasKids = true;
                depth += 1;
                checkDepth($ele.$parent);
            }
        }

        checkDepth(this);
        this.depth = depth;


    },
    methods: {


        _getDepth(){
            return this.depth;
        },

        onClick() {

            // Remove the active state from all other nav items

            const removeActiveFromSiblings = ($ele) => {        
                
                $ele.$children.map((child)=>{               
                    
                    if (child.$options && child.$options.name == 'us-side-nav-item'){
                        child.isActive = false;
                    }

                    //if (child.$options && child.$options.name == 'us-side-nav'){
                    //    removeActiveFromSiblings(child);
                    //}

                });
            }

            
            removeActiveFromSiblings(this.$parent);
            this.isActive = true;

            this.$log(1);

            if (this.depth == 2) {
                removeActiveFromSiblings(this.$parent.$parent);
                this.$log(1.1);
            }
            if (this.depth == 3) {
                removeActiveFromSiblings(this.$parent.$parent.$parent);
                this.$log(1.2);
            }

            this.$log(2);

            // Now go up until we hit the first top menu item, and set it as active
            let recurseDepth = 0;

            const getTopNode = ($ele) => {     
                let eleDepth = ($ele._getDepth) ? $ele._getDepth() : -1;
                this.$log('getTopNode() - ', $ele.$options.name, eleDepth);
                if ($ele.$options && $ele.$options.name == 'us-side-nav-item' && $ele._getDepth && $ele._getDepth() == 1){
                    return $ele;
                }
                else {
                    recurseDepth++;
                    if (recurseDepth < 20 ){
                        return getTopNode($ele.$parent);
                    }
                }
            }

            let $topEle = getTopNode(this);
            this.$log($topEle)
            if ($topEle) {
                $topEle.isActive = true;
            }


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

    border: none;
    border-top: 1px solid #e6e6e6;
    margin-bottom: 0;
    color: #5c5c5c;
    font-weight: normal;

    &:hover {
        background-color: #eee;                
    }

    &.active {
        color: #005ea2;
        font-weight: 700;
    }

    &.usx-sidenav-top {

        &.active {

            &::before {                
                display: block;
                content: "";
                background-color: #005ea2;
                width: 3px;
                height: 1.8em;
                position: absolute;
                transform: translate(-1rem, -0.1rem);           
            }
        }

    }

    &:hover {
        text-decoration: none !important;
    }
        
    &:focus {
        outline: none;
        outline-offset: 0;;
    }

    &.active {
        background-color: unset;
    }
            
}
</style>