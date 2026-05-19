import os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()
idx = content.find('function js_renderCos')
if idx > 0:
    # Find the end - look for }\n\nfunction or similar
    end_idx = content.find('\n\nfunction', idx)
    if end_idx < 0: end_idx = content.find('\n\n//', idx)
    print('js_renderCos found at', idx, 'ends at', end_idx)
    print('length:', end_idx - idx)
else:
    print('NOT found')
    # Try fallback
    idx2 = content.find('js_renderCos')
    print('js_renderCos string found at:', idx2)
