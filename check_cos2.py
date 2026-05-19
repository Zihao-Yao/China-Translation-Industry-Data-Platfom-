import os, re, json

d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
content = open(os.path.join(d, 'build_shared.js'), 'r', encoding='utf-8').read()

# Count unique i: patterns in cos array
cos_section = content[content.find('var cos=['):content.find('];', content.find('var cos=['))]
ids = re.findall(r'i:"([^"]+)"', cos_section)
print('cos entries: ' + str(len(ids)))

cod_section = content[content.find('var cod={'):content.find('};', content.find('var cod={'))]
cod_keys = re.findall(r'"([a-z][-\w]+)":', cod_section)
print('cod entries: ' + str(len(cod_keys)))

courl_section = content[content.find('var courl={'):content.find('};', content.find('var courl={'))]
courl_keys = re.findall(r'"([a-z][-\w]+)":', courl_section)
print('courl entries: ' + str(len(courl_keys)))

# Check for new search functions
checks = ['filterCompanies', 'renderFilteredCos', 'filterBySize', 'cs', 'cf-b', 'cf-group']
for c in checks:
    found = c in content
    print('  ' + ('YES' if found else 'NO ') + ': ' + c)
