# -*- coding: utf-8 -*-
import os

path = r'C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html'

chunks = []

# === HEAD + STYLE ===
chunks.append('''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>中国翻译行业数据平台</title>
<style>
:root{--bg:#0d0d0d;--bg2:#1a1a1a;--bg3:#252525;--gold:#f0a030;--gold2:#d4891e;--gold3:#f5b84e;--text:#e0e0e0;--text2:#999;--border:#333;--card-bg:#1a1a1a;--shadow:0 4px 20px rgba(0,0,0,0.5)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans SC','Microsoft YaHei',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;overflow-x:hidden}
.watermark-tl,.watermark-br{position:fixed;font-size:12px;color:rgba(240,160,48,0.15);pointer-events:none;z-index:9999;user-select:none;letter-spacing:2px;font-weight:300}
.watermark-tl{top:16px;left:16px}
.watermark-br{bottom:16px;right:16px}
a{color:var(--gold);text-decoration:none}
a:hover{color:var(--gold3);text-decoration:underline}
section{padding:80px 20px;max-width:1200px;margin:0 auto}
.section-title{font-size:2rem;color:var(--gold);text-align:center;margin-bottom:50px;position:relative}
.section-title::after{content:'';display:block;width:60px;height:3px;background:linear-gradient(90deg,var(--gold),transparent);margin:12px auto 0;border-radius:2px}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a0a 0%,#1a1208 50%,#0d0d0d 100%);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 30% 50%,rgba(240,160,48,0.03) 0%,transparent 50%),radial-gradient(circle at 70% 50%,rgba(240,160,48,0.02) 0%,transparent 50%);pointer-events:none}
.hero h1{font-size:clamp(2.2rem,6vw,4rem);color:var(--gold);margin-bottom:20px;text-shadow:0 0 40px rgba(240,160,48,0.15);position:relative}
.hero p{font-size:clamp(1rem,2.5vw,1.3rem);color:var(--text2);max-width:700px;margin-bottom:40px;position:relative}
.hero-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px;max-width:800px;width:100%;position:relative}
.hero-stat{background:rgba(26,26,26,0.8);border:1px solid rgba(240,160,48,0.15);border-radius:12px;padding:24px 16px;transition:transform 0.3s,border-color 0.3s}
.hero-stat:hover{transform:translateY(-4px);border-color:var(--gold)}
.hero-stat .num{font-size:1.8rem;font-weight:700;color:var(--gold);display:block}
.hero-stat .label{font-size:0.85rem;color:var(--text2);margin-top:6px}
.hero-badge{display:inline-block;padding:6px 20px;border:1px solid rgba(240,160,48,0.3);border-radius:20px;font-size:0.8rem;color:var(--gold);margin-top:40px;position:relative}
.scroll-down{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:var(--text2);font-size:0.85rem;animation:float 2s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(13,13,13,0.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:0 20px}
nav ul{list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:4px;max-width:1200px;margin:0 auto;padding:8px 0}
nav ul li a{display:block;padding:8px 14px;font-size:0.82rem;color:var(--text2);border-radius:6px;transition:all 0.3s}
nav ul li a:hover{color:var(--gold);background:rgba(240,160,48,0.08);text-decoration:none}
.year-selector{display:flex;justify-content:center;gap:8px;margin-bottom:36px;flex-wrap:wrap}
.year-btn{padding:8px 24px;border:1px solid var(--border);border-radius:8px;background:var(--bg2);color:var(--text2);font-size:0.95rem;cursor:pointer;transition:all 0.3s}
.year-btn:hover{border-color:var(--gold);color:var(--gold)}
.year-btn.active{background:var(--gold);color:#000;border-color:var(--gold);font-weight:600}
.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;margin-top:30px}
.card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;transition:all 0.3s;position:relative}
.card:hover{border-color:var(--gold);transform:translateY(-2px);box-shadow:var(--shadow)}
.card h3{color:var(--gold);margin-bottom:10px}
.card p{color:var(--text2);font-size:0.9rem;line-height:1.7}
.company-card{cursor:pointer;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center;transition:all 0.3s}
.company-card:hover{border-color:var(--gold);transform:translateY(-4px);box-shadow:var(--shadow)}
.company-card .logo-placeholder{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(240,160,48,0.2),rgba(240,160,48,0.05));border:2px solid rgba(240,160,48,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--gold)}
.company-card h3{color:var(--gold);font-size:1rem;margin-bottom:6px}
.company-card p{color:var(--text2);font-size:0.82rem}
.company-card .tag{display:inline-block;background:rgba(240,160,48,0.1);color:var(--gold2);padding:2px 10px;border-radius:10px;font-size:0.72rem;margin-top:8px}
.modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:2000;justify-content:center;align-items:center;padding:20px}
.modal-overlay.show{display:flex}
.modal{background:var(--bg2);border:1px solid var(--gold);border-radius:16px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.8)}
.modal .close{position:absolute;top:16px;right:20px;font-size:1.5rem;color:var(--text2);cursor:pointer;background:none;border:none}
.modal .close:hover{color:var(--gold)}
.modal h2{color:var(--gold);margin-bottom:16px}
.modal p{color:var(--text2);margin-bottom:10px;line-height:1.7}
.modal .url-btn{display:inline-block;padding:10px 24px;background:var(--gold);color:#000;border-radius:8px;font-weight:600;margin-top:16px;transition:background 0.3s}
.modal .url-btn:hover{background:var(--gold3);text-decoration:none}
.chart-container{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:24px}
.chart-bar{display:flex;align-items:center;gap:10px;margin:6px 0}
.chart-bar .label{min-width:50px;font-size:0.82rem;color:var(--text2)}
.chart-bar .bar-track{flex:1;height:22px;background:var(--bg3);border-radius:4px;overflow:hidden}
.chart-bar .bar-fill{height:100%;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:4px;transition:width 0.5s ease;display:flex;align-items:center;padding-left:6px;font-size:0.72rem;color:#000;font-weight:600;min-width:40px}
.chart-bar .pct{min-width:40px;text-align:right;font-size:0.85rem;color:var(--gold);font-weight:600}
.talent-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:30px}
.talent-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px}
.talent-card .num{font-size:2.4rem;font-weight:700;color:var(--gold)}
.talent-card .sub{font-size:0.85rem;color:var(--text2);margin-top:4px}
.talent-card h3{color:var(--gold);margin-bottom:8px;font-size:1.1rem}
.talent-card p{color:var(--text2);font-size:0.88rem;line-height:1.7}
.timeline{position:relative;padding-left:30px}
.timeline::before{content:'';position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--gold),transparent)}
.timeline-item{position:relative;margin-bottom:30px;padding:20px;background:var(--card-bg);border:1px solid var(--border);border-radius:10px}
.timeline-item:hover{border-color:var(--gold)}
.timeline-item::before{content:'\\25CF';position:absolute;left:-26px;top:20px;color:var(--gold);font-size:0.8rem}
.timeline-item .year{color:var(--gold);font-weight:700;font-size:1.1rem;margin-bottom:6px}
.timeline-item p{color:var(--text2);font-size:0.88rem;line-height:1.7}
.timeline-item .source-btn{display:inline-block;margin-top:8px;font-size:0.78rem;border:1px solid rgba(240,160,48,0.2);padding:3px 12px;border-radius:4px;color:var(--gold2);cursor:pointer;background:none;transition:all 0.3s}
.timeline-item .source-btn:hover{background:rgba(240,160,48,0.1)}
.table-container{overflow-x:auto;margin-top:20px}
table{width:100%;border-collapse:collapse;font-size:0.88rem}
th,td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--border)}
th{background:var(--bg3);color:var(--gold);font-weight:600;white-space:nowrap}
tr:hover{background:rgba(240,160,48,0.04)}
td{color:var(--text)}
.job-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.job-card:hover{border-color:var(--gold)}
.job-card .info{flex:1;min-width:200px}
.job-card .info h4{color:var(--gold);margin-bottom:4px}
.job-card .info p{color:var(--text2);font-size:0.82rem}
.job-card .tags{display:flex;gap:6px;flex-wrap:wrap}
.job-card .tags span{font-size:0.72rem;padding:2px 10px;border-radius:10px;background:rgba(240,160,48,0.08);color:var(--gold2);border:1px solid rgba(240,160,48,0.15)}
.job-card .salary{font-size:1rem;font-weight:700;color:var(--gold);white-space:nowrap}
.path-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:30px}
.path-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;transition:all 0.3s}
.path-card:hover{border-color:var(--gold);transform:translateY(-2px)}
.path-card .icon{font-size:2rem;margin-bottom:10px}
.path-card h3{color:var(--gold);font-size:1.05rem;margin-bottom:8px}
.path-card p{color:var(--text2);font-size:0.85rem;line-height:1.7}
.search-box{max-width:500px;margin:0 auto 30px}
.search-box input{width:100%;padding:12px 20px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:0.95rem;outline:none}
.search-box input:focus{border-color:var(--gold)}
.search-box input::placeholder{color:var(--text2)}
footer{background:var(--bg2);border-top:1px solid var(--border);padding:40px 20px;text-align:center}
footer .links{margin-bottom:16px}
footer .links a{color:var(--text2);margin:0 12px;font-size:0.82rem}
footer .links a:hover{color:var(--gold);text-decoration:none}
footer p{color:var(--text2);font-size:0.8rem;margin-top:8px}
.report-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:16px}
.report-card:hover{border-color:var(--gold)}
.report-card .date{color:var(--gold2);font-size:0.82rem;margin-bottom:4px}
.report-card h3{color:var(--gold);font-size:1.05rem;margin-bottom:6px}
.report-card p{color:var(--text2);font-size:0.85rem;line-height:1.7}
@media(max-width:768px){section{padding:50px 16px}nav ul li a{padding:6px 10px;font-size:0.75rem}.hero h1{font-size:1.8rem}.modal{padding:24px}.hero-stats{grid-template-columns:repeat(2,1fr)}.job-card{flex-direction:column;align-items:flex-start}}
.insight-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:16px}
.insight-card h3{color:var(--gold);margin-bottom:8px}
.insight-card p{color:var(--text2);font-size:0.88rem;line-height:1.7}
.data-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin:24px 0}
.data-item{background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:18px;text-align:center}
.data-item .val{font-size:1.5rem;font-weight:700;color:var(--gold)}
.data-item .lbl{font-size:0.8rem;color:var(--text2);margin-top:4px}
.demand-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:16px}
.demand-item{background:var(--card-bg);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center}
.demand-item:hover{border-color:var(--gold)}
.demand-item .rank{color:var(--text2);font-size:0.72rem}
.demand-item .field{color:var(--gold);font-weight:600;font-size:0.95rem;margin:4px 0}
.demand-item .pct{color:var(--gold3);font-size:0.85rem}
.school-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:16px}
.school-item{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:0.82rem;color:var(--text);transition:all 0.3s}
.school-item:hover{border-color:var(--gold);color:var(--gold)}
.school-item .type{font-size:0.68rem;color:var(--text2);margin-left:6px}
.trend-bars{display:flex;align-items:flex-end;justify-content:space-around;height:200px;padding:0 10px;gap:8px}
.trend-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.trend-bar{width:100%;max-width:60px;background:linear-gradient(180deg,var(--gold),var(--gold2));border-radius:4px 4px 0 0;transition:height 0.5s ease;min-height:10px}
.trend-label{font-size:0.72rem;color:var(--text2);text-align:center}
.trend-val{font-size:0.78rem;color:var(--gold);font-weight:600}
</style>
</head>
<body>
<div class="watermark-tl">风正起时制作</div>
<div class="watermark-br">风正起时制作</div>
''')

