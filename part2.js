const fs = require("fs");
const p = "C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台\\index.html";

// Actually, let me do this properly. Read the existing incomplete file from make_full.js
// and finish the job in one shot.
// Better approach: run make_full.js after fixing it - but the file got truncated during WRITE.
// Let me just write a short script that generates everything and outputs to a temp file, then copies.

// Let me see what's already in index.html from the last subagent that botched it.
const oldContent = fs.readFileSync(p, "utf-8");
console.log("Current index.html size:", oldContent.length);
// It's 32629 bytes but broken. Let's COMPLETELY rewrite.

// ====== BUILD THE PAGE =======
const DATA = {
  overview: { name:"行业概览" },
  demand: { name:"需求分析" },
  companies: { name:"知名企业" },
  projects: { name:"重大项目" },
  talent: { name:"人才培养" },
  recruitment: { name:"招聘信息" },
  ranking: { name:"院校排行" },
  career: { name:"职业路径" },
  global: { name:"全球视野" },
  reports: { name:"数据报告" }
};

const YD = [
  {y:"2022",o:"550亿",on:550,p:"620万",pn:620,f:"98万",e:"48万+",a:320,r:[22,18,15,8,7,30]},
  {y:"2023",o:"686.4亿",on:686.4,p:"660万",pn:660,f:"105万",e:"55万+",a:580,r:[21,18,16,8,7,30]},
  {y:"2024",o:"708亿",on:708,p:"680.8万",pn:680.8,f:"110万",e:"65万+",a:1200,r:[20,17,16,9,8,30]},
  {y:"2025",o:"701.2亿",on:701.2,p:"686.7万",pn:686.7,f:"113.5万",e:"66万+",a:2183,r:[19,17,16,9,8,31]}
];

const REGS = ["北京","上海","广东","浙江","江苏","其他"];
const COS = [
  ["rws","RWS (SDL Trados)","英国","全球头部","全球最大语言服务商"],
  ["tp","TransPerfect","美国","全球头部","全球最大私营语言服务公司"],
  ["lion","Lionbridge","美国","全球头部","5000+员工350+语种"],
  ["welo","Welocalize","美国","全球头部","AI驱动翻译全球化"],
  ["gtc","中译语通","中国","中国头部","服务外交部等国家级机构"],
  ["tn","传神语联","中国","中国头部","语联网平台百万译员"],
  ["sun","舜禹环球通","中国","中国头部","知识产权+游戏本地化"],
  ["cema","策马翻译","中国","中国头部","CATTI官方合作机构"],
  ["yd","网易有道翻译","中国","互联网大厂","AI+人工50+语种"],
  ["hw","华为翻译中心","中国","大型企业","支持全球170+国家"]
];

const CO_SITE = {
  rws:["https://www.rws.com/careers/","https://www.rws.com"],
  tp:["https://www.transperfect.com/careers/","https://www.transperfect.com"],
  lion:["https://www.lionbridge.com/careers/","https://www.lionbridge.com"],
  welo:["https://www.welocalize.com/careers/","https://www.welocalize.com"],
  gtc:["https://www.gtcom.com.cn/","https://www.gtcom.com.cn"],
  tn:["https://www.transn.com/","https://www.transn.com"],
  sun:["https://www.sunyu.com/","https://www.sunyu.com"],
  cema:["https://www.cemachina.com/","https://www.cemachina.com"],
  yd:["https://f.youdao.com/joinus/","https://f.youdao.com"],
  hw:["https://career.huawei.com/","https://career.huawei.com"]
};

