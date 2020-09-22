export default {
    data() {
        return {
            divId: null
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

        generateDivId() {
            let uuid = this.uuid();
            return uuid.replace(/-/g, '');
        }
    }
};
