import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Push Notitifications Client</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default Home;
