const fs = require('fs');

function readConfigFile(path, callback) {
  fs.readFile(path, 'UTF8', (err, text) => {
    if (err) {
      console.error(err);
      callback(null);
      return;
    }
    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error(e);
    }
    callback(data);
  });
}

readConfigFile(
  'E:/项目/lqb-diary/JavaScript权威指南/16_Node服务器端JavaScript/readFile/test.json',
  console.log,
);

const util = require('util');
const fs = require('fs');
const pfs = {
  readFile: util.promisify(fs.readFile),
};

function readConfigFile(path) {
  return pfs.readFile(path, 'utf-8').then((text) => {
    return JSON.parse(text);
  });
}
