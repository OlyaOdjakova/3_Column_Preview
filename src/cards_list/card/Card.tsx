import Button from "./button/Button";
import styles from "./card.module.css";
import React from "react";

interface CardProps {
  backgroundColor: string;
  imgSource: string;
  title: string;
  content: string;
  borderRadius: string;
}

const Card: React.FC<CardProps> = ({
  backgroundColor,
  imgSource,
  title,
  content,
  borderRadius,
}) => {
  return (
    <div
      className={styles.cardStyle}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}
    >
      <img src={imgSource} alt="car" />
      <h2 className={styles.headerStyle}>{title}</h2>
      <p className={styles.bodyStyle}>{content}</p>
      <Button />
    </div>
  );
};

export default Card;
