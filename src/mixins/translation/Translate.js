import Vue from 'vue';
import md5 from '../../utils/md5';
import _ from 'lodash';

const EVENT_BUS = new Vue();


class Translate {

    constructor(options){

        this.watchers = {};
        this.fuse = null;
        this.missingList = [];
        this.msgHash = null;
        this.previousLocale = null;
        this.locale = options && options.locale ? options.locale : 'en';
        this.messages = options && options.messages ? options.messages : {
            en: {
                tex1: 'A message in English'
            },
            es: {
                text1: 'Un mensaje en ingles'
            }
        };
    
        // Finally, listen for locale changes
        EVENT_BUS.$on('translate:change-locale', () => {            
            this._update();
        });          

        this._generateIndex();
        this._update();
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    _update(){
        for (let key in this.watchers) {
            console.log(`Changed locale to ${this.locale} for div ${key}`);
            let el = this.watchers[key];
            this._translateElement(el);
        }
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    /**
     * Merge new messages in with existing messages
     * @param {object} newMessages Object where keys are locales, e.g. {
     *         en: {
     *             tex1: 'A message in English'
     *         },
     *         es: {
     *             text1: 'Un mensaje en ingles'
     *         }
     *     }
     */
    addTranslations(newMessages){
        for (let locale in newMessages){
            
            for (let key in newMessages[locale]){

                if (!this.messages[locale]){
                    this.messages[locale] = {};
                }
            
                this.messages[locale][key] = newMessages[locale][key];
                
            }
        }

        this._generateIndex();
        this._update();

    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    setLocale(newLocale){
        if (newLocale == this.locale){
            return;
        }
        //console.log(`Setting locale from ${locale} to ${newLocale}`)
        this.previousLocale = this.locale;
        this.locale = newLocale;
        //EVENT_BUS.$emit('translate:change-locale');
        this._update();
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    _generateIndex(){

        console.log(`Generating translation indexes`);

        //this.msgHash = _.map(this.messages.en, 'txt');

        // Create hashmap for fast searching
        
        this.msgHash = [];
        for (let key in this.messages.en) {
            this.msgHash[key] = {
                txt: this.messages.en[key],
                locale: 'en',
                key: key
            };
        }

        console.log(this.messages.en, this.msgHash)
        
            
        // Create indexed string lookup
        /*
        const opts = {
            keys: ['txt'],
            includeScore: true,
            shouldSort: true,
            // threshold: At what point does the match algorithm give up. A threshold of 0.0 requires
            // a perfect match (of both letters and location), a threshold of 1.0 would match anything.
            threshold: 0.5,
            sortFn: (a, b) => {
                return a.score > b.score ? -1 : 1;
            }
        };
    
        //console.log("MESSAGE HASH = ", this.msgHash);

        let index = Fuse.createIndex(opts.keys, this.msgHash);
    
        // TODO: can load a pre-generated index if we have it!!!
        // @see https://fusejs.io/api/indexing.html
        //const fuseIndex = await require('fuse-index.json')
        //const myIndex = Fuse.parseIndex(fuseIndex)
        this.fuse = new Fuse(this.msgHash, opts, index);
        */
      
    }

    // ///////////////////////////////////////////////////////////////////////////////////////

    _translateElement(el, depth) {

        let matchKey = null;

        const findMessage = (txt) => {
            for (let key in this.messages['en']){
                let test = txt.indexOf(this.messages['en'][key]) != -1;
                //console.log(`>>> TESTING: ${txt}, ${test} Found match: ${txt.indexOf(msg)}`);
                if (test){
                    console.log(`>>> MATCHED: [${key}] ${txt}, Found match: ${this.messages['en'][key]}`);
                    return key;
                }
            }
            return null;
        }

        const findMatch = (rawTxt) => {

            if (!rawTxt){
                return '';
            }            
            
            // Clean text
            let txt = rawTxt.replace(/(\r\n|\n|\r)/gm, "").trim();  

            let key = findMessage(txt);

            if (key){
                //console.log(match);
                let translated = this.messages[this.locale][key];
                //console.log(`Found match for "${txt}" => "${translated}"`);
                let newTxt = el.children[i].innerText.replace(txt, translated);
                el.children[i].innerText = newTxt;

                // Update translate key
                delete this.watchers[el.dataset.translateKey]; // delete existing key
                el.dataset.translateKey = key;
                this.watchers[key] = el;
            }

            return null;
        }


        for (var i = 0; i < el.children.length; i++) {

            //console.log(i, el.children[i], el.children[i].innerText);
            
            let txt = el.children[i].innerText;

            if (txt){

                // First, if we have already processed this element we would have put
                // a translate key on it, lets check it
                if (el.dataset.translateKey){
                    
                    // Did we add the key, but had no translation? Then lets look
                    // again, but only if the locale is still the default locale (en)
                    if (this.locale == 'en' && el.dataset.translateKey.indexOf('no-data') != -1){
                        matchKey = findMatch(txt);
                    }
                    // Else, we must have a real translate key already?
                    else {
                        matchKey = el.dataset.translateKey;
                    }
                }

                if (matchKey){

                    //console.log(match);
                    let translated = this.messages[this.locale][matchKey];
                    console.log(`>>> TRANSLATING [${matchKey}] "${txt}" => "${translated}"`);
                    let newTxt = el.children[i].innerText.replace(txt, translated);
                    el.children[i].innerText = newTxt;

                    // Update translate key
                    delete this.watchers[el.dataset.translateKey]; // delete existing key just in case
                    el.dataset.translateKey = matchKey;
                    this.watchers[matchKey] = el;
                }
                else {
                    console.warn(`No match for "${txt}", locale = ${this.locale}`);

                    // Add a translate key to this element so we can track it in case
                    // we get new translations (when a component mounts for example)
                    if (!el.dataset.translateKey){
                        let key = md5(txt);
                        this.watchers[key] = el;   
                        el.dataset.translateKey = `no-data:${key}`;  
                    }

                }

                //let matches = stringSimilarity.findBestMatch(txt, Object.keys(this.msgHash));
                //console.log('txt = ', txt, matches);

    
            }


        }

        //let txt = strip(el);
        



        /*

        function strip(html){
            let doc = new DOMParser().parseFromString(html, 'text/html');
            return doc.body.textContent || "";
        }





        if (!depth) {
            depth = 0;
        }

        // Get the div text, but only for the parent but ignore child nodes
        let val = el.firstChild ? el.firstChild.data : null;
        let key = el.dataset.translateKey;
        let str = null;

        console.log(el)

        if (val == 'undefined' || val == 'null'){
            str = '';
        }
        else if (val){
            str = val.trim();
            str = str.replace(/(\r\n|\n|\r)/gm, "");
        }

        //if (key == 'no-data'){
        //    key = false;
        //}
        
        if (str){

            console.log(`[${depth}] element txt = "${str}" , key = "${key}"   --  locale: ${this.locale}`);

            // If there is a `translateKey` on this element, that means 
            // we have already translates it. So if we don't have that
            // key we need to translate it now
            if (key != 'data-translate-key' && str) {
                let match = this._findMessage(str);
                console.log("LOOKING UP", str, match)
                key = match ? match.key : 'no-match';
                el.dataset.translateKey = key;
                // Start watching this element and update
                this.watchers[key] = el;
            } 
            else {
                key = 'no-data';            
            }

            if (key != 'no-match' && key != 'no-data') {
                el.firstChild.data = this.messages[this.locale][key];
                el.dataset.translateKey = key;
            } else {
                console.warn(`[${depth}] element txt = "${str}" , key = "${key}"   --  locale: ${this.locale}`);
                console.warn(`No match for "${str}"`);
            }
            
            //EVENT_BUS.$on('translate:change-locale', () => {
            //    console.log(`Changed locale to ${locale} for div ${key}`);
            //    if (el.dataset.translateKey != 'no-match') {
            //        //el.firstChild.data.replace(val, this.translations[locale][key]);
            //        el.firstChild.data = this.translations[locale][key];
            //    }
            //});
        }


        // Step through the child elements, if there are any, and translate them as well

        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            // Translate the child element, unless it has a translate directive on it already!
            if (!children[i].attributes['data-translate-key']) {
                //console.log(`[${depth}] Child ${children[i].className} ${i}`, children[i].attributes);
                this._translateElement(children[i], depth + 1);
            }
        }
        */
        
    }

}

export default new Translate();