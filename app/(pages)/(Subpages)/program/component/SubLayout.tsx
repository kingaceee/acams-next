import styles from './SubLayout.module.scss';
import Image from 'next/image';

interface DescItem  {
  title: string;
  desc: string | string[];
}

interface SubLayoutProps {
  type: string;
  url: string;
  alt: string;
  title: string;
  desc: string;
  desc_left: DescItem [];
  desc_right: DescItem [];
}

export default function SubTab({ type, url, alt, title, desc, desc_left, desc_right, }: SubLayoutProps) {
  return (
		<div className={`${styles.sub__content} ${type ? styles[type] : ''}`}>
			<div className={styles.sub__title}>
				<strong className={styles.title}>{title}</strong>
				<Image src={url} width={135} height={150} alt={alt} />
			</div>
		
			<div className={styles.sub__desc}>{desc}</div>
		
			<div className={styles.desc__list}>
				<div className={`${styles.desc__item} ${styles.left}`}>
					{desc_left.map((list_left, index) => (
					<div key={index} className={styles.desc__box}>
						<p className={styles.title}>{list_left.title}</p>
						<div className={styles.desc}>{list_left.desc}</div>
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
		</div>
  );
}