var exec = require('child_process').exec, fs = require('fs');

if (!fs.existsSync('./package.json')) return console.log('Not found package.json');

//read files
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var api;
if (fs.existsSync('./apidoc.json')) {
  try {
    api = JSON.parse(fs.readFileSync('./apidoc.json'));
  } catch (e) {
    api = {};
  }
} else {
  api = {};
}

//update apidoc.json
api.name = pkg.name;
api.version = pkg.version;
api.description = pkg.description;
fs.writeFileSync('./apidoc.json', JSON.stringify(api));

//generate docs
// http://apidocjs.com/#CLI
exec('apidoc -i ./routes/ -o ./public/docs/ -t ./public/docs/tmpl/', function (error, stdout, stderr) {
  console.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});