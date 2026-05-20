// build_pages_2.js - 生成子页面 6-10
const f = require('fs');
const p = require('path');
const d = __dirname;
const sh = require(p.join(d, 'build_shared.js'));

// ============ 6. page_recruitment.html ============
const body6 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">招聘信息</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:12px;">2025-2026年翻译行业实时岗位 · 每次打开页面自动刷新最新消息</p>' +
'<div id="rts" style="text-align:center;margin-bottom:16px;">' +
'<span style="color:var(--t2);font-size:.8rem;" id="lu">正在获取最新岗位信息...</span>' +
'<button onclick="rfj()" style="margin-left:12px;padding:6px 18px;border:1px solid var(--g);border-radius:16px;background:#fff;color:var(--g);font-size:.8rem;cursor:pointer;">🔄 刷新岗位</button>' +
'</div>' +
'<div style="text-align:center;margin-bottom:20px;display:flex;flex-wrap:wrap;justify-content:center;gap:8px;">' +
'<a href="https://www.zhipin.com/web/geek/job?city=100010000&query=%E7%BF%BB%E8%AF%91" target="_blank" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;color:var(--t2);font-size:.82rem;text-decoration:none;">🔍 BOSS直聘 翻译岗</a>' +
'<a href="https://www.liepin.com/zhaopin/?key=%E7%BF%BB%E8%AF%91" target="_blank" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;color:var(--t2);font-size:.82rem;text-decoration:none;">🔍 猎聘 翻译岗</a>' +
'<a href="https://sou.zhaopin.com/?jl=765&kw=%E7%BF%BB%E8%AF%91&kt=3" target="_blank" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;color:var(--t2);font-size:.82rem;text-decoration:none;">🔍 智联 翻译岗</a>' +
'<a href="https://we.51job.com/pc/search?keyword=%E7%BF%BB%E8%AF%91" target="_blank" style="padding:6px 16px;border:1px solid var(--b);border-radius:20px;color:var(--t2);font-size:.82rem;text-decoration:none;">🔍 前程无忧 翻译岗</a></div>' +
'<div class="tb"><table><thead><tr><th>岗位</th><th>学历</th><th>CATTI</th><th>经验</th><th>技能</th><th>薪资</th></tr></thead><tbody id="rt"></tbody></table></div>' +
'<div style="margin-top:16px;text-align:center;" id="jb"></div>' +
'<h3 style="color:var(--g);margin:30px 0 16px;">🔥 最新热门岗位（定时聚合BOSS直聘、猎聘、智联招聘、前程无忧）</h3>' +
'<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:12px;">' +
'<div style="display:flex;gap:8px;flex-wrap:wrap;" id="jfl">' +
'<button onclick="fjf(\'all\',this)" style="padding:4px 12px;border:1px solid var(--b);border-radius:14px;background:var(--g);color:#fff;font-size:.75rem;cursor:pointer;">全部</button>' +
'<button onclick="fjf(\'zhipin\',this)" style="padding:4px 12px;border:1px solid var(--b);border-radius:14px;background:#fff;color:var(--t2);font-size:.75rem;cursor:pointer;">BOSS直聘</button>' +
'<button onclick="fjf(\'liepin\',this)" style="padding:4px 12px;border:1px solid var(--b);border-radius:14px;background:#fff;color:var(--t2);font-size:.75rem;cursor:pointer;">猎聘</button>' +
'<button onclick="fjf(\'zhaopin\',this)" style="padding:4px 12px;border:1px solid var(--b);border-radius:14px;background:#fff;color:var(--t2);font-size:.75rem;cursor:pointer;">智联招聘</button>' +
'<button onclick="fjf(\'51job\',this)" style="padding:4px 12px;border:1px solid var(--b);border-radius:14px;background:#fff;color:var(--t2);font-size:.75rem;cursor:pointer;">前程无忧</button>' +
'</div>' +
'<span style="font-size:.72rem;color:var(--t2);" id="jcount">共加载 0 个岗位</span>' +
'</div>' +
'<div id="jl"></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">招聘市场分析（2025-2026年数据）</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">' +
'<strong>翻译岗位城市分布：</strong>北京(28%)、上海(22%)、广州(15%)、深圳(12%)、杭州(6%)、南京(5%)、成都(4%)、武汉(3%)、其他(5%)。一线城市仍集中了75%以上的翻译岗位需求。<br><br>' +
'<strong>热门语种需求排名：</strong>英语(52%)、日语(12%)、德语(8%)、法语(7%)、韩语(6%)、西班牙语(5%)、俄语(4%)、阿拉伯语(3%)、其他(3%)。小语种翻译虽然总体需求较少，但竞争也小，且薪资普遍高出英语20-50%。<br><br>' +
'<strong>行业薪资趋势：</strong>2025年翻译行业平均薪资同比增长约5-8%，略高于社会平均增幅。AI翻译技术岗位薪资增幅最快（约15-20%）。CATTI一级持证译员平均薪资高出行业平均水平约35%。<br><br>' +
'<strong>灵活就业趋势：</strong>翻译行业自由职业占比持续上升，2025年约35%的翻译从业者选择自由或兼职工作方式。约70%的翻译企业支持远程或混合办公模式。</p></div></section>';
const script6 = sh.js_liveJobs();
f.writeFileSync(p.join(d, 'page_recruitment.html'), sh.wrap('招聘信息', body6, script6, 'page_recruitment.html'), 'utf8');
console.log('✓ page_recruitment.html');

