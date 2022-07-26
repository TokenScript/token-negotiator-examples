const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const isModern = false;
module.exports = {
  plugins: 
    [
      new HtmlWebpackPlugin({
      title: 'typescript example website',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new NodePolyfillPlugin()  
  ],
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3010,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions:
      {
        ecma: 5,
        keep_classnames: false,
        keep_fnames: false,
        ie8: false,
        nameCache: null,
        safari10: false,
        toplevel: false,
        warnings: false,
        module: false,
      
        parse: {
          bare_returns: false,
          ecma: 2019,
          html5_comments: true,
          shebang: true,
        },
        compress: {
          arrows: false,
          arguments: true,
          booleans: true,
          booleans_as_integers: false,
          collapse_vars: true,
          comparisons: true,
          computed_props: true,
          conditionals: true,
          dead_code: true,
          defaults: true,
          directives: true,
          drop_console: false,
          drop_debugger: true,
          ecma: isModern ? 2019 : 5,
          evaluate: true,
          expression: false,
          global_defs: {},
          hoist_funs: false,
          hoist_props: true,
          hoist_vars: false,
          if_return: true,
          inline: false,
          join_vars: false,
          keep_classnames: false,
          keep_fargs: true,
          keep_fnames: false,
          keep_infinity: true,
          loops: true,
          module: false,
          negate_iife: true,
          passes: 1,
          properties: true,
          pure_funcs: null,
          pure_getters: 'strict',
          reduce_funcs: true,
          reduce_vars: true,
          sequences: true,
          side_effects: true,
          switches: true,
          toplevel: false,
          top_retain: null,
          typeofs: true,
          unsafe: false,
          unsafe_arrows: false,
          unsafe_comps: false,
          unsafe_Function: false,
          unsafe_math: false,
          unsafe_methods: false,
          unsafe_proto: false,
          unsafe_regexp: false,
          unsafe_undefined: false,
          unused: true,
          warnings: true,
        },
        mangle: {
          eval: false,
          keep_classnames: false,
          keep_fnames: false,
          module: false,
          reserved: [],
          toplevel: false,
          safari10: true,
        },
        output: {
          ascii_only: false,
          beautify: true,
          braces: false,
          comments: false,
          ecma: isModern ? 6 : 5,
          indent_level: 2,
          indent_start: 0,
          inline_script: false,
          keep_numbers: false,
          keep_quoted_props: false,
          max_line_len: 400, // To make devtools responsive, should not be very small to avoid increasing size too much
          preamble: null,
          quote_keys: false,
          quote_style: 3,
          safari10: false,
          semicolons: true,
          shebang: true,
          webkit: false,
          width: 120,
          wrap_iife: false,
        }
      }
    })],
  }
};
