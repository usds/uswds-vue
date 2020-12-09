<template>
    <div v-if="localActive" class="usx-component usx-tab tab-content mt-3">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'us-tab',
    props: {
        title: {
            type: String,
            default: 'Tab'
        },
        active: {
            type: Boolean,
            default: false
        }
    },    
    data() {
        return {
            localActive: false,
            tabId: `tab-` + Math.floor(100 + Math.random() * 10000000)
        };
    },    
    mounted(){
        this.localActive = this.active;
        this.$nextTick(()=>{
            if (this.$parent.registerTab){
                this.$parent.registerTab({title: this.title, isActive: (this.active) ? true : false, id: this.tabId});
            }
        })
    },
    methods: {

        onDeSelectTab(){
            this.localActive = false;
        },

        onSelectTab(){
            this.localActive = true;
        }
    }
};
</script>
<style lang="scss">
.usx-tab {

}
</style>
