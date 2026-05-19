import os

out = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

# Build complete HTML with all data
H = []

H.append('<!DOCTYPE html>')
H.append('<html lang="zh-CN">')
H.append('<head>')
H.append('<meta charset="UTF-8">')
H.append('<meta name="viewport" content="width=device-width,initial-scale=1.0">')
H.append('<title>中国翻译行业数据平台 | 译界全景</title>')
H.append('<style>')
H.append('*{margin:0;padding:0;box-sizing:border-box}')
H.append(':root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--g:#f0a030;--g2:#d4891e;--g3:#f5b84e;--t:#e0e0e0;--t2:#999;--b:#333;--cb:#1a1a1a}')
H.append('body{font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--t);line-height:1.6}')
H.append('.w1,.w2{position:fixed;font-size:11px;color:rgba(240,160,48,.18);pointer-events:none;z-index:9999;user-select:none;letter-spacing:3px}.w1{top:14px;left:14px}.w2{bottom:14px;right:14px}')
H.append('a{color:var(--g);text-decoration:none}a:hover{color:var(--g3);text-decoration:underline}')
H.append('section{padding:80px 20px;max-width:1200px;margin:0 auto}')
H.append('.st{font-size:2rem;color:var(--g);text-align:center;margin-bottom:50px}')
H.append('.st::after{content:"";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--g),transparent);margin:12px auto 0}')
H.append('.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a,#1a1208,#0d0d0d)}')
H.append('.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--g);margin-bottom:20px}.hero p{color:var(--t2);max-width:700px;margin:0 auto 40px}')
H.append('.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:800px;width:100%}')
H.append('.hs>div{background:rgba(26,26,26,.8);border:1px solid rgba(240,160,48,.15);border-radius:12px;padding:24px 16px}')
H.append('.n{font-size:1.8rem;font-weight:700;color:var(--g);display:block}.l{font-size:.85rem;color:var(--t2);margin-top:6px}')
H.append('.bd{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,.3);border-radius:20px;color:var(--g);margin-top:40px;font-size:.8rem}')
H.append('.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--t2);animation:f2 2s ease-in-out infinite}')
H.append('@keyframes f2{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}')
H.append('nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--b);padding:0 20px}')
H.append('nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}')
H.append('nav a{display:block;padding:8px 14px;font-size:.82rem;color:var(--t2);border-radius:6px}nav a:hover{background:rgba(240,160,48,.08);color:var(--g);text-decoration:none}')
H.append('.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}')
H.append('.yb{padding:8px 24px;border:1px solid var(--b);border-radius:8px;background:var(--bg2);color:var(--t2);font-size:.95rem;cursor:pointer}')
H.append('.yb.ac,.yb:hover{background:var(--g);color:#000;border-color:var(--g)}')
H.append('.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px;margin-top:30px}')
H.append('.cc{cursor:pointer;background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;text-align:center}.cc:hover{border-color:var(--g);transform:translateY(-4px)}')
H.append('.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,.2),rgba(240,160,48,.05));border:2px solid rgba(240,160,48,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--g)}')
H.append('.cc h3{color:var(--g);font-size:1rem}.cc p{color:var(--t2);font-size:.82rem}.cc .tg{display:inline-block;background:rgba(240,160,48,.1);color:var(--g2);padding:2px 10px;border-radius:10px;font-size:.72rem;margin-top:8px}')
H.append('.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:2000;justify-content:center;align-items:center;padding:20px}.mo.s{display:flex}')
H.append('.md{background:var(--bg2);border:1px solid var(--g);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}')
H.append('.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--t2);cursor:pointer;background:none;border:none}.md h2{color:var(--g);margin-bottom:16px}.md p,.md li{color:var(--t2);margin-bottom:10px}')
H.append('.md .ub{display:inline-block;padding:10px 24px;background:var(--g);color:#000;border-radius:8px;font-weight:600;margin-top:16px}')
H.append('.c2{background:var(--bg2);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:24px}')
H.append('.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:.82rem;color:var(--t2)}.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}.cb .bf{height:100%;background:linear-gradient(90deg,var(--g2),var(--g));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:.72rem;color:#000;font-weight:600;min-width:40px}.cb .pc{min-width:40px;text-align:right;font-size:.85rem;color:var(--g)}')
H.append('.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}.tc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.tc h3{color:var(--g);margin-bottom:8px}.tc p{color:var(--t2);font-size:.88rem}')
H.append('.tl{position:relative;padding-left:30px}.tl::before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--g),transparent)}')
H.append('.tm{position:relative;margin-bottom:30px;padding:20px;background:var(--cb);border:1px solid var(--b);border-radius:10px}.tm::before{content:"\\25CF";position:absolute;left:-26px;top:20px;color:var(--g)}')
H.append('.tm .yr{color:var(--g);font-weight:700;font-size:1.1rem}.tm h3{color:var(--g);margin-bottom:8px}.tm p{color:var(--t2);font-size:.88rem}.tm .t2{display:inline-block;margin-top:8px;font-size:.78rem;border:1px solid rgba(240,160,48,.2);padding:3px 12px;border-radius:4px;color:var(--g2)}')
H.append('.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse}th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--b);font-size:.88rem}th{background:var(--bg3);color:var(--g)}tr:hover{background:rgba(240,160,48,.04)}')
H.append('.jc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:20px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}.jc .i{flex:1;min-width:200px}.jc h4{color:var(--g);margin-bottom:4px}.jc p{font-size:.82rem;color:var(--t2)}')
H.append('.jct{display:flex;gap:6px}.jct span{font-size:.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,.08);color:var(--g2);border:1px solid rgba(240,160,48,.15)}.jc .js{font-size:1rem;font-weight:700;color:var(--g)}')
H.append('.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}.pc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.pc:hover{border-color:var(--g)}.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--g);margin-bottom:8px}.pc p{color:var(--t2);font-size:.85rem}')
H.append('.sb{max-width:500px;margin:0 auto 30px}.sb input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--b);border-radius:10px;color:var(--t);font-size:.95rem;outline:none}.sb input:focus{border-color:var(--g)}')
H.append('.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}.si{background:var(--cb);border:1px solid var(--b);border-radius:8px;padding:10px 14px;font-size:.82rem}.si:hover{border-color:var(--g)}.si .stp{font-size:.68rem;color:var(--t2);margin-left:6px}')
H.append('.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px}.di{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:18px;text-align:center}.di .v{font-size:1.5rem;font-weight:700;color:var(--g)}.di .lb{font-size:.8rem;color:var(--t2)}')
H.append('.dgg{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px}.dgg>div{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:14px;text-align:center}.dgg .r{color:var(--t2);font-size:.72rem}.dgg .f{color:var(--g);font-weight:600;font-size:.95rem}.dgg .p{color:var(--g3)}')
H.append('.tr{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--g),var(--g2));border-radius:4px 4px 0 0;min-height:10px}.trl{font-size:.72rem;color:var(--t2);text-align:center}.trv{font-size:.78rem;color:var(--g)}')
H.append('.rc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px}.rc:hover{border-color:var(--g)}.rc .dt{color:var(--g2);font-size:.82rem}.rc h3{color:var(--g);margin-bottom:6px}.rc p{color:var(--t2);font-size:.85rem}')
H.append('.ic2{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.ic2 .dt{color:var(--g2);font-size:.82rem}.ic2 h3{color:var(--g);margin-bottom:8px}.ic2 p{color:var(--t2);font-size:.88rem}')
H.append('footer{background:var(--bg2);border-top:1px solid var(--b);padding:40px 20px;text-align:center}footer p{font-size:.8rem;color:var(--t2);margin-top:8px}')
H.append('@media(max-width:768px){section{padding:50px 16px}nav a{padding:6px 10px;font-size:.75rem}.hero h1{font-size:1.8rem}}')
H.append('</style></head><body>')
H.append('<div class="w1">风正起时制作</div><div class="w2">风正起时制作</div>')

