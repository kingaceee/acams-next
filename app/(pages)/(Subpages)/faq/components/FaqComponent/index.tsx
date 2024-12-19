'use client';

import styles from './index.module.scss';

import { useState } from 'react';
import Link from 'next/link';
import cs from 'clsx';

import SubTab, { PropTypes as SubTabPropTypes } from '@/(pages)/(Subpages)/program/component/SubTab';
import Accordion, { PropTypes as AccordionPropTypes } from '@/components/util/Accordion';

function FaqComponent() {
  const [selected, setSelected] = useState<keyof typeof FAQ_DATA>('preparation');

  const handleTabChange: SubTabPropTypes['onChange'] = tab => {
    setSelected(tab.desc as keyof typeof FAQ_DATA);
  };

  const header: SubTabPropTypes['tabs'] = Object.keys(FAQ_DATA).map(key => ({
    name: FAQ_DATA[key as keyof typeof FAQ_DATA].title,
    desc: key,
  }));

  const data: AccordionPropTypes['Data'] = FAQ_DATA[selected].faq.map(data => ({
    title: data.title,
    content: data.content,
  }));

  return (
    <div className={styles.faq}>
      <SubTab type='filter' tabs={header} selected={selected} onChange={handleTabChange} />
      <Accordion Data={data} />
    </div>
  );
}

export default FaqComponent;

