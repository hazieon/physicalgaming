import React from "react";
import styles from "./index.module.css";
import Stage from "../Stage";

function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingBox}>
        <Stage />
      </div>
    </div>
  );
}

export default Landing;
