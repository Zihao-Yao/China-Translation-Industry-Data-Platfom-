const fs = require('fs');
const p = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台\\index.html';

// Write test
fs.writeFileSync(p, 'OK', 'utf-8');
console.log('Write OK, size:', fs.statSync(p).size);
