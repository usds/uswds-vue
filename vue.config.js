const path = require("path");

module.exports = {
    runtimeCompiler: true,
    outputDir: path.resolve(__dirname, "./dist"),
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