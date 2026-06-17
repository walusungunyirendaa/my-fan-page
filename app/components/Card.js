import styles from "./Card.module.css";

export default function Card({ name, blurb, rating, emoji }) {
  return (
    <article className={styles.card}>
      <div className={styles.emoji}>{emoji}</div>
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
    </article>
  );
}