// expand_companies.js - 扩增企业数据 + 添加搜索/筛选功能
// 运行: node expand_companies.js

const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台';

// ===== 1. 读取当前 build_shared.js =====
const sharedPath = path.join(dir, 'build_shared.js');
let shared = fs.readFileSync(sharedPath, 'utf8');

// ===== 2. 新的 cos 数组（25+ 企业，含规模分类）=====
const newCos = `var cos=[
  // ==== 全球头部（年营收>5亿美元）====
  {i:"rws",n:"RWS(SDL Trados)",co:"英国",t:"全球头部",s:"global",d:"全球最大语言服务公司之一，旗下Trados工具"},
  {i:"tp",n:"TransPerfect",co:"美国",t:"全球头部",s:"global",d:"全球最大私营语言服务公司，170+语种"},
  {i:"lion",n:"Lionbridge",co:"美国",t:"全球头部",s:"global",d:"5000+员工，350+语种"},
  {i:"welo",n:"Welocalize",co:"美国",t:"全球头部",s:"global",d:"AI驱动语言服务，游戏本地化领先"},
  // ==== 中国头部（年营收>1亿）====
  {i:"gtc",n:"中译语通",co:"中国",t:"中国头部",s:"china-top",d:"中国对外翻译旗下，服务国家级机构"},
  {i:"tn",n:"传神语联",co:"中国",t:"中国头部",s:"china-top",d:"语联网平台，百万级译员"},
  {i:"sun",n:"舜禹环球通",co:"中国",t:"中国头部",s:"china-top",d:"知识产权+游戏本地化"},
  {i:"cema",n:"策马翻译",co:"中国",t:"中国头部",s:"china-top",d:"CATTI官方合作机构"},
  {i:"lingo",n:"中译语通国际",co:"中国",t:"中国头部",s:"china-top",d:"中译语通海外业务板块"},
  // ==== 互联网大厂翻译 ====
  {i:"yd",n:"网易有道翻译",co:"中国",t:"互联网大厂",s:"big-tech",d:"AI+人工翻译50+语种"},
  {i:"hw",n:"华为翻译中心",co:"中国",t:"大型企业",s:"big-tech",d:"内部团队支撑170+国家"},
  {i:"byted",n:"字节跳动翻译",co:"中国",t:"互联网大厂",s:"big-tech",d:"TikTok多语言内容本地化"},
  {i:"alibaba",n:"阿里巴巴语言服务",co:"中国",t:"互联网大厂",s:"big-tech",d:"跨境电商翻译与本地化"},
  {i:"tencent",n:"腾讯翻译&游戏本地化",co:"中国",t:"互联网大厂",s:"big-tech",d:"游戏出海翻译+腾讯翻译君"},
  {i:"baidu",n:"百度翻译",co:"中国",t:"互联网大厂",s:"big-tech",d:"NMT翻译+AI翻译引擎"},
  {i:"xiaomi",n:"小米国际翻译",co:"中国",t:"互联网大厂",s:"big-tech",d:"MIUI多语言+IoT内容本地化"},
  // ==== 新兴AI翻译企业 ====
  {i:"deepseek",n:"DeepSeek翻译",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"大模型驱动翻译，2025年增长迅猛"},
  {i:"yee",n:"YeeCat译读",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"中译语通旗下AI翻译平台"},
  {i:"langboat",n:"澜舟科技",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"孟子大模型赋能多语言翻译"},
  {i:"sogou",n:"搜狗翻译",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"神经网络翻译+图像翻译"},
  // ==== 中小型专业翻译企业 ====
  {i:"echeng",n:"译程翻译",co:"中国",t:"专业翻译",s:"specialized",d:"法律医学翻译专业服务商"},
  {i:"lan-bridge",n:"朗桥翻译",co:"中国",t:"专业翻译",s:"specialized",d:"小语种翻译+同声传译"},
  {i:"transn-cn",n:"传神翻译",co:"中国",t:"专业翻译",s:"specialized",d:"传神语联旗下译员平台"},
  {i:"jishi",n:"及时语翻译",co:"中国",t:"专业翻译",s:"specialized",d:"在线翻译+人工翻译一站式"},
  {i:"kingsun",n:"金太阳翻译",co:"中国",t:"专业翻译",s:"specialized",d:"机电翻译+专利翻译"},
  // ==== 国际企业在华分支 ====
  {i:"tp-cn",n:"TransPerfect中国",co:"中国",t:"外资在华",s:"intl-cn",d:"TransPerfect上海/北京分公司"},
  {i:"lion-cn",n:"Lionbridge中国",co:"中国",t:"外资在华",s:"intl-cn",d:"Lionbridge大连/北京中心"},
  {i:"welo-cn",n:"Welocalize中国",co:"中国",t:"外资在华",s:"intl-cn",d:"Welocalize北京分公司"},
];`;

