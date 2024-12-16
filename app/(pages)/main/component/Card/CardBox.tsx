
import styles from './CardBox.module.scss'
import Image from "next/image";
import Link from "next/link";

interface CardProps {
	path: string;
	className?: string;
	imgAlt: string;
	titleLine1: string;
	titleLine2: string;
  addClass?: string;
}

export default function CardBox(card: CardProps) {
	return (
		<Link href={card.path} className={`${styles.card__box} scrollCard ${card.className || ''}`}>
			<div className={`${styles.box__title} ${card.addClass || ''}`}>
				<p>{card.titleLine1}</p>
				<p>{card.titleLine2}</p>
			</div>
		</Link>
  );
}