# === NAVIGATION ===
chunks.append('''
<nav>
<ul>
<li><a href="#overview">行业概览</a></li>
<li><a href="#demand">需求分析</a></li>
<li><a href="#companies">知名企业</a></li>
<li><a href="#projects">重大项目</a></li>
<li><a href="#talent">人才培养</a></li>
<li><a href="#recruitment">招聘信息</a></li>
<li><a href="#ranking">院校排行</a></li>
<li><a href="#career">职业路径</a></li>
<li><a href="#global">全球视野</a></li>
<li><a href="#reports">数据报告</a></li>
</ul>
</nav>
''')

# === HERO ===
chunks.append('''
<section class="hero">
<h1>中国翻译行业数据平台</h1>
<p>基于中国翻译协会2026年行业报告，汇聚翻译产业全景数据，洞察行业发展趋势</p>
<div class="hero-stats">
<div class="hero-stat"><span class="num">701.2亿</span><span class="label">全年产值（元）</span></div>
<div class="hero-stat"><span class="num">686.7万</span><span class="label">从业人员</span></div>
<div class="hero-stat"><span class="num">113.5万</span><span class="label">专职翻译</span></div>
<div class="hero-stat"><span class="num">2183家</span><span class="label">AI翻译企业</span></div>
</div>
<div class="hero-badge">数据实时 · 基于2026年行业报告</div>
<div class="scroll-down">↓ 向下滚动探索</div>
</section>
''')

