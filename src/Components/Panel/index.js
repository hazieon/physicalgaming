import React from "react";
import styles from "./index.module.css";

function Panel({
  image,
  alt,
  title,
  link,
  linkTwo,
  text,
  textTwo,
  buttonText,
  buttonTwoText,
  logo = "",
  logoTwo = "",
}) {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.panelBox}>
        <div className={styles.panelBoxLeft}>
          <img className={styles.panelImage} src={image} alt={alt} />
        </div>
        <div className={styles.panelBoxRight}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{textTwo}</p>
          <a href={link}>
            <button className={styles.panelBoxButton}>
              {buttonText}
              <img className={styles.panelBoxLogo} src={logo} alt="" />
            </button>
          </a>
          {buttonTwoText && (
            <>
              <a href={linkTwo}>
                <button
                  className={styles.panelBoxButton}
                  id={styles.panelSecondButton}
                >
                  {buttonTwoText}
                  <img className={styles.panelBoxLogo} src={logoTwo} alt="" />
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Panel;
