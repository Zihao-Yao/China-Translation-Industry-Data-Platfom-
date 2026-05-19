import os

OUT = os.path.join(os.path.dirname(__file__), "index.html")
print("Output path:", OUT)

H = []

def h(s):
    H.append(s)

h('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>中国翻译行业数据平台 | 译界全景</title><style>')
