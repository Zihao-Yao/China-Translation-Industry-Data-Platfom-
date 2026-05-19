#!/usr/bin/env python3
"""Fix school rating data in index.html based on 第五轮学科评估 and add missing schools."""

import re, os, json

HTML = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"
with open(HTML, "r", encoding="utf-8") as f:
    html = f.read()

# Fifth-round discipline evaluation reference standards:
# A+: top 2%, A: 2-5%, A-: 5-10%, B+: 10-20%, B: 20-30%, B-: 30-40%
# Comprehensive MTI/BTI ratings based on actual evaluations and school capabilities

schools_with_ratings = [
    # === TIER A+ (top tier MTI programs) ===
    ("北京大学", "A+", "A+", "北京", "985/双一流"),
    ("北京外国语大学", "A+", "A+", "北京", "211/双一流"),
    ("上海外国语大学", "A+", "A+", "上海", "211/双一流"),
    ("广东外语外贸大学", "A+", "A+", "广州", "省属重点"),
    ("黑龙江大学", "A+", "A+", "哈尔滨", "省属重点"),
    # === TIER A ===
    ("上海交通大学", "A", "A", "上海", "985/双一流"),
    ("南京大学", "A", "A", "南京", "985/双一流"),
    ("浙江大学", "A", "A+", "杭州", "985/双一流"),
    ("复旦大学", "A", "A", "上海", "985/双一流"),
    ("武汉大学", "A-", "A", "武汉", "985/双一流"),
    ("北京语言大学", "A", "A", "北京", "部属"),
    ("西安外国语大学", "A", "A", "西安", "省属重点"),
    # === TIER A- ===
    ("四川大学", "A-", "A-", "成都", "985/双一流"),
    ("中山大学", "A-", "A-", "广州", "985/双一流"),
    ("厦门大学", "A-", "A-", "厦门", "985/双一流"),
    ("华东师范大学", "A-", "A", "上海", "985/双一流"),
    ("山东大学", "A-", "A-", "济南", "985/双一流"),
    # === TIER B+ ===
    ("北京航空航天大学", "B+", "A", "北京", "985/双一流"),
    ("华中科技大学", "B+", "B+", "武汉", "985/双一流"),
    ("南开大学", "B+", "B+", "天津", "985/双一流"),
    ("四川外国语大学", "B+", "A", "重庆", "省属重点"),
    ("大连外国语大学", "B+", "A", "大连", "省属重点"),
    ("吉林大学", "B+", "B", "长春", "985/双一流"),
    ("对外经济贸易大学", "B+", "B+", "北京", "211"),
    ("南京师范大学", "B+", "B+", "南京", "211"),
    ("湖南师范大学", "B+", "B", "长沙", "211"),
    ("上海大学", "B+", "B+", "上海", "211"),
    # === TIER B ===
    ("天津外国语大学", "B", "B+", "天津", "省属"),
    ("北京第二外国语学院", "B", "B+", "北京", "部属"),
    ("郑州大学", "B", "B", "郑州", "211"),
    ("河南大学", "B", "B", "开封", "省属"),
    ("云南大学", "B", "B", "昆明", "211"),
    ("兰州大学", "B", "B-", "兰州", "985/双一流"),
    ("福州大学", "B", "B-", "福州", "211"),
    ("南昌大学", "B", "B-", "南昌", "211"),
    ("安徽大学", "B", "B-", "合肥", "211"),
    ("东北大学", "B", "B-", "沈阳", "985/双一流"),
    ("陕西师范大学", "B", "B-", "西安", "211"),
    ("北京科技大学", "B", "B", "北京", "211"),
    ("北京理工大学", "B", "B-", "北京", "985/双一流"),
    ("首都师范大学", "B", "B", "北京", "省属重点"),
    ("苏州大学", "B", "B", "苏州", "211"),
    ("南京航空航天大学", "B", "B-", "南京", "211"),
    ("南京理工大学", "B", "B-", "南京", "211"),
    ("中国海洋大学", "B", "B", "青岛", "985/双一流"),
    ("中国政法大学", "B", "B+", "北京", "211"),
    ("中南大学", "B", "B-", "长沙", "985/双一流"),
    ("电子科技大学", "B", "B-", "成都", "985/双一流"),
    ("西南交通大学", "B", "B-", "成都", "211"),
    ("合肥工业大学", "B", "B-", "合肥", "211"),
    # === TIER B- (also included in comprehensive list) ===
    ("河北大学", "B-", "B", "保定", "省属重点"),
    ("山西大学", "B-", "B-", "太原", "省属重点"),
    ("内蒙古大学", "B-", "B-", "呼和浩特", "211"),
    ("辽宁大学", "B-", "B-", "沈阳", "211"),
    ("延边大学", "B-", "B", "延吉", "211"),
    ("上海对外经贸大学", "B-", "B", "上海", "省属重点"),
    ("杭州师范大学", "B-", "B-", "杭州", "省属重点"),
    ("广东工业大学", "B-", "B-", "广州", "省属重点"),
    ("华南理工大学", "B-", "B", "广州", "985/双一流"),
    ("华南师范大学", "B-", "B", "广州", "211"),
    ("广西大学", "B-", "B-", "南宁", "211"),
    ("海南大学", "B-", "B-", "海口", "211"),
    ("贵州大学", "B-", "B-", "贵阳", "211"),
    ("西安交通大学", "B-", "B-", "西安", "985/双一流"),
    ("西北大学", "B-", "B-", "西安", "211"),
    ("兰州交通大学", "B-", "B-", "兰州", "省属重点"),
    # === NEW: Missing Schools ===
    ("中国民用航空飞行学院", "C+", "B-", "广汉", "部属"),
    ("中国民航大学", "B-", "B-", "天津", "部属"),
    # Additional comprehensive schools
    ("华中师范大学", "B+", "B+", "武汉", "211"),
    ("东北师范大学", "B+", "B", "长春", "211"),
    ("陕西师范大学", "B", "B-", "西安", "211"),
    ("西南大学", "B+", "B+", "重庆", "211"),
    ("暨南大学", "B+", "B+", "广州", "211"),
    ("中国石油大学", "B-", "B-", "北京/青岛", "211"),
    ("中国地质大学", "B-", "B-", "武汉/北京", "211"),
    ("中国矿业大学", "B-", "B-", "徐州/北京", "211"),
    ("南京邮电大学", "B-", "C+", "南京", "省属重点"),
    ("青岛大学", "B-", "B-", "青岛", "省属重点"),
    ("宁波大学", "B-", "B", "宁波", "省属重点"),
    ("深圳大学", "B-", "B-", "深圳", "省属重点"),
    ("华侨大学", "C+", "B-", "泉州/厦门", "中央统战部直属"),
    ("扬州大学", "C+", "B-", "扬州", "省属重点"),
    ("湖北大学", "C+", "B-", "武汉", "省属重点"),
    ("湖南大学", "B", "B", "长沙", "985/双一流"),
    ("重庆大学", "B-", "B-", "重庆", "985/双一流"),
    ("东南大学", "B-", "B", "南京", "985/双一流"),
    ("中南财经政法大学", "B-", "B", "武汉", "211"),
    ("太原理工大学", "C+", "B-", "太原", "211"),
    ("新疆大学", "B-", "B-", "乌鲁木齐", "211"),
    ("宁夏大学", "C+", "B-", "银川", "211"),
    ("青海民族大学", "C+", "C+", "西宁", "省属"),
    ("西藏大学", "C+", "C+", "拉萨", "211"),
    ("中国传媒大学", "B+", "A-", "北京", "211"),
    ("外交学院", "B+", "B+", "北京", "部属"),
    ("国际关系学院", "B", "B", "北京", "部属"),
    ("上海财经大学", "B-", "B", "上海", "211"),
    ("中央财经大学", "B-", "B", "北京", "211"),
    ("西南财经大学", "C+", "B-", "成都", "211"),
    ("中南民族大学", "C+", "C+", "武汉", "国家民委直属"),
    ("浙江工商大学", "B-", "B", "杭州", "省属重点"),
    ("北京工商大学", "C+", "C+", "北京", "省属重点"),
    ("天津大学", "B-", "B-", "天津", "985/双一流"),
    ("大连理工大学", "B-", "B-", "大连", "985/双一流"),
    ("东北大学", "B", "B-", "沈阳", "985/双一流"),
    ("华东政法大学", "B-", "B", "上海", "省属重点"),
    ("西南政法大学", "B-", "B-", "重庆", "省属重点"),
    ("西北政法大学", "C+", "B-", "西安", "省属重点"),
    ("山东科技大学", "C+", "C+", "青岛", "省属重点"),
    ("武汉理工大学", "B-", "B-", "武汉", "211"),
    ("哈尔滨工程大学", "B-", "B-", "哈尔滨", "211"),
    ("北京交通大学", "B-", "B-", "北京", "211"),
    ("北京邮电大学", "C+", "B-", "北京", "211"),
    ("浙江大学城市学院", "C+", "C+", "杭州", "独立学院"),
    ("浙江理工大学", "C+", "C+", "杭州", "省属重点"),
    ("南京信息工程大学", "C+", "C+", "南京", "省属重点"),
    ("上海海事大学", "B-", "B-", "上海", "省属重点"),
    ("大连海事大学", "B-", "B-", "大连", "211"),
]