const CO_DESC = {
  rws:"RWS集团是全球领先的语言服务和翻译技术公司，旗下拥有Trados等知名翻译工具。年营收约8.5亿英镑，在30多个国家设有分支机构。",
  tp:"TransPerfect是全球最大的私营语言服务公司，支持170+语种，年营收超12亿美元。服务领域涵盖法律、医疗、金融等。",
  lion:"Lionbridge是全球领先的语言服务和技术解决方案提供商，拥有超过5000名员工，支持350多种语言，客户涵盖全球知名品牌。",
  welo:"Welocalize专注于AI驱动的语言服务和本地化解决方案，在游戏本地化领域全球领先。连续多年被评为全球TOP语言服务企业。",
  gtc:"中译语通是中国对外翻译有限公司旗下语言科技企业，服务外交部、商务部等国家级机构，是MTI实习基地的重要合作单位。",
  tn:"传神语联是国内领先的AI语言服务商，建设了语联网翻译平台，汇聚百万级专业译员，年处理翻译量超40亿字。",
  sun:"舜禹环球通专注于知识产权和游戏本地化领域，年翻译量超过5亿字，是国内最大的语言服务企业之一。",
  cema:"策马翻译是CATTI官方合作机构，每年培养数千名翻译人才。同时提供高端翻译服务，客户含多个国际组织。",
  yd:"网易有道翻译是有道旗下AI+人工翻译平台，支持50+语种翻译。有道词典用户数亿，是国内最大的语言工具平台之一。",
  hw:"华为翻译中心是华为内部大型翻译团队，支撑华为全球170+国家业务。专注通信技术、云计算等专业领域的中英文翻译。"
};

const DEMANDS = [
  ["#1","会议会展","18.5%"],["#2","教育培训","14.2%"],["#3","知识产权","11.8%"],
  ["#4","游戏本地化","10.6%"],["#5","国际传播","9.3%"],["#6","法律合同","8.7%"],
  ["#7","医学医药","7.5%"],["#8","金融财经","6.4%"],["#9","IT本地化","5.8%"],["#10","跨境电商","4.2%"]
];

const LANGS = [
  ["中→英","38.5%"],["英→中","24.2%"],["中→日","8.1%"],["中→韩","6.3%"],["中→德","4.7%"],
  ["中→法","4.1%"],["中→西","3.5%"],["中→俄","3.2%"],["中→阿","2.8%"],["其他","4.6%"]
];

const PROJS = [
  {y:"2020-2024",n:"《原神》多语言本地化",d:"米哈游旗下《原神》支持15+语言版本，翻译量超千万字。游戏出海翻译标杆项目。",s:"genshin.hoyoverse.com"},
  {y:"2022",n:"北京冬奥会翻译保障",d:"20+语种口笔译服务，远程同传首次大规模应用于国际赛事。",s:"beijing2022.cn"},
  {y:"2023",n:"《流浪地球2》国际版",d:"覆盖10+语言，科幻术语翻译兼顾科学与艺术表达。",s:"tac-online.org.cn"},
  {y:"2024",n:"《黑神话：悟空》全球本地化",d:"13+语言版本，文化负载词精准传达，全球销量超2000万份。",s:"heishenhua.com"},
  {y:"2025",n:"AI大模型训练数据翻译",d:"数十亿级Token训练数据需求，催生AI数据+翻译融合新范式。",s:"tac-online.org.cn"}
];

const TALENTS = [
  {t:"AI+翻译跨学科培养",d:"2025年多所高校开设'翻译技术'交叉学科方向，北大、北外、上外推出'翻译+计算机'双学位。预计2026年超50所院校开设AI翻译相关课程。"},
  {t:"30岁以下从业者比例上升",d:"2025年30周岁以下从业者占比27.3%，较上年升1.5个百分点。85%新生代译员经常使用AI辅助工具，人机协同能力显著增强。"},
  {t:"DTI翻译专博发展",d:"28所高校获DTI（翻译博士专业学位）培养资格。首批博士入学，形成本科→硕士→博士完整翻译培养链。培养方向包括翻译技术、翻译管理。"},
  {t:"国际实习与联合培养",d:"各MTI院校与联合国、欧盟、WHO等国际组织合作建立实习基地。2025年输送实习生1200+人次，较上年增长18%。"}
];

const REQS = [
  ["in-house译员","本科以上","CATTI二级","1-3年","翻译+CAT工具","10-22K"],
  ["项目经理","硕士优先","CATTI二级","3-5年","管理+翻译","15-30K"],
  ["游戏本地化","本科","CATTI三级","1-3年","游戏术语+CAT","12-28K"],
  ["医学翻译","硕士优先","CATTI二级","2-5年","医学术语","15-35K"],
  ["法律翻译","本科以上","CATTI二级","3年+","法律术语","18-40K"],
  ["AI数据管理","本科","不限","1年+","语言+NLP","12-25K"],
  ["自由译员","不限","CATTI三级","灵活","专业领域","按项目"]
];

