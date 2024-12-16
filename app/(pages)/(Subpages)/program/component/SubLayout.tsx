'use client';

import { useEffect, useState } from 'react';
import styles from './SubLayout.module.scss';
import Image from 'next/image';
import Bullet from '@/components/util/Bullet';

interface PriceInfo  {
	type: string;
  price1: string;
  price2: string;
	desc: string | string[];
}

interface DescItem  {
  title: string;
	desc: string | string[];
	desc_type?: string;
	bulletTop?: string;
}

interface SubLayoutProps {
  type: string;
  price_type: string;
  url: string;
  alt: string;
  title: string;
  tit_desc?: string;
	desc: string;
	price?: string;
	lecture?: string;
	price_info?: PriceInfo[];
  desc_left: DescItem[];
	desc_right: DescItem[];
	test_info: string[];
}

export default function SubTab({ type, url, alt, title, tit_desc, desc, desc_left, desc_right, price_type, test_info, price_info, price }: SubLayoutProps) {
	const [width, setWidth] = useState(135);
	const [height, setHeight] = useState(135);

  useEffect(() => {
    const updateWidth = () => {
      const isMobile = window.innerWidth < 768;
      setWidth(isMobile ? 130 : 135);
      setHeight(isMobile ? 130 : 150);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
	}, []);
	
  return (
		<div className={`${styles.sub__content} ${type ? styles[type] : ''}`}>
			<div className={styles.sub__title}>
				<strong className={styles.title}>{title}
					{tit_desc && <span className={styles.desc}>{tit_desc}</span>}
				</strong>
				<Image src={url} width={width} height={height} alt={alt} />
			</div>
		
			<div className={styles.sub__desc}>{desc}</div>
		
			<div className={styles.desc__list}>
				<div className={`${styles.desc__item} ${styles.left}`}>
					{desc_left.map((list_left, index) => (
					<div key={index} className={styles.desc__box}>
						<p className={styles.title}>{list_left.title}</p>
						
						{list_left.desc_type === 'text' && (
						<div className={styles.desc}>{list_left.desc}</div>
						)}
						{list_left.desc_type === 'bullet' && (
						<div className={styles.desc}>
							<Bullet
								type="dash"
								bullet={Array.isArray(list_left.desc) 
									? list_left.desc.map((text) => ({ text })) 
									: [{ text: list_left.desc }]
								}
							/>
						</div>
						)}
					</div>
					))}
				</div>
		
				<div className={`${styles.desc__item} ${styles.right}`}>
					{desc_right.map((list_right, index) => (
					<div key={index} className={styles.desc__box}>
						<p className={styles.title}>{list_right.title}</p>
						{list_right.desc_type === 'text' && (
						<div className={styles.desc}>{list_right.desc}</div>
						)}
						{list_right.desc_type === 'bullet' && (
						<div className={styles.desc}>
							{list_right.bulletTop && <p>{list_right.bulletTop}</p>}
							<Bullet
								type="dash"
								bullet={Array.isArray(list_right.desc)
									? list_right.desc.map((text) => ({ text }))
									: [{ text: list_right.desc }]
								}
							/>
						</div>
						)}
					</div>
					))}
				</div>
			</div>

			<div className={`${styles.sub__price} ${price_type ? styles[price_type] : ''}`}>
				<div className={styles.test__info}>
					<div className={styles.title}><span>시험</span>
						{test_info.map((test, index) => (
						<p key={index}>{test}</p>
						))}
					</div>

					{price_type === 'type1' && (
					<div className={styles.price}>
						<span>가격</span>
						<p>$ {price} <span>USD</span></p>
					</div>
					)}
				</div>

				{price_type === 'type2' && (
				<div className={styles.price__group}>
					{price_info && price_info.map((price, index) => (
						<div key={index} className={styles.price__box}>
							<div className={styles.price__title}>
								{price.type === "base" ? "기본 패키지" : "온라인 강의 패키지"}
							</div>
							<Bullet
								type="dash"
								bullet={Array.isArray(price.desc)
									? price.desc.map((text) => ({ text }))
									: [{ text: price.desc }]
								}
							/>
							<div className={styles.price}>
								<span>민간 부문</span>
								<p>$ {price.price1} <span>USD</span></p>
							</div>
							<div className={styles.price}>
								<span>공공 부문</span>
								<p>$ {price.price2} <span>USD</span></p>
							</div>
						</div>
					))}
				</div>
				)}
			</div>
		</div>
  );
}
