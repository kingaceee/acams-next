import { Metadata } from 'next';
export const metadata: Metadata = { title: '개인정보처리방침' };

import PrivacyComponent from './components/PrivacyComponent';
import Subpage from '../Subpage';

export default function Privacy() {
	return (
		<Subpage title="개인정보처리방침">
			<PrivacyComponent />
		</Subpage>
	) 
}
