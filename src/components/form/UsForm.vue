<template>
    <form class="usa-form" 
        @submit.stop.prevent="doSubmit" 
        novalidate 
        :class="{ 'usa-form--large': size == 'lg' }"
    >
        <slot v-bind="{ isValid, isDirty, errors }"></slot>
    </form>
</template>

<script>
export default {
    name: 'us-form',
    props: {
        validate: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''            
        }
    },
    data() {
        return {
            errors: {},
            isValid: null,
            isDirty: false
        }
    },
    methods: {
        
        async doSubmit() {

            if (this.validate){
                this.isValid = await this.__validateChildren(this.$children);

                if (this.isValid === false){
                    return false;
                }
            }
            else {
                console.log('>>>> ', this.validate)
            }

            this.$emit('submit');
        },

        onValidated({isValid, isDirty, errors, context}){

            if (isDirty){
                this.isDirty = true;
            }

            this.isValid = isValid;
            
            if (isDirty){
                this.isDirty = true;
            }

            this.errors[context] = errors;
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
