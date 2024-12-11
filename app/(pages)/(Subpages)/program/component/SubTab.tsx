'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './SubTab.module.scss';

interface Tab {
  name: string;
  url?: string;
  desc?: string;
  active?: boolean;
}

interface SubTabProps {
  type: 'link' | 'filter';
  tabs: Tab[];
}

export default function SubTab({ type, tabs }: SubTabProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul className={`${styles.tab__sub} ${type ? styles[type] : ''}`}>
      {type === 'link' && tabs.map((tab, index) => (
      <li key={index} className={`${styles.tab__item} ${tab.active ? styles.active : ''}`}>
        <Link href={tab.url || '#'}>{tab.name}
          {tab.desc && <span className={styles.desc}>{tab.desc}</span>}
        </Link>
      </li>
      ))}
      {type === 'filter' && tabs.map((tab, index) => (
      <li key={index}
        className={`${styles.tab__item} ${index === activeIndex ? styles.active : ''}`}
        onClick={() => handleClick(index)}
      >
        {tab.name}
      </li>
      ))}
    </ul>
  );
}