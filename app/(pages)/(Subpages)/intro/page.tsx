import { Metadata } from "next";
import style from "./intro.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "소개"
};

export default function Intro() {
	return (
		<>
			<div className={style.intro__container}>
				<p>핑거 AML Hub에 오신 것을 환영합니다.</p><br/>
				<p>핑거는 자금세탁방지(AML)와 금융범죄 예방(AFC)의 중요성을 깊이 인식하고 이 분야의 비즈니스를 본격적으로 확장하고 있습니다.</p>
				<p>그 첫 걸음으로, 우리는 AML의 글로벌 스탠다드를 제시하는 국제 자금세탁방지 전문가 협회(ACAMS)와 전략적 업무협약을 체결했습니다.</p>
				<p>이번 협약을 통해 핑거 AML Hub는 한국의 AML 전문가들을 위한 전문 서비스 플랫폼으로 자리매김하고자 합니다.</p>
				<p>현재 우리나라 금융업계가 직면한 주요 과제 중 하나인 자금세탁 위험에 효과적으로 대응하기 위한 전문 인력 양성을 위해,</p>
				<p>핑거 AML Hub는 ACAMS와의 업무협약을 통해 비용 효율적인 국제공인 자격증 신청 경로를 제공합니다.</p>
				<p>앞으로 핑거는 첨단 기술을 활용한 혁신적인 금융범죄 예방 솔루션 개발과 AML 커뮤니티 구축을 통해 이 분야의 선도적 역할을 수행해 나갈 것입니다.</p>
				<p>핑거 AML Hub와 함께 여러분의 AML 전문성을 높이고, 대한민국 금융 시스템의 건전성과 신뢰성 향상에 동참해주시기 바랍니다.</p>

				<div className={style.intro__sign}>
          <Image
            src="/images/common/logo.svg"
            width={268}
            height={50}
            alt="ACAMS logo"
          />
				</div>
			</div>
		</>
	);
}