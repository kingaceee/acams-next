'use client';

import Select, { SelectProps as SelectPropTypes } from '@/components/input/Select';

export interface Certification {
  id: string;
  alias: string;
  languages: Array<string>;
  name: string;
  privatePrice: number;
  publicPrice: number;
}

export interface PropTypes extends Omit<SelectPropTypes, 'onChange' | 'placeholder' | 'options' | 'selected'> {
  list: Array<Certification>;
  selected: Certification | undefined;
  onChange: (value: Certification) => void;
}

function CertificationSelect({ list, selected, onChange, ...selectProps }: PropTypes) {
  const options: SelectPropTypes['options'] = list.map(item => ({
    label: item.name,
    value: item.id,
  }));

  const handleChange: SelectPropTypes['onChange'] = e => {
    const selectedId = e.target.value;

    const selectedCertification = list.find(item => `${item.id}` === selectedId);

    if (!selectedCertification) return;
    onChange(selectedCertification);
  };

  if (list.length === 0) return '로딩중...';

  return <Select {...selectProps} onChange={handleChange} placeholder='프로그램 종류' options={options} selected={selected?.id ?? ""} />;
}

export default CertificationSelect;
