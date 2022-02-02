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
<style lang="scss">

.usx-sidenav-item.nav-link {

    border: none;
    border-top: 1px solid #e6e6e6;
    margin-bottom: 0;
    color: #5c5c5c;
    font-weight: normal;
    line-height: 1.3em;

    .fa-fw {
        margin-right: 8px;
    }

    &:hover {
        background-color: #eee;               
        text-decoration: none !important;
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
        cursor: pointer;
    }
        
    &:focus {
        outline: none;
        outline-offset: 0;
    }

    &.active {
        background-color: unset;
    }
            
}

</style>
