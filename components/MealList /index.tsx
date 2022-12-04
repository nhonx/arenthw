import { MEAL_LIST } from "../../data/mock";
import cls from "../../helper/classnames";
import styles from "./style.module.scss";
export const MealList = () => {
  return (
    <div className={styles.meal_list}>
      <div className={styles.meals}>
        {MEAL_LIST.map((m) => {
          return (
            <div
              key={m.id}
              className={styles.meal_item}
              style={{ backgroundImage: `url(${m.img})` }}
            >
              <div className={styles.name}>
                <span>{m.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.loadmore}>
        <a className={cls("primary-button", styles.button)}>記録をもっと見る</a>
      </div>
    </div>
  );
};
