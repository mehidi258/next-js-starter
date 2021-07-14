const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass')]
  },
  include: path.resolve(__dirname, 'src/component/svg'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: ['@svgr/webpack']
    });

    return config;
  },
  images: {
    domains: ['freepngimg.com', 'pngimg.com']
  }
});
