import { Metadata } from "next";
import styles from "./membership.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "멤버십"
};

export default function Membership() {
	return (
		<div className={styles.membership}>
			<strong className={styles.title}>ACAMS Membership Benefits</strong>
			<p className={styles.desc}>ACAMS 회원 혜택은 <br className="show-mo" />여러분의 학습과 네트워킹, 그리고 <br className="show-mo" />경력 발전을 지원하도록 구성되어 있습니다.</p>

			<div className={styles.benefit}>
				<ul className={styles.benefit__list}>
					<li>
						<div className={`${styles.benefit__img} ${styles.img1}`}></div>
						<p className={styles.benefit__title}>Beast-in-Class<br />Peer Network</p>
						<div className={styles.benefit__desc}>
							<p>ACAMS 커뮤니티는 180개 국가와 지역, 공공 및 민간 부문, 그리고 글로벌 금융 시스템과 상호 작용하는 모든 산업에 걸쳐 있습니다.</p>
							<p>AFC 분야의 변화를 이끄는 사람들과 함께 할 수 있습니다.</p>
						</div>
					</li>
					<li>
						<div className={`${styles.benefit__img} ${styles.img2}`}></div>
						<p className={styles.benefit__title}>Exclusive<br />Content</p>
						<div className={styles.benefit__desc}>
							<p>ACAMS Today는 회원들에 의해, 회원들을 위해 쓰여진 회원 잡지입니다.</p>
							<p>이 잡지는 실무 관점에서 최신의 주제를 다루고 있습니다. ACAMS Today에 대한 이용은 격주로 발행되는 당사의 전자 뉴스레터인 ACAMS Connection과 함께 ACAMS 멤버십 비용에 포함됩니다.</p>
						</div>
					</li>
					<li>
						<div className={`${styles.benefit__img} ${styles.img3}`}></div>
						<p className={styles.benefit__title}>Stretch Your<br />Budget Further</p>
						<div className={styles.benefit__desc}>
							<p>Membership 회원들은 ACAMS와 함께하는 모든 이벤트와 교육 과정에 대해 가격 할인을 받고, 또한 회원들은 인기 많은 이벤트에 대해 우선권을 제공받아 조기할인 티켓을 먼저 신청하실 수 있습니다.</p>
						</div>
					</li>
					<li>
						<div className={`${styles.benefit__img} ${styles.img4}`}></div>
						<p className={styles.benefit__title}>Continuing<br />Education Credits</p>
						<div className={styles.benefit__desc}>
							<p>ACAMS는 인증 또는 재인증을 위해 회원이 획득한 지속적인 교육 크레딧(ACAMS 학점 이라고 함)을 기록하고 있습니다.</p>
							<p>회원은 웨비나를 포함한 모든 완료하신 교육 과정에 대해 ACAMS 학점을 부여 받게 됩니다.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}