# Modal

TBD


<div class="mt-3 mb-3">
    <us-row>
        <us-col>
            <us-alert :show="showAlert2" variant="info" :time="20" show-countdown @onDismissed="reset()" class="mb-1">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
        <us-col>
            <us-alert :show="showAlert2" variant="info" :time="20" @onDismissed="reset()">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
    </us-row>
    <us-button class="mt-1" variant="primary" @click="showAlert2 = true">Show</us-button>
    <us-button class="mt-1" variant="primary" @click="showAlert2 = false">Hide</us-button>
</div>


<div class="mt-3 mb-3">
    <us-row>
        <us-col>
            <us-alert :show="showAlert2" variant="info" class="mb-1">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
        <us-col>
            <us-alert :show="showAlert2" variant="info">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
    </us-row>
    <us-row>
        <us-col>
            <us-alert :show="showAlert2" variant="info" class="mb-1" title="Info">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
        <us-col>
            <us-alert :show="showAlert2" variant="info">This alert will auto-dismiss in 10 seconds</us-alert>
        </us-col>
    </us-row>    
</div>



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