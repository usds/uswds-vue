<template>
    <div
        class="usa-combo-box mt-1"
        :class="{
            'usx-error': valid === false || parentValid === false,
            'usx-success': valid === true || parentValid === true
        }"
    >
        <select class="usa-select" v-model="currentValue" :name="name" :id="divId" :disabled="disabled">
            
            <option value>
                <slot name="empty">Select an option</slot>
            </option>

            <option v-for="(opt, index) in options" :key="index" :value="getValue(index)">
                <span>{{ getLabel(index) }}</span>
            </option>

        </select>
    </div>
</template>

<script>
import FormInputMixins from "../mixins/FormInputMixin";
export default {
    name: 'us-form-combobox',
    mixins: [FormInputMixins],
    props: {
        label: {
            type: String,
            default: null
        },
        labelField: {
            type: String,
            default: null
        },
        keyField: {
            type: String,
            default: null
        },                
        // Requires options in array of [value, label]
        // TODO:
        options: {
            type: [Array, Object],
            default: null
        }
    },
    methods: {

        getValue(index){

            let item = this.options[index];

            if (this.keyField){
                return item[this.keyField];
            }
            if (item.value){
                return item.value;
            }
            else {
                return item;
            }

            /*
            let hasKey = Object.prototype.hasOwnProperty.call(item, this.keyField);

            if (this.keyField && hasKey){
                return item[this.keyField];
            }
            else if (hasKey){
                return item['value'];
            }
            else {
                return item;
            }
            */
            
        },

        getLabel(index){
            
            let item = this.options[index];

            if (this.labelField){
                return item[this.labelField];
            }
            else if (item.label){
                return item.label;
            }
            else {
                return item;
            }

            /*
            let hasKey = Object.prototype.hasOwnProperty.call(item, this.keyField);


            if (this.labelField && hasKey){
                return item[this.labelField];
            }
            else if (hasKey){
                return item['label'];
            }
            else {
                return item;
            }
            */
            
        }
    }
};
</script>
<style lang="scss">
.usa-combo-box {
   /* 
.usa-form-group--error {
    border-left-width: 0.25rem;
    border-left-color: #b50909;
    border-left-style: solid;
    margin-top: 2rem;
    padding-left: 1rem;
    position: relative;
}
*/    
    max-width: 100%;
    
    input {
        // Fix margin bug when using validation classes
        margin-top: 0;
    }

    &.usx-success {
        input {
            border-width: 0.25rem;
            border-color: #00a91c;
            border-style: solid;
        }
    }

    &.usx-error {
        select {
            border-width: 0.25rem;
            border-color: #b50909;
            border-style: solid;
        }
    }

    .usa-select {
        // Fix height bug in uswds
        height: auto;
        max-width: 100%;
    }
}
</style>
