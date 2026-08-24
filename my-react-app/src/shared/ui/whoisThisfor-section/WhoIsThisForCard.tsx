import styles from "./WhoIsThisFor.module.css";

type WhoIsThisForCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function WhoIsThisForCard({
  icon,
  title,
  description,
}: WhoIsThisForCardProps) {
  return (
    <article className={styles.card}>
      <img src={icon} className={styles.icon} />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
