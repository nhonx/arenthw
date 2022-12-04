import Link from "next/link";
import cls from "../../helper/classnames";
import { Logo, IconChallenge, IconInfo, IconMemo, IconMenu } from "../SVG";

export interface INavBarProps {
  activeLink?: string;
}
export const NavBar = (props: INavBarProps) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <Logo />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link
              href="/my-record"
              className={cls("navbar-item", {
                active: props.activeLink === "memo",
              })}
            >
              <IconMemo />
              <span>自分の記録</span>
            </Link>
            <a
              className={cls("navbar-item", {
                active: props.activeLink === "challenge",
              })}
            >
              <IconChallenge />
              <span>チャレンジ</span>
            </a>
            <Link
              href="/health-news"
              className={cls("navbar-item", {
                active: props.activeLink === "info",
              })}
            >
              <IconInfo />
              <span>お知らせ</span>
            </Link>
            <a className="navbar-item">
              <IconMenu />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
