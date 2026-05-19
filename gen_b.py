import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"
L = []
def a(s):
    L.append(s)

# Hero
a('<section class="hero"><h1>中国翻译行业数据平台</h1><p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p><div class="hs">')
a('<div><span class="n">701.2亿</span><span class="l">全年产值(元)</span></div>')
a('<div><span class="n">686.7万</span><span class="l">从业人员</span></div>')
a('<div><span class="n">113.5万</span><span class="l">专职翻译</span></div>')
a('<div><span class="n">2183家</span><span class="l">AI翻译企业</span></div></div>')
a('<div class="bd">基于2026年中国翻译协会年会发布数据</div><div class="sd">↓ 向下滚动探索</div></section>')

# Overview
a('<section id="overview"><h2 class="st">行业概览</h2><div class="ys" id="ys"></div><div class="dr" id="od"></div>')
a('<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">区域分布</h3><div id="rc"></div></div>')
a('<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">产值趋势(2022-2025)</h3><div class="tr" id="tb"></div></div></section>')

# Demand
a('<section id="demand"><h2 class="st">需求分析</h2><p style="text-align:center;color:var(--t2);margin-bottom:24px;">2025年市场需求结构调整，人机协同成主流，高端人工翻译需求持续增长</p>')
a('<h3 style="color:var(--g);margin-bottom:12px;">Top 10 热门翻译领域(2025)</h3><div class="dgg" id="dgg"></div>')
a('<div style="margin-top:30px;"><div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">语言对分布</h3>')
a('<div class="tb"><table><thead><tr><th>语言对</th><th>市场份额</th><th>趋势</th></tr></thead><tbody>')
for l in [('中→英','38.5%','稳定'),('英→中','24.2%','稳定'),('中→日','8.1%','增长'),('中→韩','6.3%','增长'),('中→德','4.7%','稳定'),('中→法','4.1%','稳定'),('中→西','3.5%','增长'),('中→俄','3.2%','增长'),('中→阿','2.8%','增长'),('其他','4.6%','稳定')]:
    a('<tr><td>{}</td><td>{}</td><td style="color:#ff9800;">→ {}</td></tr>'.format(*l))
a('</tbody></table></div></div></div></section>')

# Companies
a('<section id="companies"><h2 class="st">知名企业</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">点击卡片查看详细信息与招聘链接</p><div class="cg" id="cg"></div>')
a('<div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">✕</button><div id="mc"></div></div></div></section>')

# Projects
a('<section id="projects"><h2 class="st">重大项目</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业参与的标志性项目</p><div class="tl">')
for pr in [('2020-2024','《原神》多语言本地化','米哈游旗下《原神》支持15+语言版本，翻译量超千万字。','genshin.hoyoverse.com'),('2022','北京冬奥会翻译保障','20+语种口笔译服务，远程同传首次大规模应用。','beijing2022.cn'),('2023','《流浪地球2》国际版','覆盖10+语言，科幻术语翻译兼顾科学与艺术。','tac-online.org.cn'),('2024','《黑神话：悟空》全球本地化','13+语言版本，文化负载词精准传达，全球销量超2000万。','heishenhua.com'),('2025','AI大模型训练数据翻译','数十亿级Token需求，催生AI数据+翻译新模式。','tac-online.org.cn')]:
    a('<div class="tm"><div class="yr">{}</div><h3>{}</h3><p>{}<a href="https://{}/" target="_blank" class="t2">查看来源</a></p></div>'.format(*pr))
a('</div></section>')

# Talent
a('<section id="talent"><h2 class="st">人才培养</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">2026年翻译教育最新数据（中国翻译协会报告）</p><div class="dr">')
a('<div class="di"><div class="v">374所</div><div class="lb">MTI培养单位</div></div>')
a('<div class="di"><div class="v">309所</div><div class="lb">BTI培养单位</div></div>')
a('<div class="di"><div class="v">28所</div><div class="lb">DTI培养单位</div></div>')
a('<div class="di"><div class="v">6.8万+</div><div class="lb">MTI在校生</div></div></div>')
a('<div class="tg">')
for t in [('AI+翻译跨学科培养','2025年多所高校开设翻译技术交叉学科，北大、北外、上外推出翻译+计算机双学位。2026年预计超50所院校开设AI翻译课程。'),('30岁以下从业者比例上升','2025年30周岁以下从业者占比27.3%，较上年升1.5个百分点。85%新生代译员经常使用AI辅助工具。'),('DTI翻译专博发展','28所高校获DTI培养资格，首批博士入学，形成本科→硕士→博士完整翻译培养链。'),('国际实习与联合培养','各MTI院校与UN/EU/WHO合作，2025年输送实习生1200+人次，较上年增长18%。')]:
    a('<div class="tc"><h3>{}</h3><p>{}</p></div>'.format(*t))
a('</div></section>')

