import React from "react";
import styles from "./index.module.css";
import logo from "../../logo.svg";

function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <div className={styles.LogoBox}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Logo;
