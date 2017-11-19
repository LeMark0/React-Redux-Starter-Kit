module.exports = [
  {
    test: /\.(jsx|js)?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]'
        }
      }
    ]
  }, {
    test: /\.json$/,
    use: [
      'json-loader'
    ]
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      {
        loader: "css-loader", // translates CSS into CommonJS
        options: {
          url: false,
        },
      },
      {
        loader: "sass-loader" // compiles Sass to CSS
      }
    ]
  }
];