const FAQ_DATA = {
  preparation: {
    title: '시험 준비 및 정보',
    faq: [
      {
        title: 'CAMS 시험 시간과 합격 기준은 어떻게 되나요?',
        content: '시험 시간은 210분이며, 총 120문제 중 75문제 이상을 맞추면 합격입니다. CAMS 외 기타 시험의 시간은 시험마다 상이합니다.',
      },
      {
        title: '시험 링크는 언제 제공되며, 어떻게 확인하나요?',
        content: '시험 링크는 시험 안내 메일에서 제공되며, 시험 시작 30분 전에 활성화됩니다.',
      },
      {
        title: '시험에 추천되는 브라우저는 무엇인가요?',
        content: '크롬 브라우저를 사용하는 것이 추천됩니다.',
      },
      {
        title: '시험을 위한 장비 요건은 무엇인가요?',
        content: '카메라가 작동하는 노트북이 필수입니다. 시험 중 카메라를 통해 감독관이 감독하며 녹화됩니다.',
      },
      {
        title: '감독관과 시험 중 의사소통은 어떻게 이루어지나요?',
        content: '감독관은 외국인으로 영어로 의사소통이 진행됩니다. 말하기가 어려운 경우, 채팅을 통해 소통할 수 있습니다.',
      },
      {
        title: '시험 결제 후 시험 응시는 언제까지 가능한가요?',
        content: '시험 결제 후 6개월 이내에 시험을 응시해야 합니다.',
      },
      {
        title: '시험 언어를 변경할 수 있나요?',
        content: '시험 언어는 변경 가능하지만, 기존 학습 자료의 언어는 변경할 수 없습니다.',
      },
    ],
  },

  provision: {
    title: '시험 규정 및 진행',
    faq: [
      {
        title: '시험 중 책상 위에 둘 수 있는 물건은 무엇인가요?',
        content: '시험 중 PC 외의 물건은 허용되지 않습니다. 손목시계 또한 착용할 수 없습니다.',
      },
      {
        title: '감독관이 시험 환경 확인을 요청하면 어떻게 대응해야 하나요?',
        content: '감독관이 휴대폰으로 전후좌우 사진을 요구할 경우 이에 따라 사진을 찍어 응해야 합니다.',
      },
      {
        title: '시험 중 네트워크 문제가 발생하면 어떻게 해야 하나요?',
        content:
          '시험 도중 네트워크 환경 등으로 시험이 중단되는 경우, 한국 피어슨뷰(Pearson VUE) 고객센터(080-760-0880)로 연락하여 재시험을 요청해야 합니다.',
      },
    ],
  },

  personal: {
    title: '신분증 및 개인정보 관리',
    faq: [
      {
        title: '시험에 필요한 신분증 종류는 무엇인가요?',
        content: '영어 이름이 표시된 여권과 정부 신분증(주민등록증, 운전면허증)이 필요합니다.',
      },
      {
        title: '시험 시작 전 신분증 제출 과정은 어떻게 되나요?',
        content: '시험 시작 전 스마트폰으로 신분증 업로드 사이트 링크가 제공되며, 이를 통해 제출합니다.',
      },
      {
        title: '시험 전 등록된 휴대폰 번호가 중요한 이유는 무엇인가요?',
        content: '신분증 업로드 링크가 휴대폰으로 전송되기 때문에 정확한 번호가 회원 정보로 등록되어야 합니다.',
      },
      {
        title: '등록된 개인정보를 변경하려면 어떻게 해야 하나요?',
        content: 'ACAMS 홈페이지의 "My Account -> Account Home" 화면에서 Contact Info 및 Address 등 세부 정보를 변경할 수 있습니다.',
      },
    ],
  },

  result: {
    title: '결과 및 자격 유지',
    faq: [
      {
        title: '시험 합격 후 합격증은 언제, 어떻게 받을 수 있나요?',
        content: '시험 종료 후 즉시 PDF 전자합격증이 이메일로 제공되며, 종이 합격증은 5~8주 후 국제우편으로 발송됩니다.',
      },
      {
        title: '자격증 자격 유지 조건은 무엇인가요?',
        content: '시험 통과 후 매 3년(초급 자격증은 매년)마다 멤버십을 유지한 상태에서 Recertification을 진행해야 자격이 유지됩니다.',
      },
      {
        title: '한국어로 안내된 CAMS Recertification 웹페이지가 있나요?',
        content: (
          <>
            다음 링크에서 한국어로 제공되는 CAMS Recertification 웹페이지를 확인할 수 있습니다.
            <Link href='https://www.acams.org/en/certifications/cams-recertification/korean#%EA%B0%9C%EC%9A%94-f813a62e' className={cs(styles.link)}>
              CAMS Recertification 한국어 웹페이지.
            </Link>
          </>
        ),
      },
    ],
  },

  credit: {
    title: 'Credit 및 학습자료',
    faq: [
      {
        title: 'ACAMS Credit은 어떻게 적립되나요?',
        content:
          'ACAMS Credit을 적립하려면 멤버십 결제 후 무료 또는 유료 행사나 교육을 수강해야 합니다. 적립된 학점은 CAMS, CGSS 등 자격증 취득 및 갱신에 활용됩니다. 단, 멤버십을 결제하지 않고 교육을 수강할 경우 학점이 적립되지 않습니다.',
      },
      {
        title: 'ACAMS Credit은 어떻게 인정되나요?',
        content: `ACAMS Credit은 아래 기준에 따라 인정됩니다:
    - 근무 경력: 금융회사 AML 관련 업무는 1년당 10 Credit이 인정됩니다.
    - 학력: 영문 졸업증명서를 제출하면 학사학위는 20 Credit, 석사학위는 30 Credit, 박사학위는 40 Credit이 인정됩니다.
    - 교육: CAMS 학습 과정을 완료하면 6 Credit, ACAMS 회원은 무료 웨비나 시청 후 1 Credit이 적립됩니다.`,
      },
      {
        title: 'ACAMS Credit 인증 자료는 어떻게 제출하나요?',
        content:
          'ACAMS 홈페이지의 "My Account -> Account Home -> "Applications" 섹션 "SEE ALL" 클릭 -> 자격증 종류를 선택하고 "2 (자격증명) Certification Application"을 통해 신청서를 제출합니다. 제출 후 검토는 1-2주가 소요되며, 수정이 필요한 경우 인증팀에서 안내 이메일을 발송합니다.',
      },
      {
        title: '시험 스터디 가이드는 어디에서 다운로드할 수 있나요?',
        content: (
          <>
            ACAMS LMS 학습관리시스템(<Link href='https://learn.acams.org/' className={cs(styles.link)}>https://learn.acams.org</Link>)에 로그인 후 {`"My Courses"`}에서
            다운로드할 수 있습니다.
          </>
        ),
      },
    ],
  },

  support: {
    title: '멤버십 및 기타지원',
    faq: [
      {
        title: 'ACAMS 멤버십 및 자격증 패키지 상품은 환불이 가능한가요?',
        content: (
          <>
            멤버십과 자격증 패키지 상품은 환불이 불가합니다. 관련 사항은
            <Link href='https://www.acams.org/en/about/cancellation-and-refund-policies' className={cs(styles.link)}>
              ACAMS Cancellation and Refund Policies
            </Link>
            을 확인하시기 바랍니다.
          </>
        ),
      },
      {
        title: 'ACAMS 마케팅 이메일 수신을 중단하려면 어떻게 해야 하나요?',
        content:
          'ACAMS 홈페이지의 "My Account -> Account Home -> Communication Preferences"에서 "Unsubscribe from all marketing communications"를 선택한 후 Submit 버튼을 누르시면 이메일 수신이 중단됩니다.',
      },
      {
        title: 'ACAMS 공식 문의는 어떻게 할 수 있나요?',
        content: (
          <>
            회원 등록, 결제, 시험 신청 등 모든 공식 문의는
            <Link href='https://www.acams.org/en/help-center' className={cs(styles.link)}>
              ACAMS Help Center
            </Link>
            를 통해 접수 가능합니다. 한국어로도 문의하실 수 있습니다.
          </>
        ),
      },
      {
        title: '신청 후 안내받은 처리 기간이 지나도 ACAMS로부터 이메일이 오지 않아요.',
        content: '해당 이메일이 스팸 메일로 분류되었을 가능성이 높습니다. 스팸 메일함을 확인해 주시기 바랍니다.',
      },
    ],
  },
};
