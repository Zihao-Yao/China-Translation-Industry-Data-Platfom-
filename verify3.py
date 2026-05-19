import os
p = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"
c = open(p, "r", encoding="utf-8").read()
print("Characters:", len(c))
print("Bytes on disk:", os.path.getsize(p))
print("school items:", c.count("class=\"si\""))
print("Over 80KB bytes:", os.path.getsize(p) >= 80000)
