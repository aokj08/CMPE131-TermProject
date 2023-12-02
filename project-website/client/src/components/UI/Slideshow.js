import styles from "./Slideshow.module.css";
import {
  city_hall_sign_1,
  city_road,
  city_night,
  city_morning,
  city_evening,
} from "../../assets";
import React from "react";
import { useState, useRef, useEffect } from "react";

const Slideshow = () => {
  const images = [
    city_hall_sign_1,
    city_road,
    city_morning,
    city_evening,
    city_night,
  ];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className={`${styles.slideshow} bg-image`}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img className={styles.slide} key={index} src={image} />
          ))}
        </div>

        <div
          className={`mask ${styles["mask"]}`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>

        <div className={styles.description}>
          <h1>City of Williamston, Michigan</h1>
        </div>

        <div className={styles.slideshowDots}>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.slideshowDot} ${
                index === idx ? styles.active : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slideshow;
