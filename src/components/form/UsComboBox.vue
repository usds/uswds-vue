<template>
    <div
        class="usa-combo-box mt-1"
        :class="{
            'usx-error': valid === false,
            'usx-success': valid === true
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
    name: 'us-combo-box',
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
            type: Array,
            default: null
        }
    },
    data() {
        return {
            isUpdating: false,
            currentValue: ''
        };
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
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {

        getValue(index){

            let item = this.options[index];

            if (this.keyField && item.hasOwnProperty(this.keyField)){
                return item[this.keyField];
            }
            else if (item.hasOwnProperty('value')){
                return item['value'];
            }
            else {
                return item;
            }
        },

        getLabel(index){

            let item = this.options[index];

            if (this.labelField && item.hasOwnProperty(this.labelField)){
                return item[this.labelField];
            }
            else if (item.hasOwnProperty('label')){
                return item['label'];
            }
            else {
                return item;
            }
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
        input {
            border-width: 0.25rem;
            border-color: #b50909;
            border-style: solid;
        }
    }

    .usa-select {
        // Fix height bug in uswds
        height: auto;
    }
}
</style>
