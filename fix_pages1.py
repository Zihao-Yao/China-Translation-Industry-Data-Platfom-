import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
# 更新 build_pages_1.js 中的企业页面HTML
pages1_path = os.path.join(d, 'build_pages_1.js')
content = open(pages1_path, 'r', encoding='utf-8').read()

# 找到 body3 定义
idx = content.find("const body3 = '")
if idx > 0:
    # 找到结束位置 - 后面的;
    end_idx = content.find("';\n\n// ============ 4.", idx)
    
    new_body3 = """const body3 = '<section style="padding-top:100px;">' + sh.bh() +
'<h2 class="st">知名企业</h2>' +
'<p style="text-align:center;color:var(--t2);margin-bottom:12px;">共25+家企业，按规模分类展示。点击卡片查看详情与招聘链接。</p>' +
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
'<div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">\\u2715</button><div id="mc"></div></div></div>' +
'<div class="c2" style="margin-top:30px;"><h3 style="color:var(--g);margin-bottom:12px;">翻译行业生态系统</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;margin-bottom:16px;"><strong>全球Top 5语言服务企业（2025年营收）</strong><br>1. TransPerfect - 约12亿美元（美国）<br>2. Lionbridge - 约7亿美元（美国）<br>3. RWS Holdings - 约8.5亿英镑（英国）<br>4. Welocalize - 约5亿美元（美国）<br>5. 中译语通 - 约15亿人民币（中国）<br><br>中国翻译企业正在快速追赶全球巨头。以中译语通、传神语联、舜禹环球通为代表的本土企业，在AI翻译技术应用和语料资源积累方面已具备全球竞争力。2025年中国翻译企业合计营收约占全球市场份额的12-14%，较2019年提升约4个百分点。</p></div>' +
'<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">翻译技术工具市场</h3>' +
'<p style="color:var(--t2);font-size:.9rem;line-height:1.8;">Trados仍保持CAT工具市场领先地位（约45%市场份额），但Memsource(30%)和Smartcat(15%)正在快速增长。基于云的CAT工具使用率从2022年的38%提升到2025年的72%。AI翻译质量评估工具成为新兴细分市场。</p></div></section>';

    content = content[:idx] + new_body3 + content[end_idx:]
    print('body3 replaced')
else:
    print('Could not find body3')

# 更新 script3
idx_s3 = content.find("const script3 = ")
if idx_s3 > 0:
    end_s3 = content.find(';\n', idx_s3)
    old_s3 = content[idx_s3:end_s3+2]
    # Replace with one that doesn't call renderCos (js_renderCos auto-calls)
    content = content.replace(old_s3, "const script3 = sh.js_renderCos() + '\\n';\n")
    print('script3 updated')

with open(pages1_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('build_pages_1.js saved')
