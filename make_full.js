const fs = require("fs");
const p = "C:\\Users\\yaoli\\lobsterai\\project\\中国翻译行业数据平台\\index.html";

const NS = {
  overview: "行业概览", demand: "需求分析", companies: "知名企业",
  projects: "重大项目", talent: "人才培养", recruitment: "招聘信息",
  ranking: "院校排行", career: "职业路径", global: "全球视野", reports: "数据报告"
};

const YD = [
  ["2022","550亿",550,"620万",620,"98万","48万+",320,[22,18,15,8,7,30]],
  ["2023","686.4亿",686.4,"660万",660,"105万","55万+",580,[21,18,16,8,7,30]],
  ["2024","708亿",708,"680.8万",680.8,"110万","65万+",1200,[20,17,16,9,8,30]],
  ["2025","701.2亿",701.2,"686.7万",686.7,"113.5万","66万+",2183,[19,17,16,9,8,31]]
];
const REGS = ["北京","上海","广东","浙江","江苏","其他"];

const CO = [
  ["rws","RWS(SDL Trados)","英国","全球头部","全球最大语言服务公司，拥有Trados工具"],
  ["tp","TransPerfect","美国","全球头部","全球最大私营语言服务公司，170+语种"],
  ["lion","Lionbridge","美国","全球头部","5000+员工，350+语种，含Google/Amazon"],
  ["welo","Welocalize","美国","全球头部","AI驱动语言服务，游戏本地化全球领先"],
  ["gtc","中译语通","中国","中国头部","中国对外翻译旗下，服务外交部等国家级机构"],
  ["tn","传神语联","中国","中国头部","AI语言服务商，语联网平台百万级译员"],
  ["sun","舜禹环球通","中国","中国头部","知识产权+游戏本地化，年翻译5亿+字"],
  ["cema","策马翻译","中国","中国头部","CATTI官方合作，培养大量翻译人才"],
  ["yd","网易有道翻译","中国","互联网大厂","AI+人工翻译平台，50+语种"],
  ["hw","华为翻译中心","中国","大型企业","内部翻译团队，支撑170+国家业务"]
];

const JOBS = [
  ["中英高级笔译","RWS China","18-28K","上海,全职,CATTI二级","猎聘"],
  ["游戏本地化译员","舜禹环球通","12-25K","南京,全职/兼职","BOSS直聘"],
  ["AI训练数据翻译","传神语联","10-20K","北京,全职,NLP优先","智联招聘"],
  ["英中同传译员","中译语通","15-35K","北京,全职,CATTI一级","猎聘"],
  ["法律翻译","TransPerfect CN","18-35K","上海/远程,全职","BOSS直聘"],
  ["德语翻译","Welocalize CN","14-28K","远程,全职","前程无忧"],
  ["日语游戏翻译","网易有道","10-22K","广州,全职,游戏经验","猎聘"],
  ["翻译项目经理","策马翻译","12-25K","北京,全职,MTI优先","BOSS直聘"],
  ["华为翻译专员","华为","15-35K+","深圳/北京,CATTI","华为官网"]
];

const REQS = [
  ["in-house译员","本科及以上","CATTI二级优先","1-3年","翻译+CAT工具","10-22K"],
  ["项目经理","硕士优先","CATTI二级","3-5年","项目管理+翻译","15-30K"],
  ["游戏本地化","本科","CATTI三级+","1-3年","游戏术语+CAT","12-28K"],
  ["医学翻译","硕士优先","CATTI二级","2-5年","医学术语+审校","15-35K"],
  ["法律翻译","本科及以上","CATTI二级","3年+","法律术语+保密","18-40K"],
  ["AI数据管理","本科","不限","1年+","语言+NLP基础","12-25K"],
  ["自由译员","不限","CATTI三级+","灵活","专业领域+交付","按项目计"]
];

