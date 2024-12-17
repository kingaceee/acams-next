import { Metadata } from 'next';
export const metadata: Metadata = { title: '이용약관' };

import TermsComponent from './components/TermsComponent';
import Subpage from '../Subpage';

export default function Terms() {
	return (
		<Subpage title="이용약관">
			<TermsComponent />
		</Subpage>
	)
}
