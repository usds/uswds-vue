<template>
    <table class="usa-table" :class="{'usa-table--borderless':borderless}">
        <caption v-if="caption">
            {{caption}}
        </caption>
        <thead>
            <tr>
                <th scope="col" v-for="col in columns" :key="col">{{toTitleCase(col)}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td scope="row" v-for="col in columns" :key="col">
                    {{item[col]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import {upperFirst, map} from 'lodash';

export default {
    name: 'us-table',
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        caption: {
            type: String,
            default: null
        },
        borderless: {
            type: Boolean,
            default: false
        },
        items: {
            type: [Array, Object],
            default: null
        },
        fields: {
            type: [Array, Object],
            default: null
        }           
    },
    data() {
        return {
            columns: null
        }
    },
    mounted(){
        this.init();
    },
    methods: {

        init(){
            if (this.fields){
                let keys = Object.keys(this.fields);
                this.columns = [];
                for (let i=0; i<keys; i+=1){
                    let key = keys[i];
                    // Support for key mapping of more complex data, e.g. 
                    // column key = { key: 'name', label: 'Full Name' }
                    if (typeof key != 'string'){
                        this.columns.push(key.key)
                    }
                    else {
                        this.columns.push(key);
                    }
                }
            }
            else {
                this.columns = Object.keys(this.items[0]);
            }            
        },

        toTitleCase(str) {
            str = str.replace(/-|_/g, ' ');
            let words = str.split(' ');
            words = map(words, upperFirst);
            str = words.join(' ');
            return upperFirst(str);
        }

    }
};
</script>