import { Metadata } from 'next';
export const metadata: Metadata = { title: '프로그램 신청' };

import ApplyContainer from '@apply/containers/ApplyContainer';

function Apply() {
  return <ApplyContainer />;
}

export default Apply;