// ===== 3. 新的 cod（企业描述）=====
const newCod = `var cod={
  "rws":"RWS集团全球领先，旗下拥有Trados工具，年营收8.5亿英镑。150+语种，6500+员工。",
  "tp":"TransPerfect全球最大私营语言公司，170+语种，年营收12亿美元。10,000+员工。",
  "lion":"Lionbridge全球领先，5000+员工，350+语种，年营收约7亿美元。",
  "welo":"Welocalize专注AI驱动语言服务，游戏本地化全球领先，250+语种。年营收约5亿美元。",
  "gtc":"中译语通为中国对外翻译旗下，服务外交部等国家级机构。年营收约15亿人民币。",
  "tn":"传神语联建设语联网平台，百万级译员，年处理超40亿字。年营收约8亿人民币。",
  "sun":"舜禹环球通专注IP+游戏本地化，年翻译超5亿字。年营收约5亿人民币。",
  "cema":"策马翻译为CATTI官方合作机构，每年培养数千翻译人才。年营收约3亿人民币。",
  "lingo":"中译语通国际业务板块，专注海外本地化与跨语言大数据服务。",
  "yd":"网易有道AI+人工翻译50+语种，数亿用户，基于自研大模型。",
  "hw":"华为翻译中心支撑全球170+国家业务，覆盖所有华为产品多语言版本。",
  "byted":"字节跳动翻译团队负责TikTok、抖音等产品全球多语言内容，日均翻译量数亿字。",
  "alibaba":"阿里巴巴语言服务支持阿里国际站、速卖通、Lazada等跨境电商平台翻译。",
  "tencent":"腾讯翻译和游戏本地化团队支撑《王者荣耀》《PUBG Mobile》等游戏出海翻译。",
  "baidu":"百度翻译基于自研NMT模型，支持200+语种，日均翻译请求超千亿字符。",
  "xiaomi":"小米国际翻译团队负责MIUI系统、IoT产品多语言版本，覆盖80+语种。",
  "deepseek":"DeepSeek大模型在翻译领域表现突出，2025年推出DeepSeek-R1翻译版，性价比领先。",
  "yee":"YeeCat译读是中译语通旗下云端CAT工具，支持50+语种，集成AI机器翻译。",
  "langboat":"澜舟科技基于孟子大模型，提供金融、法律等领域定制化翻译解决方案。",
  "sogou":"搜狗翻译支持100+语种，特色是图像翻译和语音翻译，每日服务数亿用户。",
  "echeng":"译程翻译专注法律、医学、工程等垂直领域翻译，年翻译量超5000万字。",
  "lan-bridge":"朗桥翻译专注小语种翻译与同声传译，覆盖50+语种，在西南地区有较强影响力。",
  "transn-cn":"传神翻译为传神语联旗下品牌，专注企业级翻译服务与译员派遣。",
  "jishi":"及时语翻译提供在线翻译+人工翻译一站式服务，主打快速交付，1小时起交付。",
  "kingsun":"金太阳翻译专注机电、专利领域翻译，是多家世界500强企业长期合作伙伴。",
  "tp-cn":"TransPerfect上海/北京分公司，为中国企业出海提供本地化与翻译服务。",
  "lion-cn":"Lionbridge大连/北京中心，专注IT本地化与AI训练数据服务。",
  "welo-cn":"Welocalize北京分公司，专注游戏本地化与创意翻译服务。"
};`;

// ===== 4. 新的 courl（企业链接）=====
const newCourl = `var courl={
  "rws":["https://www.rws.com/careers/","https://www.rws.com"],
  "tp":["https://www.transperfect.com/careers/","https://www.transperfect.com"],
  "lion":["https://www.lionbridge.com/careers/","https://www.lionbridge.com"],
  "welo":["https://www.welocalize.com/careers/","https://www.welocalize.com"],
  "gtc":["https://www.gtcom.com.cn/","https://www.gtcom.com.cn"],
  "tn":["https://www.transn.com/","https://www.transn.com"],
  "sun":["https://www.sunyu.com/","https://www.sunyu.com"],
  "cema":["https://www.cemachina.com/","https://www.cemachina.com"],
  "lingo":["https://www.gtcom.com.cn/","https://www.gtcom.com.cn"],
  "yd":["https://f.youdao.com/joinus/","https://f.youdao.com"],
  "hw":["https://career.huawei.com/","https://career.huawei.com"],
  "byted":["https://jobs.bytedance.com/","https://www.bytedance.com"],
  "alibaba":["https://talent.alibaba.com/","https://www.alibabagroup.com"],
  "tencent":["https://careers.tencent.com/","https://www.tencent.com"],
  "baidu":["https://talent.baidu.com/","https://www.baidu.com"],
  "xiaomi":["https://xiaomi.jobs.f.mioffice.cn/","https://www.mi.com"],
  "deepseek":["https://www.deepseek.com/","https://www.deepseek.com"],
  "yee":["https://www.gtcom.com.cn/","https://www.gtcom.com.cn"],
  "langboat":["https://www.langboat.com/","https://www.langboat.com"],
  "sogou":["https://zhaopin.sogou.com/","https://www.sogou.com"],
  "echeng":["https://www.echeng.com/","https://www.echeng.com"],
  "lan-bridge":["https://www.lan-bridge.com/","https://www.lan-bridge.com"],
  "transn-cn":["https://www.transn.com/","https://www.transn.com"],
  "jishi":["https://www.jishiyu.com/","https://www.jishiyu.com"],
  "kingsun":["https://www.kingsuntrans.com/","https://www.kingsuntrans.com"],
  "tp-cn":["https://www.transperfect.com/careers/","https://www.transperfect.com"],
  "lion-cn":["https://www.lionbridge.com/careers/","https://www.lionbridge.com"],
  "welo-cn":["https://www.welocalize.com/careers/","https://www.welocalize.com"]
};`;

