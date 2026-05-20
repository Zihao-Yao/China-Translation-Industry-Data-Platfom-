const fs = require('fs');
const d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台';

// STEP 1: Read build_shared.js, fix the sm() lines to compile correctly
let s = fs.readFileSync(d + '/build_shared.js', 'utf8');

// Strategy: Find the js_renderCos() function and replace the ENTIRE thing
// with a version that compiles correctly. We know the working output from
// the HTML files, so we just need the right input strings.

// The problem is specifically the two lines inside js_renderCos()'s returned array:
// The array elements are strings delimited by " (double quote).
// Inside those strings, we need \" for literal double quotes.

// Let me just rebuild the entire js_renderCos function from scratch
// using concatenation with String.fromCharCode

const dq = String.fromCharCode(34); // "
const sq = String.fromCharCode(39); // '
const bs = String.fromCharCode(92); // backslash

// Build the array lines one by one
// array[0]: 'var _cosAll=cos.slice(0);'
// array[1]: 'function filterCompanies(){' etc.
// The outer delimiter for each array element must not conflict with content

function makeArrayLine(line) {
  if (line.includes(dq)) {
    // Use single quotes as outer delimiter, escape any single quotes inside
    let escaped = line.replace(/'/g, "\\'");
    return sq + escaped + sq + ',';
  } else {
    // Use double quotes
    return dq + line + dq + ',';
  }
}

// Build the renderFilteredCos function with proper string
const renderFilteredCos = [
  "function renderFilteredCos(q,s){",
  "  if(!s)s='all';",
  "  var f=_cosAll.filter(function(c){",
  "    var n=c.n.indexOf(q)!==-1;",
  "    var d=c.d.indexOf(q)!==-1;",
  "    return (n||d||q==='')&&(s==='all'||c.s===s);",
  "  });",
  "  var h='';",
  "  f.forEach(function(c){",
  "    h+='<div class=\"cc\" onclick=\"sm(\\''+c.i+'\\')\"><div class=\"ic\">\\ud83c\\udfe2</div><h3>'+c.n+'</h3><p>'+c.d+'</p><span class=\"tg\">'+c.t+'</span></div>';",
  "  });",
  "  if(!h) h='<p style=\"text-align:center;color:var(--t2);padding:40px\">\\u672a\\u627e\\u5230\\u5339\\u914d\\u4f01\\u4e1a</p>';",
  "  document.getElementById('cg').innerHTML=h;",
  "}",
].map(makeArrayLine).join('\n');

// Build the sm() function - using single quotes as outer delimiter
// since the content contains double quotes
const smLines = [
  "function sm(id){",
  "  var c={};",
  "  cos.forEach(function(x){if(x.i===id)c=x;});",
  "  var h='<h2>'+c.n+'</h2><p><strong>\\u6240\\u5c5e\\u56fd\\u5bb6:</strong> '+c.co+'</p><p><strong>\\u7c7b\\u522b:</strong> '+c.t+'</p><p><strong>\\u8be6\\u7ec6\\u4ecb\\u7ecd:</strong> '+(cod[id]||c.d)+'</p>';",
  '  if(courl[id]&&courl[id][0]) h+=\\'<p><strong>\\u62db\\u8058\\u94fe\\u63a5:<\\/strong> <a href="\\'+courl[id][0]+\\'" target="\\"_blank\\" class="\\"ub\\">\\u67e5\\u770b\\u62db\\u8058\\u5c97\\u4f4d<\\/a><\\/p>\\';',
  '  if(courl[id]&&courl[id][1]) h+=\\'<p><strong>\\u5b98\\u7f51:<\\/strong> <a href="\\'+courl[id][1]+\\'" target="\\"_blank\\" style="\\"color:var(--g2);\\">\\'+courl[id][1]+\\'<\\/a><\\/p>\\';',
  "  document.getElementById('mc').innerHTML=h;",
  "  document.getElementById('cm').className='mo s';",
  "}",
  "function cm(){document.getElementById('cm').className='mo';}",
  "renderFilteredCos('','all');",
].map(function(line) {
  // Use single quotes as outer delimiter, escape any single quotes inside
  let escaped = line.replace(/'/g, "\\'");
  return "'" + escaped + "',\n";
}).join('');

console.log('=== Array lines for sm() ===');
console.log(smLines.substring(0, 600));
