import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
content = open('C:/Users/yaoli/lobsterai/project/中国翻译行业数据平台/index.html', 'r', encoding='utf-8').read()
# find the uld array or update log rendering
idx = content.find('var uld')
if idx > -1:
    print(content[idx:idx+500])
else:
    # find renderUpdates
    idx2 = content.find('renderUpdates')
    if idx2 > -1:
        print(content[idx2:idx2+500])
    else:
        idx3 = content.find('var ud')
        if idx3 > -1:
            print(content[idx3:idx3+500])
        else:
            print("No update log data found in JS")