# === OVERVIEW ===
chunks.append('''
<section id="overview">
<h2 class="section-title">行业概览</h2>
<div class="year-selector" id="yearSelector"></div>
<div id="overviewContent">
<div class="data-row" id="overviewData"></div>
<div class="chart-container">
<h3 style="color:var(--gold);margin-bottom:16px;">区域分布</h3>
<div id="regionChart"></div>
</div>
<div class="chart-container">
<h3 style="color:var(--gold);margin-bottom:16px;">产值趋势（2022-2025）</h3>
<div class="trend-bars" id="trendBars"></div>
</div>
</div>
</section>
''')

# === DEMAND ===
chunks.append('''
<section id="demand">
<h2 class="section-title">需求分析</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:24px;">2025年翻译市场需求结构调整，人机协同成主流，高端人工翻译需求持续增长</p>
<h3 style="color:var(--gold);margin-bottom:12px;font-size:1.1rem;">Top 10 热门翻译领域（2025）</h3>
<div class="demand-grid" id="demandGrid"></div>
<div style="margin-top:30px;">
<div class="chart-container">
<h3 style="color:var(--gold);margin-bottom:12px;">语言对分布</h3>
<table>
<thead><tr><th>语言对</th><th>市场份额</th><th>趋势</th></tr></thead>
<tbody>
<tr><td>中→英</td><td>38.5%</td><td style="color:#4caf50;">→ 稳定</td></tr>
<tr><td>英→中</td><td>24.2%</td><td style="color:#4caf50;">→ 稳定</td></tr>
<tr><td>中→日</td><td>8.1%</td><td style="color:#ff9800;">↑ 增长</td></tr>
<tr><td>中→韩</td><td>6.3%</td><td style="color:#ff9800;">↑ 增长</td></tr>
<tr><td>中→德</td><td>4.7%</td><td style="color:#4caf50;">→ 稳定</td></tr>
<tr><td>中→法</td><td>4.1%</td><td style="color:#4caf50;">→ 稳定</td></tr>
<tr><td>中→西</td><td>3.5%</td><td style="color:#ff9800;">↑ 增长</td></tr>
<tr><td>中→俄</td><td>3.2%</td><td style="color:#ff9800;">↑ 增长</td></tr>
<tr><td>中→阿</td><td>2.8%</td><td style="color:#ff9800;">↑ 增长</td></tr>
<tr><td>其他</td><td>4.6%</td><td style="color:#4caf50;">→ 稳定</td></tr>
</tbody>
</table>
</div>
</div>
<div style="margin-top:24px;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;">
<h3 style="color:var(--gold);margin-bottom:8px;">2025年关键变化</h3>
<ul style="color:var(--text2);font-size:0.9rem;line-height:2;padding-left:20px;">
<li>人机协同翻译模式已成为行业基本共识，超七成企业采用AI辅助翻译流程</li>
<li>高端人工翻译（文学、法律、医学）需求逆势增长，单价提升约12%</li>
<li>视频本地化（TikTok、YouTube创译）成为增速最快的细分市场，同比增长34%</li>
<li>游戏出海翻译需求持续火爆，国内游戏企业海外收入超180亿美元</li>
<li>AI翻译质量评估（MQM/DQF）人才缺口扩大，催生新型翻译技术岗位</li>
<li>短剧出海成为新风口，2025年短剧翻译订单环比增长超过200%</li>
</ul>
</div>
</section>
''')

