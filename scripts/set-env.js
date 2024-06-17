// set-env.js
const fs = require('fs');
const dotenv = require('dotenv');

// 加载 .env 文件中的环境变量
const envConfig = dotenv.parse(fs.readFileSync('.env'));

// 设置环境变量到 process.env
for (const key in envConfig) {
  if (envConfig.hasOwnProperty(key)) {
    process.env[key] = envConfig[key];
  }
}
