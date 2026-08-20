import styles from "./WhoIsThisFor.module.css";

import WhoIsThisFor from "./WhoIsThisFor";

type WhoIsThisForCardProps = {
  icon?: string;
  title: string;
  description: string;
};

export function WhoIsThisForCard({
  icon,
  title,
  description,
}: WhoIsThisForCardProps) {
  return (
    <div className={styles.card}>
      {icon ? <img src={icon} alt="" className={styles.icon} /> : null}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <p className="18-neutral-500">{description}</p>
      </div>
    </div>
  );
}
