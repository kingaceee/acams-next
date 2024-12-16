import styles from './index.module.scss';

export interface Price {
  privatePrice: number;
  publicPrice: number;
}

export interface PropTypes {
  certification: Price;
  membership: Price;
}

function CostSummary({ certification, membership }: PropTypes) {
  const { privatePrice: certicifactionPrivacyCost, publicPrice: certificationPublicCost } = certification;
  const { privatePrice: membershipCostPrivacyCost, publicPrice: membershipCostPublicCost } = membership;

  return (
    <div className={styles.priced__calc}>
      <div className={styles.priced__row}>
        <p className={styles.tit}>자격증 :</p>
        <p className={styles.price}>
          $ <span>{certicifactionPrivacyCost.toLocaleString()}</span> USD
        </p>
      </div>
      <div className={styles.priced__row}>
        <p className={styles.tit}>멤버십 : </p>
        <p className={styles.price}>
          $ <span>{membershipCostPrivacyCost.toLocaleString()}</span> USD
        </p>
      </div>
      <div className={styles.priced__row}>
        <p className={styles.tit}>합계 : </p>
        <p className={styles.price}>
          $ <span>{(certicifactionPrivacyCost + membershipCostPrivacyCost).toLocaleString()}</span> USD
        </p>
      </div>

      <span className={styles.desc}>Tax 별도, 10%(공공기관 종사자 5%) 할인 적용 가능</span>
    </div>
  );
}

export default CostSummary;
