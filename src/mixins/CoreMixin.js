export default {
    data() {
        return {
            divId: null,
            sizeMapReverse: {
                'mobile-lg': 'sm',
                tablet: 'md',
                desktop: 'lg',
                'desktop-lg': 'xl'
            },
            sizeMap: {
                sm: 'mobile-lg:',
                md: 'tablet:',
                lg: 'desktop:',
                xl: 'desktop-lg:'
            }
        };
    },
    mounted() {
        this.divId = this.generateDivId();
    },    
    methods: {

        uuid() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
        },

        /**
         * Create a unique div id
         */
        generateDivId() {
            let uuid = this.uuid();
            return uuid.replace(/-/g, '');
        },

        /**
         * Check to see if the given slot is curently being used
         * @param {string} name Slot name
         */
        hasSlot(name = 'default') {
            console.log(this.$slots)
            return !!this.$slots[ name ] || !!this.$scopedSlots[ name ];
        },

        /**
         * Check to see if this component has a child component with a 
         * name that matches the given name.
         * @param {string} name Child component name to look for
         * @param {int} maxDepth If set, determines if we look into the grandchildren and to what depth to go to
         */
        hasChild(name, maxDepth=1, currentDepth=1) {
            
            let hasChild = false;

            this.$children.map((child)=>{
                
                //if (child.$options){
                //    console.log(`[${name}] ${maxDepth} ${currentDepth} ${child.$options.name}`);
                //}

                if (maxDepth && currentDepth < maxDepth){
                    hasChild = this.hasChild(name, maxDepth, currentDepth+1)
                }

                if (child.$options && child.$options.name == name){
                    //console.log(`[${name}] TRUE`);
                    hasChild = true;
                }
            });

            return hasChild;
        } 

    }
};