# Nav
H.append('<nav><ul>')
sects = [("overview","行业概览"),("demand","需求分析"),("companies","知名企业"),("projects","重大项目"),("talent","人才培养"),("recruitment","招聘信息"),("ranking","院校排行"),("career","职业路径"),("global","全球视野"),("reports","数据报告")]
for k,v in sects:
    H.append('<li><a href="#%s">%s</a></li>' % (k,v))
H.append('</ul></nav>')

# Hero
H.append('<section class="hero"><h1>中国翻译行业数据平台</h1><p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p><div class="hs">')
H.append('<div><span class="n">701.2亿</span><span class="l">全年产值(元)</span></div>')
H.append('<div><span class="n">686.7万</span><span class="l">从业人员</span></div>')
H.append('<div><span class="n">113.5万</span><span class="l">专职翻译</span></div>')
H.append('<div><span class="n">2183家</span><span class="l">AI翻译企业</span></div>')
H.append('</div><div class="bd">基于2026年中国翻译协会年会发布数据</div><div class="sd">↓ 向下滚动探索</div></section>')

# Overview
H.append('<section id="overview"><h2 class="st">行业概览</h2><div class="ys" id="ys"></div><div class="dr" id="od"></div>')
H.append('<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">区域分布</h3><div id="rc"></div></div>')
H.append('<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">产值趋势(2022-2025)</h3><div class="tr" id="tb"></div></div></section>')

