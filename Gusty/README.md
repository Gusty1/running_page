# 親自安裝後與文件差異部屬說明

大致上沒什麼問題，但可能是版本更新吧，有些地方不一樣。  
若命令是 python3(python)開頭，是叫你選其中一個用 python3 或 python，反正哪個有反應就用哪個，我個人是用 python

---

# 安裝及測試

我個人實際用下來指令應該如下，作者的教學影片也都是 yarn，怎麼到這邊文件就變成 npm?

```
pip3 install -r requirements.txt
yarn add corepack
corepack enable

這個好像可以不用裝，就算裝了pnpm develop也沒用，他會跟你說本專案是用yarn
yarn add pnpm

yarn develop
```

# 獲取數據

只列出我個人用過的一些需要注意的地方

## Strava

<s>原本想直接貼指令的，後來想到指令有token...</s>

### 申請 API

基本上都跟說明得差不多，申請 API 的範例請參考圖片；圖片是修改畫面，不過初次新增畫面也差不多長這樣。  
![stravaAPI](./images/strava.png 'stravaAPI')

### 取得 refreshToken

因作者的電腦 OS 是 ubuntu，所以文件說明是用 curl，但其實只要可以送出請求的工具都可以用，postman、自己寫一個程式...  
![refreshToken](./images/refreshToken.png 'refreshToken')

## Garmin

Garmin 的 APP 可以設定連接 Strava，連結完成後數據也會自動同步，所以我覺得設定 Strava 就好；但我想純用 Garmin 應該也是差不多，照文件操作就可以了。

# 產生圖表

總而言之，複製以下程式碼，然後執行就對了

```
python run_page/gen_svg.py --from-db --title "Gusty Running" --type github --athlete Gusty --output assets/github.svg --special-distance 5 --special-distance2 10 --special-color yellow --special-color2 red --use-localtime --min-distance 1
python run_page/gen_svg.py --from-db --title "Over 1km Runs" --type grid --athlete "Gusty" --output assets/grid.svg --special-distance 10 --special-distance2 20 --special-color yellow --special-color2 red --use-localtime --min-distance 1
python run_page/gen_svg.py --from-db --type circular --use-localtime
```

# 部屬

文件說推薦用 Vercel，但Vercel實在是不太熟，有時候gh-Page有，但Vercel就是沒有；而且影片也都是教gh-page，所以後來我又改回gh-page了。

若github action有設定成功，那前面獲取數據和產生圖表都會每天自動更新，什麼時候我不知道，應該是半夜，所以上面的指令就是本地測試看看有沒有問題而已。

作者有設定github action就算產生了新的圖表也不會commit上去，可以手動關掉，但我覺得不要commit的比較好。

## 排程時間

總之排程時間會看不太出來，而且也會有時區問題，可以改workflows，來印出顯示時間，但我不懂怕弄壞，所以用plan B

顯示所有action的紀錄，裡面的created_at就是執行時間，但顯示時間是有加時區的，不懂就去問AI  
<https://api.github.com/repos/gusty1/running_page/actions/runs>

如果你知道action id 可以用下面這個  
<https://api.github.com/repos/gusty1/running_page/actions/runs/{id}>

## 踩坑問題

### lockfile

如果是什麼 lock 檔案問題，那就是包管理器的衝突，把有關 lock 的檔案都刪掉，然後重跑一次 yarn install，應該會產生新的 yarn.lock，然後在 push 上去。

## github token

需要產生 github token，並且加到 Secerts，**就算部屬到 Vercel 也要設定 Token**
![githubToken](./images/githubToken.png 'githubToken')

# GGYY

文件都是寫 pnpm，但是教學影片和我實際操作下來都是用 yarn，可能以前都是用 yarn，後面突然想轉型，但還沒轉成功，總之這個讓我遇到超多問題的。
