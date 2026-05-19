// patch_visuals.js - 修复更新日志日期 + 增加视觉元素
// 运行: node patch_visuals.js

const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台';

// ===== 1. 读取所有构建文件 =====
const sharedPath = path.join(dir, 'build_shared.js');
const indexPath = path.join(dir, 'build_index.js');
let shared = fs.readFileSync(sharedPath, 'utf8');
let indexJs = fs.readFileSync(indexPath, 'utf8');

// ===== 2. 修复更新日志日期（index.js中的uld数组）=====
const oldUldIndex = `var uld=[
  {d:"2026-04-25",t:"平台搭建，接入双报告数据",c:"基于中国翻译协会2026年年会发布的《2026中国翻译行业发展报告》和《2026全球翻译行业发展报告》，构建数据平台。接入产值701.2亿元、从业686.7万等核心数据。"},
  {d:"2026-04-28",t:"补充院校评级数据，新增院校搜索",c:"接入115所MTI/BTI培养单位评级数据，增加实时搜索功能，支持按院校名称快速定位。"},
  {d:"2026-05-16",t:"院校评级修正，新增115所院校数据",c:"参考第五轮学科评估结果修正院校评级，补充院校特色方向与所在地信息。新增DTI试点院校28所名单。"},
  {d:"2026-05-17",t:"平台重构为多页面架构",c:"单页重构为主页+10个子页面的多页面架构，优化导航体验，修复更新日志数据。新增职业路径、全球视野、数据报告等独立页面。"},
  {d:"2027-Q1（预计）",t:"下一次数据更新",c:"接入2027年行业报告数据，计划新增翻译技术趋势专题与互动数据可视化。"}
];`;

const newUldIndex = `var uld=[
  {d:"2026-05-16",t:"平台搭建完成，接入核心数据",c:"基于中国翻译协会2026年年会发布的《2026中国翻译行业发展报告》和《2026全球翻译行业发展报告》，构建数据平台。接入产值701.2亿元、从业686.7万等核心数据。首批上线10个数据模块。"},
  {d:"2026-05-16",t:"补充院校评级数据，新增院校搜索",c:"接入115所MTI/BTI培养单位评级数据，基于第五轮学科评估结果，增加实时搜索功能，支持按院校名称快速定位。"},
  {d:"2026-05-17",t:"升级多页面架构，优化视觉体验",c:"单页重构为主页+10个子页面的多页面架构。新增渐变背景、数据图示等视觉元素，使整体更明亮、富有层次感。院校评级可参考具体子页面。"},
  {d:"2026-05-17",t:"新增民航院校数据",c:"补充中国民用航空飞行学院（MTI C+/BTI B-）和中国民航大学（MTI B-/BTI B-）数据，完善航空翻译领域院校覆盖。"},
  {d:"待定",t:"下一次数据更新",c:"接入2027年行业报告数据，计划新增翻译技术趋势专题与互动数据可视化。"}
];`;

// Check if old text exists
if (indexJs.includes('uld=[')) {
  indexJs = indexJs.replace(/var uld=\[.*?\];/s, newUldIndex);
  console.log('✓ 修复build_index.js中的更新日志日期');
} else {
  console.log('⚠ 未找到build_index.js中的uld数组');
}

