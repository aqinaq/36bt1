const CROWDFUNDING_ADDRESS = "0xc7826A15c2AcbcFd6410c130d35111099cF85192";
const TOKEN_ADDRESS = "0x490F593d396144dD61B2601A95b8fa3D71C499f1";

const CROWDFUNDING_ABI = [ 
{
      "inputs": [
        {
          "internalType": "address",
          "name": "ticketTokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountWei",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ticketsMinted",
          "type": "uint256"
        }
      ],
      "name": "Contributed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "goalWei",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "EventCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalRaised",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "goalReached",
          "type": "bool"
        }
      ],
      "name": "Finalized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountWei",
          "type": "uint256"
        }
      ],
      "name": "FundsClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountWei",
          "type": "uint256"
        }
      ],
      "name": "Refunded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "claimFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "contributions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "goalWei",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "durationSeconds",
          "type": "uint256"
        }
      ],
      "name": "createEvent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "eventsById",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "goalWei",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalRaised",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "finalized",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "goalReached",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "fundsClaimed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "finalize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getContribution",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "getEvent",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "goalWei",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalRaised",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "finalized",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "goalReached",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "fundsClaimed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextEventId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "refund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketToken",
      "outputs": [
        {
          "internalType": "contract ITicketToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];

const TOKEN_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldMinter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newMinter",
          "type": "address"
        }
      ],
      "name": "MinterUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newMinter",
          "type": "address"
        }
      ],
      "name": "setMinter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
 
];

let provider, signer, user;
let crowdContract, tokenContract;
const logEl = document.getElementById("log");
function log(msg) {
  logEl.textContent = msg + "\n" + logEl.textContent;
}
// connects Metamask, sets up provider/signer, checks chain, and creates contract instances
async function connect() {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return;
  }

  await ethereum.request({ method: "eth_requestAccounts" });

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  user = await signer.getAddress();

  document.getElementById("addr").textContent = user;

  const network = await provider.getNetwork();
  document.getElementById("chain").textContent = network.chainId.toString();

  if (network.chainId !== 11155111n) {
    alert("Switch MetaMask to Sepolia");
    return;
  }

  crowdContract = new ethers.Contract(
    CROWDFUNDING_ADDRESS,
    CROWDFUNDING_ABI,
    signer
  );

  tokenContract = new ethers.Contract(
    TOKEN_ADDRESS,
    TOKEN_ABI,
    provider
  );

  log("Connected to Sepolia");
  await refreshBalances();
}

async function refreshBalances() {
  if (!provider || !user) return;

  const eth = await provider.getBalance(user);
  document.getElementById("ethBal").textContent =
    ethers.formatEther(eth);

  try {
    const decimals = await tokenContract.decimals();
    const bal = await tokenContract.balanceOf(user);
    document.getElementById("tixBal").textContent =
      ethers.formatUnits(bal, decimals);
  } catch {
    document.getElementById("tixBal").textContent = "0";
  }
}
// creates a new crowdfunding “event” based on inputs
async function createEvent() {
  try {
    const title = document.getElementById("title").value.trim();
    const goalEth = document.getElementById("goalEth").value.trim();
    const duration = document.getElementById("duration").value.trim();

    const goalWei = ethers.parseEther(goalEth);
    const durationSec = BigInt(duration);

    const tx = await crowdContract.createEvent(title, goalWei, durationSec);
    log("createEvent tx sent: " + tx.hash);

    await tx.wait();
    log("createEvent confirmed");

    await setLatestEventId(); 

  } catch (e) {
    log("createEvent failed: " + (e.shortMessage || e.message));
  }
}
//reads an event by ID and updates the UI + button enabled/disabled states
async function viewEvent() {
  try {
    if (!crowdContract) return alert("Connect MetaMask first");

    const raw = document.getElementById("manageEventId").value.trim();
    if (!raw) return alert("Enter Event ID");

    const eventId = BigInt(raw);

    const ev = await crowdContract.eventsById(eventId);

    const title = ev[0];
    const goalWei = ev[1];
    const deadline = Number(ev[2]);     
    const totalRaised = ev[3];
    const creator = ev[4];
    const finalized = ev[5];
    const goalReached = ev[6];
    const fundsClaimed = ev[7];

    const now = Math.floor(Date.now() / 1000);
    const secondsLeft = Math.max(0, deadline - now);

    document.getElementById("eventView").textContent =
      `Event #${eventId}\n` +
      `Title: ${title}\n` +
      `Goal: ${ethers.formatEther(goalWei)} ETH\n` +
      `Raised: ${ethers.formatEther(totalRaised)} ETH\n` +
      `Creator: ${creator}\n` +
      `Finalized: ${finalized}\n` +
      `GoalReached: ${goalReached}\n` +
      `FundsClaimed: ${fundsClaimed}\n` +
      `Seconds left: ${secondsLeft}\n`;

    document.getElementById("contributeBtn").disabled =
      finalized || secondsLeft === 0;

    document.getElementById("finalizeBtn").disabled =
      finalized || secondsLeft > 0;

    document.getElementById("claimBtn").disabled =
      !finalized || !goalReached || fundsClaimed;

    document.getElementById("refundBtn").disabled =
      finalized && goalReached;

    log("view ok");
  } catch (e) {
    console.error(e);
    log("view failed: " + (e.shortMessage || e.message));
  }
}


