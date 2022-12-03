import Image from "next/image";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import cls from "../helper/classnames";
import styles from "../styles/Home.module.scss";
export default function MyRecord() {
  return (
    <div className={styles.container}>
      <NavBar activeLink="memo" />
      <div className={cls("main", styles.main)}></div>
      <Footer />
    </div>
  );
}
