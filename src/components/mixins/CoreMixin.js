export default {
    data() {
        return {
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
    methods: {}
};