// ============ 7. page_ranking.html ============
const sc9 = [
  ["北京大学","A+","A+"],["北京外国语大学","A+","A+"],["上海外国语大学","A+","A+"],["广东外语外贸大学","A+","A+"],["黑龙江大学","A+","A+"],
  ["上海交通大学","A","A"],["南京大学","A","A"],["浙江大学","A","A+"],["复旦大学","A","A"],["武汉大学","A-","A"],["北京语言大学","A","A"],
  ["西安外国语大学","A","A"],["四川大学","A-","A-"],["中山大学","A-","A-"],["厦门大学","A-","A-"],["华东师范大学","A-","A"],["山东大学","A-","A-"],
  ["北京航空航天大学","B+","A"],["华中科技大学","B+","B+"],["南开大学","B+","B+"],["四川外国语大学","B+","A"],["大连外国语大学","B+","A"],
  ["吉林大学","B+","B"],["对外经济贸易大学","B+","B+"],["南京师范大学","B+","B+"],["湖南师范大学","B+","B"],["上海大学","B+","B+"],
  ["天津外国语大学","B","B+"],["北京第二外国语学院","B","B+"],["郑州大学","B","B"],["河南大学","B","B"],["云南大学","B","B"],["兰州大学","B","B-"],
  ["福州大学","B","B-"],["南昌大学","B","B-"],["安徽大学","B","B-"],["东北大学","B","B-"],["陕西师范大学","B","B-"],["北京科技大学","B","B"],
  ["北京理工大学","B","B-"],["首都师范大学","B","B"],["苏州大学","B","B"],["南京航空航天大学","B","B-"],["南京理工大学","B","B-"],
  ["中国海洋大学","B","B"],["中国政法大学","B","B+"],["中南大学","B","B-"],["电子科技大学","B","B-"],["西南交通大学","B","B-"],
  ["合肥工业大学","B","B-"],["河北大学","B-","B"],["山西大学","B-","B-"],["内蒙古大学","B-","B-"],["辽宁大学","B-","B-"],["延边大学","B-","B"],
  ["上海对外经贸大学","B-","B"],["杭州师范大学","B-","B-"],["广东工业大学","B-","B-"],["华南理工大学","B-","B"],["华南师范大学","B-","B"],
  ["广西大学","B-","B-"],["海南大学","B-","B-"],["贵州大学","B-","B-"],["西安交通大学","B-","B-"],["西北大学","B-","B-"],
  ["兰州交通大学","B-","B-"],["中国民用航空飞行学院","C+","B-"],["中国民航大学","B-","B-"],["华中师范大学","B+","B+"],["东北师范大学","B+","B"],
  ["西南大学","B+","B+"],["暨南大学","B+","B+"],["中国石油大学","B-","B-"],["中国地质大学","B-","B-"],["中国矿业大学","B-","B-"],
  ["南京邮电大学","B-","C+"],["青岛大学","B-","B-"],["宁波大学","B-","B"],["深圳大学","B-","B-"],["华侨大学","C+","B-"],["扬州大学","C+","B-"],
  ["湖北大学","C+","B-"],["湖南大学","B","B"],["重庆大学","B-","B-"],["东南大学","B-","B"],["中南财经政法大学","B-","B"],
  ["太原理工大学","C+","B-"],["新疆大学","B-","B-"],["宁夏大学","C+","B-"],["青海民族大学","C+","C+"],["西藏大学","C+","C+"],
  ["中国传媒大学","B+","A-"],["外交学院","B+","B+"],["国际关系学院","B","B"],["上海财经大学","B-","B"],["中央财经大学","B-","B"],
  ["西南财经大学","C+","B-"],["中南民族大学","C+","C+"],["浙江工商大学","B-","B"],["北京工商大学","C+","C+"],["天津大学","B-","B-"],
  ["大连理工大学","B-","B-"],["华东政法大学","B-","B"],["西南政法大学","B-","B-"],["西北政法大学","C+","B-"],["山东科技大学","C+","C+"],
  ["武汉理工大学","B-","B-"],["哈尔滨工程大学","B-","B-"],["北京交通大学","B-","B-"],["北京邮电大学","C+","B-"],["浙江大学城市学院","C+","C+"],
  ["浙江理工大学","C+","C+"],["南京信息工程大学","C+","C+"],["上海海事大学","B-","B-"],["大连海事大学","B-","B-"]
];
const scJson = JSON.stringify(sc9);
const body7 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">院校排行</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:12px;">翻译专业院校排名 · 点击查看院校详情与毕业生去向</p>' +
'<div class="sb"><input type="text" id="ss" placeholder="搜索院校名称..." oninput="fs();checkXh();"></div><div id="xhMsg" style="display:none;text-align:center;padding:20px;margin-bottom:16px;background:linear-gradient(135deg,rgba(200,144,46,.08),rgba(200,144,46,.02));border:2px dashed var(--g);border-radius:12px;font-size:1.4rem;font-weight:700;color:var(--g);letter-spacing:4px;"></div>' +
'<div class="sg" id="sg"></div>' +
'<div class="mo" id="smo"><div class="md"><button class="x" onclick="scm()">&#x2715;</button><div id="smc"></div></div></div>' +
'<div class="c2" style="margin-top:20px;"><h3 style="color:var(--g);margin-bottom:12px;">毕业生去向总览</h3>' +
'<p style="color:var(--t2);font-size:.85rem;margin-bottom:16px;">基于115所MTI/BTI院校历年毕业生就业数据，统计主要翻译企业的院校来源。点击下方标签筛选特定企业。</p>' +
'<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;" id="cf"></div>' +
'<div id="cct" style="font-size:.85rem;color:var(--t2);line-height:2;"></div>' +
'</div>' +
'<div class="c2" style="margin-top:20px;"><h3 style="color:var(--g);margin-bottom:12px;">评级标准说明（参考第五轮学科评估）</h3>' +
'<p style="color:var(--t2);font-size:.85rem;line-height:1.7;">' +
'<strong>A+</strong> 全国前2% · <strong>A</strong> 2%-5% · <strong>A-</strong> 5%-10% · <strong>B+</strong> 10%-20% · <strong>B</strong> 20%-30% · <strong>B-</strong> 30%-40% · <strong>C+</strong> 40%-50% · <strong>C</strong> 50%-60%<br>' +
'注：评级综合参考第五轮学科评估结果、翻译专业学位点评估及行业综合排名，非单一学科评估结果。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">翻译专业博士点（DTI试点院校）</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">翻译博士专业学位（DTI）自2023年开启试点，首批28所高校获得DTI培养资格，2025年首批DTI博士入学：<br><br>' +
'北京大学 · 北京外国语大学 · 上海外国语大学 · 广东外语外贸大学 · 复旦大学 · 南京大学 · 浙江大学 · 武汉大学 · 西安外国语大学 · 四川外国语大学 · 大连外国语大学 · 北京语言大学 · 黑龙江大学 · 四川大学 · 中山大学 · 厦门大学 · 华东师范大学 · 山东大学 · 南开大学 · 吉林大学 · 天津外国语大学 · 北京第二外国语学院 · 南京师范大学 · 湖南师范大学 · 对外经济贸易大学 · 上海交通大学 · 华中科技大学 · 中国政法大学</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">翻译学科发展说明</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">翻译学科评估中，MTI和BTI分别进行评级。评估维度包括：师资队伍与资源、人才培养质量、科学研究水平、社会服务与学科声誉。多所高校正在推进翻译技术与AI融合课程改革。</p></div></section>';
const script7 = [
  'var sc=' + JSON.stringify(sc9) + ';',
  'var _scData=[];',
  'sc.forEach(function(s,i){_scData.push({n:s[0],m:s[1],b:s[2]});});',

  'function renderSchools(){var h="";_scData.forEach(function(s){h+="<div class=\\"si\\" onclick=\\"showSc(\\u0027"+encodeURIComponent(s.n)+"\\u0027)\\">"+s.n+"<span class=\\"stp\\">MTI "+s.m+" / BTI "+s.b+"</span></div>";});document.getElementById("sg").innerHTML=h;window._allSchools=_scData;}',

  'function fs(){var q=document.getElementById("ss").value.toLowerCase();var filtered=window._allSchools.filter(function(s){return s.n.indexOf(q)!==-1||q==="";});var h="";filtered.forEach(function(s){h+="<div class=\\"si\\" onclick=\\"showSc(\\u0027"+encodeURIComponent(s.n)+"\\u0027)\\">"+s.n+"<span class=\\"stp\\">MTI "+s.m+" / BTI "+s.b+"</span></div>";});document.getElementById("sg").innerHTML=h;}',

  'function showSc(en){var nm=decodeURIComponent(en);var u=scUrls[nm]||{};var s=null;_scData.forEach(function(x){if(x.n===nm)s=x;});if(!s)return;var h="<h2>"+s.n+"</h2><p><strong>MTI\\u8bc4\\u7ea7:</strong> "+s.m+"</p><p><strong>BTI\\u8bc4\\u7ea7:</strong> "+s.b+"</p>";if(u.url)h+="<p><strong>\\u7ffb\\u8bd1\\u5b66\\u9662\\u5b98\\u7f51:</strong> <a href=\'"+u.url+"\u0027 target=\'_blank\u0027 style=\'color:var(--g);\u0027>"+u.url+"</a></p>";if(u.career&&u.career.length){h+="<p><strong>\\u6bd5\\u4e1a\\u751f\\u5178\\u578b\\u53bb\\u5411:</strong></p><div style=\'display:flex;flex-wrap:wrap;gap:6px;\u0027>";u.career.forEach(function(c){h+="<span style=\'background:rgba(200,144,46,.08);color:#a8731e;padding:3px 12px;border-radius:12px;font-size:.8rem;\u0027>"+c+"</span>";});h+="</div>";}document.getElementById("smc").innerHTML=h;document.getElementById("smo").className="mo s";}',

  'function scm(){document.getElementById("smo").className="mo";}',

  'function renderCareerOverview(){var comps={};_scData.forEach(function(s){var u=scUrls[s.n];if(u&&u.career){u.career.forEach(function(c){if(!comps[c])comps[c]=[];comps[c].push(s.n);});}});var sorted=Object.keys(comps).sort(function(a,b){return comps[b].length-comps[a].length;});var btnHtml="<button class=\'cf-b ac\u0027 onclick=\'filterCareer(\\u0027all\\u0027,this)\u0027 style=\'padding:4px 14px;border:1px solid var(--b);border-radius:16px;background:#fff;color:var(--t2);font-size:.78rem;cursor:pointer;\u0027>\\u5168\\u90e8</button>";sorted.forEach(function(k){btnHtml+="<button class=\'cf-b\u0027 onclick=\'filterCareer(\\u0027"+k+"\\u0027,this)\u0027 style=\'padding:4px 14px;border:1px solid var(--b);border-radius:16px;background:#fff;color:var(--t2);font-size:.78rem;cursor:pointer;\u0027>"+k+"<span style=\'color:var(--g);font-size:.7rem;margin-left:4px;\u0027>("+comps[k].length+")</span></button>";});document.getElementById("cf").innerHTML=btnHtml;window._careerComps=comps;filterCareer("all");}',

  'function filterCareer(comp,btn){if(btn){document.querySelectorAll("#cf .cf-b").forEach(function(b){b.classList.remove("ac");});btn.classList.add("ac");}var comps=window._careerComps;var h="";if(comp==="all"){var sorted=Object.keys(comps).sort(function(a,b){return comps[b].length-comps[a].length;});sorted.forEach(function(k){h+="<div style=\'margin-bottom:12px;\u0027><strong style=\'color:var(--g);font-size:.9rem;\u0027>"+k+"</strong> <span style=\'color:var(--t2);font-size:.78rem;\u0027>("+comps[k].length+"\\u6240\\u9662\\u6821)</span><br>"+comps[k].join("\\u3001")+"</div>";});}else{var schools=comps[comp]||[];h="<strong style=\'color:var(--g);font-size:.95rem;\u0027>"+comp+"</strong> <span style=\'color:var(--t2);font-size:.8rem;\u0027>("+schools.length+"\\u6240\\u9662\\u6821\\u6765\\u6e90)</span><br><br>"+schools.join("\\u3001");}document.getElementById("cct").innerHTML=h;}',

  'renderSchools();',
  'renderCareerOverview();',
].join('\n');
f.writeFileSync(p.join(d, 'page_ranking.html'), sh.wrap('院校排行', body7, script7, 'page_ranking.html'), 'utf8');
console.log('✓ page_ranking.html');

