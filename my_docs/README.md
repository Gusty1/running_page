# 我的說明文件

之前寫了不少筆記，但沒甚麼用，所以改得精簡一點。
雖然我只是一個fork來的使用者而已，但不得不說我踩過的坑是真的不少，作者加油一點好嗎?
而且每次有問題都是觸發在上班時間，真的是哭阿。

## 獲取資料

獲取跑步數據的方法我覺得官方文件的說明已經很詳細了，我個人是建議用`strava`就好，strava可以跟其他運動app連結，最後資料都會跑到strava裡面。

- 注意事項:
  - strava的`refreshToken`是有期限的，大約半年左右吧，總之當你數據獲取失敗先懷疑是不是refreshToken過期

## 部屬

官方是建議用vercel，但我當初看他的部屬影片是用的是github pages，而且我也有用過github pages，所以就沒有用vercel；不知道是不沒有用vercel，每過一段時間merge一些更新就會出問題，然後每次都要排查很久，都不知道浪費了多少時間在這邊。

==通常actions報錯的時候看一下上下文，不一定是當前出現的錯誤訊息==

- gh-pages.yml: 部屬到github page的排程，通常會有問題是在這邊

   ```yaml
      # 下面這段是主分支的寫法，github actions會報錯，
      # 說甚麼corepack和pnpm版本不符對不上，不知道哪個SB加上來的
      - name: Enable corepack
         run: corepack enable

      # 下面這段是我找到的解決辦法，把上面的corepack移除換成下面的即可
      # 根本不用甚麼corepack
      - name: Install pnpm
         run: npm install -g pnpm
   ```

## 其他

```terminal
run_page/gpxtrackposter/exceptions.py
```

這個路徑的在actions驗證的時候會報錯，actions有開python格式化驗證，錯了會直接卡住，不給繼續，但這錯誤的程式卻能夠push上來，搞毛阿。
等作者修正我再來移除這個問題。
