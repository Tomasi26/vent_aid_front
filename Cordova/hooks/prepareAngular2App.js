
const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
  console.log('Building Angular application into "./www" directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  console.log(execSync(
     "ng build --prod --aot --output-path ../Cordova/www/ --base-href .",
    // "ng build defiApp --output-path cordovaNew/www/ --base-href .",
    {
      maxBuffer: 1024*1024,
      cwd: basePath + '/../Angular'
    }).toString('utf8')
  );
};