// ===== 3. 给共享CSS增加视觉装饰元素 =====
// Insert colorful additions to the STYLE variable
const visualAdditions = `
/* === 视觉装饰元素（增强明亮度） === */
.bg-accent{position:relative;overflow:hidden}.bg-accent::before{content:"";position:absolute;top:-80px;right:-80px;width:300px;height:300px;background:radial-gradient(circle,rgba(240,160,48,.06),transparent 70%);pointer-events:none;border-radius:50%}.bg-accent::after{content:"";position:absolute;bottom:-60px;left:-60px;width:200px;height:200px;background:radial-gradient(circle,rgba(245,184,78,.04),transparent 70%);pointer-events:none;border-radius:50%}
.fade-bg{background:linear-gradient(180deg,rgba(240,160,48,.02),transparent 60%,rgba(240,160,48,.01))}.hero{position:relative;overflow:hidden}.hero::before{content:"";position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:600px;height:600px;background:radial-gradient(circle,rgba(240,160,48,.04),transparent 60%)}.hero::after{content:"";position:absolute;bottom:-200px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(245,184,78,.03),transparent 60%)}
.st{position:relative}.st::before{content:"";position:absolute;top:-20px;left:50%;transform:translateX(-50%);width:30px;height:30px;background:rgba(240,160,48,.03);border-radius:50%}
.di{position:relative;overflow:hidden}.di::after{content:"";position:absolute;top:0;right:0;width:60px;height:60px;background:linear-gradient(135deg,transparent,rgba(240,160,48,.06));border-radius:0 0 0 60px}
.cc,.icc,.pc,.tc,.rc,.hgh{position:relative;overflow:hidden}.cc::after,.icc::after{content:"";position:absolute;top:-30px;right:-30px;width:80px;height:80px;background:radial-gradient(circle,rgba(240,160,48,.03),transparent 70%);pointer-events:none}
.hs>div{position:relative;overflow:hidden}.hs>div::after{content:"";position:absolute;bottom:0;right:0;width:50px;height:50px;background:linear-gradient(135deg,transparent,rgba(240,160,48,.05));border-radius:10px 0 0 0}
.c2{position:relative;overflow:hidden}.c2::after{content:"";position:absolute;top:-40px;right:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(240,160,48,.02),transparent 70%);pointer-events:none}
section{position:relative}.icc:hover{box-shadow:0 8px 32px rgba(240,160,48,.08)}
nav{background:linear-gradient(180deg,rgba(13,13,13,.98),rgba(13,13,13,.92))}nav a{transition:all .2s ease}
.hs>div:hover{transform:translateY(-2px);box-shadow:0 4px 20px rgba(240,160,48,.06);transition:all .3s ease}
`;

// We need to find the STYLE variable and append the visual additions
// The STYLE string ends with '}'; we add after the last }
const styleMatch = shared.match(/const STYLE = `([\s\S]*?)`;/);
if (styleMatch) {
  const oldStyle = styleMatch[0];
  // Append visual CSS additions before the closing backtick
  const newStyle = oldStyle.replace('`;', visualAdditions + '`;');
  shared = shared.replace(oldStyle, newStyle);
  console.log('✓ 为共享CSS增加视觉装饰样式');
} else {
  console.log('⚠ 未找到STYLE变量');
}

// ===== 4. 给build_index.js中的主页面增加视觉装饰class =====
// Add bg-accent class to sections
const heroMatch = indexJs.match(/const hero = `([\s\S]*?)`;/);
if (heroMatch) {
  // hero already has its own section class, add the visual enhancements inside
  let heroStr = heroMatch[0];
  // Add decorative elements inside hero
  heroStr = heroStr.replace('<section class="hero" id="hero">', 
    '<section class="hero fade-bg" id="hero">');
  indexJs = indexJs.replace(heroMatch[0], heroStr);
  console.log('✓ 为hero区域增加渐变背景');
}

// Add bg-accent to cards section
const cardsMatch = indexJs.match(/const cards = `([\s\S]*?)`;/);
if (cardsMatch) {
  let cardsStr = cardsMatch[0];
  cardsStr = cardsStr.replace('<section id="overview" style="padding-bottom:20px;">',
    '<section id="overview" class="bg-accent" style="padding-bottom:20px;">');
  indexJs = indexJs.replace(cardsMatch[0], cardsStr);
  console.log('✓ 为卡片区域增加装饰性渐变光晕');
}

// Add bg-accent to updates section
const updatesMatch = indexJs.match(/const updates = `([\s\S]*?)`;/);
if (updatesMatch) {
  let updatesStr = updatesMatch[0];
  updatesStr = updatesStr.replace('<section id="updates" style="padding-top:20px;">',
    '<section id="updates" class="bg-accent fade-bg" style="padding-top:20px;">');
  indexJs = indexJs.replace(updatesMatch[0], updatesStr);
  console.log('✓ 为更新日志区域增加装饰');
}

// ===== 5. 保存修改 =====
fs.writeFileSync(sharedPath, shared, 'utf8');
fs.writeFileSync(indexPath, indexJs, 'utf8');

console.log('\n✅ 补丁完成！现在运行 node build_multi.js 重新生成所有页面。');
