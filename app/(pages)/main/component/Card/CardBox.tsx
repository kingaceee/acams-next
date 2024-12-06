
import styles from './CardBox.module.scss'
import Image from "next/image";
import Link from "next/link";

interface CardProps {
	path: string;
	imgUrl: string;
	imgAlt: string;
	titleLine1: string;
	titleLine2: string;
  addClass?: string;
}

export default function CardBox(card: CardProps) {
	return (
		<Link href={card.path} className={`${styles.card__box} scrollCard`}>
			<div className={styles.box__img}>
				<Image src={card.imgUrl} width={230} height={180} alt={card.imgAlt} />
			</div>
			<div className={`${styles.box__title} ${card.addClass || ''}`}>
				<p>{card.titleLine1}</p>
				<p>{card.titleLine2}</p>
			</div>
		</Link>
  );
}