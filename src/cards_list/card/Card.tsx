import Button from "./button/Button";
import styles from "./card.module.css";
import React from "react";

interface CardProps {
  backgroundColor: any;
  imgSource: any;
  title: any;
  content: any;
  borderRadius: any;
}

const Card: React.FC<CardProps> = ({
  backgroundColor,
  imgSource,
  title,
  content,
  borderRadius,
}) => {
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
};

export default Card;
