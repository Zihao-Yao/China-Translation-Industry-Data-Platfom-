// build_index.js - 生成主页面
const f = require('fs');
const p = require('path');
const d = __dirname;
const sh = require(p.join(d, 'build_shared.js'));

const hero = '<section class="hero" id="hero"><div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div><div class="hl"><span>做最全的数据处理</span></div><h1>中国翻译行业数据平台</h1><p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p><div class="hs"><div><span class="n">701.2亿</span><span class="l">全年产值(元)</span></div><div><span class="n">686.7万</span><span class="l">从业人员</span></div><div><span class="n">113.5万</span><span class="l">专职翻译</span></div><div><span class="n">2183家</span><span class="l">AI翻译企业</span></div></div><div class="bd">基于2026年中国翻译协会年会发布数据</div><div class="sd">↓ 向下滚动探索</div></section>';

const cards = `<section id="overview" class="bg-accent" style="padding-bottom:20px;">
<h2 class="st">数据模块</h2>
<p style="text-align:center;color:var(--t2);margin-bottom:16px;">点击卡片查看详细数据</p>
<div class="icg">
<a href="page_overview.html" class="icc" style="display:block;"><div class="i2">📊</div><h3>行业概览</h3><p>年份切换查看区域分布、产值趋势与行业结构分析</p><span class="lnk">查看详情 →</span></a>
<a href="page_demand.html" class="icc" style="display:block;"><div class="i2">📈</div><h3>需求分析</h3><p>Top10热门领域、语言对分布与深度趋势分析</p><span class="lnk">查看详情 →</span></a>
<a href="page_companies.html" class="icc" style="display:block;"><div class="i2">🏢</div><h3>知名企业</h3><p>头部企业卡片、生态系统与翻译工具市场</p><span class="lnk">查看详情 →</span></a>
<a href="page_projects.html" class="icc" style="display:block;"><div class="i2">🚀</div><h3>重大项目</h3><p>中国翻译行业参与标志性项目时间线</p><span class="lnk">查看详情 →</span></a>
<a href="page_talent.html" class="icc" style="display:block;"><div class="i2">🎓</div><h3>人才培养</h3><p>MTI/BTI/DTI数据、就业去向、CATTI考试与薪资</p><span class="lnk">查看详情 →</span></a>
<a href="page_recruitment.html" class="icc" style="display:block;"><div class="i2">💼</div><h3>招聘信息</h3><p>岗位需求表、最新招聘与市场分析</p><span class="lnk">查看详情 →</span></a>
<a href="page_ranking.html" class="icc" style="display:block;"><div class="i2">🏆</div><h3>院校排行</h3><p>搜索115所院校、评级说明与特色方向</p><span class="lnk">查看详情 →</span></a>
<a href="page_career.html" class="icc" style="display:block;"><div class="i2">🧭</div><h3>职业路径</h3><p>5条发展路径卡片与深度职业建议</p><span class="lnk">查看详情 →</span></a>
<a href="page_global.html" class="icc" style="display:block;"><div class="i2">🌍</div><h3>全球视野</h3><p>全球市场数据、地域分布与AI技术趋势</p><span class="lnk">查看详情 →</span></a>
<a href="page_reports.html" class="icc" style="display:block;"><div class="i2">📑</div><h3>数据报告</h3><p>报告列表、FAQ、工具表、政策法规与大事记</p><span class="lnk">查看详情 →</span></a>
</div>
</section>`;

const updates = `<section id="updates" class="bg-accent fade-bg" style="padding-top:20px;">
<h2 class="st">网站更新日志</h2>
<div class="ul" id="ul"></div>
</section>`;

const body = hero + cards + updates;

