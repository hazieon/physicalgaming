import React, { useState } from "react";
import styles from "./index.module.css";

function MyGallery({ photosArray }) {
  const [fullImage, setFullImage] = useState(null);

  function displayPhoto(index) {
    const selectedPhoto = photosArray[index];
    setFullImage(selectedPhoto);
    console.log(selectedPhoto);
  }

  function clearDisplayPhoto() {
    setFullImage(null);
  }

  return (
    <>
      <div className={styles.galleryBox}>
        {fullImage && photosArray && (
          <div className={styles.fullSizeBox}>
            <span className={styles.fullSizeExit}>
              <button onClick={clearDisplayPhoto}>x</button>
            </span>
            <img
              src={fullImage}
              alt="selected travelpic full size"
              className={styles.fullSize}
            />
          </div>
        )}
        {photosArray.map((photo, index) => {
          return (
            <img
              src={photo}
              alt="gallery"
              className={styles.thumbnail}
              onClick={() => displayPhoto(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyGallery;
