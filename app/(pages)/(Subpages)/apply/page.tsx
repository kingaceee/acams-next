import { Metadata } from 'next';
export const metadata: Metadata = { title: '프로그램 신청' };

import ApplyContainer from '@/apply/containers/ApplyContainer';
import Subpage from '../Subpage';

function Apply() {
	return (
		<Subpage title="프로그램 신청" category="ACAMS 프로그램">
			<ApplyContainer />;
		</Subpage>
	)
}

export default Apply;
