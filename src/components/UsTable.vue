<template>
    <table class="usa-table usx-table" :class="{'usa-table--borderless':borderless}">
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
            <tr v-for="(item, index) in items" :key="index" :class="{'hover':hover, 'odd': striped && index % 2 != 0}">
                <td v-for="(col, index2) in columns" 
                    :key="index2" 
                    :class="{}"
                    @click="onClick(item)"
                >
                    
                    <!-- provide a slot for custom cell rendering -->
                    <slot :name="`cell(${col.key})`" v-bind="{ index: index, key: col.key, item: item, cell: item[col.key]}">
                    </slot>

                    <!-- if no slot is being used, then just render the raw data -->
                    <span v-if="!hasSlot(`cell(${col.key})`)">
                        {{item[col.key]}}
                    </span>
                    
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
        striped: {
            type: Boolean,
            default: false
        },  
        hover: {
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
    computed:{
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
                        cols.push({key: item, label: this.toTitleCase(item)});
                    }
                    else {
                        if (item.key){
                            if (!item.label){
                                item.label = this.toTitleCase(item.key);
                            }
                            if (typeof item.isActive == 'undefined' || item.isActive !== false){
                                cols.push(item);
                            }
                        }
                    }
                });
            }
            else {
                map(Object.keys(this.items[0]), (key) => {
                    console.log('2', key);
                    cols.push({key: key, label: this.toTitleCase(key)});
                });
            }      
                                    
            this.columns = cols;

        },

        onClick(row){
            this.$emit('click', row);
        },

        hasSlot(name = 'default') {
            return !!this.$slots[ name ] || !!this.$scopedSlots[ name ];
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
<style lang="scss">
    .usx-table {
        
        .odd td {
            background-color: rgba(240,240,240,0.3);
        }
/*
        .table-hover > tbody > tr:hover {
            --bs-table-accent-bg: var(--bs-table-hover-bg);
            color: var(--bs-table-hover-color);
        }

        .table-striped > tbody > tr:nth-of-type(odd) {
            --bs-table-accent-bg: var(--bs-table-striped-bg);
            color: var(--bs-table-striped-color);
        }

        .table-active {
            --bs-table-accent-bg: var(--bs-table-active-bg);
            color: var(--bs-table-active-color);
        }

        .table-hover > tbody > tr:hover {
            --bs-table-accent-bg: var(--bs-table-hover-bg);
            color: var(--bs-table-hover-color);
        }
*/
        .hover td {
            &:hover {
                background-color: rgba(209, 236, 241, 1);
            }
        }

    }
</style>