import React from "react";
import clsx from "clsx";
import Paper from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import useStyles from "../assets/styles";
import { Typography } from "@mui/material";

const Spinner = ({ isLoading }) => {
    const classes = useStyles.base();

    return (
        <Paper
            id="spinner"
            className={clsx(classes.spinRoot, { [classes.hide]: !isLoading })}
        >
            <Typography>Loading...</Typography>
            <LinearProgress className="progress" />
        </Paper>
    );
};

export default Spinner;