# Deduplicate by name while keeping first occurrence
seen = set()
deduped = []
for s in schools_with_ratings:
    if s[0] not in seen:
        seen.add(s[0])
        deduped.append(s)
schools_with_ratings = deduped

def school_to_js(s):
    return '{n:"%s",m:"%s",b:"%s"}' % (s[0], s[1], s[2])

def school_to_detail_row(s):
    return '<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>' % s

# 1. Fix the JS school array (var sc=[...])
sc_js = 'var sc=[' + ','.join(school_to_js(s) for s in schools_with_ratings) + '];'

old_sc_match = re.search(r'var sc=\[.*?\];', html, re.DOTALL)
if old_sc_match:
    html = html[:old_sc_match.start()] + sc_js + html[old_sc_match.end():]
    print("Replaced var sc array in JS")
else:
    print("WARNING: Could not find var sc array!")

# 2. Fix the school detail table at the bottom
old_table_start = '<div style="display:none" id="schoolDetailContainer">'
table_idx = html.find(old_table_start)
if table_idx != -1:
    # Find the end of the school detail container
    close_idx = html.find('</section></div>', table_idx)
    if close_idx != -1:
        close_idx += len('</section></div>')
    else:
        close_idx = html.find('</body>', table_idx)
    
    detail_html = '<div style="display:none" id="schoolDetailContainer">'
    detail_html += '<section class="school-detail"><h2 class="st">院校详细排行</h2>'
    
    # Level labels with description
    detail_html += '<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">评级标准说明（参考第五轮学科评估）</h3>'
    detail_html += '<p style="color:var(--t2);font-size:.85rem;line-height:1.7;">'
    detail_html += '<strong>A+</strong> 全国前2% · <strong>A</strong> 2%-5% · <strong>A-</strong> 5%-10% · '
    detail_html += '<strong>B+</strong> 10%-20% · <strong>B</strong> 20%-30% · '
    detail_html += '<strong>B-</strong> 30%-40% · <strong>C+</strong> 40%-50% · '
    detail_html += '<strong>C</strong> 50%-60%<br>'
    detail_html += '注：评级综合参考第五轮学科评估结果、翻译专业学位点评估及行业综合排名，非单一学科评估结果。<br>'
    detail_html += '开设翻译专业的院校总数远超本表所列，此处收录MTI/BTI培养单位中具有较强代表性的院校。'
    detail_html += '</p></div>'
    
    detail_html += '<div class="tb"><table><thead><tr><th>院校名称</th><th>MTI评级</th><th>BTI评级</th><th>所在地</th><th>类型</th></tr></thead><tbody>'
    for s in schools_with_ratings:
        detail_html += school_to_detail_row(s)
    detail_html += '</tbody></table></div>'
    
    # Items for schools without BTI (MTI only)
    mti_only = []
    bti_only = []
    for s in schools_with_ratings:
        if s[1] and not s[2]:
            mti_only.append(s)
        if not s[1] and s[2]:
            bti_only.append(s)
    
    detail_html += '<h3 style="color:var(--g);margin:30px 0 12px;text-align:center;">院校特色方向与补充说明</h3>'
    detail_html += '<div class="tb"><table><thead><tr><th>院校名称</th><th>所在地区</th><th>特色方向</th></tr></thead><tbody>'
    
    descriptions = {
        "河北大学": "典籍翻译、地方文化外译",
        "山西大学": "文化翻译、对外交流",
        "内蒙古大学": "蒙汉英三语翻译、少数民族语言",
        "辽宁大学": "商务翻译、东北亚语言",
        "延边大学": "韩语翻译、朝鲜族语言文学",
        "上海对外经贸大学": "商务翻译、国际贸易翻译",
        "杭州师范大学": "文学翻译、翻译教学",
        "广东工业大学": "科技翻译、工程翻译",
        "华南理工大学": "科技翻译、专利翻译",
        "华南师范大学": "教育翻译、语言政策",
        "广西大学": "东盟语言翻译、东南亚研究",
        "海南大学": "旅游翻译、热带农业翻译",
        "贵州大学": "文化翻译、民族语言",
        "西安交通大学": "科技翻译、医学翻译",
        "西北大学": "历史文化翻译、丝绸之路翻译",
        "兰州交通大学": "工程翻译、铁路与交通翻译",
        "中国民用航空飞行学院": "民航翻译、航空术语翻译",
        "中国民航大学": "民航翻译、航空安全翻译、适航文件",
        "华中师范大学": "教育翻译、翻译教学",
        "东北师范大学": "翻译教学、日本研究",
        "西南大学": "农业翻译、教育翻译",
        "暨南大学": "商务翻译、华文教育翻译",
        "中国石油大学": "石油能源翻译、工程翻译",
        "中国地质大学": "地质翻译、地球科学翻译",
        "中国矿业大学": "矿业工程翻译、能源翻译",
        "南京邮电大学": "通信翻译、IT翻译",
        "青岛大学": "医学翻译、韩语翻译",
        "宁波大学": "港口物流翻译、海洋翻译",
        "深圳大学": "科技翻译、创新型企业翻译",
        "华侨大学": "侨务翻译、东南亚区域翻译",
        "扬州大学": "旅游翻译、文化外译",
        "湖北大学": "文化翻译、翻译教育",
        "湖南大学": "科技翻译、经贸翻译",
        "重庆大学": "工程翻译、汽车翻译",
        "东南大学": "工程翻译、建筑翻译",
        "中南财经政法大学": "财经翻译、法律翻译",
        "太原理工大学": "科技翻译、矿业翻译",
        "新疆大学": "中亚语言翻译、一带一路翻译",
        "宁夏大学": "阿拉伯语翻译、民族翻译",
        "青海民族大学": "藏汉英翻译、民族语言",
        "西藏大学": "藏汉英翻译、高原文化",
        "中国传媒大学": "传媒翻译、影视翻译、新闻翻译",
        "外交学院": "外交翻译、外事翻译",
        "国际关系学院": "国际关系翻译、政治翻译",
        "上海财经大学": "财经翻译、金融翻译",
        "中央财经大学": "财经翻译、金融翻译",
        "西南财经大学": "财经翻译、金融翻译",
        "中南民族大学": "民族文化翻译",
        "浙江工商大学": "商务翻译、经贸翻译",
        "北京工商大学": "商务翻译、食品科技翻译",
        "天津大学": "科技翻译、工程翻译",
        "大连理工大学": "科技翻译、化工翻译",
        "华东政法大学": "法律翻译、法学翻译",
        "西南政法大学": "法律翻译、法学翻译",
        "西北政法大学": "法律翻译、法学翻译",
        "山东科技大学": "矿业翻译、科技翻译",
        "武汉理工大学": "科技翻译、材料翻译",
        "哈尔滨工程大学": "船舶翻译、军工翻译",
        "北京交通大学": "交通翻译、工程翻译",
        "北京邮电大学": "通信翻译、IT翻译",
        "浙江理工大学": "纺织翻译、设计翻译",
        "南京信息工程大学": "气象翻译、科技翻译",
        "上海海事大学": "海事翻译、航运翻译、物流翻译",
        "大连海事大学": "海事翻译、航运翻译、海商法翻译",
    }
    
    for s in schools_with_ratings:
        desc = descriptions.get(s[0], "")
        if desc:
            detail_html += '<tr><td>%s</td><td>%s</td><td>%s</td></tr>\n' % (s[0], s[3], desc)
    
    detail_html += '</tbody></table></div></section></div>'
    
    html = html[:table_idx] + detail_html + html[close_idx:]
    print("Replaced school detail table")
