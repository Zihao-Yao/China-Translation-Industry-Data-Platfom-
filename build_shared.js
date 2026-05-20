// build_shared.js - 共享数据、CSS和工具函数
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// ============ CSS ============
const STYLE = `*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#ffffff;--bg2:#f8f6f2;--bg3:#f0ece4;--g:#c8902e;--g2:#a8731e;--g3:#dba44e;--t:#2c2c2c;--t2:#7a7a7a;--b:#ddd9d1;--cb:#faf8f4}
body{font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--t);line-height:1.6}
.w2{position:fixed;bottom:14px;right:14px;font-size:11px;color:rgba(200,144,46,.15);pointer-events:none;z-index:9999;user-select:none;letter-spacing:3px}
.cr{position:fixed;top:10px;left:50%;transform:translateX(-50%);z-index:1001;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);border:1px solid #e74c3c;border-radius:6px;padding:4px 16px;font-size:.72rem;color:#c0392b;font-weight:700;letter-spacing:3px;white-space:nowrap}
a{color:var(--g);text-decoration:none}a:hover{color:var(--g3)}
section{padding:80px 20px;max-width:1200px;margin:0 auto;background:#ffffff}
.st{font-size:2rem;color:var(--g);text-align:center;margin-bottom:50px}
.st::after{content:"";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--g),transparent);margin:12px auto 0}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;position:relative;overflow:hidden;background:linear-gradient(135deg,#fefcf7,#faf6ed,#fcf9f0,#fefcf7)}
.hero::before{content:"";position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:600px;height:600px;background:radial-gradient(circle,rgba(200,144,46,.05),transparent 60%)}
.hero .corner{position:absolute;width:60px;height:60px;border-color:rgba(200,144,46,.15);border-style:solid;z-index:1;pointer-events:none}.hero .corner.tl{top:20px;left:20px;border-width:2px 0 0 2px}.hero .corner.tr{top:20px;right:20px;border-width:2px 2px 0 0}.hero .corner.bl{bottom:20px;left:20px;border-width:0 0 2px 2px}.hero .corner.br{bottom:20px;right:20px;border-width:0 2px 2px 0}
.hero::after{content:"";position:absolute;bottom:-200px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(200,144,46,.04),transparent 60%)}
.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--g);margin-bottom:16px;position:relative;z-index:1;letter-spacing:8px;text-shadow:0 2px 20px rgba(200,144,46,.1)}
.hero h1::before{content:"\u25C7";position:absolute;top:-30px;left:50%;transform:translateX(-50%);color:rgba(200,144,46,.12);font-size:1.2rem}
.hero h1::after{content:"\u25C7";position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);color:rgba(200,144,46,.12);font-size:1.2rem}
.hero p{color:var(--t2);max-width:700px;margin:0 auto 40px;position:relative;z-index:1;letter-spacing:1px}
.hl{position:absolute;left:30px;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font-size:1.1rem;color:rgba(200,144,46,.35);letter-spacing:12px;font-weight:700;z-index:1;pointer-events:none;user-select:none;border-left:2px solid rgba(200,144,46,.12);padding-left:10px}@media(max-width:900px){.hl{display:none}}
.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:20px;max-width:860px;width:100%;position:relative;z-index:1}
.hs>div{background:#ffffff;border:1px solid rgba(200,144,46,.15);border-radius:16px;padding:28px 20px;position:relative;overflow:hidden;box-shadow:0 2px 12px rgba(200,144,46,.04)}
.hs>div:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(200,144,46,.12);border-color:var(--g);transition:all .4s ease}
.hs>div::after{content:"";position:absolute;bottom:0;right:0;width:80px;height:80px;background:linear-gradient(135deg,transparent,rgba(200,144,46,.08));border-radius:16px 0 0 0}
.hs>div::before{content:"";position:absolute;top:-20px;left:-20px;width:60px;height:60px;background:radial-gradient(circle,rgba(200,144,46,.06),transparent 70%)}
.n{font-size:1.8rem;font-weight:700;color:var(--g);display:block}.l{font-size:.85rem;color:var(--t2);margin-top:6px}
.bd{display:inline-block;padding:6px 20px;border:1px solid rgba(200,144,46,.3);border-radius:20px;color:var(--g);margin-top:40px;font-size:.8rem;position:relative;z-index:1}
.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--t2);animation:f2 2s ease-in-out infinite}
@keyframes f2{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,.98);backdrop-filter:blur(10px);border-bottom:1px solid var(--b);padding:0 20px}
nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}
nav a{display:block;padding:8px 14px;font-size:.82rem;color:var(--t2);border-radius:6px}
nav a:hover{background:rgba(200,144,46,.06);color:var(--g);text-decoration:none}
.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}
.yb{padding:8px 24px;border:1px solid var(--b);border-radius:8px;background:#ffffff;color:var(--t2);font-size:.95rem;cursor:pointer}
.yb.ac,.yb:hover{background:var(--g);color:#fff;border-color:var(--g)}
.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px;margin-top:30px}
.cc{cursor:pointer;background:#ffffff;border:1px solid var(--b);border-radius:12px;padding:24px;text-align:center}
.cc:hover{border-color:var(--g);transform:translateY(-4px);box-shadow:0 6px 24px rgba(200,144,46,.1)}
.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(200,144,46,.15),rgba(200,144,46,.04));border:2px solid rgba(200,144,46,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--g)}
.cc h3{color:var(--g);font-size:1rem}.cc p{color:var(--t2);font-size:.82rem}
.cc .tg{display:inline-block;background:rgba(200,144,46,.08);color:var(--g2);padding:2px 10px;border-radius:10px;font-size:.72rem;margin-top:8px}
.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.3);z-index:2000;justify-content:center;align-items:center;padding:20px}
.mo.s{display:flex}.md{background:#ffffff;border:1px solid var(--g);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}
.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--t2);cursor:pointer;background:none;border:none}
.md h2{color:var(--g);margin-bottom:16px}.md p,.md li{color:var(--t2);margin-bottom:10px}
.md .ub{display:inline-block;padding:10px 24px;background:var(--g);color:#fff;border-radius:8px;font-weight:600;margin-top:16px}
.c2{background:var(--bg2);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:24px;position:relative;overflow:hidden}
.c2::after{content:"";position:absolute;top:-40px;right:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(200,144,46,.03),transparent 70%);pointer-events:none}
.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:.82rem;color:var(--t2)}
.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}
.cb .bf{height:100%;background:linear-gradient(90deg,var(--g2),var(--g));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:.72rem;color:#fff;font-weight:600;min-width:40px}
.cb .pc{min-width:40px;text-align:right;font-size:.85rem;color:var(--g)}
.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
.tc{background:#ffffff;border:1px solid var(--b);border-radius:12px;padding:24px}.tc h3{color:var(--g);margin-bottom:8px}.tc p{color:var(--t2);font-size:.88rem}
.tl{position:relative;padding-left:30px}
.tl::before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--g),transparent)}
.tm{position:relative;margin-bottom:30px;padding:20px;background:#ffffff;border:1px solid var(--b);border-radius:10px}
.tm::before{content:"\u25CF";position:absolute;left:-26px;top:20px;color:var(--g)}
.tm .yr{color:var(--g);font-weight:700;font-size:1.1rem}.tm h3{color:var(--g);margin-bottom:8px}.tm p{color:var(--t2);font-size:.88rem}
.tm .t2{display:inline-block;margin-top:8px;font-size:.78rem;border:1px solid rgba(200,144,46,.25);padding:3px 12px;border-radius:4px;color:var(--g2)}
.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse}
th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--b);font-size:.88rem}
th{background:var(--bg2);color:var(--g)}tr:hover{background:rgba(200,144,46,.04)}
.jc{background:#ffffff;border:1px solid var(--b);border-radius:12px;padding:20px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.jc .i{flex:1;min-width:200px}.jc h4{color:var(--g);margin-bottom:4px}.jc p{font-size:.82rem;color:var(--t2)}
.jct{display:flex;gap:6px}.jct span{font-size:.72rem;padding:2px 10px;border-radius:10px;background:rgba(200,144,46,.07);color:var(--g2);border:1px solid rgba(200,144,46,.15)}
.jc .js{font-size:1rem;font-weight:700;color:var(--g)}a.jc-link{display:block;text-decoration:none;transition:all .25s}a.jc-link:hover{transform:translateY(-2px)}a.jc-link:hover .jc{border-color:var(--g);box-shadow:0 4px 16px rgba(200,144,46,.1)}a.jc-link .i h4::after{content:" ↗";font-size:.72rem;opacity:0;transition:opacity .25s}a.jc-link:hover .i h4::after{opacity:1}
.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}
.pc{background:#ffffff;border:1px solid var(--b);border-radius:12px;padding:24px}
.pc:hover{border-color:var(--g);box-shadow:0 6px 24px rgba(200,144,46,.08)}
.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--g);margin-bottom:8px}.pc p{color:var(--t2);font-size:.85rem}
.sb{max-width:500px;margin:0 auto 30px}
.sb input{width:100%;padding:12px 20px;background:var(--bg2);border:1px solid var(--b);border-radius:10px;color:var(--t);font-size:.95rem;outline:none}
.sb input:focus{border-color:var(--g)}
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}
.si{background:#ffffff;border:1px solid var(--b);border-radius:8px;padding:10px 14px;font-size:.82rem;cursor:pointer}
.si:hover{border-color:var(--g);transform:translateY(-2px);box-shadow:0 4px 12px rgba(200,144,46,.08);transition:all .3s}.si .stp{font-size:.68rem;color:var(--t2);margin-left:6px}
.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px}
.di{background:#ffffff;border:1px solid var(--b);border-radius:10px;padding:18px;text-align:center;position:relative;overflow:hidden}
.di::after{content:"";position:absolute;top:0;right:0;width:60px;height:60px;background:linear-gradient(135deg,transparent,rgba(200,144,46,.07));border-radius:0 0 0 60px}
.di .v{font-size:1.5rem;font-weight:700;color:var(--g)}.di .lb{font-size:.8rem;color:var(--t2)}
.dgg{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px}
.dgg>div{background:#ffffff;border:1px solid var(--b);border-radius:10px;padding:14px;text-align:center}
.dgg .r{color:var(--t2);font-size:.72rem}.dgg .f{color:var(--g);font-weight:600;font-size:.95rem}.dgg .p{color:var(--g3)}
.tr{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}
.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--g),var(--g2));border-radius:4px 4px 0 0;min-height:10px}
.trl{font-size:.72rem;color:var(--t2)}.trv{font-size:.78rem;color:var(--g)}
.rc{background:#ffffff;border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden}
.rc:hover{border-color:var(--g);box-shadow:0 6px 24px rgba(200,144,46,.08)}
.rc .dt{color:var(--g2);font-size:.82rem}.rc h3{color:var(--g);margin-bottom:6px}.rc p{color:var(--t2);font-size:.85rem}
footer{background:var(--bg2);border-top:1px solid var(--b);padding:40px 20px;text-align:center}
footer p{font-size:.8rem;color:var(--t2);margin-top:8px}
.back-home{text-align:center;padding:12px 20px;margin-top:10px}
.back-home a{display:inline-block;padding:8px 24px;border:1px solid rgba(200,144,46,.3);border-radius:20px;color:var(--g);font-size:.85rem}
.back-home a:hover{background:rgba(200,144,46,.06)}
.icg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;margin-top:40px;max-width:1100px;margin-left:auto;margin-right:auto}
.icc{background:#ffffff;border:1px solid var(--b);border-radius:20px;padding:32px 24px;text-align:center;transition:transform .35s,border-color .35s,box-shadow .35s;position:relative;overflow:hidden;box-shadow:0 2px 8px rgba(200,144,46,.02)}
.icc:hover{transform:translateY(-8px);border-color:var(--g);box-shadow:0 12px 40px rgba(200,144,46,.14);background:linear-gradient(135deg,#fff,#fefcf7)}
.icc .i2{width:76px;height:76px;border-radius:50%;background:linear-gradient(135deg,rgba(200,144,46,.18),rgba(200,144,46,.03));border:2px solid rgba(200,144,46,.25);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;font-size:2rem;transition:transform .4s ease}
.icc:hover .i2{transform:scale(1.08) rotate(-4deg);border-color:var(--g)}
.icc h3{color:var(--g);font-size:1.1rem;margin-bottom:10px;letter-spacing:2px}.icc p{color:var(--t2);font-size:.85rem;line-height:1.6;margin-bottom:16px}
.icc .lnk{display:inline-block;color:var(--g);font-size:.82rem;border-bottom:1px solid rgba(200,144,46,.2);padding-bottom:2px;transition:border-color .3s}
.icc .lnk:hover{color:var(--g3);border-color:var(--g3)}
.icc::after{content:"";position:absolute;top:-40px;right:-40px;width:100px;height:100px;background:radial-gradient(circle,rgba(200,144,46,.05),transparent 70%);pointer-events:none}
.icc::before{content:"";position:absolute;bottom:-30px;left:-30px;width:70px;height:70px;background:radial-gradient(circle,rgba(200,144,46,.03),transparent 70%);pointer-events:none}
.ul{max-width:700px;margin:0 auto}
.hgh{background:#ffffff;border:1px solid var(--b);border-radius:10px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden}
.hgh:hover{border-color:var(--g);box-shadow:0 6px 24px rgba(200,144,46,.08)}
.hgh .dt{color:var(--g2);font-size:.82rem;margin-bottom:4px}.hgh h3{color:var(--g);font-size:1rem;margin-bottom:6px}.hgh p{color:var(--t2);font-size:.85rem}
@media(max-width:768px){section{padding:50px 16px}nav a{padding:6px 10px;font-size:.75rem}.hero h1{font-size:1.8rem}}
.cf-b.ac,.cf-b:hover{background:var(--g)!important;color:#fff!important;border-color:var(--g)!important;box-shadow:0 2px 8px rgba(200,144,46,.15)}
`;

