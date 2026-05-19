import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_pages_1.js'), 'r', encoding='utf-8').read()
idx = content.find("const body3 = '")
# show next 50 chars
print(repr(content[idx:idx+200]))
# find end of this expression
next_fn = content.find('\n// ============', idx)
if next_fn > 0:
    print('\nEnd marker found at', next_fn)
    print('Body3 content from idx to next_fn:', next_fn - idx)
