# Typography

## Text colors

<div class="mt-3 mb-3">
    <div v-for="(variant,index) in btnVariants" :key="index" class="d-inline-block mr-1 p-1" :class="`text-${variant}`">
        <h4>text-{{variant}}</h4>
    </div>
    <div v-for="(variant,index) in btnVariants" :key="index" class="d-inline-block mr-1 p-1" :class="`bg-${variant}`">
        <h4>bg-{{variant}}</h4>
    </div>
</div>



<script>
export default {
    data() {
        return {
            txtShort: 'Lorem ipsum dolor sit amet, consectetur...',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ]
        };
    }
}
</script>