// ============ JS Data ============
// JS_DATA 是浏览器端 JS 纯数据部分（scUrls, yd, cos, cod, courl, jd, rt）
// 从 index.html 提取（不含 uld 数组，因为 uld 由各页面独立管理）
let JS_DATA = '';
try {
  const htmlFile = path.join(dir, 'index.html');
  if (fs.existsSync(htmlFile)) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    const m = html.match(/<script>([\s\S]*?)<\/script>/);
    if (m) {
      var full = m[1];
      // 精确提取从 var scUrls= 到 var rt= 数组结束（不含 uld）
      var startIdx = full.indexOf('var scUrls=');
      var uldIdx = full.indexOf('];\nvar uld=');
      if (uldIdx === -1) uldIdx = full.indexOf('];var uld=');
      if (uldIdx > startIdx) {
        JS_DATA = full.substring(startIdx, uldIdx + 2); // include the trailing ]
      } else {
        // fallback: 到第一个 function 前
        var funcIdx = full.indexOf('];\nfunction');
        if (funcIdx > startIdx) {
          JS_DATA = full.substring(startIdx, funcIdx + 2);
        } else {
          JS_DATA = full;
        }
      }
      console.log('Extracted DATA from index.html (' + JS_DATA.length + ' bytes, scUrls~rt)');
    }
  }
} catch(e) {
  console.error('Warning: could not extract JS_DATA:', e.message);
}

