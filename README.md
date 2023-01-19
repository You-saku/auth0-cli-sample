# auth0-cli

## 概要 
Auth0のテナント管理をAuth0-CLIで行います。これでいちいちアカウントページに行って変更する必要がなくなるそうです


## 使い方
1. cloneする
2. npm install
3. .env.exampleをコピーして.env作成
4. mkdir tenants
5. 環境変数を設定
6. npm run exportでテナント情報を取得
7. tenants/tenant.yamlを編集
8. npm run importでテナント情報を更新


## 自動化の実現方法
node.jsとymlファイルで実現しています。
