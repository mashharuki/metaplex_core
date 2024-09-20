# Metaplex を試すサンプルリポジトリ

## 前提条件

1. Node のバージョンが 20 以上であること
2. solana CLI がインストール済みであること

## 動かし方

- DevNet に設定

  ```bash
  solana config set --url https://api.devnet.solana.com
  ```

- エアドロップと残高とアドレス確認

  ```bash
  solana airdrop 5
  solana balance
  solana address
  ```

- インストール

  ```bash
  yarn
  ```

- 実行

  ```bash
  yarn start
  ```

  以下動かした時の記録

  ```bash
    Uploading Image...
    imageUri: https://gateway.irys.xyz/EdUbHcYjvTuYkNLVo4AQAvKBDpQ8h68565J5asir35KJ
    Uploading Metadata...
    metadataUri: https://gateway.irys.xyz/PvFoBSuz7a6sNAuJpEk6o6aHUpMnc5yaULwuCaoipf7
    Creating NFT...

    NFT Created
    View Transaction on Solana Explorer
        https://explorer.solana.com/tx/3mBzxWFnPAbYuzJibKVqE7TxHgsb4WH2NaRtkiNNNG4UAPyi7zbcsp5WLmbmj4AxLcAJ8iq5rSR1GxC5VZhBBy9j?cluster=devnet

    View NFT on Metaplex Explorer
    https://core.metaplex.com/explorer/38PyCDasCoKNjvNqdztmxJBcsi1Vfg8p9odvryLzN9wV?env=devnet

  ```

### 参考文献

1. [GitHub - metaplex_core](https://github.com/ytakahashi2020/metaplex_core)
2. [【完全保存版】Irys を使って Metaplex の Core NFT を作成しよう！](https://note.com/standenglish/n/n8f942d09ec8d)
3. [Installation Solana CLI](https://solana.com/ja/docs/intro/installation)
4. [Umi Getting Started](https://developers.metaplex.com/umi/getting-started)
5. [MetaPlex 公式サイト](https://www.metaplex.com/)
6. [Solana Faucet サイト](https://faucet.solana.com/)
