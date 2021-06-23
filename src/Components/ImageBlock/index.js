import React from "react";
import styles from "./index.module.css";
// "../../../public/images/"

function ImageBlock({ src }) {
  return (
    <div className={styles.imageBlockContainer}>
      <div className={styles.imageBlockBox}>
        <img
          className={styles.imageBlock}
          src={`./images/${src}`}
          alt="block"
        />
      </div>
    </div>
  );
}

export default ImageBlock;
