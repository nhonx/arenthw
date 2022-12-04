import { NEWS_LIST } from "../../data/mock";
import cls from "../../helper/classnames";
import styles from "./style.module.scss";
export const RecommendedNews = () => {
  return (
    <div className={styles.news_list}>
      <div className={styles.news}>
        {NEWS_LIST.map((m) => {
          return (
            <div key={m.id} className={styles.news_item}>
              <div
                className={styles.news_item_thumb}
                style={{ backgroundImage: `url(${m.img})` }}
              >
                <div className={styles.name}>
                  <span>{m.datetime}</span>
                </div>
              </div>
              <p className={styles.news_title}>{m.title}</p>
              <div className={styles.hashtags}>
                {m.tags.map((t) => {
                  return <a href="#">#{t}</a>;
                })}
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
