import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";
import useStyles from "../assets/styles";

const BaseLayout = ({ children }) => {
  const classes = useStyles.base();
  return (
    <>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
      <Spinner isLoading={false} />
    </>
  );
};
export default BaseLayout;
