
import styles from './Banner.module.scss'

interface BannerProps {
  addClass?: string;
  desc1: string;
  desc2: string;
}

export default function BannerBox(banner: BannerProps) {
	return (
		<div className={styles.banner__box}>
			<i className={`${styles.ico} ${banner.addClass || ''}`} aria-hidden={true}></i>
			<div className={styles.text}>
				<p><span className="color-point1 font-exbold">ACAMS</span>{banner.desc1}</p>
				<p>{banner.desc2}</p>
			</div>	
		</div>
  );
}