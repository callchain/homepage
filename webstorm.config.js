/*** webstorm ide 使用的webpack配置***/

const path = require('path');
const pathFn = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
  resolve: {
    alias: {
      src: pathFn('./src'),
      '@': pathFn('./src'),
      '@views': pathFn('src/views'),
      '@comp': pathFn('src/components'),
      '@utils': pathFn('src/utils'),
      '@assets': pathFn('src/assets'),
    },
  },
};
