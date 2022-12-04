import { MY_EXERCISES } from "../../data/mock";
import cls from "../../helper/classnames";
import styles from "./style.module.scss";

export const MyExercise = () => {
  return (
    <div className={styles.my_exercise}>
      <div className={styles.title}>
        <span>
          MY
          <br /> EXERCISE
        </span>
        <span>2021.05.21</span>
      </div>
      <div className={styles.exercise_list}>
        <ul>
          {MY_EXERCISES.map((e) => {
            return (
              <li key={e.id} className={styles.exercise}>
                <div className={styles.desc}>
                  <p>{`${e.name}（${e.position}・${e.amount}）`}</p>
                  <p>{e.burnedKcal}kcal</p>
                </div>
                <div className={styles.duration}>
                  <p>{e.timeMinutes} min</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
