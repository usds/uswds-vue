<template>
    <div class="usx-tabs">
        <ul role="tablist" class="nav-tabs" v-if="children">
            <li 
                v-for="(tab, index) in children" :key="index"
                role="presentation" 
                class="nav-item"
                :class="{'active':selectedTab && selectedTab.id == tab.id}" 
                @click="onSelectTab(tab)">                
                {{tab.title}}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'us-tabs',
    data() {
        return {
            children: null,
            selectedTab: null
        }            
    },
    mounted(){
        //this.children = {};
    },
    methods: {

        registerTab(tab){
            if (!this.children){
                this.children = {};
            }
            console.log('Tab Registered;', tab);
            if (!this.children[tab.id]){            
                //this.children[tab.id] = tab;
                this.$set(this.children, tab.id, tab);
                if (tab.isActive){
                    this.selectedTab = tab;
                }
            }
            else {
                console.log(`Child ${tab.id} already exists`)
            }
        },

        onSelectTab(tab){

            console.log('Selected Tab ' + tab.id);
            this.selectedTab = tab;

            this.$children.map((child)=>{
                if (child.$options && child.$options.name == 'us-tab'){
                    if (child.tabId == tab.id){                    
                        child.onSelectTab();
                    }
                    else {
                        child.onDeSelectTab();
                    }
                }
            });

        }
    }
};
</script>
<style lang="scss">
.usx-tabs {

    //display: flex;
    //flex-wrap: wrap;
    //padding-left: 0;
    //margin-bottom: 0;
    //list-style: none;

    .nav-tabs {
        
        border-bottom: 1px solid #dee2e6;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;

        .nav-item {
            display: block;
            padding-top: .7rem;
            padding-bottom: .5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border: 1px solid transparent;
            border-top-left-radius: .25rem;
            border-top-right-radius: .25rem;
            margin-bottom: -1px;

            &.active {
                color: #495057;
                background-color: #fff;
                border-color: #dee2e6 #dee2e6 #fff;
                border-bottom-color: transparent;
            }            
        }

    }


    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

        li {
            display: list-item;
            text-align: -webkit-match-parent;        
        }

    }

}
</style>
