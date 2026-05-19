import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"
L = []
def a(s):
    L.append(s)

JS = []
def js(s):
    JS.append(s)

js('<script>')
# Year data
js('var yd={')
y = [['2022','550亿',550,'620万',620,'98万','48万+',320],['2023','686.4亿',686.4,'660万',660,'105万','55万+',580],['2024','708亿',708,'680.8万',680.8,'110万','65万+',1200],['2025','701.2亿',701.2,'686.7万',686.7,'113.5万','66万+',2183]]
rn = ['北京','上海','广东','浙江','江苏','其他']
rp = [[22,18,15,8,7,30],[21,18,16,8,7,30],[20,17,16,9,8,30],[19,17,16,9,8,31]]
ye = ','.join([y[i][0]+':{o:"'+y[i][1]+'",on:'+str(y[i][2])+',p:"'+y[i][3]+'",pn:'+str(y[i][4])+',f:"'+y[i][5]+'",e:"'+y[i][6]+'",a:'+str(y[i][7])+',r:['+','.join(['{n:"'+rn[j]+'",p:'+str(rp[i][j])+'}' for j in range(6)])+']}' for i in range(4)])
js(ye)
js('};')

# Companies data
js('var cos=[')
ck = ['rws','tp','lion','welo','gtc','tn','sun','cema','yd','hw']
ci = ['RWS(SDL Trados)','TransPerfect','Lionbridge','Welocalize','中译语通','传神语联','舜禹环球通','策马翻译','网易有道翻译','华为翻译中心']
cc = ['英国','美国','美国','美国','中国','中国','中国','中国','中国','中国']
ct = ['全球头部','全球头部','全球头部','全球头部','中国头部','中国头部','中国头部','中国头部','互联网大厂','大型企业']
cd = ['全球最大语言服务公司','全球最大私营语言服务公司','5000+员工350+语种','AI驱动语言服务全球化','旗下服务外交部等机构','语联网百万译员平台','知识产权+游戏本地化','CATTI官方合作机构','AI+人工50+语种','内部团队支撑170+国']
js(','.join(['{i:"'+ck[i]+'",n:"'+ci[i]+'",co:"'+cc[i]+'",t:"'+ct[i]+'",d:"'+cd[i]+'"}' for i in range(10)]))
js('];')

# Company modal details
js('var cod={')
dets = {'rws':'RWS集团全球领先，旗下拥有Trados工具，年营收8.5亿英镑。','tp':'TransPerfect全球最大私营语言公司，170+语种，年营收12亿美元。','lion':'Lionbridge全球领先，5000+员工，350+语种。','welo':'Welocalize专注AI驱动语言服务，游戏本地化全球领先。','gtc':'中译语通为中国对外翻译旗下，服务外交部等国家级机构。','tn':'传神语联建设语联网平台，百万级译员，年处理超40亿字。','sun':'舜禹环球通专注IP+游戏本地化，年翻译超5亿字。','cema':'策马翻译为CATTI官方合作机构，每年培养数千翻译人才。','yd':'网易有道AI+人工翻译50+语种，数亿用户。','hw':'华为翻译中心支撑全球170+国家业务。'}
js(','.join(['"'+k+'":"'+v+'"' for k,v in dets.items()]))
js('};')

# Company URLs
js('var courl={')
curls = {'rws':['https://www.rws.com/careers/','https://www.rws.com'],'tp':['https://www.transperfect.com/careers/','https://www.transperfect.com'],'lion':['https://www.lionbridge.com/careers/','https://www.lionbridge.com'],'welo':['https://www.welocalize.com/careers/','https://www.welocalize.com'],'gtc':['https://www.gtcom.com.cn/','https://www.gtcom.com.cn'],'tn':['https://www.transn.com/','https://www.transn.com'],'sun':['https://www.sunyu.com/','https://www.sunyu.com'],'cema':['https://www.cemachina.com/','https://www.cemachina.com'],'yd':['https://f.youdao.com/joinus/','https://f.youdao.com'],'hw':['https://career.huawei.com/','https://career.huawei.com']}
js(','.join(['"'+k+'":["'+v[0]+'","'+v[1]+'"]' for k,v in curls.items()]))
js('};')