const SCHOOLS = [
  ["北京大学","A+","A+","北京","985/双一流"],["北京外国语大学","A+","A+","北京","211/双一流"],
  ["上海外国语大学","A+","A+","上海","211/双一流"],["广东外语外贸大学","A","A+","广州","省属重点"],
  ["黑龙江大学","A","A","哈尔滨","省属重点"],["上海交通大学","A","A","上海","985/双一流"],
  ["南京大学","A","A","南京","985/双一流"],["浙江大学","A","A+","杭州","985/双一流"],
  ["复旦大学","A","A","上海","985/双一流"],["武汉大学","A-","A","武汉","985/双一流"],
  ["北京语言大学","A-","A","北京","部属"],["西安外国语大学","A-","A","西安","省属重点"],
  ["四川大学","A-","A-","成都","985/双一流"],["中山大学","A-","A-","广州","985/双一流"],
  ["厦门大学","A-","A-","厦门","985/双一流"],["北京航空航天大学","B+","A","北京","985/双一流"],
  ["华东师范大学","B+","A","上海","985/双一流"],["山东大学","B+","B+","济南","985/双一流"],
  ["华中科技大学","B+","","武汉","985/双一流"],["南开大学","B+","B+","天津","985/双一流"],
  ["四川外国语大学","B+","A","重庆","省属重点"],["大连外国语大学","B+","A","大连","省属重点"],
  ["吉林大学","B+","","长春","985/双一流"],["天津外国语大学","B","B+","天津","省属"],
  ["北京第二外国语学院","B","B+","北京","部属"],["南京师范大学","B","B+","南京","211"],
  ["对外经济贸易大学","B+","B+","北京","211"],["郑州大学","B","B","郑州","211"],
  ["河南大学","B","B","开封","省属"],["云南大学","B","B","昆明","211"],
  ["兰州大学","B","","兰州","985/双一流"],["福州大学","B","","福州","211"],
  ["南昌大学","B","","南昌","211"],["安徽大学","B","","合肥","211"],
  ["东北大学","B","","沈阳","985/双一流"]
];

const REPORTS = [
  [2026,"中国翻译行业发展报告","中国翻译协会","最新","行业产值701.2亿元，从业686.7万人，AI翻译企业2183家"],
  [2026,"全球翻译行业发展报告","中国翻译协会","最新","全球市场约560亿美元，欧洲动能强劲"],
  [2025,"中国翻译行业发展报告","中国翻译协会","已发布","2024年产值708亿元，从业680.8万"],
  [2025,"全球翻译行业发展报告","中国翻译协会","已发布","全球556.1亿美元，54%企业受益AI"],
  [2024,"中国翻译行业发展报告","中国翻译协会","已发布","2023年产值686.4亿元，增长5.6%"],
  [2025,"中国语言产业报告","语言产业研究院","已发布","语言产业数字化转型加速"],
  [2026,"中国语言产业报告","语言产业研究院","最新","AI语言技术应用市场增速超30%"],
  [2025,"AI赋能语言服务白皮书","多家机构","已发布","人机协同翻译模式最佳实践"],
  [2025,"中国游戏出海本地化报告","行业分析","已发布","国内游戏海外收入超180亿美元"]
];

const DEMAND = [
  ["#1","会议会展","18.5%"],["#2","教育培训","14.2%"],["#3","知识产权","11.8%"],
  ["#4","游戏本地化","10.6%"],["#5","国际传播","9.3%"],["#6","法律合同","8.7%"],
  ["#7","医学医药","7.5%"],["#8","金融财经","6.4%"],["#9","IT本地化","5.8%"],["#10","跨境电商","4.2%"]
];

const LANG = [
  ["中→英","38.5%","稳定"],["英→中","24.2%","稳定"],["中→日","8.1%","增长"],
  ["中→韩","6.3%","增长"],["中→德","4.7%","稳定"],["中→法","4.1%","稳定"],
  ["中→西","3.5%","增长"],["中→俄","3.2%","增长"],["中→阿","2.8%","增长"],["其他","4.6%","稳定"]
];

