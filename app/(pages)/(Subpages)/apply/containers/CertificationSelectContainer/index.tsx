'use client';

import { useEffect, useState } from 'react';

import { getCerifications } from '@api/certification';

import CertificationSelect, { PropTypes as CertificationSelectPropTypes } from '@apply/components/CertificationSelect';

export interface PropTypes {
  selected: CertificationSelectPropTypes['selected'];
  onChange: CertificationSelectPropTypes['onChange'];
}

function CertificationSelectContainer(props: PropTypes) {
  const [certifications, setCertifications] = useState<CertificationSelectPropTypes['list']>([]);

  const callGetCertifications = async () => {
    const response = await getCerifications();

    const parsedResult = response.map(item => ({
      id: item.id,
      alias: item.alias,
      languages: item.languages,
      name: item.name,
      privatePrice: item.privatePrice,
      publicPrice: item.publicPrice,
    }));

    setCertifications(parsedResult);
  };

  useEffect(() => {
    callGetCertifications();
  }, []);

  return <CertificationSelect list={certifications} {...props} />;
}

export default CertificationSelectContainer;
