"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugins = exports.resolve = exports.module = exports.output = exports.entry = exports.mode = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _htmlWebpackTemplate = _interopRequireDefault(require("html-webpack-template"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mode = 'development';
exports.mode = mode;
const entry = ['@babel/polyfill', './src/index'];
exports.entry = entry;
const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/'
};
exports.output = output;
const _module = {
  rules: [{
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [['@babel/preset-env', {
          targets: {
            browsers: '> 0.25%, not dead'
          },
          useBuiltIns: 'usage',
          modules: false
        }], '@babel/preset-typescript', '@babel/preset-react'],
        plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']
      }
    }]
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', {
      loader: 'postcss-loader',
      options: {
        plugins: () => [(0, _autoprefixer.default)({
          overrideBrowserslist: ['>2%', 'last 2 versions']
        })]
      }
    }]
  }, {
    test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
    loader: 'file-loader?name=[name].[ext]'
  }]
};
exports.module = _module;
const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json']
};
exports.resolve = resolve;
const plugins = [new _htmlWebpackPlugin.default({
  title: 'Atlantis United',
  inject: false,
  template: _htmlWebpackTemplate.default,
  appMountId: 'app'
})];
exports.plugins = plugins;
