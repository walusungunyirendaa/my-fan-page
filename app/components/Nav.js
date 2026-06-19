import Link from "next/link";
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}
