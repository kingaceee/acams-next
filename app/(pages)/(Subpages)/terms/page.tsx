import { Metadata } from 'next';
export const metadata: Metadata = { title: '이용약관' };

import TermsComponent from './components/TermsComponent';

export default function Terms() {
  return <TermsComponent />;
}