// ============ 8. page_career.html ============
const body8 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">职业路径</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:30px;">从校园到职场的多条发展路径</p>' +
'<div class="pg">' +
'<div class="pc"><div class="ico">🎯</div><h3>翻译专业路径</h3><p>BTI/MTI科班→CATTI二级/一级→企业in-house/自由译员→高级审校/项目经理。CATTI报考突破40万。</p></div>' +
'<div class="pc"><div class="ico">📖</div><h3>英语专业路径</h3><p>英语本科/硕士→补充翻译理论与实践→CATTI二级→企业翻译/国际商务。约40%从业者来自英语背景。</p></div>' +
'<div class="pc"><div class="ico">🌐</div><h3>小语种路径</h3><p>日语/法语/德语/西语/俄语/阿语/韩语→CATTI小语种证书→区域专家。一带一路人才缺口大，时薪1.5-3倍。</p></div>' +
'<div class="pc"><div class="ico">⚖️</div><h3>跨专业复合路径</h3><p>法律/医学/IT/金融背景+翻译技能→领域专家。法律翻译500-1500元/时，医学400-1200元/时。</p></div>' +
'<div class="pc"><div class="ico">💻</div><h3>翻译技术路径</h3><p>计算机/语言学/信息管理→翻译技术/AI数据管理→语言技术架构师。年薪35-80万，岗位同比增45%。</p></div></div>' +
'<div class="c2" style="margin-top:30px;"><h3 style="color:var(--g);margin-bottom:12px;">职业发展深度建议</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>1. 翻译专业应届生入行策略</strong> - 建议MTI在读期间即开始准备CATTI二级证书（2025年CATTI报考人数突破40万）。优先选择有完整培训体系的企业如中译语通、RWS、策马翻译等。入行初期建议从in-house译员做起，积累行业经验后再考虑转向自由职业。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>2. 非翻译专业转行机会</strong> - 法律背景+英语 = 法律翻译（时薪500-1500元）；医学背景+英语 = 医学翻译（时薪400-1200元）；计算机背景+语言 = 翻译技术开发（年薪35-80万）。约40%的翻译行业从业者来自非翻译专业背景。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>3. 自由译员生存指南</strong> - 头部自由译员年收入可达30-80万+，但需要3-5年的客户积累期。建议通过ProZ、TranslatorsCafe等国际平台接单。掌握CAT工具(Trados、MemoQ)是基本门槛。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>4. AI时代翻译技能升级路线</strong> - 第一层：基础翻译+CAT工具（必备）；第二层：译后编辑+AIGC提示词工程（2025年新增）；第三层：翻译项目管理+质量评估（管理方向）；第四层：语言数据训练+AI模型微调（技术方向）。2025年翻译技术岗位同比增长45%。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>5. 国际组织翻译岗位</strong> - 联合国、欧盟、WHO等国际组织提供稳定的翻译岗位。2025年联合国YPP考试翻译类岗位竞争比1:47。建议关注UN Careers网站，CATTI一级证书和3年以上经验是基本门槛。国际组织译员年薪约40-80万人民币。</p></div></section>';
f.writeFileSync(p.join(d, 'page_career.html'), sh.wrap('职业路径', body8, '', 'page_career.html'), 'utf8');
console.log('✓ page_career.html');

