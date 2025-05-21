import os

# 定義塔羅牌名稱列表
tarot_names = [
    # 大阿爾卡納
    "愚者", "魔術師", "女祭司", "皇后", "皇帝", "教皇", "戀人", "戰車", 
    "力量", "隱者", "命運之輪", "正義", "倒吊人", "死亡", "節制", "惡魔", 
    "高塔", "星星", "月亮", "太陽", "審判", "世界",
    
    # 聖杯牌
    "聖杯一", "聖杯二", "聖杯三", "聖杯四", "聖杯五", 
    "聖杯六", "聖杯七", "聖杯八", "聖杯九", "聖杯十", 
    "聖杯侍者", "聖杯騎士", "聖杯皇后", "聖杯國王",
    
    # 錢幣牌
    "錢幣一", "錢幣二", "錢幣三", "錢幣四", "錢幣五", 
    "錢幣六", "錢幣七", "錢幣八", "錢幣九", "錢幣十", 
    "錢幣侍者", "錢幣騎士", "錢幣皇后", "錢幣國王",
    
    # 寶劍牌
    "寶劍一", "寶劍二", "寶劍三", "寶劍四", "寶劍五", 
    "寶劍六", "寶劍七", "寶劍八", "寶劍九", "寶劍十", 
    "寶劍侍者", "寶劍騎士", "寶劍皇后", "寶劍國王",
    
    # 權杖牌
    "權杖一", "權杖二", "權杖三", "權杖四", "權杖五", 
    "權杖六", "權杖七", "權杖八", "權杖九", "權杖十", 
    "權杖侍者", "權杖騎士", "權杖皇后", "權杖國王"
]

# 設定圖片目錄
image_dir = 'images'

# 確保目錄存在
if not os.path.exists(image_dir):
    print(f"目錄 {image_dir} 不存在")
    exit(1)

# 獲取目錄中的所有圖片檔案，並排序
image_files = sorted([f for f in os.listdir(image_dir) if f.endswith('.jpg')])

# 檢查圖片數量是否與名稱列表匹配
if len(image_files) != len(tarot_names):
    print(f"警告：圖片數量 ({len(image_files)}) 與名稱列表 ({len(tarot_names)}) 不符")

# 重新命名檔案
for i, (old_name, card_name) in enumerate(zip(image_files, tarot_names), 1):
    old_path = os.path.join(image_dir, old_name)
    file_ext = os.path.splitext(old_name)[1]
    new_name = f"{i:02d}_{card_name}{file_ext}"
    new_path = os.path.join(image_dir, new_name)
    
    os.rename(old_path, new_path)
    print(f"重新命名: {old_name} -> {new_name}")

print("所有圖片重新命名完成！")
