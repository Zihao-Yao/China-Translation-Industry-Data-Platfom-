import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
content = open('C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/index.html', 'r', encoding='utf-8').read()
idx = content.find('更新日志')
start = max(0, idx - 300)
# filter non-printable
print(content[start:start+3000])