// ============ 9. page_global.html ============
const body9 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">全球视野</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:30px;">2025年全球翻译市场（中国翻译协会2026年报告）</p>' +
'<div class="dr"><div class="di"><div class="v">~560亿$</div><div class="lb">全球市场规模</div></div><div class="di"><div class="v">+4.2%</div><div class="lb">年增长率</div></div><div class="di"><div class="v">55岁</div><div class="lb">欧洲译员中位年龄</div></div><div class="di"><div class="v">60%+</div><div class="lb">境外订单来自欧洲</div></div></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:6px;">美洲市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">北美全球最大市场（36%）。AI驱动本地化需求激增。</p>' +
'<h3 style="color:var(--g);margin-bottom:6px;">欧洲市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。</p>' +
'<h3 style="color:var(--g);margin-bottom:6px;">亚太市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">增长最快，中日韩印为四大引擎。增速6.8%。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">全球翻译市场地域分布</h3>' +
'<div class="cb"><span class="la">美洲</span><div class="bt"><div class="bf" style="width:36%;">36%</div></div><span class="pc">36%</span></div>' +
'<div class="cb"><span class="la">欧洲</span><div class="bt"><div class="bf" style="width:31%;">31%</div></div><span class="pc">31%</span></div>' +
'<div class="cb"><span class="la">亚太</span><div class="bt"><div class="bf" style="width:24%;">24%</div></div><span class="pc">24%</span></div>' +
'<div class="cb"><span class="la">其他</span><div class="bt"><div class="bf" style="width:9%;">9%</div></div><span class="pc">9%</span></div></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">全球翻译市场深度分析</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">欧洲是全球翻译服务第二大市场（占总市场31%），但在中国翻译企业的境外收入中占比超过60%，显示中国翻译企业与欧洲市场的紧密联系。欧盟28种官方语言的翻译需求巨大，GDPR也对数据处理和法律翻译提出了更高要求。欧洲译员的中位年龄高达55岁，年轻译员严重不足，这为中国年轻译员进入欧洲市场提供了窗口机会。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">美洲市场（主要是北美）占全球36%的份额，是美国语言服务企业的传统优势区域。AI机器翻译在美洲的发展最快，大量硅谷企业正在将翻译纳入AI工作流。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">亚太地区(24%)是全球翻译市场增长最快的区域，年均增速6.8%。中日韩印四国贡献了亚太地区绝大部分翻译市场份额。中东和东南亚市场正在快速崛起。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">全球AI翻译技术趋势（2025-2026）</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">大语言模型(LLM)正在重塑翻译行业格局。2025年，基于LLM的翻译质量在通用领域已接近甚至超越传统NMT模型，在创意翻译、文学翻译等领域展现出独特优势。但LLM翻译也面临幻觉(Hallucination)、一致性、成本控制等挑战。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">语音翻译市场持续扩大。2025年实时语音翻译设备和服务市场规模约45亿美元，同比增长28%。AI语音克隆+口型同步技术的结合使视频本地化进入新纪元。</p>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">2026年中国翻译协会年会已于2026年4月25日在武汉大学召开，发布《2026中国翻译行业发展报告》和《2026全球翻译行业发展报告》两大重磅报告。</p></div></section>';
f.writeFileSync(p.join(d, 'page_global.html'), sh.wrap('全球视野', body9, '', 'page_global.html'), 'utf8');
console.log('✓ page_global.html');

