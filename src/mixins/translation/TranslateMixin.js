import Vue from 'vue';
const EVENT_BUS = new Vue();
import Translate from './Translate';

/**
 * Provides a Translation directive (v-t) and extension($t()).
 * To simplify, this is just given the english strings from the html markup and then
 * uses that to search for the relevant locale version of that string.
 *
 * We make use of fuse.js to do this super fast, but also allow us to do a fuzzy match
 * so that if the english is changed a tiny bit, it'll still work.
 *
 * @see https://fusejs.io/
 *
 * @param {Vue} Vue The Vue instance
 * @param {object} options Pass in the 2-letter iso-code for the locale, or set dynamically later.
 */
export default {
    data() {
        return {
        };
    },
    mounted() {

        // If we have a locale specified in a prop, use it
        if (this.locale){
            this.$log(`Updating local for component`, this.locale);
            Translate.setLocale(this.locale);
        }

        // If we have translations specified in a prop, use it
        if (this.translations){
            this.$log(`Adding translations for component`, this.translations);
            Translate.addTranslations(this.translations);
        }

        
    },  
    directives: {   
        t: {            
            bind(el, binding, vnode) {
                //console.log(">>> ", vnode.context.translations);
                Translate._translateElement(el);
            },
            update(el, binding, vnode) {
                return vnode.context.key;
                // do something based on the updated value
                // this will also be called for the initial value
            },
            unbind() {
                //watchers.push(el);
                // do clean up work
                // e.g. remove event listeners added in bind()
            }            
        }
    },        
    methods: {

        updateLocale(newLocale){
            Translate.setLocale(newLocale);
            //EVENT_BUS.$emit('translate:change-locale');            
        }

    }
};
