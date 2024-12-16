'use client'

import { useState, useRef, useEffect } from 'react';
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

	
	const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
		
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
	
	const visibleData = Data.slice(0, maxRow);

  return (
		<div className={styles.accordion}>
      {visibleData.map((row, index) => (
			<div key={index} className={`${styles.accordion__row} ${activeIndex === index ? styles.active : ''}`}>
				<p className={styles.accordion__title} onClick={() => handleToggle(index)}>{row.title}</p>
				<div ref={(el) => {contentRefs.current[index] = el;}} className={styles.accordion__content}
				style={{
					height: activeIndex === index
										? isMobile
											? `${(contentRefs.current[index]?.scrollHeight || 0) + 48}px`
											: `${(contentRefs.current[index]?.scrollHeight || 0) + 60}px`
										: isMobile
										? '0'
										: '0',
					padding:
									activeIndex === index
										? isMobile
											? '7.5vw 0' // 모바일에서 활성화된 경우
											: '30px 50px' // 데스크톱에서 활성화된 경우
										: isMobile
										? '0' // 모바일에서 비활성화된 경우
										: '0 50px', // 데스크톱에서 비활성화된 경우
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