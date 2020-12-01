<template>
    <table class="usa-table" :class="{'usa-table--borderless':borderless}">
        <caption v-if="caption">
            {{caption}}
        </caption>
        <thead>
            <tr>
                <th scope="col" v-for="(col, index) in columns" :key="index">
                    {{col.label}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td scope="row" v-for="(col, index2) in columns" :key="index2">

                    <slot :name="`cell(${col.key})`" v-bind="{ key: col.key, row: item, cell: item[col.key]}">
                        SLOT {{col.key}}
                    </slot>

                    <!--
                    <slot name="cell" v-bind="{ key: col.key, row: item, cell: item[col.key]}">
                        {{item[col.key]}}
                    </slot>
                    -->
                    
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
            
            let cols = [];

            if (this.fields){
                map(this.fields, (item) => {
                    if (typeof item == 'string'){
                        cols.push({key: item, label: item});
                    }
                    else {
                        cols.push(item);
                    }
                });
            }
            else {
                map(Object.keys(this.items[0]), (key) => {
                    console.log('2', key);
                    cols.push({key: key, label: this.toTitleCase(key)});
                });
            }      
                        
            // Support: sortable, variant, key, label

            console.log(cols);
            
            this.columns = cols;

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