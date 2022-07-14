const path = require('path');
 const webpack = require('webpack');
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
    plugins:[
        new webpack.DefinePlugin({
            process: {env: {}}
        })
    ]
};