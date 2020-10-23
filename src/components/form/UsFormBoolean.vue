<template>
    <us-form-radio :options="options" v-model="currentValue" @changed="onChanged()"/>
</template>
<script>
export default {
    name: 'us-form-boolean',
    props: {
        value: {
            default: ''
        },
        valid: {
            type: Boolean,
            default: null
        }
    },
    data() {
        return {
            currentValue: null,
            options: [
                {value: true, label: 'Yes'},
                {value: false, label: 'No'}
            ]
        };
    },
    mounted() {
        this.currentValue = this.value;
    },
    methods: {
        // Bubble up changes
        onChanged(){
            this.$emit('input', this.currentValue);
            this.$emit('change', this.currentValue);
        }
    }
};
</script>

