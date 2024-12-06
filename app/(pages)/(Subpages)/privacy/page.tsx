import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침"
};

export default function Privacy() {
	return (
		<>
			<div className="terms__container">
				<p>주식회사 핑거(이하 '회사'라 함)는 ACAMS 프로그램 신청 중개 서비스를 제공함에 있어 개인정보 보호법, 신용정보의 이용 및 보호에 관한 법률, 정보통신망 이용촉진 및 정보보호(이하 ‘정보통신망법’) 등 개인정보 보호에 관한 관련 법령에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. 회사는 개인정보 처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다. 회사 개인정보 처리방침은 정부의 법률 및 지침의 변경과 회사 내부 정책의 변화에 따라 변경될 수 있으며 변경된 개인정보 처리방침은 사이트에 게시합니다.</p>
				
				<strong className="terms__title">1. 개인정보의 처리 목적</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 것입니다.</p>
					<ul className="bullet--num">
						<li className="bullet"><span>1)</span> ACAMS 프로그램 신청 접수 및 처리</li>
					</ul>
				</div>
				
				<strong className="terms__title">2. 수집 및 처리하는 개인정보의 항목</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 ACAMS 자격증 신청 중개 서비스 제공을 위해 다음의 개인정보 항목을 수집합니다.</p>
					<p>필수항목: 회사이메일, 이름, 전화번호, 영문재직회사명</p>
				</div>
				
				<strong className="terms__title">3.개인정보의 처리 및 보유 기간</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보 수집 시 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
					<p>보유 기간: 자격증 신청 접수 완료 후 1년 (단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존)</p>
				</div>
				
				<strong className="terms__title">4. 개인정보의 제3자 제공 및 위탁</strong>
				<div className="terms__box">
					<ul className="bullet--num">
						<li className="bullet">
							<span>1)</span>회사는 이용자들의 개인정보를 “1. 개인정보의 처리 및 수집 목적, 2. 수집 및 처리하는 개인정보의 항목”에서 고지한 범위 내에서 이용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
						
							<div className="bullet--num">
								<li className="bullet"><span>①</span>이용자들이 사전에 정보 제공에 동의한 경우</li>
								<li className="bullet"><span>②</span>법령의 규정에 의거하거나 법령 상 준수의무를 위하여 불가피한 경우</li>
								<li className="bullet"><span>③</span>명백히 이용자 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
								<li className="bullet"><span>④</span>회사의 정당한 이익을 달성하기 위하여 필요한 경우로서 명백하게 이용자들의 권리보다 우선하는 경우</li>
								<li className="bullet"><span>⑤</span>공중위생 등 공공의 안전과 안녕을 위하여 긴급히 필요한 경우</li>
							</div>
						</li>
						<li className="bullet">
							<span>2)</span>개인정보 처리 위탁
							<div className="terms__desc">회사는 서비스의 원활한 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다
								<p className="terms__desc">※ 위탁기간: 위탁업무 종료 시 까지</p>
								<ul className="bullet--dot">
									<li className="bullet">제공받는 자 : 주식회사 알앤씨글로벌</li>
									<li className="bullet">이용 목적 : ACAMS프로그램 신청 처리</li>
									<li className="bullet">제공정보 항목 : 회사이메일, 이름, 전화번호, 영문재직회사명</li>
								</ul>
							</div>
						</li>
					</ul>

					<table className="terms__table">
						<thead>
							<tr>
								<th>제공받는 자</th>
								<th>이용 목적</th>
								<th>제공정보 항목</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>주식회사 알앤씨글로벌</td>
								<td>ACAMS 프로그램 신청 처리</td>
								<td>회사이메일, 이름, 전화번호, 영문재직회사명</td>
							</tr>
						</tbody>
					</table>
				</div>
				
				<strong className="terms__title">5. 정보주체의 권리·의무 및 그 행사방법</strong>
				<div className="terms__box">
					<p className="terms__desc">이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
					<ul className="bullet--num">
						<li className="bullet"><span>1)</span>개인정보 열람요구</li>
						<li className="bullet"><span>2)</span>삭제요구</li>
						<li className="bullet"><span>3)</span>처리정지 요구</li>
					</ul>
					<p className="terms__desc">위 권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
				</div>
				
				<strong className="terms__title">6. 개인정보 수집 장치의 설치, 운영 및 거부에 관한 사항</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 이용자들에게 특화된 맞춤서비스를 제공하기 위해서 이용자들의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며 이용자들의 컴퓨터 하드 디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
					<ul className="bullet--num">
						<li className="bullet">
							<span>1)</span>쿠키 등 사용 목적 및 거절
							<ul className="bullet--num">
								<li className="bullet"><span>①</span>회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타켓 마케팅 및 개인 맞춤 서비스 제공</li>
								<li className="bullet"><span>②</span>이용자는 쿠키 설정에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</li>
							</ul>
						</li>
						<li className="bullet">
							<span>2)</span>쿠키 설정 거부 방법
							<div className="bullet__desc">
								<p>쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 귀하께서 쿠키 설치를 거부하였을 경우 로그인이 필요한 일부 서비스는 서비스 제공에 어려움이 있을 수 있습니다.</p>

								<ul className="bullet--dot">
									<li className="bullet">설정방법(인터넷 익스플로러의 경우): 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 &gt; 고급(“자동으로 쿠키 처리 안 함” 체크)</li>
									<li className="bullet">설정방법(크롬의 경우): 브라우저 우측 상단 설정 &gt; 보안 및 개인정보 보호 &gt; 쿠키 및 기타 사이트 데이터 &gt; 쿠키 차단</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				
				<strong className="terms__title">7. 개인정보의 안전성 확보조치</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다. 본 방침에서 정하지 않은 사항에 관하여는 개인정보 보호법 제29조, 시행령 제30조, 개인정보의 안전성 확보조치 기준에서 규정하는 바에 따릅니다.</p>
					<ul className="bullet--num">
						<li className="bullet"><span>1)</span>기술적 조치: 개인정보의 암호화, 보안프로그램 설치 및 운영, 접근통제시스템 설치, 개인정보처리시스템 등의 접근권한 관리 등</li>
						<li className="bullet"><span>2)</span>관리적 조치: 내부관리계획 수립 및 시행, 개인정보취급자 최소화 및 교육 시행 등</li>
						<li className="bullet"><span>3)</span>물리적 조치: 전산실, 자료보관실 등의 접근통제 등</li>
					</ul>
					<p className="terms__desc">이용자 본인의 부주의나 인터넷상의 문제로 개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.</p>
				</div>
				
				<strong className="terms__title">8. 개인정보 보호책임자</strong>
				<div className="terms__box">
					<p className="terms__desc">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
					<p className="terms__desc">개인정보 보호책임자 성명: [이름] 직책: [직책] 연락처: [전화번호], [이메일]</p>
				</div>
				
				<strong className="terms__title">9. 권익침해 구제방법</strong>
				<div className="terms__box">
					<ul className="bullet--num">
						<li className="bullet"><span>1)</span>회사는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.</li>
						<li className="bullet"><span>2)</span>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
						<li className="bullet"><span>3)</span>회사는 이용자가 제공한 정보의 정확성이나 신뢰성에 대해 보증하지 않으며, 이로 인해 발생하는 문제에 대해 책임을 지지 않습니다.</li>
					</ul>
				</div>

				<div className="terms__date">시행 일자 : 2024년 00월 00일</div>
			</div>
		</>
	);
}