import { useEffect, useState } from 'react';

import { getMemberships } from '@/api/membership';

import MembershipRadio, { Membership, PropTypes as MembershipRadioPropTypes } from '@/apply/components/MembershipRadio';

export interface PropTypes {
  selectedMembership: Membership | undefined;
  onChange: MembershipRadioPropTypes['onChange'];
}

function MembershipRadiosContainer({ selectedMembership, onChange }: PropTypes) {
  const [memberships, setMemberships] = useState<Array<Membership>>([]);

  const callGetMemberships = async () => {
    const result = await getMemberships();
    setMemberships(result);
  };

  useEffect(() => {
    callGetMemberships();
  }, []);

  return <MembershipRadio memberships={memberships} selectedMembership={selectedMembership} onChange={onChange} />;
}

export default MembershipRadiosContainer;