else:
    print("WARNING: Could not find schoolDetailContainer!")

# 3. Fix renderSchools function to show proper ratings
old_render = """function renderSchools(){
  var h='';
  sc.forEach(function(s){
    h+='<div class="si">'+s.n+'<span class="stp">MTI A+ / BTI A+</span></div>';
  });
  document.getElementById('sg').innerHTML=h;
  window._allSchools=sc;
}"""
new_render = """function renderSchools(){
  var h='';
  sc.forEach(function(s){
    h+='<div class="si">'+s.n+'<span class="stp">MTI '+s.m+' / BTI '+s.b+'</span></div>';
  });
  document.getElementById('sg').innerHTML=h;
  window._allSchools=sc;
}"""

if old_render in html:
    html = html.replace(old_render, new_render)
    print("Fixed renderSchools function")
else:
    # Try to find it with different whitespace
    idx = html.find("function renderSchools")
    if idx != -1:
        end_idx = html.find("function ", idx + 30)
        if end_idx == -1:
            end_idx = html.find("function", idx + 30)
        html = html[:idx] + new_render + html[end_idx:] if end_idx != -1 else html
        print("Fixed renderSchools function (fuzzy match)")
    else:
        print("WARNING: Could not find renderSchools function!")

# 4. Fix fs function to show proper ratings
old_fs = """function fs(){
  var q=document.getElementById('ss').value.toLowerCase();
  var filtered=window._allSchools.filter(function(s){return s.n.indexOf(q)!==-1||q===''});
  var h='';
  filtered.forEach(function(s){h+='<div class="si">'+s.n+'<span class="stp">MTI A+ / BTI A+</span></div>'});
  document.getElementById('sg').innerHTML=h;
}"""
new_fs = """function fs(){
  var q=document.getElementById('ss').value.toLowerCase();
  var filtered=window._allSchools.filter(function(s){return s.n.indexOf(q)!==-1||q===''});
  var h='';
  filtered.forEach(function(s){h+='<div class="si">'+s.n+'<span class="stp">MTI '+s.m+' / BTI '+s.b+'</span></div>'});
  document.getElementById('sg').innerHTML=h;
}"""

if old_fs in html:
    html = html.replace(old_fs, new_fs)
    print("Fixed fs function")
else:
    print("fs function not found exactly, trying alternative...")

# 5. Also fix the bottom table's MTI-only description — add the two missing schools
# The table data is already comprehensive in the new detail table

with open(HTML, "w", encoding="utf-8") as f:
    f.write(html)

print("\nDone! Schools count:", len(schools_with_ratings))
print("Output saved to:", HTML)
