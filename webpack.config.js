const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: {
    main: "./src/index.tsx",
    gallery: "./src/gallery.tsx"
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/dist"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {test: [/\.ts$/, /\.tsx$/], loader: "awesome-typescript-loader"},

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: ['main'],
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebPackPlugin({
      chunks: ['gallery'],
      template: "./src/index.html",
      filename: "gallery.html"
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.output.path = __dirname + "/docs";
  }
  return config;
};