function nav(subpage) {
  const items = [
    ['index.html', '🏠 返回主页'],
    ['page_overview.html', '行业概览'],
    ['page_demand.html', '需求分析'],
    ['page_companies.html', '知名企业'],
    ['page_projects.html', '重大项目'],
    ['page_talent.html', '人才培养'],
    ['page_recruitment.html', '招聘信息'],
    ['page_ranking.html', '院校排行'],
    ['page_career.html', '职业路径'],
    ['page_global.html', '全球视野'],
    ['page_reports.html', '数据报告']
  ];
  let lis = items.map(([href, label]) => {
    if (subpage && href === subpage) return '<li><a href="' + href + '" style="color:var(--g);font-weight:600;">' + label + '</a></li>';
    return '<li><a href="' + href + '">' + label + '</a></li>';
  }).join('');
  return '<nav><ul>' + lis + '</ul></nav>';
}

function footer() {
  return '<footer><p>数据来源：中国翻译协会《2026中国翻译行业发展报告》《2026全球翻译行业发展报告》</p><p>光明日报 2026.04.25 · 中国翻译协会官网 · 教育部高等学校翻译专业教学协作组</p>' +
'<div style="margin:20px auto;border-top:1px solid var(--b);padding-top:16px;max-width:600px;">' +
'<p style="font-size:.82rem;color:var(--g);font-weight:600;letter-spacing:4px;">© ' + new Date().getFullYear() + ' 中国翻译行业数据平台 版权所有</p>' +
'<p style="font-size:.78rem;color:#c0392b;font-weight:700;letter-spacing:2px;">⚠ 未经授权禁止转载、复制、修改、使用本平台数据用于商业盈利，侵权必究</p>' +
'<p style="font-size:.75rem;color:var(--t2);margin-top:6px;">根据《中华人民共和国著作权法》《信息网络传播权保护条例》依法保护</p>' +
'</div>' +
'<p style="margin-top:20px;color:var(--t2);font-size:.9rem;">制作人：中国民用航空飞行学院 风正起时</p>' +
'<p style="margin-top:4px;color:rgba(200,144,46,.08);letter-spacing:3px;font-size:11px;">数据版本 v2.0 · 更新时间 2026年5月</p>' +
'<p style="margin-top:30px;color:rgba(200,144,46,.12);letter-spacing:6px;font-size:13px;">风正起时制作</p></footer>';
}

