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
export default {
    name: 'us-form-combobox',
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
        disabled: {
            type: Boolean,
            default: false
        },
        valid: {
            type: Boolean,
            default: null
        },
        name: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
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
        placeholder: {
            type: String,
            default: null
        },
        description: {
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
    data() {
        return {
            isUpdating: false,
            currentValue: ''
        };
    },
    computed: {
        parentValid(){
            if (this.$parent && this.$parent.$options.name == 'us-form-group'){
                return this.$parent.valid;
            }     
            return null;       
        }
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.init();
            }
        },
        currentValue() {
            if (!this.isUpdating) {
                this.$emit('input', this.currentValue);
                this.$emit('change', this.currentValue);
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {

        getValue(index){

            let item = this.options[index];

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

            if (item.label){
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
        },
        

        /**
         * Update internal value for v-model (currentValue) from what (if anything) was passed in
         * from parent as the v-model
         */
        init() {
            if (this.value) {
                this.isUpdating = false;
                this.currentValue = this.value;
                this.$nextTick(() => {
                    this.isUpdating = false;
                });
            }
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