# === COMPANIES ===
chunks.append('''
<section id="companies">
<h2 class="section-title">知名企业</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:30px;">点击卡片查看详细信息与招聘链接</p>
<div class="card-grid" id="companyGrid"></div>
<div class="modal-overlay" id="companyModal">
<div class="modal">
<button class="close" onclick="closeModal()">&times;</button>
<div id="modalContent"></div>
</div>
</div>
</section>
''')

# === PROJECTS ===
chunks.append('''
<section id="projects">
<h2 class="section-title">重大项目</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:30px;">中国翻译行业参与的标志性项目一览</p>
<div class="timeline" id="projectTimeline"></div>
</section>
''')

# === TALENT ===
chunks.append('''
<section id="talent">
<h2 class="section-title">人才培养</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:30px;">2026年翻译教育最新数据与趋势</p>
<div class="data-row">
<div class="data-item"><div class="val">374所</div><div class="lbl">MTI培养单位</div></div>
<div class="data-item"><div class="val">309所</div><div class="lbl">BTI培养单位</div></div>
<div class="data-item"><div class="val">28所</div><div class="lbl">DTI培养单位（含试点）</div></div>
<div class="data-item"><div class="val">6.8万+</div><div class="lbl">MTI在校生</div></div>
</div>
<div class="talent-grid">
<div class="talent-card"><h3>AI+翻译跨学科培养</h3><p>2025年多所高校开设"翻译技术"交叉学科方向，将自然语言处理、大模型应用纳入翻译课程体系。北大、北外、上外等顶尖院校推出"翻译+计算机"双学位项目，培养复合型翻译人才。2026年预计将有超过50所院校开设AI翻译相关课程。</p></div>
<div class="talent-card"><h3>30岁以下从业者比例上升</h3><p>2025年30周岁以下翻译从业者占比达到27.3%，较上年提升约1.5个百分点。年轻一代译者对AI工具接受度高，人机协同能力强，推动了行业的数字化转型。新生代翻译从业者中85%表示经常使用AI辅助工具。</p></div>
<div class="talent-card"><h3>DTI翻译专博发展</h3><p>翻译专业博士学位（DTI）自2023年启动试点以来，已有28所高校获得培养资格。2025年首批DTI博士入学，标志着我国翻译教育形成"本科→硕士→博士"完整培养链。DTI培养方向包括翻译技术、翻译管理与跨学科翻译研究。</p></div>
<div class="talent-card"><h3>国际实习与联合培养</h3><p>各MTI院校积极与国际组织（UN、EU、WHO）合作建立翻译实习基地。2025年全年输送实习生超过1200人次，较上年增长18%。联合国YPP考试中翻译类岗位竞争比达1:47。AIIC认证口译课程在中国高校持续增加。</p></div>
</div>
<div style="margin-top:30px;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;">
<h3 style="color:var(--gold);margin-bottom:10px;">培养层次结构</h3>
<div class="chart-bar"><span class="label">DTI博士</span><div class="bar-track"><div class="bar-fill" style="width:8%;">28所</div></div><span class="pct">8%</span></div>
<div class="chart-bar"><span class="label">MTI硕士</span><div class="bar-track"><div class="bar-fill" style="width:55%;">374所</div></div><span class="pct">55%</span></div>
<div class="chart-bar"><span class="label">BTI本科</span><div class="bar-track"><div class="bar-fill" style="width:45%;">309所</div></div><span class="pct">45%</span></div>
</div>
</section>
''')

