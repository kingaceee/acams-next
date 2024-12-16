
import styles from './Banner.module.scss'

interface BannerProps {
  addClass?: string;
  desc: string | React.ReactElement;
}

export default function BannerBox(banner: BannerProps) {
	return (
		<div className={styles.banner__box}>
			<i className={`${styles.ico} ${banner.addClass || ''}`} aria-hidden={true}></i>
			<div className={styles.text}>
				<p>{banner.desc}</p>
			</div>	
		</div>
  );
}