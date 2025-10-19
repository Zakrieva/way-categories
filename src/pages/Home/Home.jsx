import React from "react";
import About from "./About";
import Menu from "./Menu";
import Portfolio from "./Portfolio";
import Contacts from "../../components/Contacts";
import styles from "./index.module.sass";

const Home = () => {
  return (
    <div>
      <About />
      <Menu />
      <div className={styles.home_img}></div>
      <Portfolio />
      {/* <Contacts /> */}
    </div>
  );
};

export default Home;
