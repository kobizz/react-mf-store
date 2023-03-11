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
	entry: './src/index.tsx',
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
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'auto',
	},
	devServer: {
		open: true,
		hot: true,
		port: '8080',
	},
	plugins: [
		new ModuleFederationPlugin({
			runtime: "store",
			remoteType: "var",
			remotes: {
				items: "items",
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					eager: true,
					requiredVersion: dependencies.react
				},
				"react-dom": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["react-dom"],
				},
				"@mui/material": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["@mui/material"],
				},
				"@emotion/react": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["@emotion/react"],
				},
				"@emotion/styled": {
					singleton: true,
					eager: true,
					requiredVersion: dependencies["@emotion/styled"],
				}
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
