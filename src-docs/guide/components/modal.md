# Modal

TBD

<script>
export default {
    data() {
        return {
            showAlert1: true,
            showAlert2: true
        };
    },
    methods: {
        reset(val){
            console.log(`reset ${val}`);
            this.showAlert2 = false;
        }
    }
};
</script>