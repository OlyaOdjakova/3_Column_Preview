import React from "react";
import Button from "../Button/button";
import styles from "./card.module.css";

export default function Card({
  backgroundColor,
  imgSource,
  title,
  content,
  borderRadius,
}) {
  return (
    <>
      <div
        className={styles.cardStyle}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}
      >
        <img src={imgSource} alt="car image" />
        <h2 className={styles.headerStyle}>{title}</h2>
        <p className={styles.bodyStyle}>{content}</p>
        <Button buttonColor={backgroundColor} />
      </div>
    </>
  );
}
