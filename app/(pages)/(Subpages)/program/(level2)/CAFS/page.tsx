import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CAFS",
};
export default function CAMS() {
  const tabData = [
    { name: "CAMS", url: "/program/CAMS", active: false },
    { name: "CGSS", url: "/program/CGSS", active: false },
    { name: "CCAS", url: "/program/CCAS", active: false },
    { name: "CAFS", url: "/program/CAFS", active: true },
  ];

  const listLeft = [
    {
      title: "CAFS란?",
      desc_type: "text",
      desc: "CAFS는 사기 예방, 탐지 및 대응을 포함하여 은행 및 기타 금융회사가 직면하는 도전 과제를 해결하는 사기 위험 관리 프로그램을 제공하는 자격증입니다. 프로그램에는 사기 유형, 탐지 기술, 분석 및 사기 조사 기법이 포함됩니다",
    },
    {
      title: "CAFS의 혜택",
      desc_type: "text",
      desc: 'CAFS 자격증을 통해 사기 위험관리, 탐지, 분석, 예방 및 대응 방법에 대한 지식을 강화할 수 있으며, 이를 통해 조직의 사기방지 능력을 강화할 수 있습니다. 이는 금융, 규제 및 평판 리스크로부터 고객을 보호하는 데 중요한 역할을 합니다.'
    },
    {
      title: "자격 요건",
      desc_type: "text",
      desc: "응시자는 40 크레딧을 충족해야 신청이 가능합니다.",
    },
  ];

  const listRight = [
    {
      title: "CAFS 취득 대상",
      desc: [
				'CAFS 자격증은 다음과 같은 전문가들에게 혜택이 있습니다.',
				'사기 예방, 탐지 및 대응을 담당하는 팀의 전문가',
				'사기 팀을 관리하는 관리자 및 감독자',
				'사기방지 프로그램을 관리하는 전문가',
				'사기 통제 시스템을 감사하는 전문가',
				
      ],
    },
    {
      title: "CAFS 준비 및 지원",
      desc: [
				'CAFS 자격증을 취득하려면 다음과 같은 준비가 필요합니다.',
				'ACAMS 회원 유지',
				'시험 응시 자격 충족 (40점 이상 필요)',
				'신청서 제출 및 비용 납부',
      ],
    },
    {
      title: "CAFS 시험 구성",
      desc: "자격 요건을 요약한 신청서를 제출하고 Pearson VUE를 통해 CAFS 시험 일정을 예약합니다.",
    },
  ];

  const testInfo = [
		'CAFS 시험은 총 100개의 객관식 문제로 구성되어 있으며, 시험 합격을 위한 최소 점수는 75점입니다.',
		'시험 시간은 총 175분이며, 오답에 대한 불이익이 없기 때문에 답변하지 않고 비워두는 문제가 없도록 시험을 치르는 것이 좋습니다.',
	];
	
  const priceInfo = []

  return (
    <>
      <SubTab type="link" tabs={tabData} />
      <SubLayout
        type="level2"
        url="/images/main/img_main_card07.svg"
        alt="CAFS"
        title="CERTIFIED ANTI-FRAUD SPECIALIST"
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
