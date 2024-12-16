import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CCAS",
};
export default function CAMS() {
  const tabData = [
    { name: "CAMS", url: "/program/CAMS", active: false },
    { name: "CGSS", url: "/program/CGSS", active: false },
    { name: "CCAS", url: "/program/CCAS", active: true },
    { name: "CAFS", url: "/program/CAFS", active: false },
  ];

  const listLeft = [
    {
      title: "CCAS란 무엇인가?",
      desc_type: "text",
      desc: "CCAS(Certified Cryptoasset Anti-Financial Crime Specialist, 공인 가상자산 금융범죄예방 전문가)는 기관이 가상 자산에 대한 기존 위협과 새로운 위협을 모두 식별하고 완화할 수 있도록 지원하는 자격증입니다. 18개월~2년의 금융 범죄 컴플라이언스 경력에 더해 CCAS 자격증 취득은 개인이 암호화 분야 상황에서 금융 범죄의 위험을 관리하고, 관련 규제를 준수하는 데 필요한 지식을 보유하고 있음을 의미합니다. CCAS는 가상 자산 분야의 대표자, AML/CTF 전문가 및 규제 및 법 집행 배경의 기타 주제 전문가들과 함께 개발되었습니다. 이 자격증 프로그램은 개별 AML 전문가와 전체 가상자산 컴플라이언스 부서를 위한 가상 자산 중심 AFC 인증 시장의 공백을 메꿔줍니다.",
    },
    {
      title: "CCAS의 혜택",
      desc_type: "bullet",
      desc: [
				'준비와 학습을 통해 필수 AML 교육 요구사항 충족 및 전문성 향상',
				'심사관 및 규제기관에 AML 전문성 증명',
				'자금세탁 위협으로부터 회사를 보호하고 금융범죄 위험을 최소화하는 능력 향상',
				'CCAS 자격증을 보유한 전문가를 고용함으로써 회사는 직원들이 금융 범죄의 위험 관리 및 관련 규제 준수와 관련된 전문 지식 기준을 충족함을 입증 가능				',
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
      desc: [
				'AML 및 KYC 애널리스트',
				'거래 모니터링 애널리스트',
				'AML 조사관',
				'AML 관리자',
				'사기 조사관',
				'AML 책임자',
				'최고 컴플라이언스 책임자',
				'감사, 특별 조사',
				'SAR/STR 신고 담당자',
				'규제 심사관',
				'사법 기관',
				'블록체인 기술자',
				'시스템 설계자',
				'법률 자문',
				'정보 분석가',
				'사이버 보안 전문가',
      ],
    },
    {
      title: "핵심 주제",
      desc: [
				'이 자격증 프로그램은 가상 자산 분야 관련 주요 주제를 포함합니다. 교육 과정은 다음과 같은 3개의 ACAMS 온라인 자격증 학습 과정을 포함합니다.',
				'가상 자산 및 블록체인 과정',
				'가상 자산 및 블록체인에 대한 자금세탁방지 기본 원칙 과정',
				'가상 자산 및 블록체인에 대한 위험 관리 프로그램 과정',
      ],
    },
    {
      title: "자격증 취득 준비",
      desc: "자격 요건을 요약한 신청서를 제출하고 Pearson VUE를 통해 CCAS 시험 일정을 예약합니다.",
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
				'CCAS 시험',
      ],
      price1: '1,995',
      price2: '1,495'
    },
    {
      type: "online",
      desc: [
				'학습 가이드 PDF',
				'플래시카드 PDF',
				'CCAS 시험',
				'온라인 강의실\n(2시간 라이브 온라인 강의 6회)',
      ],
      price1: '2,395',
      price2: '1,995'
    }
  ]

  return (
    <>
      <SubTab type="link" tabs={tabData} />
      <SubLayout
        type="level2"
        url="/images/main/img_main_card6.svg"
        alt="CCAS"
        title="CERTIFIED CRYPTOASSET ANTI-FINANCIAL CRIME SPECIALIST"
        desc="가상자산 AML 전문가 경력을 준비하세요."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
				test_info={testInfo}
        price_info={priceInfo}
      />
    </>
  );
}
