import { ReactNode } from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
  type?: 'date' | 'text';
  title?: string;
  content?: string;
  description?: string;
  children?: ReactNode;
  noticeDate?: string;
  enforceDate?: string;
}

export default function Article({ type, content, title, description, children, noticeDate, enforceDate }: ArticleProps) {
  if (type === 'date') {
    return (
      <div className={`${styles.article__date}`}>
        {noticeDate && <p>공고 일자: {noticeDate}</p>}
        {enforceDate && <p>시행 일자: {enforceDate}</p>}
      </div>
    );
	}
  if (type === 'text') {
    return (
      <div className={`${styles.article}`}>
        {content}
      </div>
    );
	}
	
  return (
    <div className={`${styles.article}`}>
      {title && <strong className={styles.article__title}>{title}</strong>}
      <div className={styles.article__box}>
        {description && <p className={styles.article__desc}>{description}</p>}
        {children}
      </div>
    </div>
  );
}