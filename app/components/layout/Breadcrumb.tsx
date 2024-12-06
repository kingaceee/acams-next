
import Link from 'next/link';
import styles from './Breadcrumb.module.scss'

interface SubpageProps {
	dep2?: string;
	dep3?: string;
}

export default function Breadcrumb(nav: SubpageProps) {
	return (
		<section className={styles.breadcrumb}>
			<div className={styles.breadcrumb__inner}>
				<ol className={styles.breadcrumb__list}>
					<li className={`${styles.breadcrumb__depth}  ${styles.home}`}><Link href="/"><span className="blind">Home</span></Link></li>
					<li className={styles.breadcrumb__depth}><Link href="/">{nav.dep2}</Link></li>
					{/* 현재페이지 active class 추가 */}
					<li className={styles.breadcrumb__depth}><Link href="/">{nav.dep3}</Link></li>
				</ol>
			</div>
		</section>
	);
}
