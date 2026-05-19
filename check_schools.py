import re, os

path = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/index.html'
content = open(path, 'r', encoding='utf-8').read()

size = os.path.getsize(path)
print('File size: %d bytes (%.1f KB)' % (size, size/1024))

m = re.search(r'var sc=\[(.*?)\];', content, re.DOTALL)
if m:
    count = m.group(1).count('n:"')
    print('Schools in JS array: %d' % count)

for name in ['中国民用航空飞行学院', '中国民航大学', '北京大学']:
    found = 'YES' if name in content else 'NO'
    print('  %s: %s' % (name, found))

ratings = set(re.findall(r'm:"([\w+-]+)"', m.group(1))) if m else set()
print('Unique MTI ratings: %s' % sorted(ratings))

has_dynamic = 's.m' in content and 's.b' in content
print('renderSchools dynamic ratings: %s' % ('OK' if has_dynamic else 'BAD'))

print('DONE')
