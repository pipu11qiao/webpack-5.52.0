// 1. 引入webpack 和配置信息
const webpack = require('../lib/webpack');
const config = require('./webpack.config');

console.log(`webpack`, webpack);
console.log('config', config)

//2. 调用webpack方法，传入配置信息， 创建compiler 
const compiler = webpack(config);
// console.log(`compiler`, compiler);

// //3. 调用compiler run方法
console.log(222);
compiler.run((status, err) => {
  console.log('status,err', status, err)
  console.log(111);
})