# Demand
H.append('<section id="demand"><h2 class="st">需求分析</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:24px;">2025年市场需求结构调整，人机协同成主流，高端人工翻译需求持续增长</p>')
H.append('<h3 style="color:var(--g);margin-bottom:12px;">Top 10 热门翻译领域(2025)</h3><div class="dgg" id="dgg"></div>')
H.append('<div style="margin-top:30px;"><div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">语言对分布</h3><div class="tb"><table><thead><tr><th>语言对</th><th>市场份额</th><th>趋势</th></tr></thead><tbody>')
langs = [("中→英","38.5%","稳定"),("英→中","24.2%","稳定"),("中→日","8.1%","增长"),("中→韩","6.3%","增长"),("中→德","4.7%","稳定"),("中→法","4.1%","稳定"),("中→西","3.5%","增长"),("中→俄","3.2%","增长"),("中→阿","2.8%","增长"),("其他","4.6%","稳定")]
for l in langs:
    H.append('<tr><td>%s</td><td>%s</td><td style="color:#ff9800;">%s</td></tr>' % l)
H.append('</tbody></table></div></div></div></section>')

# Companies
H.append('<section id="companies"><h2 class="st">知名企业</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">点击卡片查看详细信息与招聘链接</p><div class="cg" id="cg"></div>')
H.append('<div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">✕</button><div id="mc"></div></div></div></section>')

# Projects
H.append('<section id="projects"><h2 class="st">重大项目</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业参与的标志性项目</p><div class="tl">')
projs = [
    ("2020-2024","《原神》多语言本地化","米哈游旗下《原神》支持15+语言版本，翻译量超千万字。","genshin.hoyoverse.com"),
    ("2022","北京冬奥会翻译保障","20+语种口笔译服务，远程同传首次大规模应用。","beijing2022.cn"),
    ("2023","《流浪地球2》国际版","覆盖10+语言，科幻术语翻译兼顾科学与艺术。","tac-online.org.cn"),
    ("2024","《黑神话：悟空》全球本地化","13+语言版本，文化负载词精准传达，全球销量超2000万份。","heishenhua.com"),
    ("2025","AI大模型训练数据翻译","数十亿级Token训练数据需求，催生AI数据+翻译新范式。","tac-online.org.cn")
]
for p in projs:
    H.append('<div class="tm"><div class="yr">%s</div><h3>%s</h3><p>%s<a href="https://%s" target="_blank" class="t2">查看来源</a></p></div>' % p)
H.append('</div></section>')

# Talent
H.append('<section id="talent"><h2 class="st">人才培养</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">2026年翻译教育最新数据（中国翻译协会报告）</p>')
H.append('<div class="dr">')
for v,l in [("374所","MTI培养单位"),("309所","BTI培养单位"),("28所","DTI培养单位"),("6.8万+","MTI在校生")]:
    H.append('<div class="di"><div class="v">%s</div><div class="lb">%s</div></div>' % (v,l))
H.append('</div><div class="tg">')
talents = [
    ("AI+翻译跨学科培养","2025年多所高校开设翻译技术交叉学科方向，北大、北外、上外推出翻译+计算机双学位。2026年预计超50所院校开设AI翻译课程。"),
    ("30岁以下从业者比例上升","2025年30周岁以下从业者占比27.3%，较上年升1.5个百分点。85%新生代译员经常使用AI辅助工具。"),
    ("DTI翻译专博发展","28所高校获DTI培养资格。首批博士入学，形成本科→硕士→博士完整翻译培养链。培养方向含翻译技术、翻译管理。"),
    ("国际实习与联合培养","各MTI院校与UN/EU/WHO合作，2025年输送实习生1200+人次，较上年增长18%。AIIC认证口译课程持续增加。")
]
for t,d in talents:
    H.append('<div class="tc"><h3>%s</h3><p>%s</p></div>' % (t,d))
H.append('</div></section>')

