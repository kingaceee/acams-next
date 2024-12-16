import styles from './index.module.scss';

import Image from 'next/image';

function Complete() {
  return (
    <div className={`${styles.apply__complete} hidden`}>
      <Image src='/images/sub/ico_sub_apply_complite.svg' width={50} height={50} alt='신청완료 icon' aria-hidden={true} />
      <strong>신청 완료</strong>
      <div className={styles.desc}>
        ACAMS 접수 완료 까지 3~5일정도 소요 되며, <br />
        접수 완료 후 ACAMS에서 발신하는 이메일의 안내에 따라 주시기 바랍니다.
      </div>
    </div>
  );
}

export default Complete;
