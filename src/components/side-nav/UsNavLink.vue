<template>

    <router-link 
        v-if="item.to"
        :to="item.to"
        class="usx-component nav-link" 
        @click="onClick(item)">
        <i v-if="item.icon" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </router-link>
    
    <a v-else 
        class="usx-component nav-link" 
        :href="item.href"
        @click="onClick(item)">
        <i v-if="item.icon" :class="item.icon" class="fa-fw"></i> {{item.name}}
    </a>

</template>

<script>

// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-nav-link',
    props: {
        item: {
            type: Object,
            default(){
                return {};
            }
        }          
    }, 
    methods: {
        onClick(item){
            this.$emit('click', item);
        }
    }
};
</script>
<style lang="scss">
.usx-component {
    .fa-fw {
        margin-right: 8px;
    }
}
</style>