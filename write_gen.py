# This script generates the complete HTML file 
# It will be constructed by appending part by part

import os

out = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

# Clear the file
with open(out, 'w', encoding='utf-8') as f:
    f.write('')

def append(s):
    with open(out, 'a', encoding='utf-8') as f:
        f.write(s)
    print(f"Appended {len(s)} bytes, total: {os.path.getsize(out)}")

# Header + CSS + watermark + nav
append('<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<title>中国翻译行业数据平台 | 译界全景</title>\n')
