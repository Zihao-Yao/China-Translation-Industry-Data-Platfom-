# expand_companies.py - 扩增企业数据到build_shared.js
# 直接使用Python替换（比Node.js更可靠）

import os, re

d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
path = os.path.join(d, 'build_shared.js')

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 新的cos数据
new_cos = '''var cos=[
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
  {i:"langboat",n:"澜舟科技",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"孟子大模型赋能多语言翻译"},
  {i:"sogou",n:"搜狗翻译",co:"中国",t:"AI翻译企业",s:"ai-startup",d:"神经网络翻译+图像翻译"},
  // ==== 中小型专业翻译企业 ====
  {i:"echeng",n:"译程翻译",co:"中国",t:"专业翻译",s:"specialized",d:"法律医学翻译专业服务商"},
  {i:"lan-bridge",n:"朗桥翻译",co:"中国",t:"专业翻译",s:"specialized",d:"小语种翻译+同声传译"},
  {i:"jishi",n:"及时语翻译",co:"中国",t:"专业翻译",s:"specialized",d:"在线翻译+人工翻译一站式"},
  {i:"kingsun",n:"金太阳翻译",co:"中国",t:"专业翻译",s:"specialized",d:"机电翻译+专利翻译"},
  // ==== 国际企业在华分支 ====
  {i:"tp-cn",n:"TransPerfect中国",co:"中国",t:"外资在华",s:"intl-cn",d:"TransPerfect上海/北京分公司"},
  {i:"lion-cn",n:"Lionbridge中国",co:"中国",t:"外资在华",s:"intl-cn",d:"Lionbridge大连/北京中心"},
  {i:"welo-cn",n:"Welocalize中国",co:"中国",t:"外资在华",s:"intl-cn",d:"Welocalize北京分公司"},
];'''

# 新的cod
new_cod = '''var cod={
  "rws":"RWS集团全球领先，旗下拥有Trados工具，年营收8.5亿英镑。150+语种，6500+员工。",
  "tp":"TransPerfect全球最大私营语言公司，170+语种，年营收12亿美元。10,000+员工。",
  "lion":"Lionbridge全球领先，5000+员工，350+语种，年营收约7亿美元。",
  "welo":"Welocalize专注AI驱动语言服务，游戏本地化全球领先，250+语种。年营收约5亿美元。",
  "gtc":"中译语通为中国对外翻译旗下，服务外交部等国家级机构。年营收约15亿人民币。",
  "tn":"传神语联建设语联网平台，百万级译员，年处理超40亿字。年营收约8亿人民币。",
  "sun":"舜禹环球通专注IP+游戏本地化，年翻译超5亿字。年营收约5亿人民币。",
  "cema":"策马翻译为CATTI官方合作机构，每年培养数千翻译人才。年营收约3亿人民币。",
  "yd":"网易有道AI+人工翻译50+语种，数亿用户，基于自研大模型。",
  "hw":"华为翻译中心支撑全球170+国家业务，覆盖所有华为产品多语言版本。",
  "byted":"字节跳动翻译团队负责TikTok、抖音等产品全球多语言内容，日均翻译量数亿字。",
  "alibaba":"阿里巴巴语言服务支持阿里国际站、速卖通、Lazada等跨境电商平台翻译。",
  "tencent":"腾讯翻译和游戏本地化团队支撑《王者荣耀》《PUBG Mobile》等游戏出海翻译。",
  "baidu":"百度翻译基于自研NMT模型，支持200+语种，日均翻译请求超千亿字符。",
  "xiaomi":"小米国际翻译团队负责MIUI系统、IoT产品多语言版本，覆盖80+语种。",
  "deepseek":"DeepSeek大模型在翻译领域表现突出，2025年推出DeepSeek-R1翻译版，性价比领先。",
  "langboat":"澜舟科技基于孟子大模型，提供金融、法律等领域定制化翻译解决方案。",
  "sogou":"搜狗翻译支持100+语种，特色是图像翻译和语音翻译，每日服务数亿用户。",
  "echeng":"译程翻译专注法律、医学、工程等垂直领域翻译，年翻译量超5000万字。",
  "lan-bridge":"朗桥翻译专注小语种翻译与同声传译，覆盖50+语种，在西南地区有较强影响力。",
  "jishi":"及时语翻译提供在线翻译+人工翻译一站式服务，主打快速交付，1小时起交付。",
  "kingsun":"金太阳翻译专注机电、专利领域翻译，是多家世界500强企业长期合作伙伴。",
  "tp-cn":"TransPerfect上海/北京分公司，为中国企业出海提供本地化与翻译服务。",
  "lion-cn":"Lionbridge大连/北京中心，专注IT本地化与AI训练数据服务。",
  "welo-cn":"Welocalize北京分公司，专注游戏本地化与创意翻译服务。"
};'''