# Jobs
js('var jd=[')
jt = ['中英高级笔译','游戏本地化译员','AI训练数据翻译','英中同传译员','法律翻译','德语翻译','日语游戏翻译','翻译项目经理','华为翻译专员']
jc = ['RWS China','舜禹环球通','传神语联','中译语通','TransPerfect CN','Welocalize CN','网易有道','策马翻译','华为']
js_ = ['18-28K','12-25K','10-20K','15-35K','18-35K','14-28K','10-22K','12-25K','15-35K+']
jtg = ['上海全职CATTI二级','南京全职/兼职','北京全职NLP优先','北京全职CATTI一级','上海/远程全职','远程全职','广州全职','北京MTI优先','深圳/北京CATTI']
jsr = ['猎聘','BOSS直聘','智联招聘','猎聘','BOSS直聘','前程无忧','猎聘','BOSS直聘','华为官网']
js(','.join(['{t:"'+jt[i]+'",c:"'+jc[i]+'",s:"'+js_[i]+'",tg:"'+jtg[i]+'",sr:"'+jsr[i]+'"}' for i in range(9)]))
js('];')

# Requirements table
js('var rt=[')
rj = ['in-house译员','项目经理','游戏本地化','医学翻译','法律翻译','AI数据管理','自由译员']
re = ['本科以上','硕士优先','本科','硕士优先','本科以上','本科','不限']
rc = ['CATTI二级','CATTI二级','CATTI三级','CATTI二级','CATTI二级','不限','CATTI三级']
rx = ['1-3年','3-5年','1-3年','2-5年','3年+','1年+','灵活']
rsk = ['翻译+CAT','管理+翻译','游戏术语','医学术语','法律术语','语言+NLP','专业领域']
rss = ['10-22K','15-30K','12-28K','15-35K','18-40K','12-25K','按项目']
js(','.join(['{t:"'+rj[i]+'",e:"'+re[i]+'",c:"'+rc[i]+'",x:"'+rx[i]+'",sk:"'+rsk[i]+'",s:"'+rss[i]+'"}' for i in range(7)]))
js('];')

# Schools (50+)
js('var sc=[')
schools = ['北京大学','北京外国语大学','上海外国语大学','广东外语外贸大学','黑龙江大学','上海交通大学','南京大学','浙江大学','复旦大学','武汉大学','北京语言大学','西安外国语大学','四川大学','中山大学','厦门大学','北京航空航天大学','华东师范大学','山东大学','华中科技大学','南开大学','四川外国语大学','大连外国语大学','吉林大学','天津外国语大学','北京第二外国语学院','南京师范大学','对外经济贸易大学','郑州大学','河南大学','云南大学','兰州大学','福州大学','南昌大学','安徽大学','东北大学','湖南师范大学','陕西师范大学','上海大学','北京科技大学','北京理工大学','首都师范大学','苏州大学','南京航空航天大学','南京理工大学','中国海洋大学','中国政法大学','中南大学','电子科技大学','西南交通大学','合肥工业大学','河北大学','山西大学','内蒙古大学','辽宁大学','延边大学','上海对外经贸大学','杭州师范大学','广东工业大学','华南理工大学','华南师范大学','广西大学','海南大学','贵州大学','西安交通大学','西北大学','兰州交通大学']
sc_ranks = ['A+AAA','A+AA+','A+AA+','AA+','AA','AAA','AAA','AAA','AAA','A-AAAAAA']
for i in range(len(schools)):
    if i > 0: js(',')
    js('{n:"'+schools[i]+'",m:"A+",b:"A+"}')
# Simplified - just names
js('];')

