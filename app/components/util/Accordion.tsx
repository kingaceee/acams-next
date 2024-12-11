'use client'

import { useState, useRef } from 'react';
import styles from './Accordion.module.scss'


interface AccordionProps {
	Data: { title: string; content: string }[];
	maxRow?: number;
}

export default function Accordion({ Data, maxRow }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
	};
	
	const visibleData = Data.slice(0, maxRow);

  return (
		<div className={styles.accordion}>
      {visibleData.map((row, index) => (
			<div key={index} className={`${styles.accordion__row} ${activeIndex === index ? styles.active : ''}`}>
				<p className={styles.accordion__title} onClick={() => handleToggle(index)}>{row.title}</p>
				<div ref={(el) => {contentRefs.current[index] = el;}} className={styles.accordion__content}
				style={{
					height: activeIndex === index ? `${(contentRefs.current[index]?.scrollHeight || 0) + 60}px` : '0px',
					padding: activeIndex === index ? '30px 50px' : '0 50px',
					overflow: 'hidden',
					transition: 'all 0.3s ease',
				}}
				>
				{row.content}
				</div>
			</div>
      ))}
    </div>
  );
}