const script = `
var uld=[
  {d:"2026-05-16",t:"平台搭建完成，接入核心数据",c:"基于中国翻译协会2026年年会发布的《2026中国翻译行业发展报告》和《2026全球翻译行业发展报告》，构建数据平台。接入产值701.2亿元、从业686.7万等核心数据。首批上线10个数据模块。"},
  {d:"2026-05-16",t:"补充院校评级数据，新增院校搜索",c:"接入115所MTI/BTI培养单位评级数据，基于第五轮学科评估结果，增加实时搜索功能，支持按院校名称快速定位。"},
  {d:"2026-05-17",t:"升级多页面架构，优化视觉体验",c:"单页重构为主页+10个子页面的多页面架构。新增渐变背景、数据图示等视觉元素，使整体更明亮、富有层次感。院校评级可参考具体子页面。"},
  {d:"2026-05-17",t:"新增民航院校数据",c:"补充中国民用航空飞行学院（MTI C+/BTI B-）和中国民航大学（MTI B-/BTI B-）数据，完善航空翻译领域院校覆盖。"},
  {d:"2026-05-17",t:"扩充招聘信息的实时刷新机制",c:"招聘页面新增实时刷新按钮，每次打开页面自动从BOSS直聘、猎聘、智联招聘、前程无忧聚合最新25+翻译岗位。支持按平台筛选岗位，显示【上次更新时间】时间戳。"},
  {d:"2026-05-17",t:"重大项目页面全面扩充",c:"重大项目从5条扩充至22条，覆盖2020-2026年全部标志性项目，包括短剧出海爆发、DeepSeek翻译突破、黑神话悟空本地化、ChatGPT时代变革、远程同传常态化、CATTI改革等。每条包含详细背景、数据、参与方和来源链接。"},
  {d:"2026-05-18",t:"院校弹窗与毕业生去向总览修复",c:"重新实现院校卡片点击弹窗功能，点击115所院校卡片可查看MTI/BTI评级、官方翻译学院网站链接和毕业生典型去向标签。新增毕业生去向总览板块，支持按企业来源筛选所有院校。"},
  {d:"2026-05-18",t:"主页面视觉升级与隐藏彩蛋",c:"主页面重新设计，加入品牌slogan、装饰性背景元素和更华丽的卡片样式。院校搜索栏新增隐藏彩蛋交互。"},
  {d:"2026-05-19",t:"修复链接重复与URL可用性问题",c:"修复知名企业弹窗中7家公司的招聘/官网重复链接(华为、RWS等)。全国URL逐一验证: careers.rws.com/lionbridge/careers/welocalize/careers等无法访问的标注为暂未发布。前程无忧外部搜索链接从search.51job.com改为we.51job.com/pc/search(正在用域名)。热门岗位卡片增加hover浮动效果和↗指示标识，让可点击性一目了然。"},
  {d:"2026-05-19",t:"企业数据修正：URL核实与企业列表精简",c:"根据用户反馈逐条核实企业官网与招聘链接，修正lionbridge/welocalize/TransPerfect/deepseek/中译语通/创思立信/舜禹环球通/网易有道/澜舟科技等20+家企业URL。删除10家不准确企业。中科翻译→中昊翻译，中国外文局翻译院→中国外文出版发行事业局，环球语联→北京环球译联，拓普翻译→拓谱深圳翻译。企业总数从43家精简至32家。"},
  {d:"2026-05-19",t:"企业搜索全面升级，新增31家知名企业",c:"知名企业列表从25家扩展至31家（剔除译程翻译）（经核实剔除10家不准确企业），新增中国对外翻译、中国外文出版发行事业局、创思立信翻译、北京环球译联、中昊翻译、灵格翻译、雅信翻译、拓谱深圳翻译等。搜索栏升级为实时过滤（如院校搜索），支持同时按类别和关键词过滤。修复JS_DATA循环累加问题，精简冗余代码，页面加载更快速。"},
  {d:"2026-05-20",t:"招聘数据刷新，完成代码审查",c:"执行招聘数据刷新任务，重建全部 11 个 HTML 文件。代码审查完成：修复潜在问题，优化性能，确保符合最佳实践。page_recruitment.html 已更新，岗位数据保持最新。"}
];
function renderUpdates(){
  var h='';
  uld.forEach(function(u){
    h+='<div class="hgh"><div class="dt">'+u.d+'</div><h3>'+u.t+'</h3><p>'+u.c+'</p></div>';
  });
  document.getElementById('ul').innerHTML=h;
}
renderUpdates();
`;
// 非子页面模式，用页面内锚点导航
const html = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<title>首页 | 中国翻译行业数据平台</title>\n<style>' + sh.STYLE + '</style>\n</head>\n<body>\n<div class="w2">风正起时制作</div>\n<nav><ul><li><a href="#hero" style="color:var(--g);font-weight:600;">首页</a></li><li><a href="#overview">数据模块</a></li><li><a href="#updates">更新日志</a></li><li><a href="page_overview.html">行业概览</a></li><li><a href="page_demand.html">需求分析</a></li><li><a href="page_companies.html">知名企业</a></li><li><a href="page_projects.html">重大项目</a></li><li><a href="page_talent.html">人才培养</a></li><li><a href="page_recruitment.html">招聘信息</a></li><li><a href="page_ranking.html">院校排行</a></li><li><a href="page_career.html">职业路径</a></li><li><a href="page_global.html">全球视野</a></li><li><a href="page_reports.html">数据报告</a></li></ul></nav>\n' + body + '\n' + sh.footer() + '\n<script>' + sh.JS_DATA + script + '\n</script>\n</body>\n</html>';

f.writeFileSync(p.join(d, 'index.html'), html, 'utf8');
console.log('✓ index.html generated, size: ' + html.length);
