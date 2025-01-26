const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',  // Entry point for your JavaScript
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',  // Output file for the bundled JavaScript
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // Rule for CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,  // Rule for image files
                type: 'asset/resource',  // Optimize images
            },
        ],
    },
    mode: 'production',  // Set Webpack mode to production
    performance: {
        maxAssetSize: 500000,  // Increase asset size limit if needed
        hints: 'warning',
    },
};