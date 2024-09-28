import { Keypair } from "@solana/web3.js";

/**
 * 鍵ペアを作る。
 */
const main = () => {
    const keypair = Keypair.generate();

    console.log(keypair);

    console.log("Wallet Address (PublicKey):", keypair.publicKey.toBase58());

}

main();
