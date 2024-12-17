import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbItem {
  depth: string;
  active?: boolean;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function Breadcrumb({ breadcrumbs }: BreadcrumbProps) {
  return (
    <section className={styles.breadcrumb}>
      <div className={styles.breadcrumb__inner}>
        <ol className={styles.breadcrumb__list}>
          <li className={`${styles.breadcrumb__depth} ${styles.home}`}>
            <Link href="/">
              <span className="blind">Home</span>
            </Link>
          </li>
          {breadcrumbs.map((item, index) => {
            const isLastElement = index === breadcrumbs.length - 1;
            return (
              <li
                key={index}
                className={`${styles.breadcrumb__depth} ${isLastElement ? styles.active : ''}`}
              >
                {item.depth}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}