const fs = require('fs');

// Generate complete HTML for Translation Industry Data Platform
// Uses ALL data from 2026 China Translation Association reports

function gen() {
  let h = '<!DOCTYPE html>\n<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title><style>\n';

  // CSS
  h += '*{margin:0;padding:0;box-sizing:border-box}';
  h += ':root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--gold:#f0a030;--gold2:#d4891e;--gold3:#f5b84e;--text:#e0e0e0;--text2:#999;--border:#333;--card-bg:#1a1a1a}';
  h += 'body{font-family:-apple-system,BlinkMacSystemFont,Noto Sans SC,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}';
  h += '.w1,.w2{position:fixed;font-size:11px;color:rgba(240,160,48,0.15);pointer-events:none;z-index:9999;user-select:none;letter-spacing:2px}';
  h += '.w1{top:12px;left:12px}.w2{bottom:12px;right:12px}';
  h += 'a{color:var(--gold);text-decoration:none}a:hover{color:var(--gold3)}';
  h += 'section{padding:80px 20px;max-width:1200px;margin:0 auto}';
  h += '.st{font-size:2rem;color:var(--gold);text-align:center;margin-bottom:50px;position:relative}';
  h += '.st::after{content:"";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--gold),transparent);margin:12px auto 0}';
  h += '.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a,#1a1208,#0d0d0d)}';
  h += '.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--gold);margin-bottom:20px}';
  h += '.hero p{color:var(--text2);max-width:700px;margin-bottom:40px}';
  h += '.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:800px;width:100%}';
  h += '.hs>div{background:rgba(26,26,26,0.8);border:1px solid rgba(240,160,48,0.15);border-radius:12px;padding:24px 16px}';
  h += '.num{font-size:1.8rem;font-weight:700;color:var(--gold);display:block}.lbl{font-size:0.85rem;color:var(--text2);margin-top:6px}';
  h += '.badge{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,0.3);border-radius:20px;color:var(--gold);margin-top:40px;font-size:0.8rem}';
  h += '.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--text2);font-size:0.85rem;animation:f 2s ease-in-out infinite}';
  h += '@keyframes f{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}';
  h += 'nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,0.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:0 20px}';
  h += 'nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}';
  h += 'nav a{display:block;padding:8px 14px;font-size:0.82rem;color:var(--text2);border-radius:6px}';
  h += 'nav a:hover{background:rgba(240,160,48,0.08);color:var(--gold)}';
  h += '.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}';
  h += '.yb{padding:8px 24px;border:1px solid var(--border);border-radius:8px;background:var(--bg2);color:var(--text2);font-size:0.95rem;cursor:pointer}';
  h += '.yb.active,.yb:hover{background:var(--gold);color:#000;border-color:var(--gold)}';
  h += '.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:30px}';
  h += '.cc{cursor:pointer;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center}';
  h += '.cc:hover{border-color:var(--gold);transform:translateY(-4px)}';
  h += '.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,0.2),rgba(240,160,48,0.05));border:2px solid rgba(240,160,48,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--gold)}';
  h += '.cc h3{color:var(--gold);font-size:1rem}.cc p{font-size:0.82rem;color:var(--text2)}';
  h += '.cc .t{display:inline-block;background:rgba(240,160,48,0.1);color:var(--gold2);padding:2px 10px;border-radius:10px;font-size:0.72rem;margin-top:8px}';
  h += '.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:2000;justify-content:center;align-items:center;padding:20px}';
  h += '.mo.s{display:flex}.md{background:var(--bg2);border:1px solid var(--gold);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}';
  h += '.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--text2);cursor:pointer;background:none;border:none}';
  h += '.md h2{color:var(--gold);margin-bottom:16px}.md p,.md li{color:var(--text2);margin-bottom:10px}';
  h += '.md .ub{display:inline-block;padding:10px 24px;background:var(--gold);color:#000;border-radius:8px;font-weight:600;margin-top:16px}';
  h += '.cc2{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:24px}';
  h += '.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:0.82rem;color:var(--text2)}';
  h += '.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}';
  h += '.cb .bf{height:100%;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:0.72rem;color:#000;font-weight:600;min-width:40px}';
  h += '.cb .pct{min-width:40px;text-align:right;font-size:0.85rem;color:var(--gold);font-weight:600}';
  h += '.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:30px}';
  h += '.tc{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px}.tc h3{color:var(--gold);margin-bottom:8px}.tc p{font-size:0.88rem;color:var(--text2)}';
  h += '.tl{position:relative;padding-left:30px}.tl::before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--gold),transparent)}';
  h += '.ti{position:relative;margin-bottom:30px;padding:20px;background:var(--card-bg);border:1px solid var(--border);border-radius:10px}';
  h += '.ti::before{content:"\\25CF";position:absolute;left:-26px;top:20px;color:var(--gold);font-size:0.8rem}';
  h += '.ti .yr{color:var(--gold);font-weight:700;font-size:1.1rem;margin-bottom:6px}.ti p{font-size:0.88rem;color:var(--text2)}';
  h += '.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse;font-size:0.88rem}';
  h += 'th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--border)}th{background:var(--bg3);color:var(--gold);white-space:nowrap}';
  h += 'tr:hover{background:rgba(240,160,48,0.04)}';
  h += '.jc{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}';
  h += '.jc .i{flex:1}.jc .i h4{color:var(--gold);margin-bottom:4px}.jc .i p{font-size:0.82rem;color:var(--text2)}';
  h += '.jct{display:flex;gap:6px;flex-wrap:wrap}.jct span{font-size:0.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,0.08);color:var(--gold2);border:1px solid rgba(240,160,48,0.15)}';
  h += '.jc .s{font-size:1rem;font-weight:700;color:var(--gold);white-space:nowrap}';
  h += '.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}';
  h += '.pc{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px}.pc:hover{border-color:var(--gold)}';
  h += '.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--gold);margin-bottom:8px}.pc p{font-size:0.85rem;color:var(--text2)}';
  h += '.sb{max-width:500px;margin:0 auto 30px}.sb input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:0.95rem;outline:none}';
  h += '.sb input:focus{border-color:var(--gold)}';
  h += '.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:16px}';
  h += '.si{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:0.82rem}.si:hover{border-color:var(--gold)}';
  h += '.si .tp{font-size:0.68rem;color:var(--text2);margin-left:6px}';
  h += '.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px;margin:24px 0}';
  h += '.di{background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:18px;text-align:center}';
  h += '.dg{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:16px}';
  h += '.dg>div{background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center}';
  h += '.dg .r{color:var(--text2);font-size:0.72rem}.dg .f{color:var(--gold);font-weight:600;font-size:0.95rem;margin:4px 0}';
  h += '.dg .p{color:var(--gold3);font-size:0.85rem}';
  h += '.trd{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}';
  h += '.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}';
  h += '.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--gold),var(--gold2));border-radius:4px 4px 0 0;min-height:10px}';
  h += '.trl{font-size:0.72rem;color:var(--text2);text-align:center}.trv{font-size:0.78rem;color:var(--gold);font-weight:600}';
  h += '.rc{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:16px}';
  h += '.rc .dt{color:var(--gold2);font-size:0.82rem;margin-bottom:4px}.rc h3{color:var(--gold);margin-bottom:6px}.rc p{font-size:0.85rem;color:var(--text2)}';
  h += '.ic2{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:16px}';
  h += '.ic2 .dt{color:var(--gold2);font-size:0.82rem;margin-bottom:4px}.ic2 h3{color:var(--gold);margin-bottom:8px}.ic2 p{font-size:0.88rem;color:var(--text2)}';
  h += '.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}';
  h += 'footer{background:var(--bg2);border-top:1px solid var(--border);padding:40px 20px;text-align:center}footer p{font-size:0.8rem;color:var(--text2);margin-top:8px}';
  h += '@media(max-width:768px){section{padding:50px 16px}nav a{padding:6px 10px;font-size:0.75rem}.hero h1{font-size:1.8rem}}';
  h += '</style></head><body>';
  h += '<div class="w1">风正起时制作</div><div class="w2">风正起时制作</div>';

  // Nav
  h += '<nav><ul>';
  'overview,demand,companies,projects,talent,recruitment,ranking,career,global,reports'.split(',').forEach(s => {
    const names = {overview:'行业概览',demand:'需求分析',companies:'知名企业',projects:'重大项目',talent:'人才培养',recruitment:'招聘信息',ranking:'院校排行',career:'职业路径',global:'全球视野',reports:'数据报告'};
    h += '<li><a href="#'+s+'">'+names[s]+'</a></li>';
  });
  h += '</ul></nav>';

  // Hero
  h += '<section class="hero"><h1>中国翻译行业数据平台</h1><p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p><div class="hs">';
  [['701.2亿','全年产值（元）'],['686.7万','从业人员'],['113.5万','专职翻译'],['2183家','AI翻译企业']].forEach(d => {
    h += '<div><span class="num">'+d[0]+'</span><span class="lbl">'+d[1]+'</span></div>';
  });
  h += '</div><div class="badge">基于2026年中国翻译协会年会发布数据</div><div class="sd">↓ 向下滚动探索</div></section>';

  // Overview
  h += '<section id="overview"><h2 class="st">行业概览</h2><div class="ys" id="ys"></div><div class="dr" id="od"></div>';
  h += '<div class="cc2"><h3 style="color:var(--gold);margin-bottom:12px;">区域分布</h3><div id="rc"></div></div>';
  h += '<div class="cc2"><h3 style="color:var(--gold);margin-bottom:12px;">产值趋势（2022-2025）</h3><div class="trd" id="tb"></div></div></section>';

  // Demand
  h += '<section id="demand"><h2 class="st">需求分析</h2><p style="text-align:center;color:var(--text2);margin-bottom:24px;">2025年市场需求结构调整，人机协同成主流</p><h3 style="color:var(--gold);margin-bottom:12px;">Top 10 热门翻译领域（2025）</h3><div class="dg" id="dg"></div>';
  h += '<div style="margin-top:30px;"><div class="cc2"><h3 style="color:var(--gold);margin-bottom:12px;">语言对分布</h3><div class="tb"><table><thead><tr><th>语言对</th><th>市场份额</th><th>趋势</th></tr></thead><tbody>';
  [['中→英','38.5%','→ 稳定'],['英→中','24.2%','→ 稳定'],['中→日','8.1%','↑ 增长'],['中→韩','6.3%','↑ 增长'],['中→德','4.7%','→ 稳定'],['中→法','4.1%','→ 稳定'],['中→西','3.5%','↑ 增长'],['中→俄','3.2%','↑ 增长'],['中→阿','2.8%','↑ 增长'],['其他','4.6%','→ 稳定']].forEach(r => {
    h += '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td style="color:#ff9800;">'+r[2]+'</td></tr>';
  });
  h += '</tbody></table></div></div></div></section>';

  // Companies
  h += '<section id="companies"><h2 class="st">知名企业</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">点击卡片查看详细信息与招聘链接</p><div class="cg" id="cg"></div>';
  h += '<div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">✕</button><div id="mc"></div></div></div></section>';

  // Projects
  h += '<section id="projects"><h2 class="st">重大项目</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">中国翻译行业参与的标志性项目</p><div class="tl" id="pt"></div></section>';

  // Talent
  h += '<section id="talent"><h2 class="st">人才培养</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">2026年翻译教育最新数据</p><div class="dr">';
  [['374所','MTI培养单位'],['309所','BTI培养单位'],['28所','DTI培养单位'],['6.8万+','MTI在校生']].forEach(d => {
    h += '<div class="di"><div style="font-size:1.5rem;font-weight:700;color:var(--gold)">'+d[0]+'</div><div style="font-size:0.8rem;color:var(--text2);margin-top:4px">'+d[1]+'</div></div>';
  });
  h += '</div><div class="tg">';
  [
    ['AI+翻译跨学科培养','2025年多所高校开设"翻译技术"交叉学科，北大、北外、上外推出"翻译+计算机"双学位。2026年预计超50所院校开设AI翻译课程。'],
    ['30岁以下从业者比例上升','2025年30周岁以下从业者占比27.3%，较上年升1.5个百分点。85%新生代译员经常使用AI辅助工具。'],
    ['DTI翻译专博发展','28所高校获DTI培养资格，2025年首批博士入学，形成"本科→硕士→博士"完整翻译培养链。'],
    ['国际实习与联合培养','各MTI院校与UN、EU、WHO合作，2025年输送实习生1200+人次，较上年增长18%。']
  ].forEach(d => {
    h += '<div class="tc"><h3>'+d[0]+'</h3><p>'+d[1]+'</p></div>';
  });
  h += '</div></section>';

  // Recruitment
  h += '<section id="recruitment"><h2 class="st">招聘信息</h2><p style="text-align:center;color:var(--text2);margin-bottom:12px;">2025年翻译行业岗位需求</p>';
  h += '<div style="text-align:center;margin-bottom:20px;">';
  'BOSS直聘|https://www.zhipin.com,猎聘|https://www.liepin.com,智联招聘|https://www.zhaopin.com,前程无忧|https://www.51job.com'.split(',').forEach(s => {
    const [n,u] = s.split('|');
    h += '<a href="'+u+'" target="_blank" style="margin:0 8px;color:var(--text2);font-size:0.85rem;">'+n+'</a>';
  });
  h += '</div><div class="tb"><table><thead><tr><th>岗位</th><th>学历</th><th>CATTI</th><th>经验</th><th>技能</th><th>薪资</th></tr></thead><tbody id="rt"></tbody></table></div>';
  h += '<h3 style="color:var(--gold);margin:30px 0 16px;">最新岗位</h3><div id="jl"></div></section>';

  // Ranking
  h += '<section id="ranking"><h2 class="st">院校排行</h2><p style="text-align:center;color:var(--text2);margin-bottom:12px;">搜索院校名称快速定位</p>';
  h += '<div class="sb"><input type="text" id="ss" placeholder="搜索院校名称..." oninput="fs()"></div><div class="sg" id="sg"></div></section>';

  // Career
  h += '<section id="career"><h2 class="st">职业路径</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">从校园到职场</p><div class="pg">';
  [
    ['🎯','翻译专业路径','BTI/MTI科班出身 → CATTI二级/一级 → 企业in-house/自由译员 → 高级审校/项目经理。CATTI报考人数突破40万。'],
    ['📖','英语专业路径','英语专业本科/硕士 → 补充翻译理论与实践 → CATTI二级 → 企业翻译/国际商务。约40%从业者来自英语/语言学背景。'],
    ['🌐','小语种路径','日语/法语/德语/西语/俄语/阿语/韩语 → CATTI小语种证书 → 区域市场专家。一带一路语言人才缺口大，时薪为英语译员1.5-3倍。'],
    ['⚖️','跨专业复合路径','法律/医学/IT/金融背景 + 翻译技能 → 领域专家。法律翻译时薪500-1500元，医学400-1200元。'],
    ['💻','翻译技术路径','计算机/语言学/信息管理 → 翻译技术开发/AI训练数据管理 → 语言技术架构师。年薪35-80万，岗位同比增长45%。']
  ].forEach(d => {
    h += '<div class="pc"><div class="ico">'+d[0]+'</div><h3>'+d[1]+'</h3><p>'+d[2]+'</p></div>';
  });
  h += '</div></section>';

  // Global
  h += '<section id="global"><h2 class="st">全球视野</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">2025年全球翻译市场（2026年报告）</p><div class="dr">';
  [['~560亿$','全球市场规模'],['+4.2%','年增长率'],['55岁','欧洲译员中位年龄'],['60%+','境外订单来自欧洲']].forEach(d => {
    h += '<div class="di"><div style="font-size:1.5rem;font-weight:700;color:var(--gold)">'+d[0]+'</div><div style="font-size:0.8rem;color:var(--text2);margin-top:4px">'+d[1]+'</div></div>';
  });
  h += '</div><div class="cg">';
  [['美洲市场','北美是全球最大市场（36%）。AI驱动本地化需求激增。'],['欧洲市场','GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。'],['亚太市场','增长最快，中日韩印为四大引擎。中国翻译研究全球领先。增速6.8%。']].forEach(d => {
    h += '<div class="cc2"><h3 style="color:var(--gold);margin-bottom:8px;">'+d[0]+'</h3><p style="color:var(--text2);font-size:0.9rem;">'+d[1]+'</p></div>';
  });
  h += '</div></section>';

  // Reports
  h += '<section id="reports"><h2 class="st">数据报告</h2><p style="text-align:center;color:var(--text2);margin-bottom:30px;">中国翻译行业历年报告总览</p><div id="rd"></div></section>';

  // Footer
  h += '<footer><p>数据来源：中国翻译协会《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》</p><p>光明日报 2026.04.25 · 中国翻译协会官网 · 教育部高等学校翻译专业教学协作组</p><p style="margin-top:16px;color:rgba(240,160,48,0.2);letter-spacing:4px;">风正起时制作</p></footer>';

  // JS
  h += '<script>';

  // Year data
  h += 'var yd={';
  [['2022','550亿',550,'620万',620,'98万',48,'320',[22,18,15,8,7,30]],
   ['2023','686.4亿',686.4,'660万',660,'105万',55,'580',[21,18,16,8,7,30]],
   ['2024','708亿',708,'680.8万',680.8,'110万',65,'1200',[20,17,16,9,8,30]],
   ['2025','701.2亿',701.2,'686.7万',686.7,'113.5万',66,'2183',[19,17,16,9,8,31]]].forEach(function(d,i){
    if(i>0)h+=',';h+=d[0]+':{o:"'+d[1]+'",on:'+d[2]+',p:"'+d[3]+'",pn:'+d[4]+',f:"'+d[5]+'",e:"'+d[6]+'万+",a:"'+d[7]+'",r:[';
    ['北京','上海','广东','浙江','江苏','其他'].forEach(function(n,j){
      if(j>0)h+=',';h+='{n:"'+n+'",p:'+d[8][j]+'}';
    });
    h+=']}';
  });
  h+='};';

  // Companies
  h += 'var cos=[';
  [['rws','RWS(SDL Trados)','英国','全球头部','全球最大语言服务公司，拥有Trados工具，8.5亿英镑营收','rws.com','rws.com/careers'],
   ['tp','TransPerfect','美国','全球头部','全球最大私营语言服务公司，170+语种，12亿美元+营收','transperfect.com','transperfect.com/careers'],
   ['lion','Lionbridge','美国','全球头部','5000+员工，350+语种，客户含Google/Amazon','lionbridge.com','lionbridge.com/careers'],
   ['welo','Welocalize','美国','全球头部','AI驱动语言服务，游戏本地化全球领先','welocalize.com','welocalize.com/careers'],
   ['gtc','中译语通','中国','中国头部','中国对外翻译旗下，服务外交部等国家级机构','gtcom.com.cn','gtcom.com.cn'],
   ['tn','传神语联','中国','中国头部','AI语言服务商，语联网平台百万级译员','transn.com','transn.com'],
   ['sun','舜禹环球通','中国','中国头部','知识产权+游戏本地化，年翻译5亿+字','sunyu.com','sunyu.com'],
   ['cema','策马翻译','中国','中国头部','CATTI官方合作，培养大量翻译人才','cemachina.com','cemachina.com'],
   ['yd','网易有道翻译','中国','互联网大厂','AI+人工翻译平台，50+语种','f.youdao.com/joinus','f.youdao.com/joinus'],
   ['hw','华为翻译中心','中国','大型企业','内部翻译团队，支持170+国家业务','career.huawei.com','career.huawei.com']
  ].forEach(function(c,i){
    if(i>0)h+=',';h+='{id:"'+c[0]+'",n:"'+c[1]+'",c:"'+c[2]+'",t:"'+c[3]+'",d:"'+c[4]+'",u:"https://www.'+c[5]+'/",r:"'+c[6]+'"}';
  });
  h+='];';

  // Jobs
  h += 'var jd=[';
  [['中英高级笔译','RWS China','18-28K','上海,全职,CATTI二级','猎聘'],
   ['游戏本地化译员','舜禹环球通','12-25K','南京,全职/兼职','BOSS直聘'],
   ['AI训练数据翻译','传神语联','10-20K','北京,全职,NLP优先','智联招聘'],
   ['英中同传译员','中译语通','15-35K','北京,全职,CATTI一级','猎聘'],
   ['法律翻译','TransPerfect CN','18-35K','上海/远程,全职','BOSS直聘'],
   ['德语翻译','Welocalize CN','14-28K','远程,全职','前程无忧'],
   ['日语游戏翻译','网易有道','10-22K','广州,全职,游戏经验','猎聘'],
   ['翻译项目经理','策马翻译','12-25K','北京,全职,MTI优先','BOSS直聘'],
   ['华为翻译专员','华为','15-35K+','深圳/北京,CATTI','华为官网']
  ].forEach(function(j,i){
    if(i>0)h+=',';h+='{t:"'+j[0]+'",c:"'+j[1]+'",s:"'+j[2]+'",tg:"'+j[3]+'",sr:"'+j[4]+'"}';
  });
  h+='];';

  // Schools
  h += 'var sc={';
  var schools = [
    ['北京大学','A+','A+','北京','985/双一流'],['北京外国语大学','A+','A+','北京','211/双一流'],['上海外国语大学','A+','A+','上海','211/双一流'],
    ['广东外语外贸大学','A','A+','广州','省属重点'],['黑龙江大学','A','A','哈尔滨','省属重点'],['上海交通大学','A','A','上海','985/双一流'],
    ['南京大学','A','A','南京','985/双一流'],['浙江大学','A','A+','杭州','985/双一流'],['复旦大学','A','A','上海','985/双一流'],
    ['武汉大学','A-','A','武汉','985/双一流'],['北京语言大学','A-','A','北京','部属'],['西安外国语大学','A-','A','西安','省属重点'],
    ['四川大学','A-','A-','成都','985/双一流'],['中山大学','A-','A-','广州','985/双一流'],['