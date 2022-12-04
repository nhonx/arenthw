import Image from "next/image";
import { useState } from "react";
import { OverallChart } from "../components/Chart";
import { Footer } from "../components/Footer";
import {
  HexaMorningButton,
  HexaLunchButton,
  HexaDinnerButton,
  HexaSnackButton,
} from "../components/HexaButton";
import { MealList } from "../components/MealList ";
import { NavBar } from "../components/NavBar";
import { ProgressRing } from "../components/ProgressCircle";
import cls from "../helper/classnames";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={cls("main", styles.main)}>
        <div className={cls(styles.header_chart)}>
          <div className={cls("columns", styles.columns)}>
            <div className={cls("column is-one-third", styles.image)}>
              <div className={styles.bg} />
              <ProgressRing amount={75} targetAmount={100} />
            </div>
            <div className={cls("column", styles.graph)}>
              <OverallChart />
            </div>
          </div>
        </div>
        <div className={cls(styles.container)}>
          <div className={styles.categories}>
            <div className={cls(styles.item, styles.morning)}>
              <HexaMorningButton />
            </div>
            <div className={cls(styles.item, styles.lunch)}>
              <HexaLunchButton />
            </div>
            <div className={cls(styles.item, styles.dinner)}>
              <HexaDinnerButton />
            </div>
            <div className={cls(styles.item, styles.snack)}>
              <HexaSnackButton />
            </div>
          </div>
          <MealList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