const JOBS = [
  {t:"中英高级笔译",c:"RWS China",s:"18-28K",tg:"上海,全职,CATTI二级",sr:"猎聘"},
  {t:"游戏本地化译员",c:"舜禹环球通",s:"12-25K",tg:"南京,全职/兼职",sr:"BOSS直聘"},
  {t:"AI训练数据翻译",c:"传神语联",s:"10-20K",tg:"北京,全职,NLP优先",sr:"智联招聘"},
  {t:"英中同传译员",c:"中译语通",s:"15-35K",tg:"北京,全职,CATTI一级",sr:"猎聘"},
  {t:"法律翻译",c:"TransPerfect CN",s:"18-35K",tg:"上海/远程,全职",sr:"BOSS直聘"},
  {t:"德语翻译",c:"Welocalize CN",s:"14-28K",tg:"远程,全职",sr:"前程无忧"},
  {t:"日语游戏翻译",c:"网易有道",s:"10-22K",tg:"广州,全职",sr:"猎聘"},
  {t:"翻译项目经理",c:"策马翻译",s:"12-25K",tg:"北京,MTI优先",sr:"BOSS直聘"},
  {t:"华为翻译专员",c:"华为",s:"15-35K+",tg:"深圳/北京,CATTI",sr:"华为官网"}
];

const SCHOOLS = [
  ["北京大学","A+","A+","北京"],
  ["北京外国语大学","A+","A+","北京"],
  ["上海外国语大学","A+","A+","上海"],
  ["广东外语外贸大学","A","A+","广州"],
  ["黑龙江大学","A","A","哈尔滨"],
  ["上海交通大学","A","A","上海"],
  ["南京大学","A","A","南京"],
  ["浙江大学","A","A+","杭州"],
  ["复旦大学","A","A","上海"],
  ["武汉大学","A-","A","武汉"],
  ["北京语言大学","A-","A","北京"],
  ["西安外国语大学","A-","A","西安"],
  ["四川大学","A-","A-","成都"],
  ["中山大学","A-","A-","广州"],
  ["厦门大学","A-","A-","厦门"],
  ["北京航空航天大学","B+","A","北京"],
  ["华东师范大学","B+","A","上海"],
  ["山东大学","B+","B+","济南"],
  ["华中科技大学","B+","","武汉"],
  ["南开大学","B+","B+","天津"],
  ["四川外国语大学","B+","A","重庆"],
  ["大连外国语大学","B+","A","大连"],
  ["吉林大学","B+","","长春"],
  ["天津外国语大学","B","B+","天津"],
  ["北京第二外国语学院","B","B+","北京"],
  ["南京师范大学","B","B+","南京"],
  ["对外经济贸易大学","B+","B+","北京"],
  ["郑州大学","B","B","郑州"],
  ["河南大学","B","B","开封"],
  ["云南大学","B","B","昆明"],
  ["兰州大学","B","","兰州"],
  ["福州大学","B","","福州"],
  ["南昌大学","B","","南昌"],
  ["安徽大学","B","","合肥"],
  ["东北大学","B","","沈阳"],
  ["湖南师范大学","B","B","长沙"],
  ["陕西师范大学","B","","西安"],
  ["上海大学","B","B+","上海"],
  ["北京科技大学","B","","北京"],
  ["北京理工大学","B","","北京"],
  ["首都师范大学","B","B","北京"],
  ["苏州大学","B","B","苏州"],
  ["南京航空航天大学","B","","南京"],
  ["南京理工大学","B","","南京"],
  ["中国海洋大学","B","","青岛"],
  ["中国政法大学","B","","北京"],
  ["中南大学","B","","长沙"],
  ["电子科技大学","B","","成都"],
  ["西南交通大学","B","","成都"],
  ["合肥工业大学","B","","合肥"],
  ["河北大学","B","","保定"],
  ["山西大学","B","","太原"],
  ["内蒙古大学","B","","呼和浩特"],
  ["辽宁大学","B","","沈阳"],
  ["延边大学","B","","延吉"],
  ["上海对外经贸大学","B","","上海"],
  ["杭州师范大学","B","","杭州"],
  ["广东工业大学","B","","广州"],
  ["华南理工大学","B","","广州"],
  ["华南师范大学","B","","广州"],
  ["广西大学","B","","南宁"],
  ["海南大学","B","","海口"],
  ["贵州大学","B","","贵阳"],
  ["西安交通大学","B","","西安"],
  ["西北大学","B","","西安"],
  ["兰州交通大学","B","","兰州"]
];

