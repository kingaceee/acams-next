import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CAMS Audit",
};
export default function CAMS() {
  const tabData = [
    { name: "CAMS", desc: "Audit", url: "/program/CAMS-Audit", active: true },
    { name: "CAMS", desc: "FCI", url: "/program/CAMS-FCI", active: false },
    { name: "CAMS", desc: "RM", url: "/program/CAMS-RM", active: false },
  ];

  const listLeft = [
    {
      title: "글로벌 시험 기반 자격증인 Advanced CAMS-Audit ACAMS",
      desc_type: "text",
      desc: "자격증 프로그램은 해당 주제 전문가로 구성된 글로벌 태스크포스에 의해 개발되었습니다. 자격증 시험은 검증된 객관적인 지식의 벤치마크를 제공하기 위해 고도로 연구된 심리 측정 방법을 사용하여 작성됩니다. 시험은 전 세계 Pearson VUE 테스트 센터에서 또는 온라인 감독형으로 치를 수 있습니다.",
    },
    {
      title: "Advanced CAMS-Audit에는 어떤 내용이 포함되는가?",
      desc_type: "bullet",
      desc: [
				'기업 지배구조와 감사 기능',
				'감사 계획 및 범위 설정',
				'현장 조사 및 평가',
				'보고, 관리 작업 및 후속 조치',
      ],
    },
  ];

  const listRight = [
    {
      title: "Advanced CAMS-Audit은 누구를 위한 것인가?",
      desc_type: "bullet",
      bulletTop: "금융범죄방지 감사를 수행하는 모든 회사는 CAMS-Audit 자격을 갖춘 리더를 보유함으로써 이득을 얻을 수 있습니다. 이는 다음과 같습니다:",
      desc: [
				'은행',
				'비은행 금융기관',
				'핀테크',
				'금융 범죄 컴플라이언스 프로그램이 있는 DNFBP',
				'기업',
				'컨설팅 기업',
      ],
    },
    {
      title: "자격증 취득 준비",
      desc_type: "text",
      desc: "자격 및 경력을 기재하여 신청서를 제출하고 Pearson VUE를 통해 Advanced CAMS-Audit 시험 일정을 예약합니다.",
    },
    {
      title: "자격 요건은 무엇인가?",
      desc_type: "text",
      desc: "응시자는 CAMS 자격증을 보유하고 있어야 합니다. 응시자는 최소 5년 이상의 감사 또는 감사 관련 경험이 있는 것이 좋습니다.",
    },
  ];

  const testInfo = [
		'객관식, 복수 선택형, 매칭 및 시나리오형, 복수 응답형 90문항, 175분 소요',
		'응시자는 75점을 받아야 합격.',
  ];

  const priceInfo = [
    {
      type: "base",
      desc: [
				'학습 가이드 PDF',
				'Advanced CAMS-Audit 시험',
      ],
      price1: '2,195',
      price2: '1,695'
    },
    {
      type: "online",
      desc: [
				'2시간 실시간 온라인 강의 6회',
				'학습 가이드 PDF',
				'Advanced CAMS-Audit 시험',
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
        url="/images/main/img_main_card9.svg"
        alt="CAMS AUDIT"
				title="ADCANCED CAMS AUDIT"
				tit_desc="이전 직접 참여가 필요한 과정이었던 CAMS-Audit은 이제 시험 기반 프로그램이 되었습니다."
        desc="모든 회사는 회사의 금융범죄방지(AFC) 프로그램이 어떻게 수행되고 있는지 이해해야 합니다. 효과적인 감사는 이를 가능하게 합니다. Advanced CAMS-Audit 자격증 획득은 감사 원칙에 대한 명확한 이해와 금융 범죄 위험 통제 및 그 효과를 평가하는 데 필요한 판단력을 입증합니다. 이는 AFC 감사를 수행하는 담당자, AFC 통제의 독립적인 감시 및 테스트 관련 업무 담당자를 위해 설계된 고급 전문가 레벨 자격증입니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
				test_info={testInfo}
        price_info={priceInfo}
      />
    </>
  );
}
