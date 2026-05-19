c = open(r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html", "r", encoding="utf-8").read()
import os
print("Bytes:", os.path.getsize(r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"))

# Check for school-related content
count_si = c.count("class=\"si\"") + c.count("class=\\\"si\\\"") + c.count("class=&quot;si&quot;")
print("class=si count:", count_si)

# Check JS school data
if "var sc=" in c:
    idx = c.index("var sc=")
    end = c.index("];", idx)
    school_data = c[idx:end+2]
    school_items = school_data.count('{n:')
    print("School items in JS data:", school_items)
else:
    print("var sc= not found!")

# Check the schoolDetailContainer
print("Has schoolDetailContainer:", "schoolDetailContainer" in c)
if "schoolDetailContainer" in c:
    idx = c.index("schoolDetailContainer")
    end = c.index("</section></div>", idx)
    detail = c[idx:end]
    school_rows = detail.count("<tr><td>")
    print("School detail table rows:", school_rows)
