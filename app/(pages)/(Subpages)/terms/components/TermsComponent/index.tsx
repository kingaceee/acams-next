import Link from 'next/link';

function TermsComponent() {
  return (
    <>
      <div className='terms__container'>
        <strong className='terms__title'>제1조 (목적)</strong>
        <div className='terms__box'>
          <p className='terms__desc'>
            본 약관은 주식회사 핑거(이하 "회사")가 운영하는 Association of Certified Anti-Money Laundering Specialists,
            LLC(이하 “ACAMS”) 자격증 신청 웹사이트(이하 "웹사이트")를 통해 제공하는 서비스의 이용조건 및 절차, 회사와
            이용자의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
          </p>
        </div>

        <strong className='terms__title'>제2조 (용어의 정의)</strong>
        <div className='terms__box'>
          <p className='terms__desc'>
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에서 정의하지 않은 것은 관련 법령 및 서비스 별
            안내에서 정하는 바에 따르며, 그 외에는 일반 관례에 따릅니다.
          </p>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>"서비스"란 회사가 웹사이트를 통해 제공하는 “ACAMS” 자격증 및 맴버십 신청 중개 서비스를
              말합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제3조 (이용약관의 효력 및 적용과 변경)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이
              발생합니다.
            </li>
            <li className='bullet'>
              <span>3)</span>“웹사이트”를 통해 공지된 변경된 약관에 대한 정보를 알지 못해 발생하는 회원의 피해는
              회사에서 책임지지 않습니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제4조 (서비스의 내용)</strong>
        <div className='terms__box'>
          <p className='terms__desc'>
            회사는 이용자가 희망하는 “ACAMS” 프로그램의 신청에 필요한 개인정보 및 신청 프로그램 정보를 입력받아 입력받은
            내용을 “ACAMS”에 전달하여 자격증 신청을 중개하는 서비스를 제공합니다.
          </p>
        </div>

        <strong className='terms__title'>제5조 (서비스 이용)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>이용자는 회사가 정한 양식에 따라 정보를 입력하여야 합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>이용자가 제공한 정보의 정확성에 대한 책임은 이용자에게 있으며, 부정확하거나 허위인 정보로
              인해 발생하는 불이익에 대해 회사는 책임을 지지 않습니다.
            </li>
            <li className='bullet'>
              <span>3)</span>입력된 정보는 “ACAMS” 자격증 신청을 위해 ACAMS에 전달되며, 전달된 정보의 부정확성이나
              오류가 확인될 경우 “ACAMS”에서 직접 이용자에게 연락하여 정보 수정을 요청할 수 있습니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제6조 (개인정보의 보호)</strong>
        <div className='terms__box'>
          <p className='terms__desc'>
            회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하며, 개인정보처리방침을 통해 이용자의
            개인정보가 어떤 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떤 조치가 취해지고 있는지
            알려드립니다.
          </p>
        </div>

        <strong className='terms__title'>제7조 (회사의 의무)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>회사는 안정적인 서비스 제공을 위해 노력합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>회사는 이용자가 제공한 개인정보를 본 서비스 목적 이외의 용도로 사용하지 않습니다. 또한
              본인의 승낙 없이 타인에게 누설, 배포하지 않습니다. 다만, 전기통신관련법령 등 관계법령에 의하여 관계
              국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.
            </li>
            <li className='bullet'>
              <span>3)</span>회사는 이용자가 안전하게 홈페이지의 서비스를 이용할 수 있도록 법률을 준수하며, 이용자가
              원하지 않는 영리 목적의 광고성 전자 우편 등을 발송하지 않습니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제8조 (이용자의 의무)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>이용자는 본 약관 및 관련 법령을 준수하여야 합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>이용자는 타인의 정보를 도용하여서는 안됩니다.
            </li>
            <li className='bullet'>
              <span>3)</span>이용자는 사전 승낙 없이 서비스를 이용한 어떠한 영리행위도 할 수 없습니다.
            </li>
            <li className='bullet'>
              <span>4)</span>이용자는 “웹사이트”를 이용하여 얻은 정보를 회사의 사전승낙 없이 복사, 복제, 변경, 번역,
              출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제9조 (책임제한)</strong>
        <div className='terms__box'>
          <p className='terms__desc'>
            이용자는 개인정보침해로 인한 신고나 상담이 필요하신 경우 아래 기관에 문의하시기 바랍니다.
          </p>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>개인정보분쟁조정위원회 (
              <Link href={'https://www.kopico.go.kr/'} target='blank'>
                www.kopico.go.kr
              </Link>{' '}
              / 1833-6972)
            </li>
            <li className='bullet'>
              <span>2)</span>한국인터넷진흥원 개인정보침해신고센터 (
              <Link href={'https://privacy.kisa.or.kr/'} target='blank'>
                privacy.kisa.or.kr
              </Link>{' '}
              / 118)
            </li>
            <li className='bullet'>
              <span>3)</span>대검찰청 사이버수사과 (
              <Link href={'https://www.spo.go.kr/'} target='blank'>
                www.spo.go.kr
              </Link>{' '}
              / 1301)
            </li>
            <li className='bullet'>
              <span>4)</span>경찰청 사이버안전국 (
              <Link href={'https://cyberbureau.police.go.kr/'} target='blank'>
                cyberbureau.police.go.kr
              </Link>{' '}
              / 182)
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제10조 (약관 외 준칙)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>회사는 필요한 경우 기타 유ㆍ무료 서비스 내의 운영원칙 또는 개별약관(이하 '서비스 별
              약관'이라 합니다)을 정할 수 있으며, 본 약관과 서비스 별 약관의 내용이 상충되는 경우에는 서비스 별 약관의
              내용을 우선하여 적용합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>이 약관에 명시되지 아니한 사항은 약관의 규제에 관한 법률, 전기통신기본법, 전기통신사업법,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률 등의 관계법령 또는 상관례에 따릅니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>제11조 (준거법 및 관할법원)</strong>
        <div className='terms__box'>
          <ul className='bullet--num'>
            <li className='bullet'>
              <span>1)</span>이 약관의 해석·적용에 관하여는 대한민국법을 적용합니다.
            </li>
            <li className='bullet'>
              <span>2)</span>본 사이트 이용과 관련하여 분쟁이 발생할 경우에는 회사의 본점 소재지를 관할하는 법원으로
              합니다.
            </li>
          </ul>
        </div>

        <strong className='terms__title'>[부칙]</strong>
        <div className='terms__box'>
          <p className='terms__desc'>본 약관은 2024년 00월 00일부터 시행합니다.</p>
        </div>

        <div className='terms__date'>
          <p>공고 일자 : 2024년 00월 00일</p>
          <p>시행 일자 : 2024년 00월 00일</p>
        </div>
      </div>
    </>
  );
}

export default TermsComponent;