// ============ 10. page_reports.html ============
const body10 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">数据报告</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业历年报告总览</p>' +
'<div id="rd"></div>' +
'<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">行业历史回顾（2022-2025）</h3>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:10px;">2022年：行业稳步增长</h3><p style="color:var(--t2);font-size:.9rem;line-height:1.8;">全年产值550亿元，从业人员620万+。北京冬奥会翻译服务成为年度行业亮点，远程同传首次大规模应用。CATTI报考人数约28万。游戏出海翻译需求开始快速增长。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:10px;">2023年：AI翻译元年</h3><p style="color:var(--t2);font-size:.9rem;line-height:1.8;">全年产值686.4亿元，同比增长24.8%。ChatGPT引发行业剧烈讨论。CATTI报考人数突破35万。DTI翻译博士专业学位开始试点。MTI培养单位增至354所。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:10px;">2024年：人机协同时代</h3><p style="color:var(--t2);font-size:.9rem;line-height:1.8;">全年产值708亿元，达到近年峰值。AI翻译企业跃升至1200家。约54%的企业已将AI翻译纳入工作流。《黑神话：悟空》13+语言版本发布。翻译技术岗位招聘量同比增长35%。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:10px;">2025年：深度调整与AI融合</h3><p style="color:var(--t2);font-size:.9rem;line-height:1.8;">全年产值701.2亿元，首现微幅下降（-0.96%）。AI翻译企业达2183家（+81.9%）。CATTI报考人数突破40万。短剧出海翻译订单环比增长超200%。2026年4月25日中国翻译协会年会在武汉大学召开。</p></div>' +
'<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">中国翻译行业常见问题（FAQ）</h3>' +
'<div class="c2"><p style="color:var(--g);font-weight:600;margin-bottom:4px;">Q: AI会完全替代翻译工作吗？</p><p style="color:var(--t2);font-size:.88rem;line-height:1.7;">A: 不会。中国翻译协会2026年报告显示专职翻译人数从110万增长到113.5万。高端翻译需求反而增长。行业共识是人机协同，而非AI替代人。</p></div>' +
'<div class="c2"><p style="color:var(--g);font-weight:600;margin-bottom:4px;">Q: 翻译专业(MTI)还值得读吗？</p><p style="color:var(--t2);font-size:.88rem;line-height:1.7;">A: 值得，但需调整学习方向。MTI培养单位增至374所，竞争激烈。翻译+计算机、翻译+法律等复合方向毕业生就业前景好。DTI博士点设立形成完整学历晋升通道。</p></div>' +
'<div class="c2"><p style="color:var(--g);font-weight:600;margin-bottom:4px;">Q: 自由译员的收入和前景如何？</p><p style="color:var(--t2);font-size:.88rem;line-height:1.7;">A: 头部自由译员年收入可达30-80万+，需3-5年客户积累期。约35%从业者选择自由或兼职工作方式。主要接单渠道包括ProZ、TranslatorsCafe、Upwork等。</p></div>' +
'<div class="c2"><p style="color:var(--g);font-weight:600;margin-bottom:4px;">Q: 哪些翻译领域前景最好？</p><p style="color:var(--t2);font-size:.88rem;line-height:1.7;">A: 游戏本地化、视频本地化（+34%）、法律翻译、医学翻译、AI数据翻译、短剧翻译（+200%）、同声传译。小语种翻译需求增长迅速，供给严重不足。</p></div>' +
'<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">常用翻译工具清单</h3>' +
'<div class="tb"><table><thead><tr><th>类型</th><th>工具名称</th><th>开发商</th><th>费用</th></tr></thead><tbody>' +
'<tr><td>CAT</td><td>Trados Studio</td><td>RWS</td><td>约8000元/年</td></tr><tr><td>CAT</td><td>memoQ</td><td>Kilgray</td><td>收费</td></tr>' +
'<tr><td>CAT</td><td>OmegaT</td><td>开源</td><td>免费</td></tr><tr><td>云CAT</td><td>Smartcat</td><td>Smartcat</td><td>基础免费</td></tr>' +
'<tr><td>机器翻译</td><td>DeepL</td><td>DeepL GmbH</td><td>基础免费</td></tr><tr><td>机器翻译</td><td>百度翻译</td><td>百度</td><td>免费</td></tr>' +
'<tr><td>质量评估</td><td>TQAudit</td><td>TAUS</td><td>收费</td></tr><tr><td>语音翻译</td><td>iFLYTEK Translator</td><td>科大讯飞</td><td>硬件+服务</td></tr></tbody></table></div>' +
'<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">CATTI考试体系</h3>' +
'<div class="tb"><table><thead><tr><th>级别</th><th>类型</th><th>考试科目</th><th>难度</th><th>含金量</th></tr></thead><tbody>' +
'<tr><td>CATTI一级</td><td>口译/笔译</td><td>实务+答辩</td><td>★★★★★</td><td>高级职称认可</td></tr>' +
'<tr><td>CATTI二级</td><td>口译/笔译</td><td>综合能力+实务</td><td>★★★★</td><td>核心证书</td></tr>' +
'<tr><td>CATTI三级</td><td>口译/笔译</td><td>综合能力+实务</td><td>★★★</td><td>入门级认可</td></tr></tbody></table></div>' +
'<p style="color:var(--t2);font-size:.83rem;margin-top:8px;">2025年CATTI报考人数40万+，累计持证人数147万+。2025年起新增AI辅助翻译测试科目。</p>' +
'<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">翻译行业大事记（2023-2026）</h3>' +
'<div class="c2"><p style="color:var(--t2);font-size:.88rem;line-height:2;">' +
'2023-Q1: ChatGPT发布引发翻译行业AI讨论热潮<br>' +
'2023-Q2: DTI翻译博士试点启动（首批20+高校）<br>' +
'2023-Q4: 中国翻译协会年会在北京举行<br>' +
'2024-Q2: 《黑神话：悟空》13语种本地化启动<br>' +
'2024-Q4: 中国翻译协会年会在长沙举行<br>' +
'2025-Q1: DeepSeek等国产大模型冲击AI翻译市场<br>' +
'2025-Q2: 短剧出海翻译订单环比暴增200%<br>' +
'2025-Q3: CATTI考试改革，新增AI辅助翻译测试<br>' +
'2026-Q1: 中国翻译协会年会首次在武汉大学举办<br>' +
'2026-Q2: 《2026中国翻译行业发展报告》发布</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">数据来源与使用说明</h3>' +
'<p style="color:var(--t2);font-size:.82rem;line-height:1.7;">1. 核心数据来源：中国翻译协会《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》（2026年4月25日发布于武汉大学）<br>' +
'2. 历年数据：2022-2025年度中国翻译协会行业报告及光明日报相关报道<br>' +
'3. 院校数据：教育部高等学校翻译专业教学协作组、全国翻译专业学位研究生教育指导委员会公开信息<br>' +
'4. 招聘数据：BOSS直聘、猎聘、智联招聘、前程无忧等平台公开岗位信息（2025年度）<br>' +
'5. 更新时间：最新更新：2026年5月17日<br>' +
'6. 数据版本：v2.0（基于2026年4月报告）</p></div></section>';
const script10 = `function renderReports(){var h='<div class="tb"><table><thead><tr><th>年份</th><th>报告名称</th><th>发布方</th><th>摘要</th></tr></thead><tbody>';rd.forEach(function(r){h+='<tr><td>'+r.y+'</td><td>'+r.n+'</td><td>'+r.s+'</td><td>'+r.d+'</td></tr>';});h+='</tbody></table></div>';document.getElementById("rd").innerHTML=h;}renderReports();`;
f.writeFileSync(p.join(d, 'page_reports.html'), sh.wrap('数据报告', body10, script10, 'page_reports.html'), 'utf8');
console.log('✓ page_reports.html');

console.log('\nPages 6-10 generated successfully!');
