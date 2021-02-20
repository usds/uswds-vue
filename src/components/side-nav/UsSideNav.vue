<template>
     

    <ul v-if="!title" ref="sidenavParentRef" class="usx-component usx-sidenav usa-sidenav">
        <!-- Slots for side nav item -->
        <slot></slot>
    </ul>        

    <!-- Slots for side nav item -->
    <us-side-nav-item v-else :title="title" @click="onClick()">
        <slot></slot>
    </us-side-nav-item>      
        
</template>

<script>

import {upperFirst, map} from 'lodash';

export default {
    name: 'us-side-nav',
    props: {
        title: {
            type: String,
            default: null
        }          
    },
    computed:{
        isSubNav(){
            if (this.$parent && this.$parent.$options.name == 'us-side-nav'){
                return true;
            }
            return false;
        }        
    },
    methods: {
        onClick(){
            // Bubble up click event
            this.$emit('click');
        }
    }
};
</script>