# 新的courl
new_courl = '''var courl={
  "rws":["https://www.rws.com/careers/","https://www.rws.com"],
  "tp":["https://www.transperfect.com/careers/","https://www.transperfect.com"],
  "lion":["https://www.lionbridge.com/careers/","https://www.lionbridge.com"],
  "welo":["https://www.welocalize.com/careers/","https://www.welocalize.com"],
  "gtc":["https://www.gtcom.com.cn/","https://www.gtcom.com.cn"],
  "tn":["https://www.transn.com/","https://www.transn.com"],
  "sun":["https://www.sunyu.com/","https://www.sunyu.com"],
  "cema":["https://www.cemachina.com/","https://www.cemachina.com"],
  "yd":["https://f.youdao.com/joinus/","https://f.youdao.com"],
  "hw":["https://career.huawei.com/","https://career.huawei.com"],
  "byted":["https://jobs.bytedance.com/","https://www.bytedance.com"],
  "alibaba":["https://talent.alibaba.com/","https://www.alibabagroup.com"],
  "tencent":["https://careers.tencent.com/","https://www.tencent.com"],
  "baidu":["https://talent.baidu.com/","https://www.baidu.com"],
  "xiaomi":["https://xiaomi.jobs.f.mioffice.cn/","https://www.mi.com"],
  "deepseek":["https://chat.deepseek.com/","https://www.deepseek.com"],
  "langboat":["https://www.langboat.com/","https://www.langboat.com"],
  "sogou":["https://zhaopin.sogou.com/","https://www.sogou.com"],
  "echeng":["https://www.echeng.com/","https://www.echeng.com"],
  "lan-bridge":["https://www.lan-bridge.com/","https://www.lan-bridge.com"],
  "jishi":["https://www.jishiyu.com/","https://www.jishiyu.com"],
  "kingsun":["https://www.kingsuntrans.com/","https://www.kingsuntrans.com"],
  "tp-cn":["https://www.transperfect.com/careers/","https://www.transperfect.com"],
  "lion-cn":["https://www.lionbridge.com/careers/","https://www.lionbridge.com"],
  "welo-cn":["https://www.welocalize.com/careers/","https://www.welocalize.com"]
};'''

# ===== 替换 =====
# 使用更精确的匹配
old_cos_match = re.search(r'var cos=\[.*?\];', content, re.DOTALL)
if old_cos_match:
    content = content[:old_cos_match.start()] + new_cos + content[old_cos_match.end():]
    print('cos replaced')
else:
    print('cos NOT found')

old_cod_match = re.search(r'var cod=\{.*?\};', content, re.DOTALL)
if old_cod_match:
    content = content[:old_cod_match.start()] + new_cod + content[old_cod_match.end():]
    print('cod replaced')
else:
    print('cod NOT found')

old_courl_match = re.search(r'var courl=\{.*?\};', content, re.DOTALL)
if old_courl_match:
    content = content[:old_courl_match.start()] + new_courl + content[old_courl_match.end():]
    print('courl replaced')
else:
    print('courl NOT found')

# ===== 替换 js_renderCos 函数 =====
new_render_cos = '''function js_renderCos() {
  return \`
function filterCompanies(){
  var q = document.getElementById('cs').value.toLowerCase();
  renderFilteredCos(q);
}
function filterBySize(size, btn){
  document.querySelectorAll('.cf-b').forEach(function(b){b.classList.remove('ac');});
  if(btn) btn.classList.add('ac');
  var q = document.getElementById('cs').value.toLowerCase();
  renderFilteredCos(q, size);
}
function renderFilteredCos(q, size){
  if(!size) size = 'all';
  var filtered = cos.filter(function(co){
    var n = co.n.indexOf(q) !== -1, d = co.d.indexOf(q) !== -1;
    return (n || d || q === '') && (size === 'all' || co.s === size);
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
}'''

old_render_match = re.search(r'function js_renderCos\(\) \{[\s\S]*?^\};', content, re.MULTILINE)
if old_render_match:
    content = content[:old_render_match.start()] + new_render_cos + content[old_render_match.end():]
    print('js_renderCos replaced')
else:
    print('js_renderCos NOT found')

# ===== 添加 .cf-b CSS 样式 =====
# 在STYLE末尾、最后一个`;之前插入
if '.cf-b' not in content:
    cf_css = '.cf-b.ac,.cf-b:hover{background:var(--g)!important;color:#fff!important;border-color:var(--g)!important;box-shadow:0 2px 8px rgba(200,144,46,.15)}\n'
    # Find the end of STYLE - last backtick before //
    last_bc = content.rfind('`', 0, content.find('// ============ JS Data'))
    if last_bc > 0 and last_bc < content.find('const JS_DATA'):
        content = content[:last_bc] + cf_css + content[last_bc:]
        print('.cf-b CSS added')
    else:
        print('Could not find STYLE end')
else:
    print('.cf-b already exists')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('\\nbuild_shared.js saved')
