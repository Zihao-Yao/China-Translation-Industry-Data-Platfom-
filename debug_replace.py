import os, re
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()

# Find exact cos pattern
idx = content.find('var cos=')
if idx > 0:
    # Get snippet
    snippet = content[idx:idx+300]
    print('Snippet around var cos=:')
    print(repr(snippet[:200]))
    
# Find exact cod pattern
idx2 = content.find('var cod=')
if idx2 > 0:
    snippet2 = content[idx2:idx2+300]
    print('\nSnippet around var cod=:')
    print(repr(snippet2[:200]))
