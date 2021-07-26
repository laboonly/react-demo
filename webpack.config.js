/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-26 11:02:41 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-26, 4:58:39 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
 var path = require('path');
 function resolve (dir) {
    return path.join(__dirname, '..', dir)
    }
    
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            '@': resolve('./src'),
          },
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // plugins: [
    //     [
    //         "module-resolver",
    //         {
    //             "baseUrl": "./",
    //             "alias": {
    //                 "@/*": ["./src/*"]
    //             }
    //         }
    //     ]

    // ]
    // Other options...
};