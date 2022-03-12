import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    minHeight: theme.spacing(8),
    background: `${theme.custom.footer} !important`,
    boxShadow: `${theme.custom.boxShadow} !important`,
    position: "fixed",
    bottom: 0,
    left: 0,
    height: 100,
    width: "100%"
  },
}));
export default useStyles;
