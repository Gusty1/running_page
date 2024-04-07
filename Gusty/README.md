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

### 申請 API

基本上都跟說明得差不多，申請 API 的範例請參考圖片；圖片是修改畫面，不過初次新增畫面也差不多長這樣。  
![stravaAPI](./images/strava.png 'stravaAPI')

### 取得 refreshToken

因作者的電腦 OS 是 ubuntu，所以文件說明是用 curl，但其實只要可以送出請求的工具都可以用，postman、自己寫一個程式...  
![refreshToken](./images/refreshToken.png 'refreshToken')

### 同步數據

> 第一次同步 Strava 数据时需要更改在 strava_sync.py 中的第 12 行代码 False 改为 True，运行完成后，再改为 False。

因為這個會產生 data.db，而之後的圖表也是根據這個 db 文件產生出來的，所以之後若是不更新，那資料不是都不會動嗎?  
我是覺得這邊應該要固定成 True

若數據有取得成功，應該會在 run_page 裡新增一個 data.db

## Garmin

Garmin 的 APP 可以設定連接 Strava，連結完成後數據也會自動同步，所以我覺得設定 Strava 就好；但我想純用 Garmin 應該也是差不多，照文件操作就可以了。

## Strava to garmin

我試過用 Strava to garmin，但沒有反應，這看來只是單純同步數據，而不會產生出圖表，而且 Garmin 若設定同步，那 Strava 也會有資料，感覺這個很意義不明。

# 產生圖表

當獲取數據成功後，去找**Total Data Analysis**，有 3 個命令，3 個都要輸入，才可以產生自己的圖表。

==以下命令替換參數要注意""不要換掉==

## github.svg

產生類似 github commit 的圖  
![github](./images/github.png 'github')

```
python run_page/gen_svg.py --from-db --title "${{ env.TITLE }}" --type github --athlete "${{ env.ATHLETE }}" --special-distance 10 --special-distance2 20 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 0.5
```

詳細參數設定可以看文件，我個人感覺可以不用動。

- ${{ env.TITLE }}: 換成你的標題，會顯示在圖片左上角，就是 Gusty Running 的位置
- ${{ env.ATHLETE }}: 換成你想要的名稱，會顯示在圖片左下角，就是 Gusty 的位置

## grid.svg

產生你所有跑過的地形圖  
![grid](./images/grid.png 'grid')

```
python3(python) run_page/gen_svg.py --from-db --title "${{ env.TITLE_GRID }}" --type grid --athlete "${{ env.ATHLETE }}"  --output assets/grid.svg --min-distance 5.0 --special-color yellow --special-color2 red --special-distance 20 --special-distance2 40 --use-localtime
```

- ${{ env.TITLE_GRID }}: 換成你的標題，會顯示在圖片左上角，就是 Over 5km Running 的位置
- ${{ env.ATHLETE }}: 換成你想要的名稱，會顯示在圖片左下角，就是 Gusty 的位置
- **--min-distance 5.0**: 這個參數是設定最小公里數，如果設定 10，但卻沒有任何紀錄有跑到 10km，那就不會產生任何圖表，請注意。

## 年度環形圖

這個就沒有甚麼好說的，指令也沒什麼地方可以改。
![circular](./images/circular.png 'circular')

每一個指令產生的圖表都會放在 assets 裡，裡面會有很多原作者的資料，可以不用刪掉，你的新資料會覆蓋過去，舊的也不會影響到你。

# 部屬

文件說推薦用 Vercel，我個人試過後也覺得 Vercel 好用，github page 不知為啥 Actions 會有問題，但如果要用自動更新(Github Actions)，github page 也要設定，就參考文件的**部署到 GitHub Pages**就好。  
**Github Cache** 不用動，就預設 false 就好

另外，GitHub Actions 的 env 好像只能設定單一個而已，看起來不支持多環境。

## 踩坑問題

### lockfile

如果是什麼 lock 檔案問題，那就是包管理器的衝突，把有關 lock 的檔案都刪掉，然後重跑一次 yarn install，應該會產生新的 yarn.lock，然後在 push 上去。

## github token

需要產生 github token，並且加到 Secerts，**就算部屬到 Vercel 也要設定 Token**
![githubToken](./images/githubToken.png 'githubToken')

# GGYY

文件都是寫 pnpm，但是教學影片和我實際操作下來都是用 yarn，可能以前都是用 yarn，後面突然想轉型，但還沒轉成功，總之這個讓我遇到超多問題的。
