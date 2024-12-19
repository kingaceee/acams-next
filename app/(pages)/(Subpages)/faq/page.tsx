import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
};

import Subpage from '../Subpage';
import FaqComponent from './components/FaqComponent';

export default function FAQ() {

  return (
    <Subpage title='FAQ'>
      <FaqComponent />
    </Subpage>
  );
}
