import cls from "../../helper/classnames";
import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={cls("footer", styles.footer)}>
      <div className={styles.links}>
        <a href="#">会員登録</a>
        <a href="#">運営会社</a>
        <a href="#">利用規約</a>
        <a href="#">個人情報の取扱について</a>
        <a href="#">特定商取引法に基づく表記</a>
        <a href="#">お問い合わせ</a>
      </div>
    </footer>
  );
};
