/*
 *
 */

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { join } = require( 'path' );

const { version } = require( './package.json' );

module.exports = {
    entry: {
        app: join( __dirname, 'src/index.js' )
    },

    output: {
        path: join( __dirname, 'public' ),
        filename: 'js/bundles/bundle.js',
        pathinfo: true,
        publicPath: '/'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: join( __dirname, 'public' ),
        disableHostCheck: true
    },

    module: {
        rules: [ {
            enforce: 'pre',
            test: /\.js$/,
            include: [ join( __dirname, 'src' ) ],
            use: [ { loader: 'eslint-loader' } ]
        }, {
            test: /\.js$/,
            include: [
                join( __dirname, 'src' ),
                join( __dirname, 'node_modules/dombili' ),
                join( __dirname, 'node_modules/kink' )
            ],
            use: [ 'babel-loader' ]
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    },

    plugins: [
        new HtmlWebpackPlugin( {
            env: 'development',
            title: 'Drag & Drop',
            version,
            template: 'src/index.ejs',
            filename: 'index.html'
        } )
    ]
};