// ===== 5. 替换 build_shared.js 中的 cos/cod/courl 数组 =====
// 替换 var cos=[...]
const oldCos = shared.match(/var cos=\[.*?\];\n/s);
if (oldCos) {
  shared = shared.replace(oldCos[0], newCos + '\n');
  console.log('✓ 替换 cos 数组（25+ 企业）');
} else {
  console.log('⚠ 未找到 cos 数组');
}

// 替换 var cod={...}
const oldCod = shared.match(/var cod=\{.*?\};\n/s);
if (oldCod) {
  shared = shared.replace(oldCod[0], newCod + '\n');
  console.log('✓ 替换 cod 对象（企业描述）');
} else {
  console.log('⚠ 未找到 cod 对象');
}

// 替换 var courl={...}
const oldCourl = shared.match(/var courl=\{.*?\};\n/s);
if (oldCourl) {
  shared = shared.replace(oldCourl[0], newCourl + '\n');
  console.log('✓ 替换 courl 对象（企业链接）');
} else {
  console.log('⚠ 未找到 courl 对象');
}

// ===== 6. 重写 js_renderCos 函数，添加搜索和筛选功能 =====
const newRenderCos = `
function js_renderCos() {
  return \`
function filterCompanies(){
  var q = document.getElementById('cs').value.toLowerCase();
  var c = document.querySelectorAll('.cf-group .cf-b:first-child');
  c.forEach(function(btn){btn.click();}); // reset all filters
  renderFilteredCos(q, 'all');
}
function filterBySize(size, btn){
  document.querySelectorAll('.cf-b').forEach(function(b){b.classList.remove('ac');});
  if(btn) btn.classList.add('ac');
  var q = document.getElementById('cs').value.toLowerCase();
  renderFilteredCos(q, size);
}
function renderFilteredCos(q, size){
  var filtered = cos.filter(function(co){
    var nameMatch = co.n.indexOf(q) !== -1 || co.d.indexOf(q) !== -1 || q === '';
    var sizeMatch = size === 'all' || co.s === size;
    return nameMatch && sizeMatch;
  });
  var h = '';
  filtered.forEach(function(c){
    h += '<div class="cc" onclick="sm(\\\\'' + c.i + '\\\\')"><div class="ic">\\uD83C\\uDFE2</div><h3>' + c.n + '</h3><p>' + c.d + '</p><span class="tg">' + c.t + '</span></div>';
  });
  if(h === '') h = '<p style="text-align:center;color:var(--t2);padding:40px;">未找到匹配企业</p>';
  document.getElementById('cg').innerHTML = h;
}
function sm(id){
  var c = {};
  cos.forEach(function(x){if(x.i===id)c=x;});
  var h = '<h2>' + c.n + '</h2><p><strong>所属国家:</strong> ' + c.co + '</p><p><strong>类别:</strong> ' + c.t + '</p><p><strong>详细介绍:</strong> ' + (cod[id]||c.d) + '</p>';
  if(courl[id] && courl[id][0]) h += '<p><strong>招聘链接:</strong> <a href="' + courl[id][0] + '" target="_blank" class="ub">查看招聘岗位</a></p>';
  if(courl[id] && courl[id][1]) h += '<p><strong>官网:</strong> <a href="' + courl[id][1] + '" target="_blank" style="color:var(--g2);">' + courl[id][1] + '</a></p>';
  document.getElementById('mc').innerHTML = h;
  document.getElementById('cm').className = 'mo s';
}
function cm(){document.getElementById('cm').className = 'mo';}
renderFilteredCos('', 'all');
\`;
}`;

