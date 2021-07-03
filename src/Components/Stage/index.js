import React, { useState } from "react";
import styles from "./index.module.css";
import ImageBlock from "../ImageBlock";

const content = [
  { type: "image", src: "/Elements.jpg" },
  { type: "image", src: "/Elements (2).jpg" },
  { type: "image", src: "/Elements (3).jpg" },
  { type: "image", src: "/Elements (4).jpg" },
  { type: "image", src: "/Elements (5).jpg" },
];

function Stage() {
  const [stage, setStage] = useState({ type: "image", src: "/Elements.jpg" });
  const [block, setBlock] = useState();

  return (
    <div className={styles.stageContainer}>
      <div className={styles.stageBox}>
        <div className={styles.topLeft}>
          <ImageBlock src={content[0].src} />
        </div>
        <div className={styles.topRight}>
          <ImageBlock src={content[1].src} />
        </div>
        <div className={styles.bottomLeft}>
          <ImageBlock src={content[2].src} />
        </div>
        <div className={styles.bottomRight}>
          <ImageBlock src={content[3].src} />
        </div>

        {/* {content.map((item, index) => {
          if (item.src === stage.src) {
            return "";
            //popup stage image
          }
          if (item.type === "image") {
            return <ImageBlock src={item.src} />;
          }
          if (item.type === "video") {
            return "";
            //video box
          }
        })} */}
        {/* {stage.type === "image" ? <ImageBlock src={stage.src} /> : ""}
        {stage.type === "image" ? <ImageBlock src={stage.src} /> : ""}
        {stage.type === "image" ? <ImageBlock src={stage.src} /> : ""}
        {stage.type === "image" ? <ImageBlock src={stage.src} /> : ""} */}
      </div>
    </div>
  );
}

export default Stage;
