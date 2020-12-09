<template>
    <div class="usx-component usx-tabs" :class="{'usx-tabs-card': card}">

        <ul role="tablist" class="nav-tabs" v-if="children && !pills">
            <li 
                v-for="(tab, index) in children" :key="index"
                role="presentation" 
                class="nav-item"
                :class="{'active':selectedTab && selectedTab.id == tab.id}" 
                @click="onSelectTab(tab)">                
                {{tab.title}}
            </li>
        </ul>

        <div v-else>
            <span v-for="(tab, index) in children" :key="index" role="presentation" >
                <us-tag v-if="selectedTab && selectedTab.id == tab.id" variant="primary" class="mr-1">{{tab.title}}</us-tag>
                <us-tag v-else variant="white" class="mr-1" @click="onSelectTab(tab)">{{tab.title}}</us-tag>
            </span>
        </div>

        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'us-tabs',
    props: {
        pills: {
            type: Boolean,
            default: null
        },
        card: {
            type: Boolean,
            default: null
        }        
    },     
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

            if (!this.children[tab.id]){            
                //this.children[tab.id] = tab;
                this.$set(this.children, tab.id, tab);
                if (tab.isActive){
                    this.selectedTab = tab;
                }
            }
        },

        onSelectTab(tab){

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

    .card-header {
        padding: .75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    &.usx-tabs-card {
        //margin-left: -15px;
        //margin-right: -15px;
        background-color: gray;
    }

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
            cursor: pointer;
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
                border-bottom-color: #fff;
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