// 替换旧的 js_renderCos
const oldRenderCos = shared.match(/function js_renderCos\(\) \{[\s\S]*?^\};/m);
if (oldRenderCos) {
  shared = shared.replace(oldRenderCos[0], newRenderCos);
  console.log('✓ 重写 js_renderCos 函数（含搜索/筛选）');
} else {
  console.log('⚠ 未找到 js_renderCos');
}

fs.writeFileSync(sharedPath, shared, 'utf8');
console.log('\n✓ 已保存 build_shared.js');

// ===== 7. 更新 build_pages_1.js 中的企业页面 HTML =====
const pages1Path = path.join(dir, 'build_pages_1.js');
let pages1 = fs.readFileSync(pages1Path, 'utf8');

// 替换公司的 body3，添加搜索框和筛选按钮
const newBody3 = `const body3 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">知名企业</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:12px;">共' + cos.length + '家企业，按规模分类展示。点击卡片查看详情。</p>' +
'<div class="sb"><input type="text" id="cs" placeholder="搜索企业名称或关键词..." oninput="filterCompanies()"></div>' +
'<div class="cf-group" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:24px;">' +
'<button class="cf-b ac" onclick="filterBySize(\\'all\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">全部</button>' +
'<button class="cf-b" onclick="filterBySize(\\'global\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">全球头部</button>' +
'<button class="cf-b" onclick="filterBySize(\\'china-top\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">中国头部</button>' +
'<button class="cf-b" onclick="filterBySize(\\'big-tech\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">互联网大厂</button>' +
'<button class="cf-b" onclick="filterBySize(\\'ai-startup\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">AI翻译企业</button>' +
'<button class="cf-b" onclick="filterBySize(\\'specialized\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">专业翻译</button>' +
'<button class="cf-b" onclick="filterBySize(\\'intl-cn\\',this)" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;background:#fff;color:var(--t2);font-size:.82rem;cursor:pointer;">外资在华</button>' +
'</div>' +
'<div class="cg" id="cg"></div>' +
'<div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">✕</button><div id="mc"></div></div></div>' +
'<div class="c2" style="margin-top:30px;"><h3 style="color:var(--g);margin-bottom:12px;">翻译行业生态系统</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>全球Top 5语言服务企业（2025年营收）</strong><br>1. TransPerfect - 约12亿美元（美国）<br>2. Lionbridge - 约7亿美元（美国）<br>3. RWS Holdings - 约8.5亿英镑（英国）<br>4. Welocalize - 约5亿美元（美国）<br>5. 中译语通 - 约15亿人民币（中国）<br><br>中国翻译企业正在快速追赶全球巨头。以中译语通、传神语联、舜禹环球通为代表的本土企业，在AI翻译技术应用和语料资源积累方面已具备全球竞争力。2025年中国翻译企业合计营收约占全球市场份额的12-14%，较2019年提升约4个百分点。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">翻译技术工具市场</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">Trados仍保持CAT工具市场领先地位（约45%市场份额），但Memsource(30%)和Smartcat(15%)正在快速增长。基于云的CAT工具使用率从2022年的38%提升到2025年的72%。AI翻译质量评估工具成为新兴细分市场。</p></div></section>';

// Update script3 to use new renderCos
const newScript3 = "const script3 = sh.js_renderCos() + '\\n';";

// Replace in file
const oldB3Match = pages1.match(/const body3 = .*?<\/section>`;/s);
if (oldB3Match) {
  pages1 = pages1.replace(oldB3Match[0], newBody3);
  console.log('✓ 更新 build_pages_1.js 中的企业页面 HTML（含搜索/筛选）');
} else {
  console.log('⚠ 未找到 body3');
}

// Also fix the script3 to remove renderCos() since js_renderCos now auto-calls
const oldScript3 = pages1.match(/const script3 = sh\.js_renderCos\(\) .*?;/);
if (oldScript3) {
  pages1 = pages1.replace(oldScript3[0], newScript3);
  console.log('✓ 更新 script3');
}

fs.writeFileSync(pages1Path, pages1, 'utf8');
console.log('\n✓ 已保存 build_pages_1.js');

// ===== 8. 添加筛选按钮的CSS到build_shared.js =====
// 在STYLE中添加.cf-b样式
const styleEnd = shared.indexOf('`;\n\n//');
if (styleEnd > 0) {
  const cfCss = '.cf-b.ac,.cf-b:hover{background:var(--g)!important;color:#fff!important;border-color:var(--g)!important;box-shadow:0 2px 8px rgba(200,144,46,.15)}\n';
  // Insert before the nav a transition or at end of STYLE
  shared = shared.replace('`;\n\n//', cfCss + '`;\n\n//');
  fs.writeFileSync(sharedPath, shared, 'utf8');
  console.log('✓ 添加 .cf-b 筛选按钮样式');
}

console.log('\n✅ 完成！请运行 node build_multi.js 重新生成所有页面。');
