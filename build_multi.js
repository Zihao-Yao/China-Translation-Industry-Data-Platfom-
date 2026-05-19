// build_multi.js - 中国翻译行业数据平台 多页面架构构建脚本
// 运行: node build_multi.js

const { execSync } = require('child_process');
const path = require('path');
const dir = __dirname;

console.log('=== 中国翻译行业数据平台 - 多页面架构构建 ===\n');

try {
  console.log('Step 1: 生成子页面 1-5 (page_overview ~ page_talent)');
  execSync('node ' + path.join(dir, 'build_pages_1.js'), { stdio: 'inherit' });
  
  console.log('\nStep 2: 生成子页面 6-10 (page_recruitment ~ page_reports)');
  execSync('node ' + path.join(dir, 'build_pages_2.js'), { stdio: 'inherit' });
  
  console.log('\nStep 3: 生成主页面 index.html');
  execSync('node ' + path.join(dir, 'build_index.js'), { stdio: 'inherit' });
  
  console.log('\n=== 构建完成! ===');
  console.log('生成文件列表:');
  const fs = require('fs');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort();
  files.forEach(f => {
    const s = fs.statSync(path.join(dir, f));
    console.log(`  ${f} (${(s.size / 1024).toFixed(1)} KB)`);
  });
  console.log(`\n共 ${files.length} 个HTML文件`);
} catch (e) {
  console.error('构建失败:', e.message);
  process.exit(1);
}
