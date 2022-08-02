import Link from "next/link";
import React from "react";
import styles from "../styles/components/navbar.module.css";

type Props = {};

type State = {};

class Navbar extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <nav className={styles.nav}>
        {menuData.map((item) => {
          return (
            <Link key={item.text} href={item.target}>
              {item.text}
            </Link>
          );
        })}
      </nav>
    );
  }
}

const menuData = [
  {
    text: "Home",
    target: "/",
  },
  {
    text: "Shop",
    target: "/shop",
  },
];

export default Navbar;
