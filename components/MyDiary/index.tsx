import { MY_DIARIES } from "../../data/mock";
import cls from "../../helper/classnames";
import styles from "./style.module.scss";
export const MyDiary = () => {
  return (
    <div className={styles.my_diary}>
      <div className={styles.title}>MY DIARY</div>
      <div className={styles.diaries}>
        {MY_DIARIES.map((m) => {
          return (
            <div key={m.id} className={styles.diary_item}>
              <div className={styles.datetime}>
                <p>{m.date}</p>
                <p>{m.time}</p>
              </div>
              <div className={styles.content}>
                <p>{m.title}</p>
                <p>{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.loadmore}>
        <a className={cls("primary-button", styles.button)}>
          自分の日記をもっと見る
        </a>
      </div>
    </div>
  );
};
