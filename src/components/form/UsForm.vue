<template>
    <form class="usa-form" @submit.stop.prevent="doSubmit" novalidate :class="{ 'usa-form--large': size == 'lg' }">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'us-form',
    props: {
        size: {
            type: String,
            default: ''
        }
    },
    methods: {
        async doSubmit() {

            let isValid = await this.__validateChildren(this.$children);

            if (isValid === false){
                return false;
            }

            this.$emit('submit');
        },

        async __validateChildren(kids, depth){

            if (!depth){
                depth = 0;
            }
            
            if (depth > 4 || !kids || kids.length == 0){
                return true;
            }

            let isValid = true;

            for (let i=0; i<kids.length; i+=1){
                
                let name = kids[i].$options.name;
                let kidValid = true;

                if (name.search('us-form-') !== -1 && typeof kids[i].validate == 'function'){
                    kidValid = await kids[i].validate();
                }
                else {
                    kidValid = await this.__validateChildren(kids[i].$children, depth+1);
                }

                if (kidValid === false){
                    isValid = false;
                }                

            }

            return isValid;
        }
    }
};
</script>
