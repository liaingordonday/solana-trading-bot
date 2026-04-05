// botFunctions.js
// Helper functions for Solana trading bot

const { LAMPORTS_PER_SOL, Transaction, SystemProgram } = require('@solana/web3.js');

/**
 * Get wallet balance in SOL
 * @param {Connection} connection - Solana network connection
 * @param {PublicKey} publicKey - Wallet public key
 * @returns {Promise<number>} - Balance in SOL
 */
async function getBalance(connection, publicKey) {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
}

/**
 * Example trade execution function (Devnet only)
 * @param {Connection} connection - Solana network connection
 * @param {Keypair} wallet - User wallet keypair
 */
async function executeTrade(connection, wallet) {
    console.log('Executing trade simulation...');

    // Example: send 0.001 SOL to yourself (devnet safe)
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: wallet.publicKey, // sending to self, safe for testing
            lamports: 0.001 * LAMPORTS_PER_SOL,
        })
    );

    const signature = await connection.sendTransaction(transaction, [wallet]);
    await connection.confirmTransaction(signature, 'confirmed');

    console.log('Trade simulation completed. Signature:', signature);
}

module.exports = { getBalance, executeTrade };
