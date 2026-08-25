import styles from "./CorePlatform.module.css";

type CorePlatformCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function CorePlatformCard({
  icon,
  title,
  description,
}: CorePlatformCardProps) {
  return (
    <article className={styles.card}>
      <img src={icon} alt="" className={styles.icon} />

      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>

        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
}
