import Radio, { PropTypes as RadioPropTypes } from '@components/input/Radio';
import { useEffect } from 'react';

export interface Membership {
  id: string;
  name: string;
  privatePrice: number;
  publicPrice: number;
}

export interface PropTypes {
  memberships: Array<Membership>;
  selectedMembership: Membership | undefined;
  onChange: (membership: Membership) => void;
}

function MembershipRadios({ memberships, selectedMembership, onChange }: PropTypes) {
  const handleChange: RadioPropTypes['onChange'] = e => {
    const selectedId = e.target.value;

    if (selectedId === 'no') {
      onChange({ id: '', name: '', privatePrice: 0, publicPrice: 0 });
      return;
    }

    const selectedMembership = memberships.find(membership => `${membership.id}` === selectedId);
    if (!selectedMembership) return;

    onChange(selectedMembership);
  };

  useEffect(() => {
    if (!selectedMembership) onChange(memberships[0]);
  }, [memberships, onChange, selectedMembership]);

  if (!selectedMembership) return <div className='radio__box'>로딩중...</div>;

  return (
    <div className='radio__box'>
      {memberships.map(membership => {
        return (
          <Radio
            name='membership'
            key={membership.id}
            value={membership.id}
            label={membership.name}
            checked={selectedMembership.id === membership.id}
            onChange={handleChange}
          />
        );
      })}
      <Radio name='membership' value={'no'} label='보유중' onChange={handleChange} />
    </div>
  );
}

export default MembershipRadios;
