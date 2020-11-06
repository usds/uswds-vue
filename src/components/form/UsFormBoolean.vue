<template>
    <us-form-radio v-if="type == 'radio'" :options="options" v-model="currentValue" @changed="onChanged()"/>
    <us-form-combobox v-else-if="type == 'combobox' || type == 'dropdown'" :options="options" v-model="currentValue" @changed="onChanged()"/>
    <div v-else-if="type == 'toggle'" class="mt-1">
        <us-button-group>
            <us-button :variant="(currentValue) ? 'secondary' : 'outline-secondary'" @click="onSelect(true)">Yes</us-button>
            <us-button :variant="(currentValue) ? 'outline-secondary' : 'secondary'" @click="onSelect(false)">No</us-button>
        </us-button-group>
    </div>
    <div v-else>
        <us-alert variant='error'>Type {{type}} is invalid</us-alert>
    </div>
</template>
<script>
export default {
    name: 'us-form-boolean',
    props: {
        value: {
            default: ''
        },
        type: {
            type: String,
            default: 'radio'
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
        onSelect(val){
            this.currentValue = val;
            this.onChanged();
        },
        // Bubble up changes
        onChanged(){
            this.$emit('input', this.currentValue);
            this.$emit('change', this.currentValue);
        }
    }
};
</script>

