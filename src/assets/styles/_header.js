import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  appbar: {
    height: theme.spacing(11),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `${theme.custom.appbar} !important`,
  },
  toolbar: {
    width: "100%",
    padding: theme.spacing(0, 6),
    minHeight: 74,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 72,
  },
  actionGroup: {
    display: "flex",
    alignItems: "center",

    "& button": {
      boxShadow: theme.custom.boxShadow,
      borderRadius: theme.shape.borderRadius,
    },
  },
  darkModeButton: {
    padding: "8px !important",
    marginLeft: `${theme.spacing(2)} !important`,
  },
}));
export default useStyles;
