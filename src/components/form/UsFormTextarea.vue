<template>
    <textarea
        class="usa-textarea"
        :name="name"
        :id="divId"
        v-model="currentValue"
        :type="type"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--small': size == 'sm',
            'usa-input--medium': size == 'md',
            'usa-input--error': valid === false,
            'usa-input--success': valid === true
        }"
    />
</template>
<script>

import _ from 'lodash';

export default {
    name: 'us-form-textarea',
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
        debounce: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'lg'
        },
        rows: {
            type: Number,
            default: 8
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
        placeholder: {
            type: String,
            default: null
        },
        description: {
            type: String,
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
        currentValue(val) {
            // allows us to use v-model on our input.
            if (!this.isUpdating) {
                if (this.debounceMs){
                    this.debouncedOnChange(val);
                }
                else {
                    this.$emit('input', val);
                }
            }
        }
    },
    mounted(){
        this.init();
    },    
    methods: {
        
        init() {
            this.isUpdating = true;
            this.currentValue = this.value;
            this.$nextTick(() => {
                this.isUpdating = false;
            });
        },

        debouncedOnChange: _.debounce(function(val){
            this.$emit('input', val);
        }, 500)
    }
};
</script>
<style lang="scss">
.usa-textarea {
    max-width: 100%;
}
</style>