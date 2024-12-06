import { Metadata } from "next";
import style from "./about.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About"
};

export default function About() {
	return (
		<>
			<div className={style.about__container}>
				<div className={style.about__sign}>
					<Image
            src="/images/common/ACAMS-logo.svg"
            width={143}
            height={24}
            alt="ACAMS logo"
          />
				</div>
				<p>ACAMS는 금융범죄 방지 전문가들을 위한 세계 최대의 국제 회원 조직입니다. ACAMS는 선도적 사고, 지속적인 전문 교육, 그리고 최고 수준의 동료 네트워크를 통해 금융범죄 종식에 헌신하는 개인과 조직을 지원합니다.</p>

				<div className={style.about__sign}>
					<Image
            src="/images/common/rnc-logo.svg"
            width={182}
            height={38}
            alt="RNC logo"
          />
				</div>
				<p>ACAMS 프로그램 신청 중개는 AML 컨설팅 전문업체 알앤씨글로벌과 함께 합니다.</p>
				<p>알앤씨글로벌은 금융회사의 급변하는 대내외 환경에 가장 적합한 통합 컴플라이언스 서비스를 제공하기 위하여 생션 리스트, UBO 리스트, 컨설팅, Risk and Compliance 전문문서 번역 검수, 인력 지원, 뉴스레터 제공 등 금융회사의 리스크를 관리하고 규제를 준수하기 위하여 필요한 종합 서비스를 제공하고 있습니다.</p>
			</div>
		</>
	);
}