module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        output: {
            filename: "uswds-vue.js",
        },
        optimization: {
            splitChunks: false
        }
    },
    filenameHashing: true,    
    css: {
        //extract: {
        //    filename: "uswds-vue.css"
        //},
        //loaderOptions: {
        //    sass: {
        //        prependData: '@import "@/styles/uswds-vue.scss"'
         //   }
        //}        
    }    
}