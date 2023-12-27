import React from "react";
import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>
        {/* <img alt="Loading..." /> */}
        Manish
      </h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