const PROJS = [
  ["2020-2024","《原神》多语言本地化","米哈游旗下《原神》支持15+语言版本，翻译量超千万字。<a href='https://genshin.hoyoverse.com' target='_blank' class='t2'>官方来源</a>"],
  ["2022","北京冬奥会翻译保障","20+语种口笔译服务，远程同传首次大规模应用。<a href='https://www.beijing2022.cn' target='_blank' class='t2'>官方来源</a>"],
  ["2023","《流浪地球2》国际版","覆盖10+语言，科幻术语翻译兼顾科学与艺术。<a href='https://www.digitaling.com/projects/' target='_blank' class='t2'>项目详情</a>"],
  ["2024","《黑神话：悟空》全球本地化","13+语言版本，文化负载词精准传达，全球销量超2000万。<a href='https://www.heishenhua.com' target='_blank' class='t2'>官方站点</a>"],
  ["2025","AI大模型训练数据翻译","数十亿级Token需求，催生AI数据+翻译新模式。<a href='https://www.tac-online.org.cn' target='_blank' class='t2'>行业报告</a>"]
];

const TALENTS = [
  ["AI+翻译跨学科培养","2025年多所高校开设翻译技术交叉学科，北大北外上外推出翻译+计算机双学位。2026年预计超50所院校开设AI翻译课程。"],
  ["30岁以下从业者比例上升","2025年30周岁以下占比27.3%，较上年升1.5个百分点。85%新生代译员经常使用AI辅助工具。"],
  ["DTI翻译专博发展","28所高校获DTI培养资格，首批博士入学，形成本科→硕士→博士完整翻译培养链。"],
  ["国际实习与联合培养","各MTI院校与UN/EU/WHO合作，2025年输送实习生1200+人次，较上年增长18%。"]
];

const CAREERS = [
  ["🎯","翻译专业路径","BTI/MTI科班 → CATTI二级/一级 → 企业in-house/自由译员 → 高级审校/项目经理。CATTI报考突破40万。"],
  ["📖","英语专业路径","英语本科/硕士 → 补充翻译理论与实践 → CATTI二级 → 企业翻译/国际商务。约40%从业者来自英语背景。"],
  ["🌐","小语种路径","日语/法语/德语/西语/俄语/阿语/韩语 → CATTI小语种证书 → 区域专家。一带一路人才缺口大，时薪1.5-3倍。"],
  ["⚖️","跨专业复合路径","法律/医学/IT/金融背景+翻译技能 → 领域专家。法律翻译500-1500元/时，医学400-1200元/时。"],
  ["💻","翻译技术路径","计算机/语言学/信息管理 → 翻译技术/AI数据管理 → 语言技术架构师。年薪35-80万，岗位同比增45%。"]
];

const GLOBALS = [
  ["美洲市场","北美全球最大市场（36%）。AI驱动本地化需求激增。美国语言服务企业数量全球第一。"],
  ["欧洲市场","GDPR驱动法律翻译增长。译员中位年龄55岁。中国60%+境外订单来自欧洲。"],
  ["亚太市场","增长最快，中日韩印为四大引擎。中国翻译研究全球领先。增速6.8%。"]
];

const UPDATES = [
  ["2026-04-25","2026中国翻译协会年会在武汉大学举行", "发布《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》。行业产值701.2亿元，从业686.7万人。"],
  ["2026-05-16","本平台完成升级","接入2026最新数据，支持年份切换浏览2022-2025年历史数据，新增学校搜索与企业链接更新。"],
  ["2027-Q1(预计)","下一轮更新预告","预计接入《2027中国翻译行业发展报告》及2027届MTI/BTI毕业生就业数据。"]
];