const REPORTS = [
  {y:2026,n:"中国翻译行业发展报告",s:"中国翻译协会",t:"最新",d:"行业产值701.2亿元，从业686.7万人，AI翻译企业2183家"},
  {y:2026,n:"全球翻译行业发展报告",s:"中国翻译协会",t:"最新",d:"全球市场约560亿美元，中国增速领先"},
  {y:2025,n:"中国翻译行业发展报告",s:"中国翻译协会",t:"已发布",d:"2024年产值708亿元，从业680.8万"},
  {y:2025,n:"全球翻译行业发展报告",s:"中国翻译协会",t:"已发布",d:"全球556.1亿美元，54%企业受益AI"},
  {y:2024,n:"中国翻译行业发展报告",s:"中国翻译协会",t:"已发布",d:"2023年产值686.4亿元，增长5.6%"},
  {y:2025,n:"中国语言产业报告",s:"语言产业研究院",t:"已发布",d:"语言产业数字化转型加速"},
  {y:2026,n:"中国语言产业报告",s:"语言产业研究院",t:"最新",d:"AI语言技术应用市场增速超30%"},
  {y:2025,n:"AI赋能语言服务白皮书",s:"多家机构",t:"已发布",d:"人机协同翻译模式最佳实践"},
  {y:2025,n:"中国游戏出海本地化报告",s:"行业分析",t:"已发布",d:"国内游戏海外收入超180亿美元"}
];

const CAREERS = [
  {i:"🎯",t:"翻译专业路径",d:"BTI/MTI科班 → CATTI二级/一级 → 企业in-house/自由译员 → 高级审校/项目经理。CATTI报考突破40万。"},
  {i:"📖",t:"英语专业路径",d:"英语本科/硕士 → 补充翻译理论与实践 → CATTI二级 → 企业翻译/国际商务。约40%从业者来自英语背景。"},
  {i:"🌐",t:"小语种路径",d:"日语/法语/德语/西语/俄语/阿语/韩语 → CATTI小语种证书 → 区域专家。一带一路人才缺口大。"},
  {i:"⚖️",t:"跨专业复合路径",d:"法律/医学/IT/金融背景+翻译技能 → 领域专家。法律翻译500-1500元/时，医学400-1200元/时。"},
  {i:"💻",t:"翻译技术路径",d:"计算机/语言学/信息管理 → 翻译技术/AI数据管理 → 语言技术架构师。年薪35-80万。"}
];

const GLOBALS = [
  {t:"美洲市场",d:"北美全球最大市场（占36%）。AI驱动本地化需求激增。美国语言服务企业数量全球第一。"},
  {t:"欧洲市场",d:"GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。"},
  {t:"亚太市场",d:"增长最快，中日韩印为四大引擎。中国翻译研究全球领先。增速6.8%。"}
];

const UPDATES = [
  {d:"2026-04-25",t:"2026年翻译协会年会",c:"发布《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》。行业产值701.2亿元，从业686.7万人。"},
  {d:"2026-05-16",t:"数据平台升级",c:"接入2026最新数据，支持年份切换浏览2022-2025年历史数据，新增院校搜索与企业链接更新。"},
  {d:"2027-Q1(预计)",t:"下一轮更新",c:"预计接入《2027中国翻译行业发展报告》及2027届MTI/BTI毕业生就业数据。"}
];