# === RECRUITMENT ===
chunks.append('''
<section id="recruitment">
<h2 class="section-title">招聘信息</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:12px;">2025年最新翻译行业岗位需求</p>
<div style="text-align:center;margin-bottom:24px;">
<a href="https://www.zhipin.com" target="_blank" style="margin:0 8px;font-size:0.85rem;color:var(--text2);">BOSS直聘</a>
<a href="https://www.liepin.com" target="_blank" style="margin:0 8px;font-size:0.85rem;color:var(--text2);">猎聘</a>
<a href="https://www.zhaopin.com" target="_blank" style="margin:0 8px;font-size:0.85rem;color:var(--text2);">智联招聘</a>
<a href="https://www.51job.com" target="_blank" style="margin:0 8px;font-size:0.85rem;color:var(--text2);">前程无忧</a>
</div>
<div class="table-container">
<table>
<thead><tr><th>岗位类型</th><th>学历要求</th><th>CATTI要求</th><th>经验要求</th><th>核心技能</th><th>薪资范围</th></tr></thead>
<tbody id="reqTable"></tbody>
</table>
</div>
<h3 style="color:var(--gold);margin:32px 0 16px;font-size:1.1rem;">最新岗位</h3>
<div id="jobListings"></div>
</section>
''')

# === RANKING ===
chunks.append('''
<section id="ranking">
<h2 class="section-title">院校排行</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:12px;">2026年翻译专业院校排名 · 搜索快速定位</p>
<div class="search-box"><input type="text" id="schoolSearch" placeholder="搜索院校名称..." oninput="filterSchools()"></div>
<div class="school-grid" id="schoolGrid"></div>
<div style="margin-top:30px;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px;">
<h3 style="color:var(--gold);margin-bottom:12px;">院校→企业就业流向</h3>
<table>
<thead><tr><th>院校</th><th>主要就业企业</th><th>对口就业率</th></tr></thead>
<tbody>
<tr><td>北京外国语大学</td><td>外交部、中译语通、华为、策马</td><td>92%</td></tr>
<tr><td>上海外国语大学</td><td>联合国、RWS、TransPerfect、网易</td><td>89%</td></tr>
<tr><td>北京大学</td><td>外交部、华为、网易有道、腾讯</td><td>91%</td></tr>
<tr><td>广东外语外贸大学</td><td>传神语联、腾讯、华为、舜禹</td><td>87%</td></tr>
<tr><td>北京语言大学</td><td>中译语通、TransPerfect、华为</td><td>85%</td></tr>
<tr><td>四川外国语大学</td><td>策马、传神、Lionbridge、中译</td><td>82%</td></tr>
</tbody>
</table>
</div>
</section>
''')

# === CAREER ===
chunks.append('''
<section id="career">
<h2 class="section-title">职业路径</h2>
<p style="text-align:center;color:var(--text2);margin-bottom:30px;">从校园到职场，翻译行业的多条发展路径</p>
<div class="path-grid">
<div class="path-card"><div class="icon">🎯</div><h3>翻译专业路径</h3><p>BTI/MTI科班出身 → CATTI二级/一级 → 企业in-house译员/自由译员 → 高级审校/项目经理。2025年CATTI报考人数突破40万，持CATTI一级证书者平均薪资高出行业35%。</p></div>
<div class="path-card"><div class="icon">📖</div><h3>英语专业路径</h3><p>英语专业本科/硕士 → 补充翻译理论与实践 → CATTI二级笔译/口译 → 企业翻译/国际商务。英语专业转型翻译的优势