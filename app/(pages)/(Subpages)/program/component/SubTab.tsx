import Link from 'next/link';
import styles from './SubTab.module.scss';

interface Tab {
  url: string;
	name: string;
	active: boolean;
}

interface SubTabProps {
  tabs: Tab[];
}

export default function SubTab({ tabs }: SubTabProps) {
  return (
    <ul className={styles.tab__sub}>
      {tabs.map((tab, index) => (
        <li key={index} className={`${styles.tab__item} ${tab.active ? styles.active : ''}`}>
          <Link href={tab.url}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  );
}