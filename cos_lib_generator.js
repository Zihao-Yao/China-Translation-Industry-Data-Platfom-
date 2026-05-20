// cos_lib_generator.js
// 生成 cos_lib.txt 供 Python 使用
const fs = require('fs');
const path = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台\\cos_lib.txt';

const parts = [
  "function cosSearchJS() {",
  "  return [",
  "    'var _cosAll=cos.slice(0);',",
  "    'function filterCompanies(){var q=document.getElementById(\"cs\").value.toLowerCase();renderFilteredCos(q,\"all\");}',",
  "    'function filterBySize(s,b){document.querySelectorAll(\".cf-b\").forEach(function(x){x.classList.remove(\"ac\")});if(b)b.classList.add(\"ac\");var q=document.getElementById(\"cs\").value.toLowerCase();renderFilteredCos(q,s);}',",
  "    'function renderFilteredCos(q,s){if(!s)s=\"all\";var f=_cosAll.filter(function(c){return(c.n.indexOf(q)!==-1||c.d.indexOf(q)!==-1||q===\"\")&&(s===\"all\"||c.s===s)});var h=\"\";f.forEach(function(c){h+=\"<div class=\\\\\"cc\\\\\" onclick=\\\\\"sm(\\\\'\"+c.i+\"\\\\')\\\\\"><div class=\\\\\"ic\\\\\">&#127762;</div><h3>\"+c.n+\"</h3><p>\"+c.d+\"</p><span class=\\\\\"tg\\\\\">\"+c.t+\"</span></div>\"});if(!h)h=\"<p style=\\\\\"text-align:center;color:var(--t2);padding:40px\\\\\">未找到匹配企业</p>\";document.getElementById(\"cg\").innerHTML=h;}',",
  "    'function sm(id){var c={};cos.forEach(function(x){if(x.i===id)c=x;});var h=\"<h2>\"+c.n+\"</h2><p><strong>所属国家:</strong> \"+c.co+\"</p><p><strong>类别:</strong> \"+c.t+\"</p><p><strong>详细介绍:</strong> \"+(cod[id]||c.d)+\"</p>\";if(courl[id]&&courl[id][0])h+=\"<p><strong>招聘链接:</strong> <a href=\\\\\"\"+courl[id][0]+\"\\\\\" target=\\\\\"_blank\\\\\" class=\\\\\"ub\\\\\">查看招聘岗位</a></p>\";if(courl[id]&&courl[id][1])h+=\"<p><strong>官网:</strong> <a href=\\\\\"\"+courl[id][1]+\"\\\\\" target=\\\\\"_blank\\\\\" style=\\\\\"color:var(--g2)\\\\\">\"+courl[id][1]+\"</a></p>\";document.getElementById(\"mc\").innerHTML=h;document.getElementById(\"cm\").className=\"mo s\";}',",
  "    'function cm(){document.getElementById(\"cm\").className=\"mo\";}',",
  "    'renderFilteredCos(\"\",\"all\");',",
  "  ].join(\"\\n\");",
  "}",
];

fs.writeFileSync(path, parts.join('\n'), 'utf8');
console.log('Created cos_lib.txt');
