import React from "react";

// ** Import Material UI Components
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// ** Import Assets
import useStyles from "../assets/styles";
import { Typography } from "@mui/material";

const Footer = () => {
  const classes = useStyles.footer();
  return (
    <Box component="footer" className={classes.footer}>
      <Toolbar>
        <Container>
          <Typography>Footer</Typography>
        </Container>
      </Toolbar>
    </Box>
  );
};
export default Footer;
