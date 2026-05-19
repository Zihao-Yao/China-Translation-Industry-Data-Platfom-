import os
d = 'C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台'
path = os.path.join(d, 'build_shared.js')
content = open(path, 'r', encoding='utf-8').read()

idx = content.find('function js_renderCos()')
end_idx = content.find('\n\nmodule.exports', idx)
if end_idx > 0:
    old_func = content[idx:end_idx]
    print('Found old js_renderCos, length:', len(old_func))
    
    new_func = '''function js_renderCos() {
  return \`
function filterCompanies(){
  var q = document.getElementById('cs').value.toLowerCase();
  renderFilteredCos(q, 'all');
}
function filterBySize(size, btn){
  document.querySelectorAll('.cf-b').forEach(function(b){b.classList.remove('ac');});
  if(btn) btn.classList.add('ac');
  var q = document.getElementById('cs').value.toLowerCase();
  renderFilteredCos(q, size);
}
function renderFilteredCos(q, size){
  if(!size) size = 'all';
  var filtered = cos.filter(function(co){
    var n = co.n.indexOf(q) !== -1, d = co.d.indexOf(q) !== -1;
    return (n || d || q === '') && (size === 'all' || co.s === size);
  });
  var h = '';
  filtered.forEach(function(c){
    h += '<div class="cc" onclick="sm(\\\\'' + c.i + '\\\\')"><div class="ic">\\uD83C\\uDFE2</div><h3>' + c.n + '</h3><p>' + c.d + '</p><span class="tg">' + c.t + '</span></div>';
  });
  if(h === '') h = '<p style="text-align:center;color:var(--t2);padding:40px;">未找到匹配企业</p>';
  document.getElementById('cg').innerHTML = h;
}
function sm(id){
  var c = {};
  cos.forEach(function(x){if(x.i===id)c=x;});
  var h = '<h2>' + c.n + '</h2><p><strong>所属国家:</strong> ' + c.co + '</p><p><strong>类别:</strong> ' + c.t + '</p><p><strong>详细介绍:</strong> ' + (cod[id]||c.d) + '</p>';
  if(courl[id] && courl[id][0]) h += '<p><strong>招聘链接:</strong> <a href="' + courl[id][0] + '" target="_blank" class="ub">查看招聘岗位</a></p>';
  if(courl[id] && courl[id][1]) h += '<p><strong>官网:</strong> <a href="' + courl[id][1] + '" target="_blank" style="color:var(--g2);">' + courl[id][1] + '</a></p>';
  document.getElementById('mc').innerHTML = h;
  document.getElementById('cm').className = 'mo s';
}
function cm(){document.getElementById('cm').className = 'mo';}
renderFilteredCos('', 'all');
\`;
}'''

    content = content[:idx] + new_func + content[end_idx:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('js_renderCos replaced successfully')
else:
    print('Could not find end of js_renderCos')
    
# Verify
content2 = open(path, 'r', encoding='utf-8').read()
for term in ['filterCompanies', 'renderFilteredCos', 'filterBySize', 'cs']:
    print('  ' + ('YES' if term in content2 else 'NO ') + ': ' + term)

# Check cos count
import re
cos_str = re.search(r'var cos=\[(.*?)\];', content2, re.DOTALL)
if cos_str:
    count = cos_str.group(1).count('{')
    print('cos entries:', count)
