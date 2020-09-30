<template>
    <textarea
        class="usa-textarea"
        :name="name"
        :id="divId"
        v-model="currentValue"
        :type="type"
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
            type: Number,
            default: null
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
                if (this.debounce){
                    this.debouncedOnChange(val);
                }
                else {
                    this.$emit('input', val);
                }
            }
        }
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
        }, this.debounce)
    }
};
</script>