# Recruitment
H.append('<section id="recruitment"><h2 class="st">招聘信息</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:12px;">2025年翻译行业岗位需求</p>')
H.append('<div style="text-align:center;margin-bottom:20px;">')
for n,u in [("BOSS直聘","https://www.zhipin.com"),("猎聘","https://www.liepin.com"),("智联招聘","https://www.zhaopin.com"),("前程无忧","https://www.51job.com")]:
    H.append('<a href="%s" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">%s</a>' % (u,n))
H.append('</div>')
H.append('<div class="tb"><table><thead><tr><th>岗位</th><th>学历</th><th>CATTI</th><th>经验</th><th>技能</th><th>薪资</th></tr></thead><tbody id="rt"></tbody></table></div>')
H.append('<h3 style="color:var(--g);margin:30px 0 16px;">最新岗位</h3><div id="jl"></div></section>')

# Ranking
H.append('<section id="ranking"><h2 class="st">院校排行</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:12px;">翻译专业院校排名 · 搜索快速定位</p>')
H.append('<div class="sb"><input type="text" id="ss" placeholder="搜索院校名称..." oninput="fs()"></div>')
H.append('<div class="sg" id="sg"></div></section>')

# Career
H.append('<section id="career"><h2 class="st">职业路径</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">从校园到职场的多条发展路径</p><div class="pg">')
careers = [
    ("🎯","翻译专业路径","BTI/MTI科班 → CATTI二级/一级 → 企业in-house/自由译员 → 高级审校/项目经理。CATTI报考突破40万。"),
    ("📖","英语专业路径","英语本科/硕士 → 补充翻译理论与实践 → CATTI二级 → 企业翻译/国际商务。约40%从业者来自英语背景。"),
    ("🌐","小语种路径","日语/法语/德语/西语/俄语/阿语/韩语 → CATTI小语种证书 → 区域专家。一带一路人才缺口大。"),
    ("⚖️","跨专业复合路径","法律/医学/IT/金融背景+翻译技能 → 领域专家。法律翻译500-1500元/时，医学400-1200元/时。"),
    ("💻","翻译技术路径","计算机/语言学/信息管理 → 翻译技术/AI数据管理 → 语言技术架构师。年薪35-80万，岗位同比增45%。")
]
for i,t,d in careers:
    H.append('<div class="pc"><div class="ico">%s</div><h3>%s</h3><p>%s</p></div>' % (i,t,d))
H.append('</div></section>')

# Global
H.append('<section id="global"><h2 class="st">全球视野</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">2025年全球翻译市场（中国翻译协会2026年报告）</p>')
H.append('<div class="dr">')
for v,l in [("~560亿$","全球市场规模"),("+4.2%","年增长率"),("55岁","欧洲译员中位年龄"),("60%+","境外订单来自欧洲")]:
    H.append('<div class="di"><div class="v">%s</div><div class="lb">%s</div></div>' % (v,l))
H.append('</div><div class="c2">')
globals_data = [
    ("美洲市场","北美是全球最大市场（占36%）。AI驱动本地化需求激增。美国语言服务企业数量全球第一。"),
    ("欧洲市场","GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。"),
    ("亚太市场","增长最快，中日韩印为四大引擎。中国翻译研究全球领先。增速6.8%。")
]
for t,d in globals_data:
    H.append('<h3 style="color:var(--g);margin-bottom:6px;">%s</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">%s</p>' % (t,d))
H.append('</div><div class="c2">')
H.append('<h3 style="color:var(--g);margin-bottom:12px;">全球翻译市场地域分布</h3>')
H.append('<div class="cb"><span class="la">美洲</span><div class="bt"><div class="bf" style="width:36%;">36%</div></div><span class="pc">36%</span></div>')
H.append('<div class="cb"><span class="la">欧洲</span><div class="bt"><div class="bf" style="width:31%;">31%</div></div><span class="pc">31%</span></div>')
H.append('<div class="cb"><span class="la">亚太</span><div class="bt"><div class="bf" style="width:24%;">24%</div></div><span class="pc">24%</span></div>')
H.append('<div class="cb"><span class="la">其他</span><div class="bt"><div class="bf" style="width:9%;">9%</div></div><span class="pc">9%</span></div>')
H.append('</div></section>')

# Reports
H.append('<section id="reports"><h2 class="st">数据报告</h2>')
H.append('<p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业历年报告总览与更新日志</p><div id="rd"></div>')
H.append('<h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">平台更新日志</h3><div id="ul"></div></section>')

# Footer
H.append('<footer>')
H.append('<p>数据来源：中国翻译协会《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》</p>')
H.append('<p>光明日报 2026.04.25 · 中国翻译协会官网 · 教育部高等学校翻译专业教学协作组</p>')
H.append('<p style="margin-top:16px;color:rgba(240,160,48,.2);letter-spacing:4px;">风正起时制作</p>')
H.append('</footer>')

