<template>

    <ul class="usx-component nav flex-column">
        
        <li v-for="(link, index) in links" :key="index" class="nav-item">

            <us-side-nav-item v-if="!link.children" :item="link" @click="onSelectParent(link)" :active="selectedParent && selectedParent._id == link._id"/>
            
            <div v-else>

                <us-side-nav-item :item="link" :active="selectedParent && selectedParent._id == link._id" @click="onSelectParent(link)"/>

                <ul v-for="(subLink, index2) in link.children" :key="index2" class="nav-item">
                    
                    <us-side-nav-item 
                        v-if="!subLink.children" 
                        :item="subLink" 
                        :depth="2" 
                        @click="onSelectChild(link, subLink)" 
                        :active="selectedChild && selectedChild._id == subLink._id"/>

                    <div v-else>

                        <us-side-nav-item                             
                            :depth="2" 
                            :item="subLink"
                            @click="onSelectChild(link, subLink)" 
                            :active="selectedChild && selectedChild._id == subLink._id"/>

                        <ul v-for="(subSubLink, index3) in subLink.children" :key="index3" class="nav-item">

                            <us-side-nav-item                             
                                :depth="3" 
                                :item="subSubLink"
                                @click="onSelectGrandChild(link, subLink, subSubLink)" 
                                :active="selectedGrandChild && selectedGrandChild._id == subSubLink._id"/>

                        </ul>

                    </div>
                    
                </ul>

            </div>

        </li>

    </ul>

</template>

<script>

import UsSideNavItem from "./UsSideNavItem.vue"

// https://designsystem.digital.gov/components/side-navigation/
export default {
    name: 'us-side-nav',
    components: {UsSideNavItem},
    props: {
        links: {
            type: Array,
            default(){
                return [
                    {name: 'Page 1', children: [
                        {name: 'Page 1.1', icon: 'fal fa-play', to: {name:'create'}},
                        {name: 'Page 1.2', icon: 'fal fa-cogs', to: {name:'settings'}},
                        {name: 'Page 1.3', icon: 'fal fa-chevron-circle-right', to: {name:'deploy'}},
                    ]},
                    {name: 'Page 2', icon: 'fal fa-play', to: {name:'create'}},                    
                ]
            }
        },
        title: {
            type: String,
            default: null
        }          
    },
    data() {
        return {
            menu: null,
            selectedParent: null,
            selectedChild: null,
            selectedGrandChild: null
        }
    },  
    mounted(){
        let ct = 0;
        let newMenu = this.links;

        // Add unique id's into menu to make life easier
        const addIds = (items) => {
            for (let i=0; i<items.length; i+=1){
                items[i]._id = ct;
                ct += 1;
                if (items[i].children){
                    addIds(items[i].children)
                }
            }
        }

        addIds(newMenu);
        this.menu = newMenu;

    },  
    methods: {
        
        onSelectItem(item){

        },

        onSelectParent(parent){
            this.selectedParent = parent;
            this.selectedChild = null;
            this.selectedGrandChild = null;
            this.$emit('click', parent);
        },

        onSelectChild(parent, child){
            this.selectedParent = parent;
            this.selectedChild = child;
            this.selectedGrandChild = null;
            this.$emit('click', child);
        },

        onSelectGrandChild(parent, child, grandChild){
            this.selectedParent = parent;
            this.selectedChild = child;
            this.selectedGrandChild = grandChild;
            this.$emit('click', grandChild);
        },
    }
};
</script>
<style lang="scss">

</style>