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
# Smart Contracts

## TicketToken (ERC-20)

A simple ERC-20 token used as non-monetary reward tickets for crowdfunding contributors.

- Minting is restricted to a designated crowdfunding contract  
- The contract owner sets the authorized minter  
- Intended for educational and testnet use only  
- No real monetary value  
- Built on OpenZeppelin’s ERC-20 implementation  

## EventCrowdfunding

Simple per-event crowdfunding contract (test ETH) with ticket rewards.

- `createEvent(title, goalWei, durationSeconds)` creates a new campaign with a deadline  
- `contribute(eventId)` sends ETH to an active event and mints TicketToken rewards (1 wei => 1 token unit)  
- `finalize(eventId)` locks the event after the deadline and snapshots `goalReached`  
- `claimFunds(eventId)` lets the creator withdraw if the goal was reached (single-claim, nonReentrant)  
- `refund(eventId)` lets contributors withdraw their ETH if the goal was not reached (nonReentrant)  

Read helpers:
- `getEvent`  
- `getContribution`
to compile contracts we need to write on terminal: 
npx hardhat compile
### deploy.js 
deployment script that automates how your smart contracts are deployed and initialized on a network. It ensures contracts are deployed in the correct order, their addresses are wired together.
we need to write npx hardhat run scripts/deploy.js --network sepolia on terminal and it will give us 
deployer, tickettoken, eventcrowdfunding. minter setted hashes. 
we will took the hashes from here and paste it to our app.js 

## Getting Test ETH (Sepolia)

To interact with application, we need test ETH
used GoogleCloud Ethereum Sepolia Faucet
Sent ETH to MetaMask Sepolia account

## Frontend ↔ Blockchain Interaction

The frontend uses **ethers.js** and **MetaMask** to:

- Connect user wallet
- Validate Sepolia testnet
- Call smart contract functions
- Display transaction status (hash and confirmation)
- Show ETH and ERC-20 token balances

to run enter npx serve frontend on terminal

for more open the finalproject-bt.pdf