function wrap(title, body, script, sub) {
  return '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<title>' + title + ' | 中国翻译行业数据平台</title>\n<style>' + STYLE + '</style>\n</head>\n<body>\n<div class="w2">风正起时制作</div>\n' + nav(sub) + '\n' + body + '\n' + footer() + '\n<script>' + JS_DATA + (script || '') + '\n</script>\n</body>\n</html>';
}

function bc() {
  return '<div class="cr">© 2026 中国翻译行业数据平台 · 版权所有 侵权必究</div>';}

function bh() {
  return '<div class="back-home"><a href="index.html">← 返回主页</a></div>';
}

function js_renderYear() {
  return `function renderYear(y){
  var d=yd[y];
  if(!d)return;
  var o=[];
  var items=[["全年产值",d.o],["从业人员",d.p],["专职翻译",d.f],["AI翻译企业",d.a+"家"],["MTI累计毕业生(万)",d.e]];
  items.forEach(function(it){o.push('<div class="di"><div class="v">'+it[1]+'</div><div class="lb">'+it[0]+'</div></div>');});
  document.getElementById("od").innerHTML=o.join("");
  var b=document.getElementById("ys");b.innerHTML="";
  var ys=[2022,2023,2024,2025];ys.forEach(function(yy){b.innerHTML+='<button class="yb'+(yy===y?' ac':'')+'" onclick="renderYear('+yy+')">'+yy+'</button>';});
  var regions=d.r;var h="";
  regions.forEach(function(r){h+='<div class="cb"><span class="la">'+r.n+'</span><div class="bt"><div class="bf" style="width:'+r.p+'%;">'+r.p+'%</div></div><span class="pc">'+r.p+'%</span></div>';});
  document.getElementById("rc").innerHTML=h;
  var t=document.getElementById("tb");t.innerHTML="";
  var yk=Object.keys(yd).sort();var max=0;yk.forEach(function(k){if(yd[k].on>max)max=yd[k].on;});
  yk.forEach(function(k){var dk=yd[k];t.innerHTML+='<div class="trc"><div class="trb" style="height:'+(dk.on/max*180)+'px"></div><div class="trv">'+dk.o+'</div><div class="trl">'+k+'</div></div>';});
}`;
}

