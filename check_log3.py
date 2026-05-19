import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
content = open('C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/index.html', 'r', encoding='utf-8').read()
# Find the section with id="updates"
idx = content.find('id="updates"')
if idx > -1:
    print(content[max(0,idx-50):idx+2000])
else:
    # Try video
    idx2 = content.find('更新日志')
    print("FOUND at", idx2)
    print(content[idx2:idx2+2000])
