<template>

    <ul v-if="isSubNav" class="usx-component usx-sidenav usa-sidenav__sublist mt-1">
        <!-- Slots for side nav item -->
        <slot></slot>
    </ul>        
    <nav v-else>
        <ul class="usx-component usx-sidenav usa-sidenav">
            <!-- Slots for side nav item -->
            <slot></slot>
        </ul>        
    </nav>


        <!--
        <ul class="usa-sidenav">
            
            <li class="usa-sidenav__item">
                <a href="">Parent link</a>
            </li>

            <li class="usa-sidenav__item">
                <a href="" class="usa-current">Current page</a><ul class="usa-sidenav__sublist">
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

export default {
    name: 'us-sidenav',
    props: {
          
    },
    computed:{
        isSubNav(){
            if (this.$parent && this.$parent.$options.name == 'us-sidenav-item'){
                return true;
            }
            return false;
        }        
    },    
};
</script>
<style lang="scss">
    .usx-left-nav {
        


    }
</style>