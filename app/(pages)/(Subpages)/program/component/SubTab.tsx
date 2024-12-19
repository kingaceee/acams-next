'use client';

import styles from './SubTab.module.scss';

import Link from 'next/link';
import cs from 'clsx';

interface Tab {
  name: string;
  url?: string;
  desc?: string;
  active?: boolean;
}

export interface PropTypes {
  type: 'link' | 'filter';
  tabs: Tab[];
  selected?: string;
  onChange?: (tab: Tab) => void;
}

export default function SubTab({ type, tabs, selected, onChange }: PropTypes) {
  return (
    <ul className={`${styles.tab__sub} ${type ? styles[type] : ''}`}>
      {type === 'link' &&
        tabs.map((tab, index) => (
          <li key={index} className={`${styles.tab__item} ${tab.active ? styles.active : ''}`}>
            <Link href={tab.url || '#'}>
              {tab.name}
              {tab.desc && <span className={styles.desc}>{tab.desc}</span>}
            </Link>
          </li>
        ))}
      {type === 'filter' &&
        tabs.map((tab, index) => (
          <li
            key={`${tab.name}-${index}`}
            className={cs(styles.tab__item, { [styles.active]: tab?.desc === selected })}
            onClick={onChange && (() => onChange(tab))}
          >
            {tab.name}
          </li>
        ))}
    </ul>
  );
}
