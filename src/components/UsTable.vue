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
        }        
    },
    data() {
        return {
            columns: null,
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    mounted(){
        this.columns = Object.keys(this.items[0]);
    },
    methods: {

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
