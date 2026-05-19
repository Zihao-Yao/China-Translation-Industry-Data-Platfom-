# verify.py
with open(r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html", "r", encoding="utf-8") as f:
    c = f.read()

print("Size:", len(c), "bytes =", len(c)/1024, "KB")
print()
checks = [
    ("DOCTYPE", c.startswith("<!DOCTYPE")),
    ("Closing </html>", c.strip().endswith("</html>")),
    ("Watermark (2)", c.count("风正起时制作") >= 2),
    ("Hero 701.2亿", "701.2亿" in c),
    ("Hero 686.7万", "686.7万" in c),
    ("Hero 113.5万", "113.5万" in c),
    ("Hero 2183家", "2183家" in c),
    ("Year renderYear()", "function renderYear" in c),
    ("Company modal sm()", "function sm" in c),
    ("School search fs()", "function fs" in c),
    ("RWS URL", "rws.com/careers" in c),
    ("TransPerfect URL", "transperfect.com/careers" in c),
    ("Lionbridge URL", "lionbridge.com/careers" in c),
    ("Welocalize URL", "welocalize.com/careers" in c),
    ("中译语通 URL", "gtcom.com.cn" in c),
    ("传神语联 URL", "transn.com" in c),
    ("舜禹 URL", "sunyu.com" in c),
    ("策马 URL", "cemachina.com" in c),
    ("网易有道 URL", "f.youdao.com/joinus" in c),
    ("华为 URL", "career.huawei.com" in c),
    ("Project 原神", "genshin.hoyoverse.com" in c),
    ("Project 冬奥", "beijing2022.cn" in c),
    ("Project 悟空", "heishenhua.com" in c),
    ("Project TAC", "tac-online.org.cn" in c),
    ("Recruit BOSS", "zhipin.com" in c),
    ("Recruit 猎聘", "liepin.com" in c),
    ("Recruit 智联", "zhaopin.com" in c),
    ("Recruit 前程无忧", "51job.com" in c),
    ("50+ schools", c.count("class=\"si\"") >= 50),
    ("School search input", "<input" in c and "\u641c\u7d22" in c),
    ("Reports section", "\u62a5\u544a" in c),
    ("Footer", "\u5149\u660e\u65e5\u62a5" in c),
    ("Global ~560亿", "~560亿" in c),
    ("Career paths", "\u7ffb\u8bd1\u4e13\u4e1a\u8def\u5f84" in c),
    ("Talent DTI", "DTI" in c),
    ("Over 80KB", len(c) >= 81920),
]
for name, ok in checks:
    status = "OK" if ok else "FAIL"
    print(f"  [{status}] {name}")

print()
print("FAILURES:", sum(1 for _, ok in checks if not ok))
print("ALL GOOD:", all(ok for _, ok in checks))
