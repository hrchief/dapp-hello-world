import React, { useEffect, useState } from "react";

// Import Web3 libraries
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

// Import Material UI Componenets
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Variables for Smart Contract
// import json_contract from "../contract/artifacts/contracts/HelloWorld.sol/HelloWorld.json";
const helloworld_abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
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
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const helloworld_address = "0x8ee0E00240f906b80590364e6965ba403238dd34";

const LandingPage = () => {
  const { account } = useWeb3React();

  const [totalSupply, setTotalSupply] = useState("");
  const [error, setError] = useState("");

  const getMessage = async () => {
    if (account) {
      window.web3 = new Web3(window.ethereum);
      const contract = await new window.web3.eth.Contract(helloworld_abi, helloworld_address);
      const res = await contract.methods.totalSupply().call();
      setTotalSupply(res);
    } else {
      setError("You should connect wallet first!");
    }
  }

  useEffect(() => {
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={10}>
      {error && <Typography backgroundColor="rgba(200, 0, 0, 0.7)" color="white" px={3} py={1} mb={3}>{error}</Typography>}
      <Button onClick={getMessage} variant="outlined" color="secondary">Get TotalSupply</Button>
      <Typography mt={3}>{account ? totalSupply : "Connect to wallet."}</Typography>
    </Box>
  );
};

export default LandingPage;
