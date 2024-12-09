import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CTMA",
};
export default function CTMA() {
  const tabData = [
    { name: "CKYCA", url: "/program/CKYCA", active: false },
    { name: "CTMA", url: "/program/CTMA", active: true },
    { name: "CAFCA", url: "/program/CAFCA", active: false },
  ];

  const listLeft = [
    {
      title: "ACAMS는 왜 CTMA를 개발했는가?",
      desc_type: "text",
      desc: "거래 모니터링은 금융 범죄를 탐지하는데 도움이 되는 지속적인 고객실사의 중요한 부분입니다. 고객 온보딩 후의 거래 모니터링은 회사가 비정상적이거나 의심스러운 활동을 식별하는 핵심 과정입니다. 거래 모니터링시스템에서 발생하는 alert는 반드시 조사해야 하며, 필요한 경우 KoFIU에 신고해야 합니다. 강력한 거래 모니터링 프로그램을 구축하는 것은 완전한 자금세탁방지 프로그램 수립을 위해 핵심적인 부분이며, 따라서 alert을 처리하고 조사하는 담당자를 잘 교육하는 것이 필수적입니다.",
    },
    {
      title: "CTMA는 왜 Associate 레벨인가?",
      desc_type: "text",
      desc: "경력의 다양한 레벨을 지원하기 위해 ACAMS는 최대 약 1년 정도의 경험이 있는 개인을 대상으로 하는 Associate 레벨의 자격증을 제공합니다. 이 자격증은 경력 자격 요건이 없기 때문에 금융 범죄 예방 분야를 처음 접하는 분에게도 유용합니다.",
    },
    {
      title: "왜 CTMA 자격증을 획득해야 하는가?",
      desc_type: "text",
      desc: "거래 감시는 AML 및 금융 범죄 컴플라이언스 프로그램의 핵심 구성요소입니다. 개인의 경우, CTMA는 거래 감시 절차에 대한 지식을 인증함으로써 차별화할 수 있습니다. 기관의 경우, CTMA 자격증이 있는 직원을 보유함으로써 갈수록 복잡해지는 법률, 규정 및 정책 환경에서 AML 및 금융 범죄 컴플라이언스에 대한 강력한 의지를 표명할 수 있습니다.",
    },
    {
      title: "CTMA 자격증은 누구를 위한 것인가?",
      desc_type: "text",
      desc: "CTMA는 미래에 거래 모니터링 업무를 희망하거나 현재 해당 업무를 담당하고 있는 초기 경력 전문가, 그리고 해당 직원들을 감독하거나 지원하는 담당자를 위한 자격증입니다. CTMA자격증 보유 및 6~12개월 경력이 있는 담당자는 거래 모니터링시스템에서 alert이 발생한 시점부터 alert을 해제하거나 의심스러운 활동임을 판단 및 상부 보고하는 시점까지 alert을 조사할 수 있어야 합니다. 기술 전문가들이 CTMA 프로그램 수강을 원할 수도 있지만, 이 프로그램은 관련 기술을 심도 있게 다루지 않습니다. TM 경보를 발생하는 기술은 임계값, 오탐(false positives) 이유와 같은 핵심 원리를 이해하는 수준에서만 다뤄집니다.",
    },
  ];
  const listRight = [
    {
      title: "조직을 위한 혜택",
      desc: [
        "CTMA는 일관적인 표준을 적용하여 조직의 TM 인력이 역할 기반 지식의 객관적이고 세심하게 확립된 벤치마크를 입증할 수 있도록 합니다.",
        "글로벌 자격증인 CTMA를 통해 다국적 조직은 글로벌 네트워크에 일관된 단일 프로그램을 적용할 수 있습니다.",
        "CTMA를 통해 회사는 금융범죄 예방 전문가들의 지식과 스킬 향상에 전념하는 세계 최고의 멤버십 조직인 ACAMS의 다양하고 글로벌한 글로벌 네트워크를 활용할 수 있게 됩니다.",
      ],
    },
    {
      title: "이 자격증이 도움이 되는 직책",
      desc: [
        "거래 모니터링 분석가",
        "Alert 처리자",
        "거래 모니터링 조사자",
        "KYC 애널리스트",
        "온보딩 애널리스트",
        "금융범죄 운영 애널리스트",
        "컴플라이언스 애널리스트",
        "금융범죄 방지 애널리스트",
        "리스크 애널리스트",
        "자금세탁방지 애널리스트",
        "스크리닝 애널리스트",
        "이상금융거래탐지 애널리스트",
        "이상금융거래탐지 운영 애널리스트",
      ],
    },
  ];

  const testInfo = [
    "객관식 60문항, 90분 소요",
    "응시자는 최소 74%이상의 정답을 맞춰야 합격할 수 있습니다.",
  ];

  return (
    <>
      <SubTab tabs={tabData} />
      <SubLayout
        type="level1"
        url="/images/main/img_main_card03.svg"
        alt="CTMA"
        title="TRANSACTION MONITORING ASSOCIATE"
        desc="의심스러운 활동에 대한 거래 모니터링은 AML 컴플라이언스 프로그램의 필수 기능입니다. 회사에 자동화된 시스템을 이미 구현한 경우에도 퀄리티있는 거래 모니터링을 위해서는 담당자가 얼마나 조사를 잘 수행하는지에 많이 좌지우지 됩니다. 이 ACAMS 자격증은 거래 모니터링 담당자에 필요한 지식과 기술에 대한 새로운 글로벌 기준을 수립하고, 조직이 해당 직원들을 적절하게 교육하고 정식 자격증 시험을 통해 직원들의 지식을 입증하게 함으로써 금융 범죄 위기를 예방할 수 있도록 지원합니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type1"
        test_info={testInfo}
        price="1,045"
      />
    </>
  );
}
