'use strict';

// Export an empty Vue instance as an event bus
// In Parent.vue:
//     import {bus} from 'path/to/main';
//     Where you wanna call the child's method:
//     bus.$emit('customEventName', optionalParameter);
// In Child.vue:
//     import {bus} from 'path/to/main';
//     Add this to the mounted() method in your component options object:
//      bus.$on('customEventName', this.methodYouWannaCall);
//export const bus = new Vue()
import Vue from 'vue';
export const bus = new Vue()