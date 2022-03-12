import React, { useEffect, useState } from "react";

// Import Web3 libraries
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

// Import Material UI Componenets
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Variables for Smart Contract
import json_contract from "../contract/artifacts/contracts/HelloWorld.sol/HelloWorld.json";
const helloworld_abi = json_contract.abi;
const helloworld_address = "0xC88C689956bCFDefC7CcA740fB226BA44198D7Ad";

const LandingPage = () => {
  const { account } = useWeb3React();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const getMessage = async () => {
    if (account) {
      window.web3 = new Web3(window.ethereum);
      const contract = await new window.web3.eth.Contract(helloworld_abi, helloworld_address);
      const msg = await contract.methods.message().call();
      setMessage(msg);
    } else {
      setError("You should connect wallet first!");
    }
  }

  useEffect(() => {
  }, []);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={10}>
      <Typography backgroundColor="rgba(200, 0, 0, 0.7)" color="white" px={3} py={1} mb={3}>{error}</Typography>
      <Button onClick={getMessage} variant="outlined" color="secondary">Get Message</Button>
      <Typography mt={3}>{account ? message : "Connect to wallet."}</Typography>
    </Box>
  );
};

export default LandingPage;
