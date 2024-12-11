import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CAMS RM",
};
export default function CAMS_RM() {
  const tabData = [
    { name: "CAMS", desc: "Audit", url: "/program/CAMS-Audit", active: false },
    { name: "CAMS", desc: "FCI", url: "/program/CAMS-FCI", active: false },
    { name: "CAMS", desc: "RM", url: "/program/CAMS-RM", active: true },
  ];

  const listLeft = [
    {
      title: "Advanced CAMS-RM이란 무엇인가?",
      desc_type: "text",
      desc: "Advanced CAMS-RM(Advanced CAMS-Risk Management, 고급 CAMS-위험 관리)은 금융 범죄 위험 관리에 대한 전문가의 전문 지식을 입증하는 글로벌 자격증입니다. Advanced CAMS-RM은 CAMS 자격증을 넘어 이 분야에서 높은 수준의 교육 및 실습을 할 수 있는 자격증입니다. 위기 관리 전문 지식을 통해 조직은 기존 프로토콜과 프로세스를 평가하고 개선하며 변화하는 패러다음에 대비할 수 있습니다.",
    },
    {
      title: "Advanced CAMS-RM의 혜택",
      desc_type: "bullet",
      desc: [
				'심도 깊은 이해를 통해 내부 관행 보호 위험 관리와 관련된 핵심 주제에 대해 학습합니다.',
				'심화된 위험 관리 전문성 인증 이 분야에 대한 의지를 보여주고 전문적인 신뢰도를 구축합니다.',
				'규제 기대치 충족 회사의 직원들이 전문 스킬을 갖출 수 있도록 지원합니다.',
      ],
    },
    {
      title: "자격 요건",
      desc_type: "text",
      desc: "응시자는 CAMS 자격증을 보유해야 합니다.",
    },
  ];

  const listRight = [
    {
      title: "응시자 프로필",
      desc: [
				'Advanced CAMS-RM은 다음과 같은 중고위급 전문가에게 적합합니다.',
				'BSA 책임자',
				'리스크 책임자',
				'컴플라이언스 책임자',
				'MLRO(보고 책임자)',
				'최고 글로벌 컴플라이언스 책임자 핵심 주제',
				'리스크 프레임워크 및 거버넌스',
				'위험식별 및 평가',
				'모니터링, 컨트롤 및 완화',
				'커뮤니케이션 및 교육의 효과성',
      ],
    },
    {
      title: "자격증 취득 준비",
      desc: "자격 및 경력을 기재하여 신청서를 제출하고 Pearson VUE를 통해 Advanced CAMS-RM 시험 일정을 예약합니다.",
    },
  ];

  const testInfo = [
		'객관식, 복수 선택형, 매칭 및 시나리오형, 복수 응답형 100문항, 175분 소요.',
		'응시자는 최소 65%이상의 정답을 맞춰야 합격합니다.',
  ];

  const priceInfo = [
    {
      type: "base",
      desc: [
				'학습 가이드 PDF',
				'Advanced CAMS-RM 시험',
      ],
      price1: '2,195',
      price2: '1,695'
    },
    {
      type: "online",
      desc: [
				'2시간 실시간 온라인 강의 6회',
				'학습 가이드 PDF',
				'Advanced CAMS-RM 시험',
      ],
      price1: '2,595',
      price2: '2,195'
    }
  ]

  return (
    <>
      <SubTab type="link" tabs={tabData} />
      <SubLayout
        type="level3"
        url="/images/main/img_main_card08.svg"
        alt="CAMS RM"
				title="RISK MANAGEMENT"
        desc=""
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
				test_info={testInfo}
        price_info={priceInfo}
      />
    </>
  );
}
