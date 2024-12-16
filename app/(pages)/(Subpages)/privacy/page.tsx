import { Metadata } from 'next';
export const metadata: Metadata = { title: '개인정보처리방침' };

import PrivacyComponent from './components/PrivacyComponent';

export default function Privacy() {
  return <PrivacyComponent />;
}
