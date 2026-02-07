# Crowdfunding DApp (Ticketing System)
# Group: SE-2426
# Members: Akbope Bakytkeldy, Erasyl Tortkara, Aron Davlyudov
This project is a decentralized crowdfunding application built on Ethereum using smart contracts and a simple web frontend

Users can create crowdfunding events, contribute ETH, receive ERC-20 reward tokens, and finalize campaigns after deadlines.  
Application is deployed and tested on the Sepolia testnet and interacts with the blockchain via MetaMask
---

## Tech Stack

- **Solidity** – Smart contracts  
- **Hardhat** – Development and deployment framework  
- **OpenZeppelin** – ERC-20 implementation  
- **Ethers.js** – Blockchain interaction  
- **HTML + CSS + JavaScript** – Frontend  
- **MetaMask** – Wallet and transaction signing  

---
## Project Structure

crowdfundingdapp/
│
├── contracts/
│ ├── TicketToken.sol
│ └── EventCrowdfunding.sol
│
├── scripts/
│ └── deploy.js
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── app.js
│
├── hardhat.config.ts
├── package.json
├── .env
└── README.md