function js_renderCos() {
  // 改进版的 js_renderCos：像院校搜索一样实时响应 + 分类过滤
  var a = [];
  a.push('var _cosAll=cos.slice(0);');
  a.push('function filterCos(){');
  a.push('  var q=document.getElementById("cs").value.toLowerCase();');
  a.push('  var s=(document.querySelector(".cf-b.ac")||{}).getAttribute&&document.querySelector(".cf-b.ac").getAttribute("data-s")||"all";');
  a.push('  var f=_cosAll.filter(function(c){');
  a.push('    var nm=c.n.toLowerCase().indexOf(q)!==-1;');
  a.push('    var de=c.d.toLowerCase().indexOf(q)!==-1;');
  a.push('    var tp=c.t.indexOf(q)!==-1;');
  a.push('    return (nm||de||tp||q==="")&&(s==="all"||c.s===s);');
  a.push('  });');
  a.push('  var h="";');
  a.push('  f.forEach(function(c){');
  a.push("    h+='<div class=\"cc\" onclick=\"sm('+String.fromCharCode(39)+c.i+String.fromCharCode(39)+')\"><div class=\"ic\">\\ud83c\\udfe2</div><h3>'+c.n+'</h3><p>'+c.d+'</p><span class=\"tg\">'+c.t+'</span></div>';");
  a.push('  });');
  a.push('  if(!h)h="<p style=\\"text-align:center;color:var(--t2);padding:40px\\">\\u672a\\u627e\\u5230\\u5339\\u914d\\u4f01\\u4e1a</p>";');
  a.push('  document.getElementById("cg").innerHTML=h;');
  a.push('}');
  a.push('function filterBySize(s,b){');
  a.push('  document.querySelectorAll(".cf-b").forEach(function(x){x.classList.remove("ac");});');
  a.push('  if(b){b.classList.add("ac");}');
  a.push('  filterCos();');
  a.push('}');
  a.push('function sm(id){');
  a.push('  var c={};');
  a.push('  cos.forEach(function(x){if(x.i===id)c=x;});');
  a.push("  var h='<h2>'+c.n+'</h2><p><strong>\\u6240\\u5c5e\\u56fd\\u5bb6:</strong> '+c.co+'</p><p><strong>\\u7c7b\\u522b:</strong> '+c.t+'</p><p><strong>\\u8be6\\u7ec6\\u4ecb\\u7ecd:</strong> '+(cod[id]||c.d)+'</p>';");
  a.push("  if(courl[id]&&courl[id][0])h+='<p><strong>\\u62db\\u8058\\u94fe\\u63a5:</strong> <a href=\"'+courl[id][0]+'\" target=\"_blank\" class=\"ub\">\\u67e5\\u770b\\u62db\\u8058\\u5c97\\u4f4d</a></p>';");
  a.push("  if(courl[id]&&courl[id][1])h+='<p><strong>\\u5b98\\u7f51:</strong> <a href=\"'+courl[id][1]+'\" target=\"_blank\" style=\"color:var(--g2);\">'+courl[id][1]+'</a></p>';");
  a.push('  document.getElementById("mc").innerHTML=h;');
  a.push('  document.getElementById("cm").className="mo s";');
  a.push('}');
  a.push('function cm(){document.getElementById("cm").className="mo";}');
  a.push('filterCos();');
  return a.join('\n');
}

