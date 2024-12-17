import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";
import Subpage from "@/(pages)/(Subpages)/Subpage";

export const metadata: Metadata = {
  title: "CAMS",
};
export default function CAMS() {
  const tabData = [
    { name: "CAMS", url: "/program/CAMS", active: true },
    { name: "CGSS", url: "/program/CGSS", active: false },
    { name: "CCAS", url: "/program/CCAS", active: false },
    { name: "CAFS", url: "/program/CAFS", active: false },
  ];

  const listLeft = [
    {
      title: "CAMS란 무엇인가?",
      desc_type: "text",
      desc: "CAMS(Certified Anti-Money Laundering Specialist, 공인 자금세탁방지 전문가)는 금융범죄 예방의 효과성에 대한 글로벌 벤치마크입니다. 최근 몇 년간 금융범죄가 헤드라인을 장식하면서 컴플라이언스에 관심이 집중되고 있습니다. CAMS는 자금세탁의 주요 원칙과 이를 방지하는 방법을 다루는 검증된 글로벌 자격증입니다. 빠르면 3개월안에 자금세탁방지 전문가 자격증을 취득할 수 있습니다.",
    },
    {
      title: "CAMS의 혜택",
      desc_type: "bullet",
      desc: [
				'하향식 컴플라이언스 문화 추진',
				'표준화된 위험기반접근법에 대한 의지 표현',
				'필수 AML 교육 수강',
				'탤런트에 대한 보상 및 유지',
				'보다 효과적인 보호 수단',
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
      desc: [
				'AML 컴플라이언스',
				'규제 컴플라이언스',
				'규제 리스크',
				'보고 책임자',
				'BSA 오피서',
				'리스크 관리',
				'금융범죄 컴플라이언스',
      ],
    },
    {
      title: "핵심 주제",
      desc_type: "bullet",
      desc: [
				'자금세탁 및 테러자금조달 방식 및 리스크',
				'자금세탁방지 및 테러자금조달방지 컴플라이언스 기준',
				'자금세탁방지, 테러자금조달방지 및 제재 컴플라이언스 프로그램',
				'조사 수행 및 지원',
      ],
    },
    {
      title: "자격증 취득 준비",
      desc_type: "text",
      desc: "자격 및  경력을 기재하여 신청서를 제출하고 Pearson VUE를 통해 CAMS 시험 일정을 예약하세요",
    },
  ];

  const testInfo = [
    "객관식 120문항, 210분 소요",
    "응시자는 최소 62.5%이상의 정답을 맞춰야 합격할 수 있습니다.",
  ];

  const priceInfo = [
    {
      type: "base",
      desc: [
				'학습 자료',
				'모의 시험',
				'CAMS 시험',
      ],
      price1: '1,995',
      price2: '1,495'
    },
    {
      type: "online",
      desc: [
				'학습 자료',
				'모의 시험',
				'온라인 강의실\n(2시간 실시간 온라인 강의 6회)',
				'CAMS 시험',
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
        url="/images/main/img_main_card4.svg"
        alt="CAMS"
        title="CERTIFIED ANTI-MONEY LAUNDERING SPECIALIST"
        desc="CAMS는 전 세계 기관, 정부 및 규제 기관으로부터 AML 자격증의 골드 스탠다드로 인정받고 있습니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
				test_info={testInfo}
        price_info={priceInfo}
      />
    </Subpage>
  );
}
