const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ANALYZE = process.env.ANALYZE
const withSass = require("@zeit/next-sass")
const withPlugins = require("next-compose-plugins")

const cssModulesConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]_[name]_[hash:base64:5]"
  }
}

const nextConfig = {
  webpack: config => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['@hocs'] = path.join(__dirname, 'hocs')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@public'] = path.join(__dirname, 'public')

    //See https://github.com/zeit/next.js/issues/2324
    if (config.resolve.alias) {
      delete config.resolve.alias["react"]
      delete config.resolve.alias["react-dom"]
    }

    //檢測 webpack bundle js 工具
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
}

module.exports = withPlugins([
  [
    withSass,
    {
      // cssModules: true,
      // cssLoaderOptions: {
      //   importLoaders: 2,
      //   localIdentName: '[local]_[name]_[hash:base64:5]'
      // },
    }
  ],
], nextConfig)
