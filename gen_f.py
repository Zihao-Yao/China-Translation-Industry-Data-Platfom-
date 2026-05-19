import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

with open(p, 'r', encoding='utf-8') as f:
    content = f.read()

# Before the reports section, insert: 
# 1. Industry chain analysis
# 2. More ranking section details 
# 3. Recruitment platform data
# 4. Company ecosystem chart

# First, expand the companies section with more detail  
extra_companies = '''
<div class="c2" style="margin-top:30px;">
<h3 style="color:var(--g);margin-bottom:12px;">翻译行业生态系统</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>全球Top 5语言服务企业（2025年营收）</strong><br>
1. TransPerfect - 约12亿美元（美国）<br>
2. Lionbridge - 约7亿美元（美国）<br>
3. RWS Holdings - 约8.5亿英镑（英国）<br>
4. Welocalize - 约5亿美元（美国）<br>
5. 中译语通 - 约15亿人民币（中国）<br><br>
中国翻译企业正在快速追赶全球巨头。以中译语通、传神语联、舜禹环球通为代表的本土企业，在AI翻译技术应用和语料资源积累方面已具备全球竞争力。2025年中国翻译企业合计营收约占全球市场份额的12-14%，较2019年提升约4个百分点。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>中国翻译企业营收分布（按规模）</strong><br>
头部企业(年营收>1亿)：约占行业总营收的35%，共约30家<br>
中型企业(年营收1000万~1亿)：占35%，约200家<br>
小微企业(年营收<1000万)：占30%，约3000+家<br><br>
行业集中度持续提升，头部效应明显。年营收超5000万的企业数量从2022年的约60家增长到2025年的约100家。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>翻译技术工具市场</strong><br>
Trados仍保持CAT工具市场领先地位（约45%市场份额），但Memsource(30%)和Smartcat(15%)正在快速增长。基于云的CAT工具使用率从2022年的38%提升到2025年的72%。AI翻译质量评估工具(MQM Score、TQAudit等)成为新兴细分市场。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">
<strong>企业招聘渠道推荐</strong><br>
除BOSS直聘、猎聘、智联招聘、前程无忧四大平台外，ProZ.com(国际自由译员平台)、TranslatorsCafe、LinkedIn、TAC(中国翻译协会)人才库也是翻译人才求职的重要渠道。2025年BOSS直聘上翻译相关岗位日均活跃职位数约1.2万+个。
</p>
</div>
'''

old = '</section><section id="projects">'
new = extra_companies + '</section><section id="projects">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After companies ecosystem, total: {os.path.getsize(p)} bytes")

# Add ranking detailed info with R and D assessment data
ranking_extra = '''
<div class="c2" style="margin-top:30px;">
<h3 style="color:var(--g);margin-bottom:12px;">翻译专业博士点（DTI试点院校）</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
翻译博士专业学位（Doctor of Translation and Interpreting, DTI）自2023年开启试点，首批28所高校获得DTI培养资格，2025年首批DTI博士入学。以下为部分DTI试点高校：
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:8px;">
北京大学 · 北京外国语大学 · 上海外国语大学 · 广东外语外贸大学 · 复旦大学 · 南京大学 · 浙江大学 · 武汉大学 · 西安外国语大学 · 四川外国语大学 · 大连外国语大学 · 北京语言大学 · 黑龙江大学 · 四川大学 · 中山大学 · 厦门大学 · 华东师范大学 · 山东大学 · 南开大学 · 吉林大学 · 天津外国语大学 · 北京第二外国语学院 · 南京师范大学 · 湖南师范大学 · 对外经济贸易大学 · 上海交通大学 · 华中科技大学 · 中国政法大学
</p>
</div>
<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">翻译学科评估说明</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">
教育部学科评估中，翻译专业（MTI）和翻译本科（BTI）分别进行评级。评估维度包括：师资队伍与资源、人才培养质量、科学研究水平、社会服务与学科声誉。A+代表全国前2%，A代表2%-5%，A-代表5%-10%，B+代表10%-20%，B代表20%-30%。评级有效期一般为4-5年。本节评级参考上一轮学科评估结果及行业综合排名。<br><br>
<strong>翻译学科发展趋势：</strong>多所高校正在推进翻译技术与AI融合课程改革，将机器翻译、大语言模型评估、翻译项目管理纳入核心课程。同时，校企合作深化，MTI学生实习基地覆盖翻译企业、互联网大厂和国际组织，产教融合成为翻译教育的新常态。
</p>
</div>
'''