// GENERATE HTML
function s_esc(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

let H = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title>';

// CSS
H += '<style>';
H += '*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--g:#f0a030;--g2:#d4891e;--g3:#f5b84e;--t:#e0e0e0;--t2:#999;--b:#333;--cb:#1a1a1a}';
H += 'body{font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--t);line-height:1.6}';
H += '.w1,.w2{position:fixed;font-size:11px;color:rgba(240,160,48,.18);pointer-events:none;z-index:9999;user-select:none;letter-spacing:3px;font-weight:300}.w1{top:14px;left:14px}.w2{bottom:14px;right:14px}';
H += 'a{color:var(--g);text-decoration:none}a:hover{color:var(--g3);text-decoration:underline}';
H += 'section{padding:80px 20px;max-width:1200px;margin:0 auto}';
H += '.st{font-size:2rem;color:var(--g);text-align:center;margin-bottom:50px;position:relative}';
H += '.st::after{content:"";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--g),transparent);margin:12px auto 0;border-radius:2px}';
H += '.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a,#1a1208,#0d0d0d);position:relative;overflow:hidden}';
H += '.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--g);margin-bottom:20px;text-shadow:0 0 40px rgba(240,160,48,.15)}';
H += '.hero p{font-size:clamp(1rem,2.5vw,1.3rem);color:var(--t2);max-width:700px;margin:0 auto 40px;position:relative}';
H += '.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:800px;width:100%;position:relative}';
H += '.hs>div{background:rgba(26,26,26,.8);border:1px solid rgba(240,160,48,.15);border-radius:12px;padding:24px 16px;transition:transform .3s}';
H += '.hs>div:hover{transform:translateY(-4px);border-color:var(--g)}';
H += '.n{font-size:1.8rem;font-weight:700;color:var(--g);display:block}.l{font-size:.85rem;color:var(--t2);margin-top:6px}';
H += '.bd{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,.3);border-radius:20px;color:var(--g);margin-top:40px;font-size:.8rem}';
H += '.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--t2);font-size:.85rem;animation:f2 2s ease-in-out infinite}';
H += '@keyframes f2{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}';
H += 'nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--b);padding:0 20px}';
H += 'nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}';
H += 'nav a{display:block;padding:8px 14px;font-size:.82rem;color:var(--t2);border-radius:6px;transition:all .2s}';
H += 'nav a:hover{background:rgba(240,160,48,.08);color:var(--g);text-decoration:none}';
H += '.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}';
H += '.yb{padding:8px 24px;border:1px solid var(--b);border-radius:8px;background:var(--bg2);color:var(--t2);font-size:.95rem;cursor:pointer;transition:all .3s}';
H += '.yb.ac,.yb:hover{background:var(--g);color:#000;border-color:var(--g);font-weight:600}';
H += '.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px;margin-top:30px}';
H += '.cc{cursor:pointer;background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;text-align:center;transition:all .3s}';
H += '.cc:hover{border-color:var(--g);transform:translateY(-4px);box-shadow:0 8px 20px rgba(240,160,48,.1)}';
H += '.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,.2),rgba(240,160,48,.05));border:2px solid rgba(240,160,48,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--g)}';
H += '.cc h3{color:var(--g);font-size:1rem;margin-bottom:6px}.cc p{color:var(--t2);font-size:.82rem}';
H += '.cc .tg{display:inline-block;background:rgba(240,160,48,.1);color:var(--g2);padding:2px 10px;border-radius:10px;font-size:.72rem;margin-top:8px}';
H += '.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:2000;justify-content:center;align-items:center;padding:20px}.mo.s{display:flex}';
H += '.md{background:var(--bg2);border:1px solid var(--g);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}';
H += '.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--t2);cursor:pointer;background:none;border:none}.md .x:hover{color:var(--g)}';
H += '.md h2{color:var(--g);margin-bottom:16px}.md p,.md li{color:var(--t2);margin-bottom:10px;line-height:1.7}';
H += '.md .ub{display:inline-block;padding:10px 24px;background:var(--g);color:#000;border-radius:8px;font-weight:600;margin-top:16px}.md .ub:hover{background:var(--g3);text-decoration:none}';
H += '.c2{background:var(--bg2);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:24px}';
H += '.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:.82rem;color:var(--t2)}';
H += '.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}';
H += '.cb .bf{height:100%;background:linear-gradient(90deg,var(--g2),var(--g));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:.72rem;color:#000;font-weight:600;min-width:40px}';
H += '.cb .pc{min-width:40px;text-align:right;font-size:.85rem;color:var(--g);font-weight:600}';
H += '.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:30px}.tc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.tc h3{color:var(--g);margin-bottom:8px}.tc p{color:var(--t2);font-size:.88rem;line-height:1.7}';
H += '.tl{position:relative;padding-left:30px}.tl::before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--g),transparent)}';
H += '.tm{position:relative;margin-bottom:30px;padding:20px;background:var(--cb);border:1px solid var(--b);border-radius:10px;transition:all .3s}.tm:hover{border-color:var(--g)}';
H += '.tm::before{content:"\\25CF";position:absolute;left:-26px;top:20px;color:var(--g);font-size:.8rem}';
H += '.tm .yr{color:var(--g);font-weight:700;font-size:1.1rem;margin-bottom:6px}.tm h3{color:var(--g);margin-bottom:8px;font-size:1rem}';
H += '.tm p{color:var(--t2);font-size:.88rem;line-height:1.7}.tm .t2{display:inline-block;margin-top:8px;font-size:.78rem;border:1px solid rgba(240,160,48,.2);padding:3px 12px;border-radius:4px;color:var(--g2)}';
H += '.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse}';
H += 'th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--b);font-size:.88rem}th{background:var(--bg3);color:var(--g);white-space:nowrap;font-weight:600}tr:hover{background:rgba(240,160,48,.04)}';
H += '.jc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:20px 24px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;transition:all .3s}';
H += '.jc:hover{border-color:var(--g)}.jc .jci{flex:1;min-width:200px}.jc .jci h4{color:var(--g);margin-bottom:4px}.jc .jci p{font-size:.82rem;color:var(--t2)}';
H += '.jct{display:flex;gap:6px;flex-wrap:wrap}.jct span{font-size:.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,.08);color:var(--g2);border:1px solid rgba(240,160,48,.15)}';
H += '.jc .js{font-size:1rem;font-weight:700;color:var(--g);white-space:nowrap}';
H += '.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}';
H += '.pc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;transition:all .3s}.pc:hover{border-color:var(--g);transform:translateY(-2px)}';
H += '.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--g);margin-bottom:8px;font-size:1.05rem}.pc p{color:var(--t2);font-size:.85rem;line-height:1.7}';
H += '.sb{max-width:500px;margin:0 auto 30px}.sb input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--b);border-radius:10px;color:var(--t);font-size:.95rem;outline:none;transition:border-color .3s}';
H += '.sb input:focus{border-color:var(--g)}.sb input::placeholder{color:var(--t2)}';
H += '.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-top:16px}';
H += '.si{background:var(--cb);border:1px solid var(--b);border-radius:8px;padding:10px 14px;font-size:.82rem;color:var(--t);transition:all .3s}.si:hover{border-color:var(--g);color:var(--g)}';
H += '.si .stp{font-size:.68rem;color:var(--t2);margin-left:6px}';
H += '.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px;margin:24px 0}';
H += '.di{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:18px;text-align:center;transition:all .3s}.di:hover{border-color:var(--g)}';
H += '.di .v{font-size:1.5rem;font-weight:700;color:var(--g)}.di .lb{font-size:.8rem;color:var(--t2);margin-top:4px}';
H += '.dgg{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:16px}';
H += '.dgg>div{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:14px;text-align:center;transition:all .3s}.dgg>div:hover{border-color:var(--g)}';
H += '.dgg .r{color:var(--t2);font-size:.72rem}.dgg .f{color:var(--g);font-weight:600;font-size:.95rem;margin:4px 0}.dgg .p{color:var(--g3);font-size:.85rem}';
H += '.tr{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}';
H += '.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--g),var(--g2));border-radius:4px 4px 0 0;transition:height .5s ease;min-height:10px}';
H += '.trl{font-size:.72rem;color:var(--t2);text-align:center}.trv{font-size:.78rem;color:var(--g);font-weight:600}';
H += '.rc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px;transition:all .3s}.rc:hover{border-color:var(--g)}';
H += '.rc .dt{color:var(--g2);font-size:.82rem;margin-bottom:4px}.rc h3{color:var(--g);margin-bottom:6px}.rc p{color:var(--t2