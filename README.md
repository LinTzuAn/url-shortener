# 短網址產生器
這是一個可以將網址縮短的工具

## 功能
* 可以將網址縮短
* 同一網址對應到唯一的短網址
* 一鍵複製

## 開始使用
1. 請先確認已安裝 Node.js 與 npm 
2. 下載或clone此專案至本地資料夾
  ```
  git clone https://github.com/LinTzuAn/url-shortener.git
  ```
3. 於終端機進入專案資料夾
  ```
  cd url-shortener
  ```
4. 安裝 npm 套件
  ```
  npm install
  ```
5. 新增```.env```檔案，並設置資料庫連線字串
  ```
  MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<database_name>.mongodb.net/<table>?retryWrites=true&w=majority
  ```
6. 啟動專案前，請先建立種子資料，如在終端機中成功看到done，即表示種子資料建立成功
  ```
  npm run seed
  ```
7. 啟動專案
  ```
  npm run dev
  ```
8. 若在終端機看到下方訊息代表順利運行，於瀏覽器中輸入該網址([http://localhost:3000](http://localhost:3000))即可開始使用
  ```
  App is running on http://localhost:3000!
  ```
9. 如需暫停使用，請於終端機內按下ctrl + c，即可結束

## 開發工具
* VScode 1.73.1
* Node.js 14.16.0
* express 4.18.2
* express-handlebars: 4.0.2
* mongoose: 5.9.7
* dotenv: 16.0.3
* Bootstrap 5.1.3
