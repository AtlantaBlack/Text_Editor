const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
	return {
		mode: "development",
		entry: {
			main: "./src/js/index.js",
			install: "./src/js/install.js"
		},
		output: {
			// bundle output
			filename: "[name].bundle.js",
			path: path.resolve(__dirname, "dist")
		},
		// Add and configure workbox plugins for a service worker and manifest file.
		plugins: [
			// webpack plugin for generating the index.html file and injecting bundles
			new HtmlWebpackPlugin({
				template: "./index.html",
				title: "JATE"
			}),

			// plugin to minify css
			new MiniCssExtractPlugin(),

			// plugin to inject custom service worker
			new InjectManifest({
				swSrc: "./src-sw.js",
				swDest: "src-sw.js"
			}),

			// plugin to create manifest.json file
			new WebpackPwaManifest({
				fingerprints: false,
				inject: true,
				name: "Just Another Text Editor",
				short_name: "J.A.T.E",
				description: "A browser-based text editor",
				background_color: "#FFFFFF",
				theme_color: "#463F57", // dark purple colour
				start_url: "/",
				publicPath: "/",
				icons: [
					{
						src: path.resolve("src/images/logo.png"),
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join("assets", "icons")
					}
				]
			})
		],
		module: {
			// Add CSS loaders and babel to webpack.
			rules: [
				{
					test: /\.css$/i, // test for .css files and use mini-css plugin on them
					use: [MiniCssExtractPlugin.loader, "css-loader"]
				},
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					// use babel-loader for backwards compatibility (convert es6 to es5 if needed)
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"] // '@babel/preset-env' should include plugins '@babel/plugin-proposal-object-rest-spread' & '@babel/transform-runtime'
						}
					}
				}
			]
		}
	};
};
