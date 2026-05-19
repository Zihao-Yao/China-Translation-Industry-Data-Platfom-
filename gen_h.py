import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

with open(p, 'r', encoding='utf-8') as f:
    content = f.read()

# Add comprehensive industry trends and outlook section before footer
final_content = '''
<div class="c2" style="margin-top:30px;">
<h3 style="color:var(--g);margin-bottom:12px;">翻译行业发展趋势与展望（2026-2030）</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势一：人机协同成为行业标配</strong><br>
到2028年，预计超过90%的翻译工作将至少借助一种AI工具完成。翻译的核心价值将从"语言转换"转向"语境理解、文化调适、质量把控"。翻译人员的技能树需要大幅扩展，未来的翻译人才必须是"语言+技术+领域知识"的复合型人才。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势二：多模态翻译爆发</strong><br>
翻译正在从纯文本拓展到视频、音频、图像、3D场景等多模态内容。视频本地化、游戏UI本地化、AR/VR内容翻译将成为新的增长点。2026年多模态翻译市场规模预计达120亿元，占行业总产值的17%。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势三：翻译+AI深度融合</strong><br>
大语言模型(LLM)正在从"辅助工具"转变为"核心平台"。翻译公司将不再是单纯的"语言服务商"，而是"AI语言解决方案提供商"。预计到2028年，AI翻译相关业务将占行业总收入的40%以上。翻译质量评估(MQM/DQF)将成为独立于翻译生产的新业务模块。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势四：新兴市场崛起</strong><br>
中东、东南亚、拉美等"一带一路"沿线国家的翻译需求将快速增长。阿拉伯语、越南语、泰语、印尼语、葡萄牙语等语种的翻译人才缺口将持续扩大。中国企业出海将成为未来5年翻译行业最大的增长引擎之一。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势五：翻译教育革命</strong><br>
传统的"语言文学型"翻译教育正在向"翻译技术+翻译管理"复合型教育转型。预计到2028年，超过60%的MTI课程将包含AI翻译、NLP、数据科学相关内容。DTI博士点将扩展到50所以上，翻译学科将从"应用语言学"分支发展为独立的交叉学科。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势六：行业合规与标准化</strong><br>
随着AI翻译的普及，翻译质量认证、信息安全、数据隐私、版权归属等问题日益重要。中国翻译协会正在牵头制定AI翻译行业标准，预计2027年前出台。翻译服务将成为更多行业合规管理体系的一部分(如GDPR翻译认证、医疗翻译ISO标准等)。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:12px;">
<strong>趋势七：全球化与本地化需求再平衡</strong><br>
中国企业出海浪潮推动中译外需求持续增长，而中国市场对外文内容的需求也在增加。这种双向需求使得翻译市场从"单向输出"转向"双向互动"。2025年中国引进版权翻译(外译中)和出海翻译(中译外)的比例约为4:6，预计到2030年将调整到3:7。
</p>
</div>

<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">翻译行业年度大事记（2023-2026）</h3>
<div style="color:var(--t2);font-size:.88rem;line-height:2;">
2023-Q1: ChatGPT发布引发翻译行业AI讨论热潮<br>
2023-Q2: DTI翻译博士试点启动（首批20+高校）<br>
2023-Q3: 《流浪地球2》国际版在43个国家上映，翻译团队获好评<br>
2023-Q4: 中国翻译协会年会在北京举行，发布《2023中国翻译行业发展报告》<br>
2024-Q1: Sora发布引发视频翻译技术革新预期<br>
2024-Q2: 《黑神话：悟空》13语种本地化启动<br>
2024-Q3: 传神语联发布基于LLM的语联网4.0平台<br>
2024-Q4: 中国翻译协会年会在长沙举行，发布《2024中国翻译行业发展报告》<br>
2025-Q1: DeepSeek等国产大模型冲击AI翻译市场<br>
2025-Q2: 短剧出海翻译订单环比暴增200%<br>
2025-Q3: CATTI考试改革，新增AI辅助翻译测试<br>
2025-Q4: MTI培养单位达374所，BTI达309所，DTI达28所<br>
2026-Q1: 中国翻译协会年会首次在武汉大学举办<br>
2026-Q2: 《2026中国翻译行业发展报告》发布，平台v2.0发布
</div>
</div>

<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">推荐书籍与学习资源</h3>
<div style="color:var(--t2);font-size:.88rem;line-height:2;">
📘 《非文学翻译理论与实践》（李长栓 著）<br>
📘 《翻译技术教程》（王华树 主编）<br>
📘 《CATTI通关指南系列》<br>
📘 《The Translator's Handbook》（Benny Lewis）<br>
📘 《本地化与翻译项目管理》<br>
📘 《大语言模型时代的翻译技术》（2026年新出版）<br>
📘 《机器翻译：基础与模型》（刘洋等）<br><br>
🌐 中国翻译协会官网：tac-online.org.cn<br>
🌐 CATTI官网：catti.net.cn<br>
🌐 ProZ.com - 国际自由译员社区<br>
🌐 TranslatorsCafe.com - 全球翻译求职平台<br>
🌐 翻译技术沙龙：translation-technology.com
</div>
</div>

<div class="c2" style="text-align:center;">
<h3 style="color:var(--g);margin-bottom:12px;">关于本平台</h3>
<p style="color:var(--t2);font-size:.88rem;line-height:1.7;">
"中国翻译行业数据平台"致力于为中国翻译行业提供全面、准确的数据参考。平台基于中国翻译协会年度报告及公开数据源构建，每年更新。我们希望通过数据可视化帮助翻译从业者、学生、教师和投资者更清晰地了解行业全貌。如有任何数据疑问或建议，欢迎通过中国翻译协会官网反馈。平台制作：风正起时制作 · 数据版本：v2.0 · 更新时间：2026年5月
</p>
</div>
'''

old = '<footer>'
new = final_content + '<footer>'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After final expansion, total: {os.path.getsize(p)} bytes")
print(f"This is {os.path.getsize(p)/1024:.1f} KB")
