<template>
    <div
        class="usx-component usa-combo-box no-focus mt-1"
        data-enhanced="true"
        :class="{
            'usx-error': valid === false || parentValid === false,
            'usx-success': valid === true || parentValid === true
        }"
    >
        <!-- Render hidden selector, for screen readers -->

        <select class="usa-select usa-sr-only" v-model="currentValue" :name="name" :id="divId" :disabled="disabled" aria-hidden="true">
            <option value>
                <slot name="empty">Select an option</slot>
            </option>
            <option v-for="(opt, index) in options" :key="index" :value="getValue(index, false)">
                <span>{{ getLabel(index, false) }}</span>
            </option>
        </select>

        <!-- Render the actual UI for the selector -->

        <input
            v-if="filteredOpts"
            :aria-owns="`usx-combo-{${divId}}`"
            aria-autocomplete="list"
            :aria-describedby="`usx-combo-${divId}-assistiveHint`"
            :aria-expanded="isOpen"
            v-model="currentValueLabel" 
            autocapitalize="off"
            autocomplete="off"
            :id="divId"
            @click="isOpen = true"
            class="usa-combo-box__input"
            type="text"
            role="combobox"
            aria-activedescendant=""
        />
        
        <span class="usa-combo-box__clear-input__wrapper" tabindex="-1">
            <button type="button" class="usa-combo-box__clear-input no-focus" :class="{'d-block':currentValueLabel}" @click="onClearInput()" aria-label="Clear the select contents">&nbsp;</button> 
        </span>
        
        <span class="usa-combo-box__input-button-separator">&nbsp;</span>
        
        <span class="usa-combo-box__toggle-list__wrapper" tabindex="-1">          
            <button type="button" tabindex="-1" class="usx-toggle-btn no-focus" aria-label="Toggle the dropdown list" @click="isOpen = !isOpen">
                <i v-if="!isOpen" class="fas fa-chevron-down"></i>
                <i v-else class="fas fa-chevron-up"></i>
            </button>            
        </span>

        <ul tabindex="-1" :id="`usx-combo-{${divId}}`" class="usa-combo-box__list" role="listbox" :hidden="!isOpen" v-if="filteredOpts && filteredOpts.length > 0">
            <li
                v-for="(opt, index) in filteredOpts" :key="index" :value="getValue(index)"
                aria-selected="false"
                :aria-setsize="filteredOpts.length"
                aria-posinset="1"
                :id="`usx-combo-${divId}-option-${index}`"
                class="usa-combo-box__list-option no-focus"
                :tabindex="(index == 0) ? 0 : -1"
                role="option"
                @click="onSelectVal(index)"
                :data-value="getValue(index)"
            >
                {{ getLabel(index) }}
            </li>
        </ul>
        <ul v-else id="`usx-combo-{${divId}}`" class="usa-combo-box__list" role="listbox" :hidden="!isOpen">
            <li class="usa-combo-box__list-option--no-results">
                No results found
            </li>
        </ul>
        
        <div class="usa-combo-box__status usa-sr-only" role="status"></div>

        <span :id="`{divId}--assistiveHint`" class="usa-sr-only">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
        </span>

    </div>
</template>

<script>
import FormInputMixins from '../mixins/FormInputMixin';
import {debounce, findIndex, isArray, isObject} from 'lodash';

