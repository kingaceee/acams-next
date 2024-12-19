import styles from './index.module.scss';

interface SideInfoProps {
  className?: string;
}

const SideInfo: React.FC<SideInfoProps> = ({ className }) => {
  return (
    <div className={styles.apply__side}>
      <div className={styles.desc}>
        <p>AML HUB는 ACAMS 프로그램 신청 관련 정보를 ACAMS로 전달합니다.</p>
        <p>이후의 처리와 안내는 ACAMS에서 진행됩니다.</p>
      </div>

      <div className={styles.apply__info}>
        <p className={styles.info__title}>신청 절차 안내</p>
        <ol className={styles.info__list}>
          <li>
            <p className={styles.info__tit}>1. 신청자 정보 입력</p>
            <span className={styles.info__desc}>기존 회원과 신규 가입 여부에 따라 필요한 정보를 빠짐없이 입력해 주세요.</span>
          </li>
          <li>
            <p className={styles.info__tit}>2. 이메일 인증</p>
            <span className={styles.info__desc}>입력하신 이메일 주소로 발송된 인증 메일을 열어 인증번호를 확인하여 이메일 소유 인증을 완료해 주세요.</span>
          </li>
          <li>
            <p className={styles.info__tit}>3. 프로그램 선택</p>
            <span className={styles.info__desc}>신청을 원하는 ACAMS 프로그램을 선택해 주세요.</span>
          </li>
          <li>
            <p className={styles.info__tit}>4. 신청 하기</p>
            <span className={styles.info__desc}>입력한 내용을 최종 확인한 후, 신청하기 버튼을 클릭하여 신청을 완료해 주세요.</span>
          </li>
          <li>
            <p className={styles.info__tit}>5. 신청 정보 전달</p>
            <span className={styles.info__desc}>귀하의 신청 정보는 ACAMS로 전달되며, 접수 처리에 약 3~5일이 소요 됩니다.</span>
          </li>
          <li>
            <p className={styles.info__tit}>6. 신청 결과 안내</p>
            <span className={styles.info__desc}>ACAMS에서 발송하는 신청 접수 확인 메일을 통해 결제 및 향후 절차에 대한 안내를 받으실 수 있습니다.</span>
          </li>
        </ol>
      </div>
    </div>
  );
};


export default SideInfo;