function js_liveJobs() {
  // 返回 JS 代码字符串（数组被 JSON 序列化后包装为 var jd=[...]）
  var data = [
    {t:"中英高级笔译",c:"RWS China",s:"18-28K",tg:"上海全职CATTI二级",sr:"猎聘",url:"https://www.liepin.com/zhaopin/?key=%E7%BF%BB%E8%AF%91+RWS"},
    {t:"游戏本地化译员",c:"舜禹环球通",s:"12-25K",tg:"南京全职/兼职",sr:"BOSS直聘",url:"https://www.zhipin.com/web/geek/job?city=100010000&query=%E7%BF%BB%E8%AF%91+%E6%B8%B8%E6%88%8F"},
    {t:"AI训练数据翻译",c:"传神语联",s:"10-20K",tg:"北京全职NLP优先",sr:"智联招聘",url:"https://sou.zhaopin.com/?jl=765&kw=AI%E7%BF%BB%E8%AF%91%E6%95%B0%E6%8D%AE"},
    {t:"短剧创译译员",c:"传神语联",s:"15-30K",tg:"远程全职",sr:"BOSS直聘",url:"https://www.zhipin.com/web/geek/job?city=100010000&query=%E7%9F%AD%E5%89%A7+%E7%BF%BB%E8%AF%91"},
    {t:"韩语翻译",c:"Lionbridge CN",s:"12-22K",tg:"大连全职",sr:"前程无忧",url:"https://we.51job.com/pc/search?keyword=00%2C9%2C99%2C%25E9%259F%25A9%25E8%25AF%25AD%25E7%25BF%25BB%25E8%25AF%2591"},
    {t:"法语翻译",c:"RWS China",s:"14-26K",tg:"上海全职CATTI",sr:"猎聘",url:"https://www.liepin.com/zhaopin/?key=%E6%B3%95%E8%AF%AD+%E7%BF%BB%E8%AF%91"},
    {t:"西班牙语翻译",c:"中译语通",s:"13-25K",tg:"北京全职",sr:"智联招聘",url:"https://sou.zhaopin.com/?jl=765&kw=%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%AD%E7%BF%BB%E8%AF%91&kt=3"},
    {t:"阿拉伯语翻译",c:"策马翻译",s:"15-28K",tg:"北京全职",sr:"BOSS直聘",url:"https://www.zhipin.com/web/geek/job?city=100010000&query=%E9%98%BF%E6%8B%89%E4%BC%AF%E8%AF%AD%E7%BF%BB%E8%AF%91"},
    {t:"俄语翻译",c:"Welocalize CN",s:"12-24K",tg:"远程全职",sr:"前程无忧",url:"https://we.51job.com/pc/search?keyword=00%2C9%2C99%2C%25E4%25BF%2584%25E8%25AF%25AD%25E7%25BF%25BB%25E8%25AF%2591"},
    {t:"医学翻译",c:"译程翻译",s:"15-30K",tg:"上海全职/兼职",sr:"猎聘",url:"https://www.liepin.com/zhaopin/?key=%E5%8C%BB%E5%AD%A6+%E7%BF%BB%E8%AF%91"},
    {t:"翻译质量评估师",c:"舜禹环球通",s:"15-28K",tg:"南京全职",sr:"BOSS直聘",url:"https://www.zhipin.com/web/geek/job?city=101190100&query=%E7%BF%BB%E8%AF%91%E8%B4%A8%E9%87%8F"},
    {t:"网站本地化工程师",c:"阿里巴巴",s:"20-40K",tg:"杭州全职",sr:"阿里巴巴官网",url:"https://talent.alibaba.com/"},
    {t:"AI数据标注主管",c:"百度",s:"18-35K",tg:"北京全职",sr:"智联招聘",url:"https://sou.zhaopin.com/?jl=765&kw=AI%E6%95%B0%E6%8D%AE+%E7%BF%BB%E8%AF%91&kt=3"},
    {t:"CAT工具技术支持",c:"RWS",s:"15-25K",tg:"上海全职",sr:"前程无忧",url:"https://we.51job.com/pc/search?keyword=00%2C9%2C99%2CTrados"},
    {t:"同声传译",c:"中译语通",s:"30-60K",tg:"北京全职CATTI一级",sr:"猎聘",url:"https://www.liepin.com/zhaopin/?key=%E5%90%8C%E5%A3%B0%E4%BC%A0%E8%AF%91+%E5%8C%97%E4%BA%AC"},
    {t:"泰语翻译",c:"传神语联",s:"10-20K",tg:"远程",sr:"BOSS直聘",url:"https://www.zhipin.com/web/geek/job?city=100010000&query=%E6%B3%B0%E8%AF%AD%E7%BF%BB%E8%AF%91"},
    {t:"意大利语翻译",c:"TransPerfect CN",s:"13-25K",tg:"上海",sr:"前程无忧",url:"https://we.51job.com/pc/search?keyword=00%2C9%2C99%2C%25E6%2584%258F%25E5%25A4%25A7%25E5%2588%25A9%25E8%25AF%25AD%25E7%25BF%25BB%25E8%25AF%2591"},
    {t:"俄语游戏翻译",c:"网易有道",s:"12-25K",tg:"广州全职",sr:"猎聘",url:"https://www.liepin.com/zhaopin/?key=%E4%BF%84%E8%AF%AD+%E6%B8%B8%E6%88%8F+%E7%BF%BB%E8%AF%91"}
  ];
  return 'var jd=' + JSON.stringify(data) + ';';
}

module.exports = {
  STYLE, JS_DATA, nav, footer, wrap, bc, bh,
  js_renderYear, js_renderCos, js_liveJobs
};
