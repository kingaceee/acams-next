import styles from './Bullet.module.scss';

interface SubBulletItem {
  type: 'dash' | 'dot' | 'ref' | 'num' | 'roundnum';
  text: string[];
}

interface BulletItem {
  text: string | React.ReactElement;
  desc?: string;
  subBullets?: SubBulletItem[];
}

interface BulletProps {
  bullet?: BulletItem[];
  type: 'dash' | 'dot' | 'ref' | 'num' | 'roundnum';
  children?: React.ReactNode;
}

export default function Bullet({ type, bullet = [] }: BulletProps) {
  const bulletClass = type ? styles[`bullet--${type}`] : '';

  return (
    <ul className={bulletClass}>
      {bullet.map((item, index) => (
      <li key={index} className={styles.bullet}>
        {(type === 'num' || type === 'roundnum') ? (
        <>
          <span>{index + 1}</span> {item.text}
          {item.desc && <p>{item.desc}</p>}
        </>
        ) : (
          item.text
        )}

        {item.subBullets && item.subBullets.map((subBullet, subIndex) => {
          const subBulletClass = subBullet.type ? styles[`bullet--${subBullet.type}`] : '';
          return (
            <ul key={subIndex} className={`${subBulletClass} ${styles.dep2}`}>
              {subBullet.text.map((subText, textIndex) => (
              <li key={textIndex} className={styles.bullet}>
                {(subBullet.type === 'num' || subBullet.type === 'roundnum') ? (
                <>
                  <span>{textIndex + 1}</span> {subText}
                </>
                ) : (
                  subText
                )}
              </li>
              ))}
            </ul>
          );
        })}
      </li>
      ))}
    </ul>
  );
}