import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSelectElement } from './styled';

function Localize() {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' }
  ];

  return <ReactSelectElement options={options} onChange={changeLanguage} />;
}

export default Localize;
