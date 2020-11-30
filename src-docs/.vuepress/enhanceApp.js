/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

//import { UswdsVue } from 'uswds-vue';
// Until stable, pulling from here
import {
    UswdsVue
} from '../../src/main.js';
//import { UswdsVue } from '../../../dist/uswds-vue.umd.js';  
import VueGtag from "vue-gtag";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements for the site.
    Vue.use(UswdsVue);
    Vue.use(VueGtag, {
        config: {
            id: "G-H4QQTSTF0N"
        }
    });

}