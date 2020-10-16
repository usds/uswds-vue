<template>
    <fieldset 
		class="usa-fieldset"
		:class="{
            'usa-input--error': valid === false,
            'usa-input--success': valid === true
        }"
	>
        <legend class="usa-legend">{{label}}</legend>
		
        <span v-if="localOptions">
			<div class="usa-checkbox" v-for="(item, index) in localOptions" :key="index">
				<input 
					class="usa-checkbox__input" 
					:id="item.id" 
					type="checkbox" 
					:name="item.name" 
					:value="item.value" 
					checked 
				/>
				<label class="usa-checkbox__label" :for="item.id">{{item.label}}</label>
			</div>
        </span>

    </fieldset>

    <!--
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
    -->
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
        label: {
            type: String,
            default: null
        },
        description: {
            type: String,
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
			currentValue: '',
			localOptions: null
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
    mounted() {
        this.init();
    },
    methods: {
        init() {

            this.isUpdating = true;
            this.currentValue = this.value;
            this.$nextTick(() => {
                this.isUpdating = false;
			});
						
			if (this.options){
				this.localOptions = [];
				for (let i=0; i<this.options.length; i+=1){

					let tmp = this.options[i];
					if (!tmp.id) {
						tmp.id = `item-${i}-` + Math.floor(100 + Math.random() * 10000);
					}

					this.localOptions.push(tmp);
				}
			}
        }
    }
};
</script>
<style lang="scss">
.usa-input {
    max-width: 100%;
}
</style>