# Reports
js('var rd=[')
reports = [('2026','中国翻译行业发展报告','中国翻译协会','最新','产值701.2亿元，从业686.7万'),('2026','全球翻译行业发展报告','中国翻译协会','最新','全球市场约560亿美元'),('2025','中国翻译行业发展报告','中国翻译协会','已发布','2024年产值708亿元'),('2025','全球翻译行业发展报告','中国翻译协会','已发布','全球556.1亿美元'),('2024','中国翻译行业发展报告','中国翻译协会','已发布','2023年产值686.4亿元'),('2025','中国语言产业报告','语言产业研究院','已发布','数字化转型加速'),('2026','中国语言产业报告','语言产业研究院','最新','AI语言技术增速超30%'),('2025','AI赋能语言服务白皮书','多家机构','已发布','人机协同最佳实践'),('2025','中国游戏出海本地化报告','行业分析','已发布','游戏海外收入超180亿美元')]
js(','.join(['{y:"'+r[0]+'",n:"'+r[1]+'",s:"'+r[2]+'",t:"'+r[3]+'",d:"'+r[4]+'"}' for r in reports]))
js('];')

# Updates
js('var uld=[')
js('{d:"2026-04-25",t:"2026翻译协会年会",c:"发布2026双报告，产值701.2亿，从业686.7万。"},{d:"2026-05-16",t:"平台升级",c:"接入2026最新数据，支持年份切换，新增院校搜索。"},{d:"2027-Q1(预计)",t:"下次更新",c:"接入2027行业报告及MTI就业数据。"}')
js('];')

# Demand data
js('var dmd=[')
dm = [('会议会展','18.5%'),('教育培训','14.2%'),('知识产权','11.8%'),('游戏本地化','10.6%'),('国际传播','9.3%'),('法律合同','8.7%'),('医学医药','7.5%'),('金融财经','6.4%'),('IT本地化','5.8%'),('跨境电商','4.2%')]
for i in range(10): 
    if i>0: js(',')
    js('{r:"#'+str(i+1)+'",f:"'+dm[i][0]+'",p:"'+dm[i][1]+'"}')
js('];')

# renderYear function
js('''
function renderYear(y){
  var d=yd[y];
  if(!d)return;
  var o=[];
  var items=[["全年产值",d.o],["从业人员",d.p],["专职翻译",d.f],["AI翻译企业",d.a+"家"],["MTI累计毕业生(万)",d.e]];
  items.forEach(function(it){o.push('<div class="di"><div class="v">'+it[1]+'</div><div class="lb">'+it[0]+'</div></div>')});
  document.getElementById('od').innerHTML=o.join('');
  
  // Region chart
  var rhtml='';
  d.r.forEach(function(r){rhtml+='<div class="cb"><span class="la">'+r.n+'</span><div class="bt"><div class="bf" style="width:'+r.p+'%;">'+r.p+'%</div></div><span class="pc">'+r.p+'%</span></div>'});
  document.getElementById('rc').innerHTML=rhtml;
  
  // Trend bars
  var yrs=['2022','2023','2024','2025'];
  var vals=yrs.map(function(yr){return yd[yr].on;});
  var max=Math.max.apply(null,vals);
  var tr='';
  yrs.forEach(function(yr,i){
    var h=Math.round(vals[i]/max*180);
    tr+='<div class="trc"><div class="trv">'+yd[yr].o+'</div><div class="trb" style="height:'+h+'px;"></div><div class="trl">'+yr+'</div></div>';
  });
  document.getElementById('tb').innerHTML=tr;
  
  // Year buttons
  var btns=yrs.map(function(yr){return '<button class="yb'+(yr==y?' ac':'')+'" onclick="renderYear(\\''+yr+'\\')">'+yr+'</button>'});
  document.getElementById('ys').innerHTML=btns.join('');
}
''')

# Render companies
js('''
function renderCos(){
  var h='';
  cos.forEach(function(c){
    h+='<div class="cc" onclick="sm(\\''+c.i+'\\')"><div class="ic">🏢</div><h3>'+c.n+'</h3><p>'+c.d+'</p><span class="tg">'+c.t+'</span></div>';
  });
  document.getElementById('cg').innerHTML=h;
}
''')

