
import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
	const infos1 = [
		'(주)핑거',
		'CEO :  안인주',
		'서울특별시 영등포구 여의대로 24, FKI 타워 43층 (여의도동)'
	]
	const infos2 = [
		'사업자번호 : 120-86-15854',
		'통신판매번호 : 2009-서울영등포-0379'
	]

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__top}>
				<div className={styles.footer__inner}>
					<div className={styles.company}>
						<div className={styles.logo}></div>
						<div className={styles.info}>
							<ul className={styles.info__row}>
							{
								infos1.map((info, i) => {
									return (
										<li key={i}>
											{info}
										</li>
									)
								})
							}
							</ul>
							<ul className={styles.info__row}>
							{
								infos2.map((info, i) => {
									return (
										<li key={i}>
											{info}
										</li>
									)
								})
							}
							</ul>
						</div>
						<ul className={`${styles.terms} show-mo`}>
							<li><Link href="/terms">이용약관</Link></li>
							<li><Link href="/privacy">개인정보처리방침</Link></li>
						</ul>
					</div>
				
					<div className={styles.inquiry}>
						<div className={styles.inquiry__box}>
							신청/자격증 문의
							<p className={styles.mail}>aml@globalrnc.com</p>
						</div>
						<div className={styles.inquiry__box}>
							사이트 문의
							<p className={styles.mail}>amlhub@finger.co.kr</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.footer__bottom}>
				<div className={styles.footer__inner}>
					<div className={styles.copy}>Copyright © 2024 Finger INC.All Rights Reserved.</div>
					<ul className={`${styles.terms} show-pc`}>
						<li><Link href="/terms">이용약관</Link></li>
						<li><Link href="/privacy">개인정보처리방침</Link></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}