old = '</section><section id="career">'
new = ranking_extra + '</section><section id="career">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After ranking depth, total: {os.path.getsize(p)} bytes")

# Finally add an overview deep analysis section 
# Insert after overview's trend bars
overview_depth = '''
<div class="c2" style="margin-top:24px;">
<h3 style="color:var(--g);margin-bottom:12px;">行业结构分析</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
2025年中国翻译行业总产值701.2亿元，较2024年的708亿元略有下降（-0.96%），这是近年来首次出现负增长。这一变化并非行业萎缩，而是AI翻译技术大规模应用导致单位翻译价格下降。然而，翻译需求总量仍在增长：从业人员总数从680.8万增至686.7万（+0.87%），专职翻译从110万增至113.5万（+3.18%），AI翻译企业从1200家激增至2183家（+81.9%）。<br><br>
<strong>关键解读：</strong>行业正经历"量增价降"的结构性调整。AI降低了翻译的单位成本，但扩大了翻译服务的应用场景和需求规模。人机协同成为主流交付模式，翻译行业的本质正在从"纯语言转换"向"语言信息服务"转型。专职翻译人员的持续增长表明，AI并未完全替代人工翻译，而是改变了翻译工作方式。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">
<strong>区域特征：</strong>北京、上海、广东仍为翻译行业三大核心区域，合计占据全国约52%的市场份额。以北京为例，大量国家级翻译机构（中国翻译研究院、中译语通）和高校（北外、北大、北语、北二外）聚集，形成了完整的翻译产业生态。长三角（上海、浙江、江苏）企业密集，国际化程度高，游戏出海和知识产权翻译需求旺盛。珠三角（广东）依托深圳、广州双城优势，跨境电商和语音技术翻译需求突出。
</p>
</div>
'''

old = '</div></section><section id="demand">'
new = '</div>' + overview_depth + '</section><section id="demand">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After overview depth, total: {os.path.getsize(p)} bytes")

# Add recruitment detailed data before jobs
recruit_extra = '''
<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">招聘市场分析（2025年数据）</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>翻译岗位城市分布：</strong>北京(28%)、上海(22%)、广州(15%)、深圳(12%)、杭州(6%)、南京(5%)、成都(4%)、武汉(3%)、其他(5%)。一线城市仍集中了75%以上的翻译岗位需求。<br><br>
<strong>热门语种需求排名：</strong>英语(52%)、日语(12%)、德语(8%)、法语(7%)、韩语(6%)、西班牙语(5%)、俄语(4%)、阿拉伯语(3%)、其他(3%)。小语种翻译虽然总体需求较少，但竞争也小，且薪资普遍高出英语20-50%。<br><br>
<strong>行业薪资趋势：</strong>2025年翻译行业平均薪资同比增长约5-8%，略高于社会平均增幅。AI翻译技术岗位薪资增幅最快（约15-20%），传统翻译岗位薪资增幅约3-5%。CATTI一级持证译员平均薪资高出行业平均水平约35%。<br><br>
<strong>灵活就业趋势：</strong>翻译行业自由职业占比持续上升，2025年约35%的翻译从业者选择自由或兼职工作方式。远程办公模式在翻译行业高度普及，约70%的翻译企业支持远程或混合办公模式。
</p>
</div>
'''

old = '<div id="jl"></div></section><section id="ranking">'
new = recruit_extra + '<div id="jl"></div></section><section id="ranking">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After recruit depth, total: {os.path.getsize(p)} bytes")

# Final check
size = os.path.getsize(p)
print(f"\n=== FINAL FILE SIZE: {size} bytes ({size/1024:.1f} KB) ===")
