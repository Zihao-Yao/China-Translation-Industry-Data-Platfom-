const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台';

// Check index.html for dark background remnants
const idx = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const checks = [
  ['#0d0d0d', '深色背景'],
  ['#1a1a1a', '深色背景2'],
  ['#252525', '深色背景3'],
  ['#0a0a0a', '深黑色'],
  ['#1a1208', '暗金背景'],
  ['#333', '深色边框'],
  ['#e0e0e0', '浅色文字(暗色主题)'],
  ['#999', '次要文字(暗色)'],
  ['#ffffff', '白色背景'],
  ['#f8f6f2', '浅米色背景'],
  ['#c8902e', '金色主色'],
  ['#2c2c2c', '主文字深灰'],
  ['#7a7a7a', '次要文字灰'],
  ['#ddd9d1', '浅灰边框'],
  ['rgba(200,144,46', '金色装饰'],
  ['rgba(240,160,48', '旧金色装饰'],
];

console.log('=== 颜色检查 ===');
let errors = 0;
checks.forEach(([color, label]) => {
  const found = idx.includes(color);
  const darkVars = ['#0d0d0d','#1a1a1a','#252525','#0a0a0a','#1a1208'];
  const bad = darkVars.includes(color);
  if (bad && found) {
    console.log(`❌ 应消除: ${color} (${label})`);
    errors++;
  } else if (!bad && !found && (color.startsWith('#') && color.length === 7)) {
    console.log(`❌ 缺失: ${color} (${label})`);
    errors++;
  } else {
    console.log(`  ${found ? '✅' : '⏭️'} ${color} ${found ? '' : '(跳过)'}`);
  }
});

// Check for background CSS rules with dark values
const bgBlackCount = (idx.match(/background:rgba\(13,13,13/g) || []).length;
const bg1aCount = (idx.match(/background:#1a1a1a/g) || []).length;
console.log(`\n剩余rgba(13,13,13)背景: ${bgBlackCount}`);
console.log(`剩余#1a1a1a背景: ${bg1aCount}`);

if (errors > 0) {
  console.log(`\n⚠️ 发现 ${errors} 个问题`);
} else {
  console.log('\n✅ 所有颜色检查通过！');
}

// File sizes
console.log('\n=== 文件大小 ===');
const htmlFiles = ['index.html','page_overview.html','page_demand.html','page_companies.html',
  'page_projects.html','page_talent.html','page_recruitment.html','page_ranking.html',
  'page_career.html','page_global.html','page_reports.html'];
let total = 0;
htmlFiles.forEach(f => {
  const s = fs.statSync(path.join(dir, f)).size;
  total += s;
  console.log(`  ${f}: ${(s/1024).toFixed(1)} KB`);
});
console.log(`总大小: ${(total/1024).toFixed(1)} KB`);