# Recruitment
a('<section id="recruitment"><h2 class="st">招聘信息</h2><p style="text-align:center;color:var(--t2);margin-bottom:12px;">2025年翻译行业岗位需求</p>')
a('<div style="text-align:center;margin-bottom:20px;"><a href="https://www.zhipin.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">BOSS直聘</a>')
a('<a href="https://www.liepin.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">猎聘</a>')
a('<a href="https://www.zhaopin.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">智联招聘</a>')
a('<a href="https://www.51job.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">前程无忧</a></div>')
a('<div class="tb"><table><thead><tr><th>岗位</th><th>学历</th><th>CATTI</th><th>经验</th><th>技能</th><th>薪资</th></tr></thead><tbody id="rt"></tbody></table></div>')
a('<h3 style="color:var(--g);margin:30px 0 16px;">最新岗位</h3><div id="jl"></div></section>')

# Ranking
a('<section id="ranking"><h2 class="st">院校排行</h2><p style="text-align:center;color:var(--t2);margin-bottom:12px;">翻译专业院校排名 · 搜索快速定位</p>')
a('<div class="sb"><input type="text" id="ss" placeholder="搜索院校名称..." oninput="fs()"></div>')
a('<div class="sg" id="sg"></div></section>')

# Career
a('<section id="career"><h2 class="st">职业路径</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">从校园到职场的多条发展路径</p><div class="pg">')
for c in [('🎯','翻译专业路径','BTI/MTI科班→CATTI二级/一级→企业in-house/自由译员→高级审校/项目经理。CATTI报考突破40万。'),('📖','英语专业路径','英语本科/硕士→补充翻译理论与实践→CATTI二级→企业翻译/国际商务。约40%从业者来自英语背景。'),('🌐','小语种路径','日语/法语/德语/西语/俄语/阿语/韩语→CATTI小语种证书→区域专家。一带一路人才缺口大，时薪1.5-3倍。'),('⚖️','跨专业复合路径','法律/医学/IT/金融背景+翻译技能→领域专家。法律翻译500-1500元/时，医学400-1200元/时。'),('💻','翻译技术路径','计算机/语言学/信息管理→翻译技术/AI数据管理→语言技术架构师。年薪35-80万，岗位同比增45%。')]:
    a('<div class="pc"><div class="ico">{}</div><h3>{}</h3><p>{}</p></div>'.format(*c))
a('</div></section>')

# Global
a('<section id="global"><h2 class="st">全球视野</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">2025年全球翻译市场（中国翻译协会2026年报告）</p><div class="dr">')
a('<div class="di"><div class="v">~560亿$</div><div class="lb">全球市场规模</div></div>')
a('<div class="di"><div class="v">+4.2%</div><div class="lb">年增长率</div></div>')
a('<div class="di"><div class="v">55岁</div><div class="lb">欧洲译员中位年龄</div></div>')
a('<div class="di"><div class="v">60%+</div><div class="lb">境外订单来自欧洲</div></div></div>')
a('<div class="c2"><h3 style="color:var(--g);margin-bottom:6px;">美洲市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">北美全球最大市场（36%）。AI驱动本地化需求激增。</p>')
a('<h3 style="color:var(--g);margin-bottom:6px;">欧洲市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。</p>')
a('<h3 style="color:var(--g);margin-bottom:6px;">亚太市场</h3><p style="color:var(--t2);font-size:.88rem;margin-bottom:16px;">增长最快，中日韩印为四大引擎。增速6.8%。</p></div>')
a('<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">全球翻译市场地域分布</h3>')
a('<div class="cb"><span class="la">美洲</span><div class="bt"><div class="bf" style="width:36%;">36%</div></div><span class="pc">36%</span></div>')
a('<div class="cb"><span class="la">欧洲</span><div class="bt"><div class="bf" style="width:31%;">31%</div></div><span class="pc">31%</span></div>')
a('<div class="cb"><span class="la">亚太</span><div class="bt"><div class="bf" style="width:24%;">24%</div></div><span class="pc">24%</span></div>')
a('<div class="cb"><span class="la">其他</span><div class="bt"><div class="bf" style="width:9%;">9%</div></div><span class="pc">9%</span></div></div></section>')

# Reports
a('<section id="reports"><h2 class="st">数据报告</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业历年报告总览与更新日志</p>')
a('<div id="rd"></div><h3 style="color:var(--g);margin:40px 0 20px;text-align:center;">平台更新日志</h3><div id="ul"></div></section>')

# Footer
a('<footer><p>数据来源：中国翻译协会《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》</p>')
a('<p>光明日报 2026.04.25 · 中国翻译协会官网 · 教育部高等学校翻译专业教学协作组</p>')
a('<p style="margin-top:16px;color:rgba(240,160,48,.2);letter-spacing:4px;">风正起时制作</p></footer>')

# Append to index.html
with open(p, 'a', encoding='utf-8') as f:
    f.write(''.join(L))

print(f"Part 2 appended, total: {os.path.getsize(p)} bytes")
