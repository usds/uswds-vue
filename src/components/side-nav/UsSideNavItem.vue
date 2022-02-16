<template>

    <router-link 
        v-if="item.to"
        :to="item.to"
        tag="li"
        class="usx-component usx-sidenav-item nav-link" 
        :class="{'active':active, 'usx-sidenav-top': depth == 1}"
        @click="onClick">
        <i v-if="item.icon2" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </router-link>
    
    <li v-else 
        class="usx-component usx-sidenav-item nav-link" 
        :class="{'active':active, 'usx-sidenav-top': depth == 1}"
        :href="item.href"
        @click="onClick">
        <i v-if="item.icon2" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </li>

</template>

<script>

// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-side-nav-item',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        depth: {
            default: 1,
        },
        item: {
            type: Object,
            default(){
                return {};
            }
        }          
    }, 
    methods: {
        onClick(item){
            this.$log('FROG!!!')
            this.$emit('click', item);
        }
    }
};
</script>