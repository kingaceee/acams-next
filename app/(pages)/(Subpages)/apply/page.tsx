import { Metadata } from "next";
import Image from "next/image";
import styles from "./apply.module.scss";
import Checkbox from "@/app/components/input/Checkbox";
import Radio from "@/app/components/input/Radio";
import InputBox from "@/app/components/input/InputBox";
import Select from "@/app/components/input/Select";
import Button from "@/app/components/buttons/Button";
import Modal from "@/app/components/modal/Modal";
import Terms from "../terms/page";
import Privacy from "../privacy/page";
// import FormGroup from "@/app/components/form/Form";

export const metadata: Metadata = {
  title: "프로그램 신청"
};

export default function Apply() {
	const userInfo = [
		{
			rowLabel: 'ACAMS 가입 구분',
			rowType: 'radioBox',
			inputBtn: [
				{
					id: 'serDiv1',
					for: 'serDiv1',
					name: 'serDiv',
					label: '신규가입'
				},
				{
					id: 'userDiv2',
					for: 'userDiv2',
					name: 'userDiv',
					label: '기존  ACAMS 회원'
				}
			],
		},
		{
			rowLabel: 'ACAMS 회원번호',
			rowType: 'inputBox',
			inputBox: [
				{
					id: 'input1',
					for: 'input1',
				}
			]
		},
	]
	const select_business = [
		{
			value: 'option1',
			label: ' Accounting Firm'
		},
		{
			value: 'option2',
			label: 'Banking'
		},
		{
			value: 'option3',
			label: 'Casino/Gaming'
		},
		{
			value: 'option4',
			label: 'Consultant'
		},
		{
			value: 'option5',
			label: 'Credit Union'
		},
		{
			value: 'option6',
			label: 'Government - Enforcement'
		},
		{
			value: 'option7',
			label: 'Government - Regulatory'
		},
		{
			value: 'option8',
			label: 'Insurance'
		},
		{
			value: 'option9',
			label: 'Law Firm'
		},
		{
			value: 'option10',
			label: 'Luxury Retail'
		},
		{
			value: 'option11',
			label: 'MSB'
		},
		{
			value: 'option12',
			label: 'Securities Dealer/Investment Firm'
		},
		{
			value: 'option13',
			label: 'Software/Technology'
		},
		{
			value: 'option14',
			label: 'Other'
		},
	]
	const select_title = [
		{
			value: 'option1',
			label: 'Mr.'
		},
		{
			value: 'option2',
			label: 'Ms.'
		},
		{
			value: 'option3',
			label: 'Mrs.'
		},
		{
			value: 'option4',
			label: 'Dr.'
		},
		{
			value: 'option5',
			label: 'Prof.'
		}
	]
	const select_program = [
		{
			value: 'option1',
			label: 'CKYCA-Certified Know Your Customer Associate'
		},
		{
			value: 'option2',
			label: 'CTMA-Certified Transaction Monitoring Associate'
		},
		{
			value: 'option3',
			label: 'CAFCA-Certified AML FinTech Compliance Associate'
		},
		{
			value: 'option4',
			label: 'CAMS-Certified Anti-Money Laundering Specialist'
		},
		{
			value: 'option5',
			label: 'CGSS-Certified Global Sanctions Specialist'
		},
		{
			value: 'option6',
			label: 'CCAS-Certified Cryptoasset Anti-Financial Crime Specialist'
		},
		{
			value: 'option7',
			label: 'CAFS-Certified Anti-Fraud Specialist'
		},
		{
			value: 'option8',
			label: 'Advanced CAMS-Audit'
		},
		{
			value: 'option9',
			label: 'Advanced CAMS-Financial Crimes Investigations'
		},
		{
			value: 'option10',
			label: 'Advanced CAMS-Risk Management'
		},
		{
			value: 'option11',
			label: '없음(맴버십만 신청)'
		},
	]
	
	return (
		<>
			<div className={styles.apply}>
				<div className={styles.apply__side}>
					<div className={styles.desc}>
						<p>본 사이트는 ACAMS 프로그램 신청 중개 서비스를 제공합니다.</p>
						<p>신청 절차 완료 후 시험 응시 및 자격 요건 등 관련 사항은 ACAMS 공식 사이트를 통해 확인하시기 바랍니다.</p>
					</div>

					<div className={styles.apply__info}>
						<p className={styles.info__title}>신청 절차 안내</p>
						<ol className={styles.info__list}>
							<li>
								<p className={styles.info__tit}>1. 신청자 정보 입력</p>
								<span className={styles.info__desc}>기존 회원과 신규 가입 여부에 따라 필요한 정보를 정확히 입력해 주세요.</span>
							</li>
							<li>
								<p className={styles.info__tit}>2. 프로그램 선택</p>
								<span className={styles.info__desc}>신청을 원하는 ACAMS 프로그램을 선택해 주세요.</span>
							</li>
							<li>
								<p className={styles.info__tit}>3. 이메일 인증</p>
								<span className={styles.info__desc}>입력하신 이메일 주소로 발송된 인증 메일을 열어 인증코드를 확인하여 이메일 소유 인증을 완료해 주세요.</span>
							</li>
							<li>
								<p className={styles.info__tit}>4. 신청 완료</p>
								<span className={styles.info__desc}>입력한 내용을 최종 확인한 후, 신청하기 버튼을 클릭하여 신청을 완료해 주세요.</span>
							</li>
							<li>
								<p className={styles.info__tit}>5. 신청 정보 전달</p>
								<span className={styles.info__desc}>귀하의 신청 정보는 ACAMS로 전달되며, 접수 처리에 약 3~5일이 소요 됩니다.</span>
							</li>
							<li>
								<p className={styles.info__tit}>6. 신청 결과 안내</p>
								<span className={styles.info__desc}>ACAMS에서 발송하는 신청 접수 확인 메일을 통해 결제 및 향후 절차에 대한 정보를 확인하실 수 있습니다.</span>
							</li>
						</ol>
					</div>
				</div>

				{/* [Dev] hidden class toggle 노출/비노출 */}
				<form className={`${styles.apply__form} `}>
					<div className="form__group">
						<strong className="form__title">신청자 정보</strong>

						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">ACAMS 가입 구분</label>
								<div className="form__item">
									<div className="radio__box">
										<Radio
											id="userDiv1"
											for="userDiv1"
											name="userDiv"
											label="신규가입"
										/>
										<Radio
											id="userDiv2"
											for="userDiv2"
											name="userDiv"
											label="기존 ACAMS 회원"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">ACAMS 회원번호</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input1"
										for="input1"
									/>
								</div>
							</div>
						</div>

						<div className="form__row col2">
							<div className="form__box">
								<label htmlFor="" className="form__tit">성(영문)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input2"
										for="input2"
									/>
								</div>
							</div>
							<div className="form__box">
								<label htmlFor="" className="form__tit">이름(영문)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input3"
										for="input3"
									/>
								</div>
							</div>
						</div>

						<div className="form__row col2">
							<div className="form__box">
								<label htmlFor="" className="form__tit">성(한글)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input22"
										for="input22"
									/>
								</div>
							</div>
							<div className="form__box">
								<label htmlFor="" className="form__tit">이름(한글)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input33"
										for="input33"
									/>
								</div>
							</div>
						</div>

						<div className="form__row col2">
							<div className="form__box">
								<label htmlFor="" className="form__tit">회사명(영문)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input222"
										for="input222"
									/>
								</div>
							</div>
							<div className="form__box">
								<label htmlFor="" className="form__tit">회사명(한글)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input333"
										for="input333"
									/>
								</div>
							</div>
						</div>

						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">업종</label>
								<div className="form__item">
									<div className="select__box">
										<Select
											placeholder="선택하세요"
											options={select_business}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="form__row col2">
							<div className="form__box">
								<label htmlFor="" className="form__tit">부서(영문)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input222"
										for="input222"
									/>
								</div>
							</div>
							<div className="form__box">
								<label htmlFor="" className="form__tit">부서(한글)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input333"
										for="input333"
									/>
								</div>
							</div>
						</div>

						<div className="form__row col2">
							<div className="form__box">
								<label htmlFor="" className="form__tit">직책(영문)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input222"
										for="input222"
									/>
								</div>
							</div>
							<div className="form__box">
								<label htmlFor="" className="form__tit">직책(한글)</label>
								<div className="form__item">
									<InputBox
										type="text"
										id="input333"
										for="input333"
									/>
								</div>
							</div>
						</div>

						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">이메일</label>
								<div className="form__item">
									<InputBox
										type="email"
										id="input4"
										for="input4"
										button="이메일 인증"
									/>
								</div>
								{/* [Dev] hidden class 추가시 비노출 */}
								<p className="alert--text hidden">ACAMS 회원번호의 계정에 등록된 이메일로 신청 가능하며, <br/>입력한 이메일의 소유자 인증이 필요 합니다.</p>
								<p className="alert--text">ACAMS 회원번호의 계정에 등록된 이메일로 신청 가능하며, <br/>입력한 이메일의 소유자 인증이 필요 합니다.</p>
							</div>
						</div>

						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">인증숫자</label>
								<div className="form__item">
									<InputBox
										type="number"
										id="input4"
										for="input4"
										placeholder="인증숫자 6자리를 입력해주세요"
										// [Dev] 인증완료시 text 변경 -- 인증 완료
										button="인증코드 입력"
										timer={true}
									/>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">유선번호</label>
								<div className="form__item">
									<InputBox
										type="tel"
										id="input1"
										for="input1"
									/>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">휴대폰번호</label>
								<div className="form__item">
									<InputBox
										type="number"
										id="input1"
										for="input1"
									/>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label htmlFor="" className="form__tit">개인이메일</label>
								<div className="form__item">
									<InputBox
										type="email"
										id="input1"
										for="input1"
									/>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">영문호칭</label>
								<div className="form__item">
									<div className="select__box">
										<Select
											placeholder="선택하세요"
											options={select_title}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="form__group">
						<strong className="form__title">프로그램 신청 내용</strong>
						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">자격증</label>
								<div className="form__item">
									<div className="select__box">
										<Select
											placeholder="프로그램 종류"
											options={select_program}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">응시언어</label>
								<div className="form__item">
									<div className="radio__box">
										<Radio
											id="textLang1"
											for="textLang1"
											name="textLang"
											label="영어"
										/>
										<Radio
											id="textLang2"
											for="textLang2"
											name="textLang"
											label="한국어"
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">패키지</label>
								<div className="form__item">
									<div className="radio__box">
										<Radio
											id="testpkg1"
											for="testpkg1"
											name="testpkg"
											label="기본"
										/>
										<Radio
											id="testpkg2"
											for="testpkg2"
											name="testpkg"
											label="온라인 강의 포함"
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className="form__row">
							<div className="form__box">
								<label className="form__tit">멤버십</label>
								<div className="form__item">
									<div className="radio__box">
										<Radio
											id="membership1"
											for="membership1"
											name="membership"
											label="1년 신청"
										/>
										<Radio
											id="membership2"
											for="membership2"
											name="membership"
											label="3년 신청"
										/>
										<Radio
											id="membership3"
											for="membership3"
											name="membership"
											label="보유중"
											hidden={true}
										/>
									</div>
								</div>
								<p className="alert--text">자격증 신청시 멤버십을 반드시 보유해야 합니다.</p>
							</div>
						</div>
					</div>

					<div className={`${styles.apply__box} ${styles.priced}`}>
						<strong className={styles.title}>비용</strong>

						<div className={styles.priced__calc}>
							<div className={styles.priced__row}>
								<p className={styles.tit}>자격증 :</p>
								<p className={styles.price}>$ <span>1,295</span> USD</p>
							</div>
							<div className={styles.priced__row}>
								<p className={styles.tit}>멤버십 : </p>
								<p className={styles.price}>$ <span>1,295</span> USD</p>
							</div>
							<div className={styles.priced__row}>
								<p className={styles.tit}>합계 : </p>
								<p className={styles.price}>$ <span>1,295</span> USD</p>
							</div>

							<span className={styles.desc}>Tax 별도, 10%(공공기관 종사자 5%) 할인 적용 가능</span>
						</div>
					</div>
					
					<div className={`${styles.apply__box} ${styles.check}`}>
						<strong className={styles.title}>확인사항</strong>

						<ul className={styles.check__list}>
							<li>
								<Checkbox
									id="chkbox1"
									for="chkbox1"
									label="할인 적용된 정확한 결제 금액은 ACAMS 결제 메일을 통해 확인 가능합니다."
								/>
							</li>
							<li>
								<Checkbox
									id="chkbox2"
									for="chkbox2"
									label="신청 절차 안내를 확인 하였습니다."
								/>
							</li>
							<li>
								<Checkbox
									id="chkbox3"
									for="chkbox3"
									link="이용약관"
									label="을 확인하였습니다."
								/>
							</li>
							<li>
								<Checkbox
									id="chkbox4"
									for="chkbox4"
									link="개인정보처리방침"
									label="을 확인하였습니다."
								/>
							</li>
						</ul>
					</div>

					<div className={styles.apply__footer}>
						<Button id="btnApply" label="신청하기" publType="primary" />
					</div>
				</form>

				{/* [Dev] hidden class toggle 노출/비노출 */}
				<div className={`${styles.apply__complete} hidden`}>
					<Image src="/images/sub/ico_sub_apply_complite.svg" width={50} height={50} alt="신청완료 icon" aria-hidden={true} />
					<strong>신청 완료</strong>
					<div className={styles.desc}>ACAMS 접수 완료 까지 3~5일정도 소요 되며, <br/>접수 완료 후 ACAMS에서 발신하는 이메일의 안내에 따라 주시기 바랍니다.</div>
				</div>
			</div>

			<Modal
				isOpen={false}
				modalTitle="이용약관"
				buttons={[
					{ label: '확인', publType: 'primary' },
				]}
			>
				<Terms />
			</Modal>
			
			<Modal
				isOpen={false}
				modalTitle="개인정보처리방침"
				buttons={[
					{ label: '확인', publType: 'primary' },
				]}
			>
				<Privacy />
			</Modal>
		</>
	);
}