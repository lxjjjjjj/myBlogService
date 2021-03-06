/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580727931452_4186';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '8.129.60.15',//有服务器使用服务器地址
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'Root123@',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: 'http://127.0.0.1:3001',//设置路由守卫之后 访问将localhost改成127.0.0.1就能拿到openId了好神奇
    credentials: true,  //允许Cookie可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  return {
    ...config,
    ...userConfig,
  };
};