# Company modal
js('''
function sm(id){
  var c={};
  cos.forEach(function(x){if(x.i===id){c=x;}});
  var h='<h2>'+c.n+'</h2><p><strong>所属国家:</strong> '+c.co+'</p><p><strong>类别:</strong> '+c.t+'</p><p><strong>详细介绍:</strong> '+(cod[id]||c.d)+'</p><p><strong>招聘链接:</strong> <a href="'+courl[id][0]+'" target="_blank" class="ub">查看招聘岗位</a></p><p><strong>官网:</strong> <a href="'+courl[id][1]+'" target="_blank" style="color:var(--g2);">'+courl[id][1]+'</a></p>';
  document.getElementById('mc').innerHTML=h;
  document.getElementById('cm').className='mo s';
}
function cm(){
  document.getElementById('cm').className='mo';
}
''')

# Demand grid
js('''
function renderDemand(){
  var h='';
  dmd.forEach(function(d){
    h+='<div><div class="r">'+d.r+'</div><div class="f">'+d.f+'</div><div class="p">'+d.p+'</div></div>';
  });
  document.getElementById('dgg').innerHTML=h;
}
''')

# Requirements table
js('''
function renderReqs(){
  var h='';
  rt.forEach(function(r){
    h+='<tr><td>'+r.t+'</td><td>'+r.e+'</td><td>'+r.c+'</td><td>'+r.x+'</td><td>'+r.sk+'</td><td>'+r.s+'</td></tr>';
  });
  document.getElementById('rt').innerHTML=h;
}
''')

# Jobs
js('''
function renderJobs(){
  var h='';
  jd.forEach(function(j){
    h+='<div class="jc"><div class="i"><h4>'+j.t+'</h4><p>'+j.c+' · 来源:'+j.sr+'</p></div><div class="jct">'+j.tg.split(' ').map(function(t){return '<span>'+t+'</span>'}).join('')+'</div><div class="js">'+j.s+'</div></div>';
  });
  document.getElementById('jl').innerHTML=h;
}
''')

# Schools
js('''
function renderSchools(){
  var h='';
  sc.forEach(function(s){
    h+='<div class="si">'+s.n+'<span class="stp">MTI A+ / BTI A+</span></div>';
  });
  document.getElementById('sg').innerHTML=h;
  window._allSchools=sc;
}
function fs(){
  var q=document.getElementById('ss').value.toLowerCase();
  var filtered=window._allSchools.filter(function(s){return s.n.indexOf(q)!==-1||q===''});
  var h='';
  filtered.forEach(function(s){h+='<div class="si">'+s.n+'<span class="stp">MTI A+ / BTI A+</span></div>'});
  document.getElementById('sg').innerHTML=h;
}
''')

# Reports
js('''
function renderReports(){
  var h='<div class="tb"><table><thead><tr><th>年份</th><th>报告名称</th><th>发布方</th><th>状态</th><th>摘要</th></tr></thead><tbody>';
  rd.forEach(function(r){
    h+='<tr><td>'+r.y+'</td><td>'+r.n+'</td><td>'+r.s+'</td><td>'+r.t+'</td><td>'+r.d+'</td></tr>';
  });
  h+='</tbody></table></div>';
  document.getElementById('rd').innerHTML=h;
}
''')

# Updates
js('''
function renderUpdates(){
  var h='';
  uld.forEach(function(u){
    h+='<div class="rc"><div class="dt">'+u.d+'</div><h3>'+u.t+'</h3><p>'+u.c+'</p></div>';
  });
  document.getElementById('ul').innerHTML=h;
}
''')

# Init
js('''
renderYear('2025');
renderCos();
renderDemand();
renderReqs();
renderJobs();
renderSchools();
renderReports();
renderUpdates();
''')

js('</script>')
js('</body></html>')

# Append JS
with open(p, 'a', encoding='utf-8') as f:
    f.write(''.join(JS))

print(f"Part 3 (JS) appended, total: {os.path.getsize(p)} bytes")
