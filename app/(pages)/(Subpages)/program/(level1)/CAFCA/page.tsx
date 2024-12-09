import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CAFCA",
};
export default function CAFCA() {
  const tabData = [
    { name: "CKYCA", url: "/program/CKYCA", active: false },
    { name: "CTMA", url: "/program/CTMA", active: false },
    { name: "CAFCA", url: "/program/CAFCA", active: true },
  ];

  const listLeft = [
    {
      title: "CAFCA란 무엇인가?",
      desc_type: "text",
      desc: "CAFCA(Certified AML FinTech Compliance Associate)는 핀테크 전문가에 의해 개발되고 ACAMS가 인증하는 핀테크 전문가를 위한 자격증입니다. CAFCA 프로그램은 8시간 디지털 학습 과정과 90분 시험으로 이루어집니다. 학습 내용은 핀테크 및 레그테크 전문 컨설팅업체로, 빠르게 확장하고 설립된 핀테크 회사의 글로벌 포",
    },
    {
      title: "왜 CAFCA가 만들어졌는가?",
      desc_type: "text",
      desc: "이 프로그램은 핀테크의 금융 범죄 예방은 다르다는 인식을 바탕으로 이에 대응하기 위해 개발되었습니다. CAFCA는 조직을 보호하는 팀이 핵심 컴플라이언스의 원칙, 기능 및 위험을 이해하게 함으로써 팀의 능력과 역량을 향상시키기 위해 설계되었습니다. 또한, 완벽하게 자격을 갖춘 팀은 귀사가 금융 범죄 위험을 심각하게 생각한다는 것을 보여줍니다.",
    },
  ];

  const listRight = [
    {
      title: "프로그램의 대상",
      desc: [
        "AML 업무를 겸임하는 직원이 있는 소형스타트업",
        "보다 구조화된 AML 프로그램으로 전환 중인 중형 핀테크",
        "전담 컴플라이언스 팀이 있는 대형핀테크",
      ],
    },
    {
      title: "CKYCA에 적합한 대상",
      desc: [
        "급성장기를 경험 중이거나 이를 준비 중인 모든 핀테크‒ 결제 서비스 제공업체(PSP)",
        "선불 카드를 포함한 전자 화폐 제공업체 및 디지털 지갑",
        "서비스형 뱅킹(BaaS) 제공업체",
        "새로운 디지털 상품을 만드는 네오 뱅크, 챌린저 뱅크 및 전통 은행",
        "핀테크를 고객으로 수용하는 은행",
        "핀테크 아웃소싱 업무를 관리하는 컨설팅업체‒ 크라우드 펀딩 및 P2P 대출업체‒ 인슈어테크 회사‒ 투자 및 자산 관리 기술 회사",
        "암호화폐 거래소 및 지갑 제공업체(블록체인 기술이 아닌 현금 이체 및 교환 측면 관련)",
        "위험성이 높은 지역의 은행 계좌가 없는 “비금융권 인구(un-banked)”를 지원하여 금융 수용성을 확대하고자 하는 조직",
      ],
    },
  ];

  const testInfo = [
    "객관식 60문항, 90분 소요",
    "응시자는 최소 70%이상의 정답을 맞춰야 합격할 수 있습니다.",
  ];

  return (
    <>
      <SubTab tabs={tabData} />
      <SubLayout
        type="level1"
        url="/images/main/img_main_card01.svg"
        alt="CAFCA"
        title="AML FINTECH COMPLIANCE ASSOCIATE"
        desc="테크는 변화를 빠르게 만들고, 빠른 성장을 가능하게 합니다. 핀테크사의 지속적인 성장을 위해 금융 범죄 위험을 이해하고 완화하는 것이 필수적입니다. 투자자, 고객, 글로벌 규제 당국 및 뱅킹 서비스를 제공하는 금융 기관은 모두 핀테크가 위험 관리 계획을 수립하고 적절하게 훈련된 업무인력을 갖추고 있을것을 기대합니다. 이 새로운 Associate 레벨 자격증은 개인이 고유한 상황에 맞게 설계된 금융 범죄 예방에 대한 준비가 되어 있음을 입증하고, 조직이 그에 대한 증거를 제공할 수 있도록 지원합니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type2"
        test_info={testInfo}
        price="1,045"
      />
    </>
  );
}
