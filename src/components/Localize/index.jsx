import React from 'react';
import { useTranslation } from 'react-i18next';
import { languageOptions } from '@constants/Languages';
import { ReactSelectElement } from './styled';

function Localize() {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return <ReactSelectElement options={languageOptions} onChange={changeLanguage} />;
}

export default Localize;
