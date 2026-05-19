import os, re
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()
cos_match = re.search(r'var cos=\[(.*?)\];', content, re.DOTALL)
if cos_match:
    entries = cos_match.group(1).count('{')
    print('cos entries: ' + str(entries))

cod_match = re.search(r'var cod=\{(.*?)\};', content, re.DOTALL)
if cod_match:
    keys = re.findall(r'"\w+[-\w]*"', cod_match.group(1))
    print('cod entries: ' + str(len(keys)))

courl_match = re.search(r'var courl=\{(.*?)\};', content, re.DOTALL)
if courl_match:
    keys = re.findall(r'"[^"]+":', courl_match.group(1))
    print('courl entries: ' + str(len(keys)))

# Check js_renderCos
if 'renderFilteredCos' in content:
    print('renderFilteredCos exists: YES (new search function)')
if 'filterCompanies' in content:
    print('filterCompanies exists: YES')
