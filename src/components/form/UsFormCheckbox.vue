<template>
    <fieldset  class="usa-fieldset">

        <legend class="usa-legend">{{label}}</legend>
                
        <span v-if="localOptions">
            <div class="usa-checkbox" v-for="(item, index) in localOptions" :key="index">
                <input 
                    class="usa-checkbox__input" 
                    v-model="checkedValues"
                    :id="item.id" 
                    :name="`checkbox-${divID}`"
                    type="checkbox" 
                    :value="item.value" 
                    :disabled="item.disabled"
                    :checked="item.checked"                    
                />

                <label class="usa-checkbox__label" :for="item.id">
                    <slot name="label" v-bind:item="item">
                        {{item.label}}
                        <div class="usx-checkbox-desc" v-if="item.description">{{item.description}}</div>
                    </slot>
                </label>

                <!--
                <slot name="label" v-bind:item="item">
                    <label class="usa-checkbox__label" :for="item.id" :class="{'usx-checkbox-label-with-desc': item.description }">{{item.label}}</label>
                    <div class="usx-checkbox-desc" v-if="item.description">{{item.description}}</div>
                </slot>
                -->
            </div>
        </span>

    </fieldset>

</template>
<script>
export default {
    name: 'us-form-checkbox',
    props: {
        value: {
            default: ''
        },
        divId: {
            type: String,
            default() {
                return `id-` + Math.floor(100 + Math.random() * 10000);
            }
        },
        valid: {
            type: Boolean,
            default: null
        },
        options: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            isUpdating: false,
            checkedValues: [],
            localOptions: null
        };
    },
    watch: {
        options(newVal, oldVal){
            if (newVal != oldVal && newVal) {
                this.init();
            }
        },
        value(newVal, oldVal) {
            if (newVal != oldVal && !this.isUpdating) {
                this.checkedValues = this.value;
            }
        },
        checkedValues(val) {
            if (!this.isUpdating) {
                // allows us to use v-model on our input.
                this.$emit('input', val);
                this.$nextTick(() => {
                    this.isUpdating = false;
                });                
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {


        init() {

            this.isUpdating = true;

            this.$nextTick(() => {
                this.isUpdating = false;
            });
                        
            if (this.options){
                this.localOptions = [];

                for (let i=0; i<this.options.length; i+=1){
                    
                    let tmp = null;

                    if (this.options[i] !== null){

                        // If this is an object, then just use it (if we have a value field)
                        if (typeof this.options[i] === 'object' && this.options[i].value){
                            tmp = this.options[i];              
                            if (!tmp.label){
                                tmp.label = tmp.value;
                            }
                        }
                        // If this is an array of primitive types, convert to object
                        else {
                            tmp = {
                                value: this.options[i],
                                label: this.options[i]
                            }
                        }   

                    }

                    if (tmp){
                        if (!tmp.id) {
                            tmp.id = `item-${i}-` + Math.floor(100 + Math.random() * 10000);
                        }
                        this.localOptions.push(tmp);
                    }
                }
            }
        }
    }
};
</script>
<style lang="scss">
.usa-checkbox {

    //.usx-checkbox-label-with-desc {
        // font-size: 16px;
    //}

    .usa-checkbox-slot {
        text-indent: 0;
        color: red !important;
    }

    .usx-checkbox-desc {
        font-weight: normal;        
        margin-left: 3px;
        //margin-left: calc(2em + 3px);
        margin-top: 0.1em;
        font-size: 0.875em;
        text-indent: 0;
    }
}
</style>

