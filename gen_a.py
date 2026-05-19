import os

p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"
L = []
def a(s):
    L.append(s)

# HTML head + CSS
a('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title><style>')
a('*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--g:#f0a030;--g2:#d4891e;--g3:#f5b84e;--t:#e0e0e0;--t2:#999;--b:#333;--cb:#1a1a1a}')
a('body{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans SC\",\"Microsoft YaHei\",sans-serif;background:var(--bg);color:var(--t);line-height:1.6}')
a('.w1,.w2{position:fixed;font-size:11px;color:rgba(240,160,48,.18);pointer-events:none;z-index:9999;user-select:none;letter-spacing:3px}.w1{top:14px;left:14px}.w2{bottom:14px;right:14px}')
a('a{color:var(--g);text-decoration:none}a:hover{color:var(--g3);text-decoration:underline}')
a('section{padding:80px 20px;max-width:1200px;margin:0 auto}')
a('.st{font-size:2rem;color:var(--g);text-align:center;margin-bottom:50px}.st::after{content:\"\";display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--g),transparent);margin:12px auto 0}')
a('.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a,#1a1208,#0d0d0d)}')
a('.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--g);margin-bottom:20px}.hero p{color:var(--t2);max-width:700px;margin:0 auto 40px}')
a('.hs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:800px;width:100%}')
a('.hs>div{background:rgba(26,26,26,.8);border:1px solid rgba(240,160,48,.15);border-radius:12px;padding:24px 16px}')
a('.n{font-size:1.8rem;font-weight:700;color:var(--g);display:block}.l{font-size:.85rem;color:var(--t2);margin-top:6px}')
a('.bd{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,.3);border-radius:20px;color:var(--g);margin-top:40px;font-size:.8rem}')
a('.sd{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--t2);animation:f2 2s ease-in-out infinite}')
a('@keyframes f2{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}')
a('nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--b);padding:0 20px}')
a('nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}')
a('nav a{display:block;padding:8px 14px;font-size:.82rem;color:var(--t2);border-radius:6px}nav a:hover{background:rgba(240,160,48,.08);color:var(--g);text-decoration:none}')
a('.ys{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}')
a('.yb{padding:8px 24px;border:1px solid var(--b);border-radius:8px;background:var(--bg2);color:var(--t2);font-size:.95rem;cursor:pointer}.yb.ac,.yb:hover{background:var(--g);color:#000;border-color:var(--g)}')
a('.cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px;margin-top:30px}')
a('.cc{cursor:pointer;background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;text-align:center}.cc:hover{border-color:var(--g);transform:translateY(-4px)}')
a('.cc .ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,.2),rgba(240,160,48,.05));border:2px solid rgba(240,160,48,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--g)}')
a('.cc h3{color:var(--g);font-size:1rem}.cc p{color:var(--t2);font-size:.82rem}.cc .tg{display:inline-block;background:rgba(240,160,48,.1);color:var(--g2);padding:2px 10px;border-radius:10px;font-size:.72rem;margin-top:8px}')
a('.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:2000;justify-content:center;align-items:center;padding:20px}.mo.s{display:flex}')
a('.md{background:var(--bg2);border:1px solid var(--g);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}')
a('.md .x{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--t2);cursor:pointer;background:none;border:none}.md h2{color:var(--g);margin-bottom:16px}.md p,.md li{color:var(--t2);margin-bottom:10px}.md .ub{display:inline-block;padding:10px 24px;background:var(--g);color:#000;border-radius:8px;font-weight:600;margin-top:16px}')
a('.c2{background:var(--bg2);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:24px}')
a('.cb{display:flex;align-items:center;gap:10px;margin:6px 0}.cb .la{min-width:50px;font-size:.82rem;color:var(--t2)}.cb .bt{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}.cb .bf{height:100%;background:linear-gradient(90deg,var(--g2),var(--g));border-radius:4px;display:flex;align-items:center;padding-left:6px;font-size:.72rem;color:#000;font-weight:600;min-width:40px}.cb .pc{min-width:40px;text-align:right;font-size:.85rem;color:var(--g)}')
a('.tg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}.tc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.tc h3{color:var(--g);margin-bottom:8px}.tc p{color:var(--t2);font-size:.88rem}')
a('.tl{position:relative;padding-left:30px}.tl::before{content:\"\";position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--g),transparent)}')
a('.tm{position:relative;margin-bottom:30px;padding:20px;background:var(--cb);border:1px solid var(--b);border-radius:10px}.tm::before{content:\"\\25CF\";position:absolute;left:-26px;top:20px;color:var(--g)}')
a('.tm .yr{color:var(--g);font-weight:700;font-size:1.1rem}.tm h3{color:var(--g);margin-bottom:8px}.tm p{color:var(--t2);font-size:.88rem}.tm .t2{display:inline-block;margin-top:8px;font-size:.78rem;border:1px solid rgba(240,160,48,.2);padding:3px 12px;border-radius:4px;color:var(--g2)}')
a('.tb{overflow-x:auto;margin-top:20px}table{width:100%;border-collapse:collapse}th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--b);font-size:.88rem}th{background:var(--bg3);color:var(--g)}tr:hover{background:rgba(240,160,48,.04)}')
a('.jc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:20px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}.jc .i{flex:1;min-width:200px}.jc h4{color:var(--g);margin-bottom:4px}.jc p{font-size:.82rem;color:var(--t2)}')
a('.jct{display:flex;gap:6px}.jct span{font-size:.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,.08);color:var(--g2);border:1px solid rgba(240,160,48,.15)}.jc .js{font-size:1rem;font-weight:700;color:var(--g)}')
a('.pg{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:30px}.pc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px}.pc:hover{border-color:var(--g)}.pc .ico{font-size:2rem;margin-bottom:10px}.pc h3{color:var(--g);margin-bottom:8px}.pc p{color:var(--t2);font-size:.85rem}')
a('.sb{max-width:500px;margin:0 auto 30px}.sb input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--b);border-radius:10px;color:var(--t);font-size:.95rem;outline:none}.sb input:focus{border-color:var(--g)}')
a('.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}.si{background:var(--cb);border:1px solid var(--b);border-radius:8px;padding:10px 14px;font-size:.82rem}.si:hover{border-color:var(--g)}.si .stp{font-size:.68rem;color:var(--t2);margin-left:6px}')
a('.dr{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:16px}.di{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:18px;text-align:center}.di .v{font-size:1.5rem;font-weight:700;color:var(--g)}.di .lb{font-size:.8rem;color:var(--t2)}')
a('.dgg{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px}.dgg>div{background:var(--cb);border:1px solid var(--b);border-radius:10px;padding:14px;text-align:center}.dgg .r{color:var(--t2);font-size:.72rem}.dgg .f{color:var(--g);font-weight:600;font-size:.95rem}.dgg .p{color:var(--g3)}')
a('.tr{display:flex;align-items:flex-end;justify-content:space-around;height:200px;gap:8px}.trc{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}.trb{width:100%;max-width:60px;background:linear-gradient(180deg,var(--g),var(--g2));border-radius:4px 4px 0 0;min-height:10px}.trl{font-size:.72rem;color:var(--t2)}.trv{font-size:.78rem;color:var(--g)}')
a('.rc{background:var(--cb);border:1px solid var(--b);border-radius:12px;padding:24px;margin-bottom:16px}.rc:hover{border-color:var(--g)}.rc .dt{color:var(--g2);font-size:.82rem}.rc h3{color:var(--g);margin-bottom:6px}.rc p{color:var(--t2);font-size:.85rem}')
a('footer{background:var(--bg2);border-top:1px solid var(--b);padding:40px 20px;text-align:center}footer p{font-size:.8rem;color:var(--t2);margin-top:8px}')
a('@media(max-width:768px){section{padding:50px 16px}nav a{padding:6px 10px;font-size:.75rem}.hero h1{font-size:1.8rem}}')
a('</style></head><body>')

# Watermarks
a('<div class="w1">风正起时制作</div><div class="w2">风正起时制作</div>')
a('<nav><ul><li><a href="#overview">行业概览</a></li><li><a href="#demand">需求分析</a></li><li><a href="#companies">知名企业</a></li><li><a href="#projects">重大项目</a></li><li><a href="#talent">人才培养</a></li><li><a href="#recruitment">招聘信息</a></li><li><a href="#ranking">院校排行</a></li><li><a href="#career">职业路径</a></li><li><a href="#global">全球视野</a></li><li><a href="#reports">数据报告</a></li></ul></nav>')

# Save what we have so far
with open(p, 'w', encoding='utf-8') as f:
    f.write(''.join(L))

# Clear L for next section  
L.clear()
next_section_start = len(''.join(L))
print(f"Part 1 written: {os.path.getsize(p)} bytes")
