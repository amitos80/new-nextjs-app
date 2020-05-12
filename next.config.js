const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline')
require('dotenv').config();

module.exports = {
  ... withCSS({
  webpack: function (config) {
    config.node = {
      fs: 'empty'
    }
    const env = Object.keys(process.env).reduce((acc, curr) => {
             acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
             return acc;
   }, {});
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        name: 'new-app',
        automaticNameDelimiter: '-',
        minChunks: 6,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          commons: {
            test: new RegExp(/\/{((?!node_modules:)[^}]+)\/}/g),
            name: 'commons',
            chunks: 'initial',
            minChunks: 3
          },
          vendor: {
            test: new RegExp(/\/{((node_modules:)[^}]+)\/}/g),
            name: 'vendor',
            chunks: 'all',
          }
        }
      }
    };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config
  }
})}


// module.exports = withCSS(withSass({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(scss|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     });
//
//     return config;
//   }
// }));









//
//
// const withSass = require('@zeit/next-sass')
//
// module.exports = withSass({
//   cssModules: false,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// })


//...................
// const withPlugins = require('next-compose-plugins');
// const { PHASE_PRODUCTION_BUILD } = require('next-server/constants');
// const sass = require('@zeit/next-sass');
//
// module.exports = withPlugins([
//   [sass, {
//     cssModules: true,
//     cssLoaderOptions: {
//       localIdentName: '[path]___[local]___[hash:base64:5]',
//     },
//     [PHASE_PRODUCTION_BUILD]: {
//       cssLoaderOptions: {
//         localIdentName: '[hash:base64:8]',
//       },
//     },
//   }],
// ]);
