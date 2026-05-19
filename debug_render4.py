import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()
# Show last 200 chars
print(repr(content[-200:]))
