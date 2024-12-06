
import styles from './SubVisual.module.scss'

interface SubpageProps {
	title: string;
}

export default function SubVisual(page: SubpageProps) {
	return (
		<section className={styles.sub__visual}>
			<strong className={styles.sub__title}>{page.title}</strong>
		</section>
	);
}

