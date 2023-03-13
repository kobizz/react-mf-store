import * as path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { ModuleFederationPlugin } = webpack.container;
const { dependencies } = require('./package.json');

export default {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-react', { runtime: 'automatic' }]
						]
					}
				},
				resolve: {
					fullySpecified: false,
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'auto',
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		port: '8081',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'items',
			filename: 'remoteEntry.js',
			library: { type: 'var', name: 'items' },
			remoteType: 'var',
			remotes: {
				cart: 'cart',
			},
			exposes: {
				// expose each component
				'./App': './src/App',
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					eager: true,
					requiredVersion: dependencies.react
				},
				recoil: {
					singleton: true,
					eager: true,
					requiredVersion: dependencies.recoil
				},
				'react-dom': {
					singleton: true,
					eager: true,
					requiredVersion: dependencies['react-dom'],
				},
				'@mui/material': {
					singleton: true,
					eager: true,
					requiredVersion: dependencies['@mui/material'],
				},
				'@emotion/react': {
					singleton: true,
					eager: true,
					requiredVersion: dependencies['@emotion/react'],
				},
				'@emotion/styled': {
					singleton: true,
					eager: true,
					requiredVersion: dependencies['@emotion/styled'],
				}
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	externals: ({ request }, callback) => {
		if (/^store\//.test(request)) {

			return callback( null,
				request
					.replace(/^store/, '__store')
					.replace(/\//g, '.')
			);
		}

		callback();
	}
};
