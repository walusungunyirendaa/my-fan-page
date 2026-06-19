import { items } from "../../data";
import styles from "./faves.module.css";
import Link from "next/link";

export default async function FaveDetail({ params }) {
  const { id } = await params;
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main className={styles.notFoundContainer}>
        <h2> Game not found</h2>
        <p>Sorry, that game doesn't exist.</p>
        <Link href="/" className={styles.linkText}>
          Back to Faves
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
        <Link href="/" className={styles.backButton}>
            &larr; Back to Faves
            </Link>
        <div className={styles.headerSection}>
            <span className={styles.largeEmoji}>{item.emoji}</span>
            <h1 className={styles.movieTitle}>{item.name}</h1>
            <p className={styles.starRating}>{"⭐".repeat(item.rating)}</p>
        </div>
        <p className={styles.description}>{item.blurb}</p>
        </main>
    );
    }

      