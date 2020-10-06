<template>
    <div class="usx-tab">
        
        <div class='tab-header' :class="{'active':localActive}" @click="onSelectTab">
            {{title}} {{localActive}}
        </div>
        
        <div v-if="active" class="tab-body">
            <slot></slot>
        </div>

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
            localActive: false
        };
    },    
    mounted(){
        this.localActive = this.active;
    },
    methods: {

        __deselectSelectTab(){
            this.localActive = false;
        },

        onSelectTab(){
            // Tell other tabs to not be active!
            //console.log('parent: ', this.$parent);
            this.$parent.$children.map((child)=>{
                if (child.$options && child.$options.name == 'us-tab'){
                    console.log(`${child.$options.name}`, child);
                    child.__deselectSelectTab();
                }
            });

            this.localActive = true;

            //console.log('children: ', this.$parent.$children);
            //this.$parent.$children
        }
    }
};
</script>
<style lang="scss">
.usx-tab {
    
    border-bottom: 1px solid #dee2e6;

    .tab-body {
        width: 100%;
        display: block;
        border: 1px gray solid;        
        padding: 10px;
    }

    .tab-header {
        
        display: inline-block;
        border: 1px gray solid;
        padding: 10px;

        &.active {
            background-color: red;
        }
    }
}
</style>
