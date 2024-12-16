import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CAMS FCI",
};
export default function CAMS_FCI() {
  const tabData = [
    { name: "CAMS", desc: "Audit", url: "/program/CAMS-Audit", active: false },
    { name: "CAMS", desc: "FCI", url: "/program/CAMS-FCI", active: true },
    { name: "CAMS", desc: "RM", url: "/program/CAMS-RM", active: false },
  ];

  const listLeft = [
    {
      title: "글로벌 시험 기반 자격증인 Advanced CAMS-FCI",
      desc_type: "text",
      desc: "ACAMS 자격증 프로그램은 해당 주제 전문가로 구성된 글로벌 태스크포스에 의해 개발되었습니다. 자격증 시험은 검증된 객관적인 지식의 벤치마크를 제공하기 위해 고도로 연구된 심리 측정적 방법을 사용하여 작성됩니다. 시험은 전 세계 Pearson VUE 테스트 센터에서 또는 온라인 감독형으로 치를 수 있습니다.",
    },
    {
      title: "Advanced CAMS-FCI에는 어떤 내용이 포함되는가?",
      desc_type: "bullet",
      desc: [
				'AFC 조사단의 관리',
				'복잡한 수사 주도',
				'금융범죄 유형',
				'중간 단계',
				'의심스러운 활동 신고',
      ],
    },
  ];

  const listRight = [
    {
      title: "Advanced CAMS-FCI는 누구를 위한 것인가?",
      desc_type: "bullet",
      bulletTop: "이 자격증은 주로 규제 기관 내에서 금융 범죄 수사를 수행 및/또는 감독하거나 이를 원하는 사람을 위해 특별히 설계되었습니다. 이는 금융범죄 수사에 대한 고도의 지식이 도움이 되는 곳의 추가 인력에게도 적합합니다.\n이에 해당되는 직책:",
      desc: [
				'AML 책임자 또는 AML 리스크책임자',
				'금융범죄 조사관',
				'글로벌 금융범죄 조사관',
				'AFC/AML 관리자 또는 팀장',
				'특별 조사단 조사관',
      ],
    },
    {
      title: "자격증 취득 준비",
      desc: "신청서를 제출하고 Pearson VUE를 통해 Advanced CAMS-FCI 시험 일정을 예약합니다.",
    },
    {
      title: "자격 요건은 무엇인가?",
      desc: "응시자는 CAMS 자격증을 보유해야 합니다. 응시자는 최소 5년 이상의 금융 범죄 수사 또는 관련 직무 경험이 있는 것이 좋습니다.",
    },
  ];

  const testInfo = [
		'단일 선택형(하나의 답 선택)과 복수 선택형(적합한 모든 답 선택)의  객관식 90문항, 175분 소요.',
		'응시자는 70점을 받아야 합격.',
  ];

  const priceInfo = [
    {
      type: "base",
      desc: [
				'학습 가이드 PDF',
				'Advanced CAMS-FCI 시험',
      ],
      price1: '2,195',
      price2: '1,695'
    },
    {
      type: "online",
      desc: [
				'2시간 실시간 온라인 강의 6회',
				'학습 가이드 PDF',
				'Advanced CAMS-FCI 시험',
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
        url="/images/main/img_main_card10.svg"
        alt="CAMS FCI"
				title="FINANCIAL CRIMES INVESTIGATIONS"
				tit_desc="이전 직접 참여가 필요한 과정이었던 CAMS-FCI가 이제 시험 기반 프로그램이 되었습니다."
        desc="Advanced CAMS-FCI(Advanced CAMS-Financial Crimes Investigations, 고급 CAMS-금융 범죄 수사) 는 금융 범죄 방지(AFC) 조사관을 위한 선도적인 자격증입니다. 이를 통해 전문가는 다각도의 자금세탁 계획과 진화하는 유형의 복잡한 금융범죄 수사를 진행하기 위한 지식을 갖추게 됩니다. Advanced CAMS-FCI 자격증을 획득함으로써 전문가는 기존 조사 스킬을 더욱 강화하고 의심스러운 활동에 대해 효과적으로 소통하는 스킬을 키울 수 있습니다. 금융 기관, 정부 및 사법 기관의 공인 전문가는 의심스러운 거래를 탐지, 조사 및 신고하고, 전 세계 사법 기관과 효과적으로 소통할 수 있습니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
				test_info={testInfo}
        price_info={priceInfo}
      />
    </>
  );
}
