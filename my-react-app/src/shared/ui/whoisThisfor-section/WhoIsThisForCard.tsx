import styles from "../../../pages/Solutions/WhoIsThisFor.module.css";

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
    <article className={styles.article}>
      <div className={styles.card}>
        {icon ? <img src={icon} alt="" className={styles.icon} /> : null}

        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <p className="18-neutral-500">{description}</p>
        </div>
      </div>
    </article>
  );
}
