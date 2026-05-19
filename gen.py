import os, base64, zlib

out = r"C:\Users\yaoli\lobsterai\project\中国翻译行业数据平台\index.html"

# ====== Build complete HTML in Python ======
# The trick: use string concatenation in append mode to avoid truncation

def append(s):
    with open(out, 'a', encoding='utf-8') as f:
        f.write(s)

# Start fresh
open(out, 'w', encoding='utf-8').write('')

append('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title><style>')