// ========== BUILD HTML ==========
let H = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title>';
H += '<style>*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--g:#f0a030;--g2:#d4891e;--t:#e0e0e0;--t2:#999;--b:#333;--cb:#1a1a1a}';
H += 'body{font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--t);line-height:1.6}';
H += '.w1,.w2{position:fixed;font-size:11px;color:rgba(240,160,48,.15);pointer-events:none;z-index:9999;user-select:none;letter-spacing:2px}.w1{top:12px;left:12px}.w2{bottom:12px;right:12px}';
H += 'a{color:var(--g)}a:hover{color:var(--g2)}';
H += 'section{padding:80px 20px;max-width:1200px;margin:0 auto}';
H += '.st{font-size:2rem;color:var(--g);text-align:center;margin-bottom:50px;position:relative}.st::after{content:"";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--g),transparent);margin:12px auto 0;border-radius:2px}';
H += '.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a,#1a1208,#0d0d0d);position:relative;overflow:hidden}';
H += '.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--g);margin-bottom:20px;position:relative}.hero p{color:var(--t2);max-width:700px;margin:0 auto 40px;position:relative}';
H += '.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:800px;width:100%;position:relative}';
H += '.hs>div{background:rgba(26,26,26,.8);border:1px solid rgba(240,160,48,.15);border-radius:12px;padding:24px 16px}';
H += '.n{font-size:1.8rem;font-weight:700;color:var(--g);display:block}.l{font-size:.85rem;color:var(--t2);margin-top:6px}';
H += '.bd{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,.3);border-radius:20px;color:var(--g);margin-top:40px;font-size:.8rem}';
H += '.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--t2);font-size:.85rem;animation:f2 2s ease-in-out infinite}';
H += '@keyframes f2{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}';
H += 'nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--b);padding:0 20px}';
H += 'nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}';
H += 'nav a{display:block;padding:8px 14px;font-size:.82rem;color:var(--t2);border-radius:6px}nav a:hover{background:rgba(240,160,48,.08);color:var(--g)}';
H += '.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}.yb{padding:8px 24px;border:1px solid var(--b);border-radius:8px;background:var(--bg2);color:var(--t2);font-size:.95rem;cursor:pointer}';
H += '.yb.ac,.yb:hover{background:var(--g);color:#000;border-color:var(--g)}';
H += '.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:30px}';
H += '.cc{cursor:pointer;background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;text-align:center;transition:all .3s}';
H += '.cc:hover{border-color:var(--g);transform:translateY(-4px)}';
H += '.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,.2),rgba(240,160,48,.05));border:2px solid rgba(240,160,48,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--g)}';
H += '.cc h3{color:var(--g);font-size:1rem;margin-bottom:6px}.cc p{color:var(--t2);font-size:.82rem}.cc .tg{display:inline-block;background:rgba(240,160,48,.1);color:var(--g2);padding:2px 10px;border-radius:10px;font-size:.72rem;margin-top:8px}';
H += '.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:2000;justify-content:center;align-items:center;padding:20px}.mo.s{display:flex}';
H += '.md{background:var(--bg2);border:1px solid var(--g);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}';
H += '.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--t2);cursor:pointer;background:none;border:none}.md h2{color:var(--g);margin-bottom:16px}.md p{color:var(--t2);margin-bottom:10px}';
H += '.md .ub{display:inline-block;padding:10px 24px;background:var(--g);color:#000;border-radius:8px;font-weight:600;margin-top:16px}';
H += '.c2{background:var(--bg2);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:24px}';
H += '.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:.82rem;color:var(--t2)}.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}.cb .bf{height:100%;background:linear-gradient(90deg,var(--g2),var(--g));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:.72rem;color:#000;font-weight:600;min-width:40px}.cb .pc{min-width:40px;text-align:right;font-size:.85rem;color:var(--g);font-weight:600}';
H += '.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:30px}.tc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.tc h3{color:var(--g);margin-bottom:8px}.tc p{color:var(--t2);font-size:.88rem}';
H += '.tl{position:relative;padding-left:30px}.tl::before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--g),transparent)}';
H += '.tm{position:relative;margin-bottom:30px;padding:20px;background:var(--cb);border:1px solid var(--b);border-radius:10px}.tm::before{content:"\\25CF";position:absolute;left:-26px;top:20px;color:var(--g);font-size:.8rem}';
H += '.tm .yr{color:var(--g);font-weight:700;font-size:1.1rem;margin-bottom:6px}.tm p{color:var(--t2);font-size:.88rem}.tm .t2{display:inline-block;margin-top:8px;font-size:.78rem;border:1px solid rgba(240,160,48,.2);padding:3px 12px;border-radius:4px;color:var(--g2)}}';
H += '.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse}th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--b);font-size:.88rem}th{background:var(--bg3);color:var(--g);white-space:nowrap}tr:hover{background:rgba(240,160,48,.04)}';
H += '.jc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:20px 24px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}.jc .jci{flex:1}.jc .jci h4{color:var(--g);margin-bottom:4px}.jc .jci p{font-size:.82rem;color:var(--t2)}';
H += '.jct{display:flex;gap:6px;flex-wrap:wrap}.jct span{font-size:.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,.08);color:var(--g2);border:1px solid rgba(240,160,48,.15)}.jc .js{font-size:1rem;font-weight:700;color:var(--g);white-space:nowrap}';
H += '.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}.pc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;transition:all .3s}.pc:hover{border-color:var(--g)}.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--g);margin-bottom:8px}.pc p{color:var(--t2);font-size:.85rem}';
H += '.sb{max-width:500px;margin:0 auto 30px}.sb input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--b);border-radius:10px;color:var(--t);font-size:.95rem;outline:none}.sb input:focus{border-color:var(--g)}';
H += '.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:16px}';
H += '.si{background:var(--cb);border:1px solid var(--b);border-radius:8px;padding:10px 14px;font-size:.82rem;color:var(--t);transition:all .3s}.si:hover{border-color:var(--g)}.si .stp{font-size:.68rem;color:var(--t2);margin-left:6px}';
H += '.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px;margin:24px 0}.di{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:18px;text-align:center}.di .v{font-size:1.5rem;font-weight:700;color:var(--g)}.di .lb{font-size:.8rem;color:var(--t2);margin-top:4px}';
H += '.dgg{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-top:16px}.dgg>div{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:14px;text-align:center}.dgg .r{color:var(--t2);font-size:.72rem}.dgg .f{color:var(--g);font-weight:600;font-size:.95rem}.dgg .p{color:var(--g2);font-size:.85rem}';
H += '.tr{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--g),var(--g2));border-radius:4px 4px 0 0;min-height:10px}.trl{font-size:.72rem;color:var(--t2);text-align:center}.trv{font-size:.78rem;color:var(--g);font-weight:600}';
H += '.rc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px;transition:all .3s}.rc:hover{border-color:var(--g)}.rc .dt{color:var(--g2);font-size:.82rem;margin-bottom:4px}.rc h3{color:var(--g);margin-bottom:6px}.rc p{color:var(--t2);font-size:.85rem}';
H += '.ic2{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px}.ic2 .dt{color:var(--g2);font-size:.82rem;margin-bottom:4px}.ic2 h3{color:var(--g);margin-bottom:8px}.ic2 p{color:var(--t2);font-size:.88rem}';
H += 'footer{background:var(--bg2);border-top:1px solid var(--b);padding:40px 20px;text-align:center}footer p{font-size:.8rem;color:var(--t2);margin-top:8px}';
H += '@media(max-width:768px){section{padding:50px 16px}nav a{padding:6px 10px;font-size:.75rem}.hero h1{font-size:1.8rem}}';
H += '</style></head><body>';
H += '<div class="w1">风正起时制作</div><div class="w2">风正起时制作</div>';
H += '<nav><ul>';
for (let k in NS) H += '<li><a href="#'+k+'">'+NS[k]+'</a></li>';
H += '</ul></nav>';

