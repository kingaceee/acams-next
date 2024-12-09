import styles from './SubLayout.module.scss';
import Image from 'next/image';

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
  return (
		<div className={`${styles.sub__content} ${type ? styles[type] : ''}`}>
			<div className={styles.sub__title}>
				<strong className={styles.title}>{title}
					{tit_desc && <span className={styles.desc}>{tit_desc}</span>}
				</strong>
				<Image src={url} width={135} height={150} alt={alt} />
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
						<ul className={`${styles.desc} bullet--dash`}>
							{Array.isArray(list_left.desc)
								? list_left.desc.map((item, idx) => (
									<li key={idx} className={`${styles.bullet} bullet`}>{item}</li>
								))
								: <li className={`${styles.bullet} bullet`}>{list_left.desc}</li>}
						</ul>
						)}
					</div>
					))}
				</div>
		
				<div className={`${styles.desc__item} ${styles.right}`}>
				{desc_right.map((list_right, index) => (
				<div key={index} className={styles.desc__box}>
					<p className={styles.title}>{list_right.title}</p>
					<ul className={`${styles.desc} bullet--dash`}>
						{Array.isArray(list_right.desc)
							? list_right.desc.map((item, idx) => (
								<li key={idx} className={`${styles.bullet} bullet`}>{item}</li>
							))
							: <li className={`${styles.bullet} bullet`}>{list_right.desc}</li>}
					</ul>
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
					{price_info
					.map((price, index) => (
						<div key={index} className={styles.price__box}>
							<div className={styles.price__title}>
								{price.type === "base" ? "기본 패키지" : "온라인 강의 패키지"}
							</div>
							<ul className={`${styles.price__desc} bullet--dash`}>
							{Array.isArray(price.desc)
								? price.desc.map((item, idx) => (
									<li key={idx} className={`${styles.bullet} bullet`}>{item}</li>
									))
								: <li className={`${styles.bullet} bullet`}>{price.desc}</li>}
							</ul>
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
