import Image from "next/image";
import { MyRecordChart } from "../components/Chart";
import { Footer } from "../components/Footer";
import { MyDiary } from "../components/MyDiary";
import { MyExercise } from "../components/MyExercise";
import { NavBar } from "../components/NavBar";
import { RecommendedNews } from "../components/RecommendedNews";
import cls from "../helper/classnames";
import styles from "../styles/health-news.module.scss";
export default function HealthNews() {
  return (
    <div>
      <NavBar activeLink="info" />
      <div className={cls("main", styles.main)}>
        <div className={cls(styles.container)}>
          <div className={styles.categories}>
            <div className={cls("columns", styles.columns)}>
              <div className="column">
                <div className={styles.cat}>
                  <div className={styles.content}>
                    <h1>
                      <a>RECOMMENDED COLUMN</a>
                    </h1>
                    <div className={styles.separator}></div>
                    <p>オススメ</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className={styles.cat}>
                  <div className={styles.content}>
                    <h1>
                      <a>RECOMMENDED DIET</a>
                    </h1>
                    <div className={styles.separator}></div>
                    <p>ダイエット</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className={styles.cat}>
                  <div className={styles.content}>
                    <h1>
                      <a>RECOMMENDED BEAUTY</a>
                    </h1>
                    <div className={styles.separator}></div>
                    <p>美容</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className={styles.cat}>
                  <div className={styles.content}>
                    <h1>
                      <a>RECOMMENDED HEALTH</a>
                    </h1>
                    <div className={styles.separator}></div>
                    <p>健康</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RecommendedNews />
        </div>
      </div>
      <Footer />
    </div>
  );
}
