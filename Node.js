// server.js
const express = require('express');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

async function generateWallet() {
    const mnemonic = await bip39.generateMnemonic();
    const seed = await bip39.mnemonicToSeed(mnemonic);
    
    // Генерация адреса...
}

app.get('/generate', async (req, res) => {
    const wallet = await generateWallet();
    res.json(wallet);
});