async function setLatestEventId() {
  const next = await crowdContract.nextEventId();
  const latest = next - 1n;

  document.getElementById("manageEventId").value = latest.toString();
  document.getElementById("eventId").value = latest.toString();

  log("Using latest Event ID: " + latest.toString());
}

// Finalizes an event (only valid after deadline based on rule
async function finalizeEvent() {
  try {
    const eventId = BigInt(
      document.getElementById("manageEventId").value.trim()
    );

    const tx = await crowdContract.finalize(eventId);
    log("finalize tx sent: " + tx.hash);
    await tx.wait();
    log("finalize confirmed");

  } catch (e) {
    log("finalize failed: " + (e.shortMessage || e.message));
  }
}
// Contributes ETH to an eventId using the payable contribute() method
async function contribute() {
  try {
    const eventId = BigInt(
      document.getElementById("eventId").value.trim()
    );
    const amountEth =
      document.getElementById("amountEth").value.trim();

    const value = ethers.parseEther(amountEth);

    const tx = await crowdContract.contribute(eventId, { value });
    log("contribute tx sent: " + tx.hash);
    await tx.wait();
    log("contribute confirmed");

    await refreshBalances();

  } catch (e) {
    log("contribute failed: " + (e.shortMessage || e.message));
  }
}
// to claim the raised funds for successful event
async function claimFunds() {
  try {
    const eventId = BigInt(
      document.getElementById("manageEventId").value.trim()
    );

    const tx = await crowdContract.claimFunds(eventId);
    log("claim tx sent: " + tx.hash);
    await tx.wait();
    log("claim confirmed");

  } catch (e) {
    log("claim failed: " + (e.shortMessage || e.message));
  }
}
// Contributor requests refund (if goal not reached)
async function refund() {
  try {
    const eventId = BigInt(
      document.getElementById("manageEventId").value.trim()
    );

    const tx = await crowdContract.refund(eventId);
    log("refund tx sent: " + tx.hash);
    await tx.wait();
    log("refund confirmed");

  } catch (e) {
    log("refund failed: " + (e.shortMessage || e.message));
  }
}

document.getElementById("connectBtn").onclick = connect;
document.getElementById("refreshBtn").onclick = refreshBalances;
document.getElementById("createBtn").onclick = createEvent;
document.getElementById("viewBtn").onclick = viewEvent;
document.getElementById("finalizeBtn").onclick = finalizeEvent;
document.getElementById("contributeBtn").onclick = contribute;
document.getElementById("claimBtn").onclick = claimFunds;
document.getElementById("refundBtn").onclick = refund;
