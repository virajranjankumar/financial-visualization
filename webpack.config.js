function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
      }
    },
  ];
}

module.exports = [
  {
    entry: './index.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-home.js',
    },
    module: {
      rules: [{
        test: /index.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
  },
  {
    entry: './2-columns.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-2-columns.js',
    },
    module: {
      rules: [{
        test: /2-columns.scss$/,
        use: getStyleUse('bundle-2-columns.css')
      }]
    },
  },
  {
    entry: './1-columns.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-1-columns.js',
    },
    module: {
      rules: [{
        test: /1-columns.scss$/,
        use: getStyleUse('bundle-1-columns.css')
      }]
    },
  },
  {
    entry: "./index.js",
    output: {
      filename: "bundle-home.js"
    },
    module: {
      loaders: [{
        test: /index.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
