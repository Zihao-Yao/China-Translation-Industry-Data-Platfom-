const fs = require('fs');
const content = fs.readFileSync('C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/build_shared.js', 'utf8');
const start = content.indexOf('const JS_DATA = `');
const end = content.indexOf('`;\n', start);
const jsData = content.substring(start, end + 3);
console.log('JS_DATA length: ' + jsData.length);

const cosMatch = jsData.match(/var cos=\[(.*?)\];/s);
if (cosMatch) {
  const entries = cosMatch[1].match(/\{/g);
  console.log('cos entries: ' + (entries ? entries.length : 0));
}

const codMatch = jsData.match(/var cod=\{(.*?)\};/s);
if (codMatch) {
  const entries = codMatch[1].match(/:"/g);
  console.log('cod entries: ' + (entries ? entries.length : 0));
}

const courlMatch = jsData.match(/var courl=\{(.*?)\};/s);
if (courlMatch) {
  const entries = courlMatch[1].match(/\[/g);
  console.log('courl entries: ' + (entries ? entries.length : 0));
}

// Find the renderCos function area
const renderIdx = content.indexOf('function js_renderCos()');
const renderEnd = content.indexOf('module.exports', renderIdx);
if (renderIdx > 0) {
  console.log('js_renderCos found at: ' + renderIdx);
}