# Begin JavaScript
H.append('<script>')
H.append('var yd={')
ydata = [
    ('2022','550亿',550,'620万',620,'98万','48万+',320,[22,18,15,8,7,30]),
    ('2023','686.4亿',686.4,'660万',660,'105万','55万+',580,[21,18,16,8,7,30]),
    ('2024','708亿',708,'680.8万',680.8,'110万','65万+',1200,[20,17,16,9,8,30]),
    ('2025','701.2亿',701.2,'686.7万',686.7,'113.5万','66万+',2183,[19,17,16,9,8,31])
]
for i,y in enumerate(ydata):
    if i>0: H.append(',')
    H.append('%s:{o:"%s",on:%s,p:"%s",pn:%s,f:"%s",e:"%s",a:%s,r:[%s]}' % (
        y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],','.join(['{n:"'+['北京','上海','广东','浙江','江苏','其他'][j]+'",p:'+str(y[8][j])+'}' for j in range(6)])))
H.append('};')

# Companies JS data
H.append('var cos=[')
cos_data = [
    ("rws","RWS (SDL Trados)","英国","全球头部","全球最大语言服务公司，拥有Trados工具"),
    ("tp","TransPerfect","美国","全球头部","全球最大私营语言服务公司，170+语种"),
    ("lion","Lionbridge","美国","全球头部","5000+员工，350+语种"),
    ("welo","Welocalize","美国","全球头部","AI驱动语言服务全球化"),
    ("gtc","中译语通","中国","中国头部","中国对外翻译旗下，服务外交部等"),
    ("tn","传神语联","中国","中国头部","AI语言服务商，语联网平台"),
    ("sun","舜禹环球通","中国","中国头部","知识产权+游戏本地化"),
    ("cema","策马翻译","中国","中国头部","CATTI官方合作机构"),
    ("yd","网易有道翻译","中国","互联网大厂","AI+人工翻译50+语种"),
    ("hw","华为翻译中心","中国","大型企业","内部团队，支撑170+国家")
]
H.append('[')
for i,c in enumerate(cos_data):
    if i>0: H.append(',')
    H.append('{i:"%s",n:"%s",co:"%s",t:"%s",d:"%s"}' % (c[0],c[1],c[2],c[3],c[4]))
H.append('];')

# Company details
H.append('var cod={')
codes = {
    'rws':'RWS集团是全球领先的语言服务和翻译技术公司，旗下拥有Trados等知名翻译工具。年营收约8.5亿英镑。', 
    'tp':'TransPerfect是全球最大私营语言服务公司，支持170+语种，年营收超12亿美元。',
    'lion':'Lionbridge是全球领先的语言服务商，5000+员工，350+语种，客户含全球知名品牌。',
    'welo':'Welocalize专注于AI驱动语言服务，在游戏本地化领域全球领先。',
    'gtc':'中译语通是CATTI官方合作伙伴，服务外交部等国家级机构，是MTI实习基地重要合作单位。',
    'tn':'传神语联建设了语联网翻译平台，汇聚百万级专业译员，年处理翻译量超40亿字。',
    'sun':'舜禹环球通专注于知识产权和游戏本地化，年翻译量超5亿字。',
    'cema':'策马翻译是CATTI官方合作机构，每年培养数千名翻译人才，客户含多个国际组织。',
    'yd':'网易有道翻译是有道旗下AI+人工翻译平台，50+语种，数亿用户。',
    'hw':'华为翻译中心支撑华为全球170+国家业务，专注通信技术、云计算等专业翻译。'
}
H.append(',')
H.append(','.join(['%s:"%s"' % (k,v) for k,v in codes.items()]))
H.append('};')

# Company URLs
H.append('var courl={')
H.append(', '.join(['%s:["%s","%s"]' % (k,v[0],v[1]) for k,v in {
    'rws':('https://www.rws.com/careers/','https://www.rws.com'),
    'tp':('https://www.transperfect.com/careers/','https://www.transperfect.com'),
    'lion':('https://www.lionbridge.com/careers/','https://www.lionbridge.com'),
    'welo':('https://www.welocalize.com/careers/','https://www.welocalize.com'),
    'gtc':('https://www.gtcom.com.cn/','https://www.gtcom.com.cn'),
    'tn':('https://www.transn.com/','https://www.transn.com'),
    'sun':('https://www.sunyu.com/','https