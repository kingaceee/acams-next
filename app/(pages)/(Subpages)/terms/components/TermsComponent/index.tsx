import Article from '@/components/util/Article';
import Bullet from '@/components/util/Bullet';

function TermsComponent() {
  return (
		<div className="terms__container">
			<Article
				title="제1조 (목적)"
				description="본 약관은 주식회사 핑거(이하 “회사”)가 운영하는 AML HUB 웹사이트(이하 “웹사이트”)에서 제공하는 ACAMS(Association of Certified Anti-Money Laundering Specialists, LLC, 이하 “ACAMS”) 프로그램 신청 서비스(이하 “서비스”)의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항 등을 규정함을 목적으로 합니다."
			/>

			<Article
				title="제2조 (용어의 정의)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '“서비스”란 이용자가 본 웹사이트에서 프로그램 신청을 위하여 개인정보 및 기타 관련 정보를 입력하면, 회사가 이를 수탁자인 주식회사 알앤씨글로벌(이하 “수탁자”)을 통하여 ACAMS에 전달함으로써 프로그램 신청이 접수되도록 하는 모든 절차를 의미합니다.'},
						{text: '“이용자”란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말하며, 별도의 회원가입 절차 없이 비회원 자격으로 신청할 수 있습니다.'},
					]}
				/>
			</Article>

			<Article
				title="제3조 (약관의 효력 및 변경)"
				description="본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에서 정의하지 않은 것은 관련 법령 및 서비스 별 안내에서 정하는 바에 따르며, 그 외에는 일반 관례에 따릅니다."
			>
				<Bullet
					type="num"
					bullet={[
						{text: '본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.'},
						{text: '회사는 관련 법령 또는 업무상 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 그 효력이 발생합니다.'},
						{text: '회사는 약관 변경 시 이용자가 충분히 인지할 수 있도록 공지하며, 변경된 약관에 대한 미확인으로 인하여 이용자에게 발생하는 불이익에 대해서는 책임지지 않습니다.'},
					]}
				/>
			</Article>

			<Article
				title="제4조 (서비스의 내용)"
			>
			<Bullet
				type="num"
				bullet={[
					{text: '회사는 이용자로부터 ACAMS 프로그램 신청에 필요한 개인정보를 접수하여 이를 수탁자를 통해 ACAMS에 전달합니다.'},
					{text: '본 웹사이트에는 회원가입 절차가 없으며, 이용자는 비회원 상태로 신청 관련 정보를 입력할 수 있습니다.'},
					{text: '본 서비스는 이용자의 정보 접수 및 전달만을 제공하며, 결제 기능을 포함하지 않습니다. 결제에 관한 절차 및 금액 청구, 결제 안내 등은 ACAMS가 직접 진행하며, 이용자는 추후 ACAMS에서 안내하는 방법에 따라 결제를 진행하게 됩니다.'},
					{text: '회사는 ACAMS 회원가입이나 자격증 시험, 멤버십 운영 등 ACAMS 고유 업무에 관여하지 않으며, 모든 권한 및 절차는 ACAMS에 전적으로 귀속됩니다.'},
				]}
			/>
			</Article>

			<Article
				title="제5조 (서비스 이용)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '이용자는 회사가 정한 온라인 신청 양식에 따라 정확하고 최신의 정보를 입력해야 합니다.'},
						{text: '이용자가 부정확하거나 허위의 정보를 입력함으로써 발생하는 모든 불이익 및 책임은 이용자 본인에게 귀속됩니다.'},
						{text: '회사는 이용자가 입력한 신청 정보를 수탁자인 주식회사 알앤씨글로벌(이하 “수탁자”)에 전달하며, 수탁자는 이를 최종적으로 ACAMS에 제출함으로써 신청이 접수되도록 지원합니다.'},
						{text: '신청 정보가 ACAMS 측에서 오류 혹은 불일치로 확인될 경우, ACAMS는 직접 이용자에게 연락하여 정보를 수정하도록 요청할 수 있습니다.'},
						{text: '회사의 역할은 이용자가 입력한 정보를 수탁자를 통해 ACAMS에 전달하도록 하는 것에 한정되며, 이후 절차와 관련한 회사의 책임은 제9조에 따릅니다.'},
					]}
				/>
			</Article>

			<Article
				title="제6조 (개인정보의 보호)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '회사는 관련 법령에 따라 이용자의 개인정보를 적법하고 안전하게 처리합니다.'},
						{text: '본 서비스에서 수집되는 개인정보 항목, 보유·이용 기간, 제3자 제공(위탁) 등의 구체적인 사항은 별도의 개인정보처리방침에서 안내합니다.'},
						{text: '회사는 이용자가 본 서비스를 통해 입력한 개인정보를 오직 프로그램 신청 접수 목적으로만 사용하며, 이용자의 사전 동의 없이 이를 제3자에게 제공하거나 다른 용도로 활용하지 않습니다. 다만 법령 등에 의해 요구되는 경우는 예외로 합니다.'},
					]}
				/>
			</Article>
			
			<Article
				title="제7조 (회사의 의무)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '회사는 웹사이트를 안정적으로 운영하고, 이용자의 개인정보를 안전하게 보호하기 위하여 최선의 노력을 다합니다.'},
						{text: '회사는 본 약관에서 정한 목적 외에 이용자의 개인정보를 활용·누설·배포하지 않습니다. 다만 법령 등에 의해 요구되는 경우는 예외로 합니다.'},
						{text: '회사는 개인정보 보호 관련 법령을 준수하며, 이용자가 명시적으로 원치 않는 광고성 정보를 발송하지 않습니다.'},
					]}
			/>
			</Article>
			
			<Article
				title="제8조 (이용자의 의무)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '이용자는 본 약관 및 관련 법령을 준수해야 하며, 타인의 권리를 침해하는 행위를 하여서는 안 됩니다.'},
						{text: '이용자는 타인의 개인정보를 도용하거나 허위 정보를 입력해서는 안 되며, 이에 따른 모든 민형사상 책임은 이용자 본인에게 귀속됩니다.'},
						{text: '이용자는 웹사이트에 게시된 정보를 회사의 사전 승인 없이 복사·배포하거나 영리 목적으로 사용할 수 없습니다.'},
					]}
				/>
			</Article>

			<Article
				title="제9조 (책임의 제한)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '회사는 천재지변, 전쟁, 기타 이에 준하는 불가항력으로 인한 서비스 장애나 중단에 대해 책임을 부담하지 않습니다.'},
						{text: '회사는 이용자의 귀책사유(부정확하거나 허위의 정보 입력 등)로 인하여 발생하는 문제에 대해 책임지지 않습니다.'},
						{text: '회사는 이용자가 입력한 정보의 정확성·신뢰성을 보증하지 않으며, 고의 또는 중과실이 없는 한 이로 인한 피해에 대한 책임을 부담하지 않습니다.'},
						{text: '회사는 ACAMS의 회원가입, 결제 절차, 자격증 시험, 맴버십 운영 등 ACAMS 고유 업무에 관하여 어떠한 책임도 부담하지 않으며, 이와 관련하여 발생하는 모든 분쟁은 이용자와 ACAMS 간에 직접 해결해야 합니다.'},
					]}
				/>
			</Article>
			
			<Article
				title="제10조 (약관 외 준칙)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '회사는 필요한 경우 별도의 운영정책이나 개별 약관을 둘 수 있으며, 해당 운영정책 및 개별 약관이 본 약관과 충돌할 경우에는 개별 약관이 우선합니다.'},
						{text: '본 약관에 명시되지 않은 사항에 대해서는 「약관의 규제에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관계 법령 및 상관례에 따릅니다.'},
					]}
				/>
			</Article>

			<Article
				title="제11조 (준거법 및 관할법원)"
			>
				<Bullet
					type="num"
					bullet={[
						{text: '본 약관의 해석 및 적용에 관하여는 대한민국 법령을 적용합니다.'},
						{text: '서비스 이용과 관련하여 회사와 이용자 간 발생하는 분쟁에 대해서는 회사의 본점 소재지를 관할하는 법원을 관할법원으로 합니다.'},
					]}
				/>
			</Article>

			<Article
				title="[부칙]"
				description="본 약관은 2024년 12월 26일부터 시행합니다."
			>
			</Article>

			<Article
				type="date"
				noticeDate="2024년 12월 26일"
				enforceDate="2024년 12월 26일"
			>
			</Article>
		</div>
  );
}

export default TermsComponent;
