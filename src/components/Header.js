import React, { useState, useEffect } from "react";

import { useWeb3React } from "@web3-react/core";

// ** Import Material-Ui Components
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

// ** Import Redux
import { theme_mode_store } from "../redux/actions/config";
import { useSelector, useDispatch } from "react-redux";

// ** Import Icons
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// ** Import Assets
import useStyles from "../assets/styles";

// ** Import Components
import ConnectWallet from "./ConnectWallet";
import { Typography } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles.header();

  const { account } = useWeb3React();

  const [openWalletList, setOpenWalletList] = useState(false);

  const { isDarkMode } = useSelector((state) => state.config);

  const toggleDarkMode = () => {
    dispatch(theme_mode_store(!isDarkMode));
  };

  useEffect(() => {}, []);

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link href="/" underline="none">
          <Typography>DAPP</Typography>
        </Link>
        <Box className={classes.actionGroup}>
          <Box>
            {(() => {
              if (account) {
                return (
                  <Button variant="outlined">
                    {`${account.substring(0, 8)} ... ${account.substring(
                      account.length - 4
                    )}`}
                  </Button>
                );
              } else {
                return (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setOpenWalletList(true);
                    }}
                  >
                    Connect Wallet
                  </Button>
                );
              }
            })()}
          </Box>
          <IconButton
            color="inherit"
            onClick={() => toggleDarkMode()}
            className={classes.darkModeButton}
          >
            {isDarkMode ? <NightsStayIcon /> : <WbSunnyIcon color="primary" />}
          </IconButton>
        </Box>
      </Toolbar>
      <ConnectWallet isOpen={openWalletList} setIsOpen={setOpenWalletList} />
    </AppBar>
  );
};

export default Header;
