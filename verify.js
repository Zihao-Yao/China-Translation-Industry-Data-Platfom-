const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台';

// Check index.html
let idx = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// 1. Check update log dates
const uldMatch = idx.match(/var uld=\[(.*?)\];/s);
if (uldMatch) {
  console.log('=== 更新日志 ===');
  const entries = uldMatch[1].match(/{d:"([^"]+)/g);
  entries.forEach(e => console.log('  ' + e.replace('{d:"', '').replace('"', '')));
  
  // Check no fake April dates
  if (idx.includes('2026-04')) {
    console.log('⚠ 仍有4月日期！');
  } else {
    console.log('✅ 无虚假历史日期');
  }
}

// 2. Check visual additions
const visualChecks = [
  ['bg-accent', '渐变色背景class'],
  ['fade-bg', '渐变底色'],
  ['radial-gradient', '径向渐变光晕'],
  ['box-shadow', '悬停阴影效果'],
];
console.log('\n=== 视觉元素检查 ===');
visualChecks.forEach(([key, label]) => {
  console.log(`  ${idx.includes(key) ? '✅' : '❌'} ${label}`);
});

// 3. Check all page files have visual styles
console.log('\n=== 子页面样式检查 ===');
const pages = ['page_overview.html','page_demand.html','page_companies.html','page_projects.html',
  'page_talent.html','page_recruitment.html','page_ranking.html','page_career.html',
  'page_global.html','page_reports.html'];
pages.forEach(p => {
  const c = fs.readFileSync(path.join(dir, p), 'utf8');
  const hasVisual = c.includes('radial-gradient') || c.includes('bg-accent');
  console.log(`  ${hasVisual ? '✅' : '❌'} ${p} ${hasVisual ? '有装饰' : '无装饰'}`);
});

console.log('\n✅ 检查完成');