// Hero
H += '<section class="hero"><h1>中国翻译行业数据平台</h1><p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p><div class="hs">';
H += '<div><span class="n">701.2亿</span><span class="l">全年产值(元)</span></div>';
H += '<div><span class="n">686.7万</span><span class="l">从业人员</span></div>';
H += '<div><span class="n">113.5万</span><span class="l">专职翻译</span></div>';
H += '<div><span class="n">2183家</span><span class="l">AI翻译企业</span></div>';
H += '</div><div class="bd">基于2026年中国翻译协会年会发布数据</div><div class="sd">↓ 向下滚动探索</div></section>';

// Overview
H += '<section id="overview"><h2 class="st">行业概览</h2><div class="ys" id="ys"></div><div class="dr" id="od"></div>';
H += '<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">区域分布</h3><div id="rc"></div></div>';
H += '<div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">产值趋势(2022-2025)</h3><div class="tr" id="tb"></div></div></section>';

// Demand
H += '<section id="demand"><h2 class="st">需求分析</h2><p style="text-align:center;color:var(--t2);margin-bottom:24px;">2025年市场需求结构调整，人机协同成主流，高端需求持续增长</p>';
H += '<h3 style="color:var(--g);margin-bottom:12px;">Top 10 热门翻译领域(2025)</h3><div class="dgg" id="dgg"></div>';
H += '<div style="margin-top:30px;"><div class="c2"><h3 style="color:var(--g);margin-bottom:12px;">语言对分布</h3><div class="tb"><table><thead><tr><th>语言对</th><th>市场份额</th><th>趋势</th></tr></thead><tbody>';
for (let l of LANG) H += '<tr><td>'+l[0]+'</td><td>'+l[1]+'</td><td style="color:#ff9800;">'+l[2]+'</td></tr>';
H += '</tbody></table></div></div></div></section>';

