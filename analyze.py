import re
content = open('C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/index.html', 'r', encoding='utf-8').read()
print('Total size: %d bytes' % len(content))
sections = re.findall(r'<section id="([^"]+)"', content)
print('Sections:')
for s in sections:
    print('  #%s' % s)
# Count section tags
sc = content.count('<section')
ec = content.count('</section>')
print('Section opens: %d, closes: %d' % (sc, ec))
