# Client-Side Wallet - Demo

This example demonstrates how to build a simple DApp (Voting) with client-side Ethereum wallet. Based on Solidity smart contract and client-side UI (JS + jQuery + Ethers.js) + server-side account management (Node.js + Express + simple REST API). The wallet is encrypted in UTC / JSON format (both private key + mnemonics are encrypted with AES-CRT-128 using SCrypt key derivation).
 - The app implements register / login / logout / vote.
 - Candidates and votes stay in Solidity contract on the Ropsten testnet.
 - Users register in the system and get a wallet (private key + address)
    - The wallet JSON is stored after strong encryption at the server side
    - The wallet password / private key never leave the client app
 - User login -> download the encrypted wallet JSON from the server
 - After login / register, keep the encrypted wallet JSON in the browser session
 - Logout -> clear the browser session
 - Use different passwords for server login and for the wallet
    - Server password: HMAC(username, pass). Wallet pass: user's original pass
 - Change password cannot recover the encrypted wallet! -> use the mnemonics
 - Based on the Ethers.js library

Slides: https://www.slideshare.net/nakov/clientside-wallets-nakov-at-ethereum-meetup-sofia-april-2018

Video (in Bulgarian language): https://youtu.be/Wi9nZNUC_B8

Video (in English): https://youtu.be/7b3Pr7DMSMc

Screen only video (English): https://youtu.be/VvTlF4whjj8
