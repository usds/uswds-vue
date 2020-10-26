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
            // Call validate on all child components, if required
            for (let i=0; i<this.$children.length; i+=1){

                console.log(this.$children[i].$options.name)
                
                if (this.$children[i] && 
                        this.$children[i].$options && 
                            this.$children[i].$options.name.search('us-form-') !== -1){
                    if (typeof this.$children[i].validate == 'function'){

                        console.log(`Calling validate for componenbt ${this.$children[i].$options.name}`)

                        if (!await this.$children[i].validate()){
                            console.log(`${this.$children[i].$options.name} NOT valid!`);
                            return false;
                        }
                    }
                }
            }
            this.$emit('submit');
        }
    }
};
</script>
