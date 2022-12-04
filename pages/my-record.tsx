import Image from "next/image";
import { MyRecordChart } from "../components/Chart";
import { Footer } from "../components/Footer";
import { MyDiary } from "../components/MyDiary";
import { MyExercise } from "../components/MyExercise";
import { NavBar } from "../components/NavBar";
import cls from "../helper/classnames";
import styles from "../styles/my-record.module.scss";
export default function MyRecord() {
  return (
    <div>
      <NavBar activeLink="memo" />
      <div className={cls("main", styles.main)}>
        <div className={cls(styles.container)}>
          <div className={styles.categories}>
            <div className={cls("columns", styles.columns)}>
              <div className="column">
                <div className={styles.cat}>
                  <div
                    className={styles.bg}
                    style={{ backgroundImage: "url(/images/MyRecommend-1.jpg" }}
                  />
                  <div className={styles.content}>
                    <h1>BODY RECORD</h1>
                    <a className={cls("primary-button", styles.button)}>
                      自分のカラダの記録
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className={styles.cat}>
                  <div
                    className={styles.bg}
                    style={{ backgroundImage: "url(/images/MyRecommend-2.jpg" }}
                  />
                  <div className={styles.content}>
                    <h1>MY EXERCISE</h1>
                    <a className={cls("primary-button", styles.button)}>
                      自分のカラダの記録
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div className={styles.cat}>
                  <div
                    className={styles.bg}
                    style={{ backgroundImage: "url(/images/MyRecommend-3.jpg" }}
                  />
                  <div className={styles.content}>
                    <h1>MY DIARY</h1>
                    <a className={cls("primary-button", styles.button)}>
                      自分のカラダの記録
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MyRecordChart />
          <MyExercise />
          <MyDiary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