// Companies
H += '<section id="companies"><h2 class="st">知名企业</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">点击卡片查看详细信息与招聘链接</p><div class="cg">';
for (let c of CO) {
  H += '<div class="cc" onclick="sm(\''+c[0]+'\')"><div class="ic">🏢</div><h3>'+c[1]+'</h3><p>'+c[4].substring(0,28)+'...</p><span class="tg">'+c[3]+'</span></div>';
}
H += '</div><div class="mo" id="cm"><div class="md"><button class="x" onclick="cm()">✕</button><div id="mc"></div></div></div></section>';

// Projects
H += '<section id="projects"><h2 class="st">重大项目</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">中国翻译行业参与的标志性项目</p><div class="tl">';
for (let p of PROJS) H += '<div class="tm"><div class="yr">'+p[0]+'</div><h3 style="color:var(--g);margin-bottom:6px;">'+p[1]+'</h3><p>'+p[2]+'</p></div>';
H += '</div></section>';

// Talent
H += '<section id="talent"><h2 class="st">人才培养</h2><p style="text-align:center;color:var(--t2);margin-bottom:30px;">2026年翻译教育最新数据</p><div class="dr">';
const TI = [["374所","MTI培养单位"],["309所","BTI培养单位"],["28所","DTI培养单位"],["6.8万+","MTI在校生"]];
for (let t of TI) H += '<div class="di"><div class="v">'+t[0]+'</div><div class="lb">'+t[1]+'</div></div>';
H += '</div><div class="tg">';
for (let t of TALENTS) H += '<div class="tc"><h3>'+t[0]+'</h3><p>'+t[1]+'</p></div>';
H += '</div></section>';

// Recruitment
H += '<section id="recruitment"><h2 class="st">招聘信息</h2><p style="text-align:center;color:var(--t2);margin-bottom:12px;">2025年翻译行业岗位需求</p>';
H += '<div style="text-align:center;margin-bottom:20px;">';
H += '<a href="https://www.zhipin.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">BOSS直聘</a>';
H += '<a href="https://www.liepin.com" target="_blank" style="margin:0 8px;color:var(--t2);font-size:.85rem;">猎聘</a>';
H += '<a href="https://www.zhaopin.com" target="_blank" style="margin:0 8px;color:var