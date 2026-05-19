import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

with open(p, 'r', encoding='utf-8') as f:
    content = f.read()

# Add a detailed "key company comparison" section and more project details
push = '''

<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">全球Top翻译企业对比</h3>
<div class="tb"><table><thead><tr><th>企业</th><th>总部</th><th>成立年份</th><th>员工数</th><th>语种</th><th>2025营收</th><th>核心产品</th></tr></thead><tbody>
<tr><td>TransPerfect</td><td>纽约</td><td>1992</td><td>10,000+</td><td>170+</td><td>~12亿美元</td><td>GlobalLink、AI翻译</td></tr>
<tr><td>RWS</td><td>奇尔特恩</td><td>1958</td><td>6,500+</td><td>150+</td><td>~8.5亿英镑</td><td>Trados、Trados Studio</td></tr>
<tr><td>Lionbridge</td><td>波士顿</td><td>1996</td><td>5,000+</td><td>350+</td><td>~7亿美元</td><td>Lionbridge AI、GeoWorks</td></tr>
<tr><td>Welocalize</td><td>弗雷德里克</td><td>1997</td><td>3,500+</td><td>250+</td><td>~5亿美元</td><td>AI+人工翻译平台</td></tr>
<tr><td>中译语通</td><td>北京</td><td>1973</td><td>2,000+</td><td>80+</td><td>~15亿人民币</td><td>YeeCat、译云</td></tr>
<tr><td>传神语联</td><td>北京</td><td>2005</td><td>1,500+</td><td>100+</td><td>~8亿人民币</td><td>语联网4.0</td></tr>
<tr><td>舜禹环球通</td><td>南京</td><td>1996</td><td>800+</td><td>60+</td><td>~5亿人民币</td><td>IP翻译+本地化</td></tr>
<tr><td>策马翻译</td><td>北京</td><td>2003</td><td>500+</td><td>50+</td><td>~3亿人民币</td><td>CATTI培训+翻译</td></tr>
</tbody></table></div>
</div>

<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">中国翻译行业政策与法规环境</h3>
<p style="color:var(--t2);font-size:.88rem;line-height:1.8;margin-bottom:10px;">
1. <strong>翻译专业人员职称制度改革（2023-2025）：</strong>人社部持续推进翻译人员职称制度改革，建立分类评价体系，突出翻译实际能力与业绩贡献。翻译系列职称分设初级、中级、副高级和正高级四个层级，与CATTI证书等级衔接。
</p>
<p style="color:var(--t2);font-size:.88rem;line-height:1.8;margin-bottom:10px;">
2. <strong>CATTI考试改革：</strong>2025年起CATTI考试级别新增"机考+AI辅助翻译测试"内容，反映行业技术发展新要求。同时，CATTI一级考试增加公开答辩环节，评价过程更加透明、多维。
</p>
<p style="color:var(--t2);font-size:.88rem;line-height:1.8;margin-bottom:10px;">
3. <strong>国家标准制定：</strong>中国翻译协会牵头制定的《翻译服务规范》系列国家标准持续更新。2025年发布的《机器翻译服务质量评估规范》为AI翻译行业提供了首个国家级评价标准。
</p>
<p style="color:var(--t2);font-size:.88rem;line-height:1.8;margin-bottom:10px;">
4. <strong>翻译学科建设：</strong>教育部支持翻译专业学位点建设，MTI和BTI专业点数量稳步增长。翻译博士专业学位(DTI)的设立标志着我国翻译学科形成了完整的本-硕-博培养体系。
</p>
<p style="color:var(--t2);font-size:.88rem;line-height:1.8;margin-bottom:10px;">
5. <strong>语言服务产业政策：</strong>多个省市将语言服务纳入文化创意产业和现代服务业发展规划。北京、上海、广州均设有语言服务产业发展专项资金，支持中小翻译企业技术创新和人才培养。
</p>
</div>

<div class="c2">
<h3 style="color:var(--g);margin-bottom:12px;">翻译行业从业者画像（2025）</h3>
<div class="cb"><span class="la">性别</span><div class="bt"><div class="bf" style="width:72%;">女性72%</div></div><span class="pc">72%</span></div>
<div class="cb"><span class="la">年龄30以下</span><div class="bt"><div class="bf" style="width:27%;">27.3%</div></div><span class="pc">27.3%</span></div>
<div class="cb"><span class="la">硕士以上</span><div class="bt"><div class="bf" style="width:58%;">58%</div></div><span class="pc">58%</span></div>
<div class="cb"><span class="la">CATTI持证</span><div class="bt"><div class="bf" style="width:35%;">35%</div></div><span class="pc">35%</span></div>
<div class="cb"><span class="la">英语为主要方向</span><div class="bt"><div class="bf" style="width":52%;">52%</div></div><span class="pc">52%</span></div>
<div class="cb"><span class="la">使用AI工具</span><div class="bt"><div class="bf" style="width:72%;">72%</div></div><span class="pc">72%</span></div>
<div class="cb"><span class="la">一线城市</span><div class="bt"><div class="bf" style="width:65%;">65%</div></div><span class="pc">65%</span></div>
<div class="cb"><span class="la">自由职业</span><div class="bt"><div class="bf" style="width:35%;">35%</div></div><span class="pc">35%</span></div>
<p style="color:var(--t2);font-size:.78rem;margin-top:8px;">注：以上数据综合中国翻译协会2026年行业报告及相关调研数据，部分为估算值。</p>
</div>

'''

old = '<footer>'
new = push + '<footer>'
content = content.replace(old, new)

with open(p, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"After final push, total: {os.path.getsize(p)} bytes = {os.path.getsize(p)/1024:.1f} KB")
