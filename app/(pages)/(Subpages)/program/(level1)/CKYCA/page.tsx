import { Metadata } from "next";
import SubTab from "../../component/SubTab";
import SubLayout from "../../component/SubLayout";

export const metadata: Metadata = {
  title: "CKYCA",
};
export default function CKYCA() {
  const tabData = [
    { name: "CKYCA", url: "/program/CKYCA", active: true },
    { name: "CTMA", url: "/program/CTMA", active: false },
    { name: "CAFCA", url: "/program/CAFCA", active: false },
  ];

  const listLeft = [
    {
      title: "ACAMS는 왜 CKYCA를 만들었는가?",
      desc_type: "text",
      desc: "ACAMS의 임무는 금융 범죄를 예방하는 것이고, KYC/CDD는 이를 위해 가장 중요한 업무입니다. 초기 경력 전문가들이 고객 온보딩에 대한 필수 역량을 발휘하도록 보장함으로써, CKYCA 자격증을 획득한 전문가들은 잠재적 불법 행위자가 기관의 서비스를 악용하는것을 방지할 수 있습니다. ACAMS는 KYC/CDD 담당자가 알아야 될 부분을 설명하고, 관련 교육 자료를 학습하여 역량을 발휘할 수 있게 함으로써 기관이 금융 범죄 위험을 줄일 수 있도록 지원합니다.",
    },
    {
      title: "왜 CKYCA 자격증을 획득해야 하는가?",
      desc_type: "text",
      desc: "시험을 통해 획득하는 해당 자격증은 프론트 라인팀과 운영팀이 고객 확인(KYC) 및 고객 실사(CDD) 업무와 수행을 위한 역량을 갖출 수 있도록 합니다. CKYCA는 자금세탁 방지 컴플라이언스의 표준인 CAMS를 생성한 협회에서 새로운 글로벌 벤치마크를 기반으로 만든 자격증으로 직원들이 자격증을 얻음으로서 조직의 차별성을 키울 수 있습니다.",
    },
    // { title: "CKYCA 자격증은 누구를 위한 것일까?", desc: "" },
  ];

  const listRight = [
    {
      title: "프로그램의 대상",
      desc: [
        "CKYCA는 KYC/CDD 업무를 미래에 희망하거나 현재 이 업무를 담당하고 있는 초기 경력 전문가와 이들을 감독하는 담당자를 위한 자격증입니다. 6~12개월의 경험을 쌓은 CKYCA 전문가는 최소한의 감독만으로 EDD를 수행하고, 고위험 사례의 적절한 상부보고가 이루어질 수 있어야 합니다.",
      ],
    },
    {
      title: "CKYCA에 적합한 대상",
      desc: [
        "KYC 애널리스트",
        "KYC/CDD 애너리스트",
        "KYC 온보딩 애널리스트",
        "KYC 담당자",
        "KYC 팀장",
        "클라이언트/고객 온보딩 애널리스트",
        "클라이언트/고객 온보딩 스페셜리스트",
        "AML 담당자",
      ],
    },
  ];

  const testInfo = [
    "객관식 60문항, 90분 소요",
    "응시자는 최소 72%이상의 정답을 맞춰야 합격할 수 있습니다.",
  ];

  return (
    <>
      <SubTab tabs={tabData} />
      <SubLayout
        type="level1"
        url="/images/main/img_main_card02.svg"
        alt="CKYCA"
        title="KNOW UOUR CUSTOMER ASSOCIATE"
        desc="효과적인 KYC/CDD는 금융 범죄를 예방하기 위해 필수적이며, 새로운 ACAMS 자격증인 CKYCA(Certified Know Your Customer Associate)는 해당 분야의 전문가를 위한 새로운 글로벌 기준을 제공합니다. CKYCA는 금융 기관을 보호하는 데 중요한 역할을 하는 프론트 라인팀과 운영 팀을 위해 개발된 ACAMS의 첫 번째 자격증입니다."
        desc_left={listLeft}
        desc_right={listRight}
        price_type="type1"
        test_info={testInfo}
        price="1,045"
      />
    </>
  );
}