export default {
    name: 'us-form-combobox',
    mixins: [FormInputMixins],
    props: {
        value: {
            default: null
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
        // Requires options in array of [value, label]
        // TODO:
        options: {
            type: [Array, Object],
            default: null
        }
    },
    data(){
        return {
            isOpen: false,
            currentValueLabel: null,
            filteredOpts: null,
            isUpdatingLabel: false
        }
    },
    watch:{
        currentValueLabel(){
            if (!this.isUpdatingLabel){
                this.__debouncedOnChange();
            }
        }, 
        options(){
            this.__setup();
        },
        currentValue(){
            this.__setup();
        }
    },
    mounted(){
        this.filteredOpts = this.options;
        this.$nextTick(()=>{
            this.__setup();    
        });
    },
    methods: {

        __setup(){
            
            if (!this.options || !this.value){
                this.currentValueLabel = null;
                return;
            }

            // Find the selected item in the array
            let index = -1;

            //console.log('isArray(this.options) = ', isArray(this.options));

            if (isArray(this.options)){
                for (let i=0; i<this.options.length; i+=1){
                    if (this.labelField && this.options[i][this.labelField] == this.value[this.labelField]){
                        index = i;
                    }
                    else if (!this.labelField && this.options[i] == this.value){
                        index = i;
                    }
                }
            }
            else if (isObject(this.options)){
                /*
                for (let key in this.options){
                    if (this.keyField && this.keyField == key){
                        index = 
                    }
                    
                    this.options[key][this.labelField] == this.value[this.labelField]){
                        index = i;
                    }
                    else if (!this.labelField && this.options[key] == this.value){
                        index = i;
                    }                    
                }
                */
            }

            console.log('CURRENT VAL: ', this.value, index);

            if (index != -1){
                this.onSelectVal(index);   
            }

        },

        __debouncedOnChange: debounce(function(){
            this.__filterOptions();
        }, 250),

        isFiltered(index){
            let re = new RegExp(this.currentValueLabel, 'i');
            let label = this.getLabel(index, true);
            if (label && label.match(re)){
                //console.log(`${label} matches ${this.currentValueLabel}`)
                return false;
            }
            return true;
        },

        __filterOptions(){
            
            if (!this.currentValueLabel){
                this.filteredOpts = this.options;
            }           
            
            let re = new RegExp(this.currentValueLabel, 'i');

            let newOpts = [];
            for (let i=0; i<this.options.length; i+=1){
                if (!this.isFiltered(i)){
                    //console.log(`match for`, this.options[i])
                    newOpts.push(this.options[i]);
                }
            }

            this.filteredOpts = newOpts;
        },

        onSelectVal(index){

            // Flag that we're updating the label so we
            // don't want the filtered options list to update. 
            // This is because once a value is selected we want
            // the dropdown to show all options again
            this.isUpdatingLabel = true;

            //this.currentValue = item;
            this.currentValue = this.getValue(index, true);
            this.currentValueLabel = this.getLabel(index, true);
            this.filteredOpts = this.options;

            // Close the dropdown
            this.isOpen = false;

            this.$nextTick(()=>{
                this.isUpdatingLabel = false;
            })
        },

        onClearInput(){
            this.isUpdatingLabel = true;
            this.currentValue = null;
            this.currentValueLabel = null;
            this.filteredOpts = this.options;
            this.$nextTick(()=>{
                this.isUpdatingLabel = false;
            })            
        },

        getValue(index, useFiltered=true) {
            let item = null;
            if (useFiltered){
                item = this.filteredOpts[index];
            }
            else {
                item = this.options[index];
            }

            if (!item){
                return null;
            }

            if (this.keyField) {
                return item[this.keyField];
            }
            if (item.value) {
                return item.value;
            } else {
                return item;
            }
        },

        getLabel(index, useFiltered=true) {        

            let item = null;

            if (useFiltered){
                item = this.filteredOpts[index];
            }
            else {
                item = this.options[index];
            }
            
            if (!item){
                return null;
            }

            if (this.labelField) {
                return item[this.labelField];
            } 
            else if (item.label) {
                return item.label;
            } 
            else {
                return item;
            }
        }
    }
};
</script>
<style lang="scss">
.usa-combo-box {

    .usx-toggle-btn {
        background-color: transparent;
        color: rgb(102,102,102);
        background-position: center;
        background-size: auto .75rem;
        border: 0;
        cursor: pointer;
        margin-bottom: 0;
        position: absolute;
        top: 1px;
        text-align: center;        
        width: 43px;
        font-size: 1rem;
        line-height: 1rem;
        right: 1px;
        height: 2.25em;
        z-index: 100;
    }

    .usa-combo-box__list-option  {
        &:hover {
            background-color: rgba(220,220,220,0.3);
        }
    }

    .no-focus {
        outline: none !important;
    }

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
