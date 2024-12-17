import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";
import Subpage from "@/(pages)/(Subpages)/Subpage";

export const metadata: Metadata = {
	title: "CGSS",
};
export default function CAMS() {
	const tabData = [
		{ name: "CAMS", url: "/program/CAMS", active: false },
		{ name: "CGSS", url: "/program/CGSS", active: true },
		{ name: "CCAS", url: "/program/CCAS", active: false },
		{ name: "CAFS", url: "/program/CAFS", active: false },
	];

	const listLeft = [
		{
			title: "CGSS란 무엇인가?",
			desc_type: "text",
			desc: "CGSS(Certified Global Sanctions Specialist, 공인 국제 제재 전문가) 자격증은 전문가들이 변화하는 제재 체제를 이해하고 해석하는 데 필요한 도구를 제공하기 위한 글로벌 프로그램입니다. 제재 조치는 이전에 볼 수 없었던 방식으로 사용되고 있습니다. CGSS는 개념, 관련 법 및 규제, 규제 기관이 기대하는 바 및 모범 사례를 중심으로 제재 준수의 기초가 되는 지식 체계를 정의합니다. 빠르면 3개월 내 자격증 획득이 가능합니다.",
		},
		{
			title: "CAMS의 혜택",
			desc_type: "bullet",
			desc: [
				'제재 조치, 목적 및 도입 방식 파악',
				'제재 회피 기법을 식별하는법 학습 제재 실사에 대한 이해',
				'회사에 제재 컴플라이언스를 도입하는법 학습',
				'규정을 준수하지 않을 경우 발생할 수 있는 위험에 대하여 자세히 이해',
			],
		},
		{
			title: "자격 요건",
			desc_type: "text",
			desc: "응시자는 40 크레딧을 충족해야 신청이 가능합니다.",
		},
	];

	const listRight = [
		{
			title: "응시자 프로필",
			desc_type: "bullet",
			bulletTop: 'CGSS는 다음 분야의 중고위급 전문가에게 적합합니다.',
			desc: [
				'제재 컴플라이언스',
				'경제 제재',
				'금융 제재',
				'제재 심사',
				'AML/CTF',
				'AML 제재',
				'규제 컴플라이언스',
				'위험 관리',
				'법률 자문',
				'금수 조치',
				'컴플라이언스 기술',
			],
		},
		{
			title: "핵심 주제",
			desc_type: "bullet",
			desc: [
				'거버넌스 및 집행',
				'제재 회피 기법',
				'제재 실사',
				'제재 스크리닝',
				'제재 조사 및 자산 동결',
			],
		},
		{
			title: "자격증 취득 준비",
			desc_type: "text",
			desc: "자격 및 경력을 기술한 신청서를 제출하고 Pearson VUE를 통해 CGSS 시험 일정을 예약합니다.",
		},
	];

	const testInfo = [
		"객관식 100문항, 175분 소요",
		"응시자는 최소 62.5%이상의 정답을 맞춰야 합격할 수 있습니다.",
	];

	const priceInfo = [
		{
			type: "base",
			desc: [
				'학습 가이드 PDF',
				'플래시카드 PDF',
				'CGSS 시험',
			],
			price1: '1,995',
			price2: '1,495'
		},
		{
			type: "online",
			desc: [
				'학습 가이드 PDF',
				'플래시카드 PDF',
				'CGSS 시험',
				'온라인 강의실\n(2시간 라이브 온라인 강의 6회)',
			],
			price1: '2,395',
			price2: '1,995'
		}
	]

	return (
		<Subpage title="중급 자격증">
			<SubTab type="link" tabs={tabData} />
			<SubLayout
				type="level2"
				url="/images/main/img_main_card5.svg"
				alt="CAMS"
				title="CERTIFIED GLOBAL SANCTIONS SPECIALIST"
				desc=""
				desc_left={listLeft}
				desc_right={listRight}
				price_type="type2"
				test_info={testInfo}
				price_info={priceInfo}
			/>
		</Subpage>
	);
}
