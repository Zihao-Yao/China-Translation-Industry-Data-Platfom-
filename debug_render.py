import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()
idx = content.find('function js_renderCos')
if idx > 0:
    snippet = content[idx:idx+200]
    # Show as repr to see exact whitespace/newline chars
    print(repr(snippet))
