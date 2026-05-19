import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()
idx = content.find('function js_renderCos')
# Find the last few lines
last_lines = content[content.rfind('\n', -300):]
print(repr(last_lines[:200]))
