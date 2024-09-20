# Metaplexを試すサンプルリポジトリ

## 前提条件

1. Nodeのバージョンが20以上であること
2. solana CLIがインストール済みであること

## 動かし方

- DevNetに設定

    ```bash
    solana config set --url https://api.devnet.solana.com
    ```

- エアドロップと残高とアドレス確認

    ```bash
    solana airdrop 5
    solana balance
    solana address
    ```

- 実行

    ```bash
    yarn start
    ```

### 参考文献
1. [GitHub - metaplex_core](https://github.com/ytakahashi2020/metaplex_core)
2. [【完全保存版】Irysを使ってMetaplexのCore NFTを作成しよう！](https://note.com/standenglish/n/n8f942d09ec8d)
3. [Installation Solana CLI](https://solana.com/ja/docs/intro/installation)
4. [Umi Getting Started](https://developers.metaplex.com/umi/getting-started)
5. [MetaPlex 公式サイト](https://www.metaplex.com/)