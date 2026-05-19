import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

with open(p, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the position just before </section><section id="reports"> and add more demand detail
# Find the reports section and insert a detailed analysis article before it

new_content = '''
<div class="c2" style="margin-top:30px;">
<h3 style="color:var(--g);margin-bottom:12px;">需求趋势深度分析</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>1. 人机协同已成行业共识</strong> - 2025年超过70%的翻译企业已采用AI辅助翻译流程，人机协同比纯人工翻译效率提升3-5倍。传统译员角色向"译后编辑(PE)"转型，高端人工翻译需求反而逆势增长，文学、法律、医学等领域的专业译员单价提升约12%。根据2026年报告，行业产值达到701.2亿元，虽然略低于2024年，但整体规模依然处于高位。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>2. 视频本地化爆发式增长</strong> - 2025年短视频/TikTok/YouTube创译成为增速最快的细分市场，同比增长34%。短剧出海成为新风口，2025年短剧翻译订单环比增长超过200%。AI语音克隆+字幕翻译技术的成熟使视频本地化成本下降40%以上，但质量把控仍是核心痛点。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>3. 游戏出海翻译持续火热</strong> - 国内游戏企业海外收入超180亿美元，《原神》《黑神话：悟空》《崩坏：星穹铁道》等大作的游戏本地化需求旺盛。游戏翻译不仅仅需要语言能力，更需要理解游戏文化、UI规范与多平台适配。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>4. AI翻译质量评估催生新岗位</strong> - MQM(多维质量指标)和DQF(动态质量框架)评估体系在中国翻译行业广泛应用。2025年"翻译质量评估师"成为新兴职业，主要工作包括制定评估标准、监督AI输出质量、建立反馈闭环。该岗位人才缺口显著，平均薪资20-40K。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>5. 一带一路语种需求多元</strong> - 2025年小语种翻译需求增速显著高于英语。中→阿(阿拉伯语)翻译需求增长最快，其次是中→俄、中→西、中→日。一带一路沿线国家的本地化服务需求正在成为新的增长引擎。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>6. AI翻译企业数量激增</strong> - 2025年从事AI翻译和语言技术开发的企业达2183家，同比增长82%。AI翻译市场规模约150亿元，占行业总产值的21.4%。头部企业如中译语通、传神语联持续加大AI投入，推出基于大模型的语言服务平台。
</p>
</div>
'''

# Insert deep analysis after demand section's language table
# Find the end of demand section's </section>
old = '</tbody></table></div></div></div></section><section id="companies">'
new = '</tbody></table></div></div></div>' + new_content + '</section><section id="companies">'

content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After demand depth, total: {os.path.getsize(p)} bytes")

# Now add career depth analysis
career_depth = '''
<div class="c2" style="margin-top:30px;">
<h3 style="color:var(--g);margin-bottom:12px;">职业发展深度建议</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>1. 翻译专业应届生入行策略</strong> - 建议MTI在读期间即开始准备CATTI二级证书（2025年CATTI报考人数突破40万）。优先选择有完整培训体系的企业如中译语通、RWS、策马翻译等。入行初期建议从in-house译员做起，积累行业经验后再考虑转向自由职业。根据2026年报告，MTI在校生超过6.8万人，就业竞争依然激烈。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>2. 非翻译专业转行机会</strong> - 法律背景+英语 = 法律翻译（时薪500-1500元）；医学背景+英语 = 医学翻译（时薪400-1200元）；计算机背景+语言 = 翻译技术开发（年薪35-80万）。约40%的翻译行业从业者来自非翻译专业背景，跨专业人才在垂直领域更具竞争力。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>3. 自由译员生存指南</strong> - 头部自由译员年收入可达30-80万+，但需要3-5年的客户积累期。建议通过ProZ、TranslatorsCafe等国际平台接单，同时维护国内客户（中译语通、传神语联等平台）。掌握CAT工具(Trados、MemoQ、Wordfast)是基本门槛，精通者可获得20-30%的薪资溢价。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>4. AI时代翻译技能升级路线</strong> - 第一层：基础翻译+CAT工具（必备）；第二层：译后编辑+AIGC提示词工程（2025年新增）；第三层：翻译项目管理+质量评估（管理方向）；第四层：语言数据训练+AI模型微调（技术方向）。2025年翻译技术岗位同比增长45%，是行业增长最快的方向。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
<strong>5. 国际组织翻译岗位</strong> - 联合国、欧盟、WHO等国际组织提供稳定的翻译岗位。2025年联合国YPP考试翻译类岗位竞争比1:47。建议关注UN Careers网站，CATTI一级证书和3年以上经验是基本门槛。国际组织译员年薪约40-80万人民币。
</p>
</div>
'''

old = '</div></section><section id="global">'
new = '</div>' + career_depth + '</section><section id="global">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After career depth, total: {os.path.getsize(p)} bytes")

# Add global market depth
global_depth = '''
<div class="c2" style="margin-top:24px;">
<h3 style="color:var(--g);margin-bottom:12px;">全球翻译市场深度分析</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
欧洲是全球翻译服务第二大市场（占总市场31%），但在中国翻译企业的境外收入中占比超过60%，显示中国翻译企业与欧洲市场的紧密联系。欧盟28种官方语言的翻译需求巨大，GDPR也对数据处理和法律翻译提出了更高要求。值得注意的是，欧洲译员的中位年龄高达55岁，年轻译员严重不足，这为中国年轻译员进入欧洲市场提供了窗口机会。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
美洲市场（主要是北美）占全球36%的份额，是美国语言服务企业的传统优势区域。AI机器翻译在美洲的发展最快，大量硅谷企业正在将翻译纳入AI工作流。北美市场对手工翻译的需求正在减少，但对AI辅助翻译和译后编辑的需求快速增加。中国企业进入美洲市场需注意文化差异和合规要求。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
亚太地区(24%)是全球翻译市场增长最快的区域，年均增速6.8%。中日韩印四国贡献了亚太地区绝大部分翻译市场份额。中国翻译研究处于全球领先地位，多所高校在机器翻译、语料库语言学等领域发表高水平论文。中东和东南亚市场正在快速崛起，阿拉伯语和东南亚语种翻译需求增长显著。
</p>
</div>
<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">全球AI翻译技术趋势（2025-2026）</h3>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
大语言模型(LLM)正在重塑翻译行业格局。2025年，基于LLM的翻译质量在通用领域已接近甚至超越传统NMT模型，在创意翻译、文学翻译、营销文案翻译等"非标准"领域展现出独特优势。但LLM翻译也面临幻觉(Hallucination)、一致性、成本控制等挑战，行业尚未形成统一的最佳实践标准。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
语音翻译市场持续扩大。2025年实时语音翻译设备和服务市场规模约45亿美元，同比增长28%。TikTok、YouTube、Twitch等平台的视频内容多语言化需求推动语音翻译技术创新。AI语音克隆+口型同步技术的结合使视频本地化进入新纪元。
</p>
<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;">
2026年中国翻译协会年会已于2026年4月25日在武汉大学召开，发布《2026中国翻译行业发展报告》和《2026全球翻译行业发展报告》两大重磅报告。报告指出人机协同已成为行业共识，翻译技术人才培养正在成为翻译高等教育的重要方向。
</p>
</div>
'''

old = '<h2 class="st">数据报告</h2>'
new = '</section>' + global_depth + '<section id="reports"><h2 class="st">数据报告</h2>'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After global depth, total: {os.path.getsize(p)} bytes")

# Also add a talent pipeline detailed section
talent_pipeline = '<div class="c2" style="margin-top:30px;">'

# Add MTI school list as collapsed section  
talent_pipeline += '<h3 style="color:var(--g);margin-bottom:12px;">2025年毕业生就业去向分布</h3>'
talent_pipeline += '<div class="cb"><span class="la">翻译企业</span><div class="bt"><div class="bf" style="width:42%;">42%</div></div><span class="pc">42%</span></div>'
talent_pipeline += '<div class="cb"><span class="la">大型企业in-house</span><div class="bt"><div class="bf" style="width:18%;">18%</div></div><span class="pc">18%</span></div>'
talent_pipeline += '<div class="cb"><span class="la">自由职业</span><div class="bt"><div class="bf" style="width:15%;">15%</div></div><span class="pc">15%</span></div>'
talent_pipeline += '<div class="cb"><span class="la">教育/科研</span><div class="bt"><div class="bf" style="width:10%;">10%</div></div><span class="pc">10%</span></div>'
talent_pipeline += '<div class="cb"><span class="la">公考/事业单位</span><div class="bt"><div class="bf" style="width:8%;">8%</div></div><span class="pc">8%</span></div>'
talent_pipeline += '<div class="cb"><span class="la">其他</span><div class="bt"><div class="bf" style="width:7%;">7%</div></div><span class="pc">7%</span></div>'

talent_pipeline += '<h3 style="color:var(--g);margin:24px 0 12px;">CATTI考试数据</h3>'
talent_pipeline += '<div class="dr">'
talent_pipeline += '<div class="di"><div class="v">40万+</div><div class="lb">2025年报考人数</div></div>'
talent_pipeline += '<div class="di"><div class="v">约25%</div><div class="lb">平均通过率</div></div>'
talent_pipeline += '<div class="di"><div class="v">一级约5%</div><div class="lb">CATTI一级通过率</div></div>'
talent_pipeline += '<div class="di"><div class="v">147万</div><div class="lb">累计持证人数</div></div>'
talent_pipeline += '</div>'
talent_pipeline += '<p style="color:var(--t2);font-size:.85rem;margin-top:12px;">CATTI考试已成为翻译行业最重要的职业技能认证，持证译员平均薪资高出非持证译员35%。2025年起CATTI考试新增机考和AI辅助翻译测试内容，反映行业技术发展趋势。</p>'

talent_pipeline += '<h3 style="color:var(--g);margin:24px 0 12px;">翻译行业薪酬区间</h3>'
talent_pipeline += '<div class="tb"><table><thead><tr><th>岗位类型</th><th>应届起薪</th><th>3-5年</th><th>5-10年</th><th>10年+</th></tr></thead><tbody>'
talent_pipeline += '<tr><td>in-house译员(笔译)</td><td>8-12K</td><td>12-20K</td><td>20-35K</td><td>35-50K+</td></tr>'
talent_pipeline += '<tr><td>in-house译员(口译)</td><td>12-18K</td><td>18-30K</td><td>30-50K</td><td>50-80K+</td></tr>'
talent_pipeline += '<tr><td>翻译项目经理</td><td>10-15K</td><td>15-25K</td><td>25-40K</td><td>40-60K+</td></tr>'
talent_pipeline += '<tr><td>自由译员(笔译)</td><td>5-10K</td><td>10-25K</td><td>25-50K</td><td>50K+</td></tr>'
talent_pipeline += '<tr><td>自由译员(口译)</td><td>8-15K</td><td>15-35K</td><td>35-60K</td><td>60-100K+</td></tr>'
talent_pipeline += '<tr><td>翻译技术开发</td><td>15-25K</td><td>25-45K</td><td>45-70K</td><td>70-100K+</td></tr>'
talent_pipeline += '</tbody></table></div>'

talent_pipeline += '</div>'

# Insert at end of talent section
old = '</div></section><section id="recruitment">'
new = '</div>' + talent_pipeline + '</section><section id="recruitment">'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After talent depth, total: {os.path.getsize(p)} bytes")
