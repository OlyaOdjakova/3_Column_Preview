import CardsList from "./cards_list/CardsList";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.backgroundStyle}>
      <CardsList />;
    </div>
  );
};

export default App;
