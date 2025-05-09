# 我的說明文件

之前寫了不少筆記，但沒甚麼用，所以改得精簡一點。
雖然我只是一個fork來的使用者而已，但不得不說我踩過的坑是真的不少，作者加油一點好嗎?
而且每次有問題都是觸發在上班時間，真的是哭阿。

## 獲取資料

獲取跑步數據的方法我覺得官方文件的說明已經很詳細了，我個人是建議用`strava`就好，strava可以跟其他運動app連結，最後資料都會跑到strava裡面。

- 注意事項:
  - strava的`refreshToken`是有期限的，大約半年、3個月左右吧，總之當你數據獲取失敗先懷疑是不是refreshToken過期

## 部屬

官方是建議用vercel，但我當初看他的部屬影片是用的是github pages，而且我也有用過github pages，所以就沒有用vercel；不知道是不沒有用vercel，每過一段時間merge一些更新就會出問題，然後每次都要排查很久，都不知道浪費了多少時間在這邊。

==通常actions報錯的時候看一下上下文，不一定是當前出現的錯誤訊息==

## Anaconda

```terminal
# 查看板本，驗證anaconda有沒有安裝成功
conda --version
```

```terminal
# 建立python 3.11虛擬環境
conda create -n py311 python=3.11
# 啟動python 3.11虛擬環境
conda activate py311
```

## 更新本地資料

```terminal
 python run_page/gen_svg.py --from-db --title "Gusty Running" --type github --github-style "align-firstday" --athlete "Gusty" --special-distance 10 --special-distance2 20 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 1

python run_page/gen_svg.py --from-db --title "Over 1km Runs" --type grid --athlete "Gusty" --output assets/grid.svg --special-color yellow --special-color2 red --special-distance 10 --special-distance2 20 --use-localtime --min-distance 1

python run_page/gen_svg.py --from-db --type circular --use-localtime

# 取得當前年份
$year = (Get-Date).Year

# 執行 Python 指令
python run_page/gen_svg.py `
  --from-db `
  --year $year `
  --language zh_CN `
  --title "$year Running" `
  --type github `
  --github-style "align-firstday" `
  --athlete "Gusty" `
  --special-distance 10 `
  --special-distance2 20 `
  --special-color yellow `
  --special-color2 red `
  --output "assets/github_$year.svg" `
  --use-localtime `
  --min-distance 1
```
