import { useEffect } from 'react';

import Radio, { PropTypes as RadioPropTypes } from '@/components/input/Radio';

const PACKAGE = [
  { id: 'BASIC', title: '기본' },
  { id: 'LECTURE', title: '온라인 강의 포함' },
];

export interface PropTypes {
  selectedPackage: string | undefined;
  onChange: (packageId: string) => void;
}

function PackageRadio({ selectedPackage, onChange }: PropTypes) {
  const handleChange: RadioPropTypes['onChange'] = e => {
    const selectedId = e.target.value;

    onChange(selectedId);
  };

  useEffect(() => {
    if (selectedPackage === undefined || !PACKAGE.map(item => item.id).includes(selectedPackage)) {
      onChange(PACKAGE[0].id);
    }
  }, [onChange, selectedPackage]);

  return (
    <div className='radio__box'>
      {PACKAGE.map(item => {
        return (
          <Radio
            key={item.id}
            id={item.id}
            name='package'
            label={item.title}
            value={item.id}
            checked={selectedPackage === item.id}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default PackageRadio;
