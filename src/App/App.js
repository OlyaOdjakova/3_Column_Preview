import React from "react";
import styles from "./App.module.css";
import Card from "../Card/card";
import sedanimage from "../Images/icon-sedans.svg";
import suvimage from "../Images/icon-suvs.svg";
import luxuryimage from "../Images/icon-luxury.svg";

export default function App() {
  return (
    <div className={styles.cardsStyle}>
      <Card
        backgroundColor={"hsl(31, 77%, 52%)"}
        imgSource={sedanimage}
        title={"SEDANS"}
        content={
          "Choose a sedan for its affordability and excellent fuel economy.\n" +
          "            Ideal for cruising in the city or on your next road trip."
        }
        borderRadius={"10px 0 0 10px"}
      />
      <Card
        backgroundColor={"hsl(184, 100%, 22%)"}
        imgSource={suvimage}
        title={"SUVS"}
        content={
          "Take an SUV for its spacious interior, power, and versatility.\n" +
          "            Perfect for your next family vacation and off-road adventures."
        }
        borderRadius={"0"}
      />
      <Card
        backgroundColor={"hsl(179, 100%, 13%)"}
        imgSource={luxuryimage}
        title={"LUXURY"}
        content={
          "Cruise in the best car brands without the bloated prices. Enjoy the\n" +
          "            enhanced comfort of a luxury rental and arrive in style."
        }
        borderRadius={"0 10px 10px 0"}
      />
    </div>
  );
}
