<template>
    <input
        class="usa-input"
        :name="name"
        :id="divId"
        v-model="currentValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--error': valid === false,
            'usa-input--success': valid === true
        }"
    />
</template>
<script>
export default {
    name: 'us-form-input',
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
            if (!this.isUpdating) {
                // allows us to use v-model on our input.
                this.$emit('input', val);
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
        }
    }
};
</script>
<style lang="scss">
.usa-input {
    max-width: 100%;
}
</style>
