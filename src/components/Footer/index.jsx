import React from 'react';
import { VisibilityFilters } from '@constants/VisibilityFilters';
import FilterLink from '@components/Link/index';
import Localize from '@components/Localize';
import { useTranslation } from 'react-i18next';
import { ShowSpan, FooterWrapper } from './styled';

function Footer() {
  const { t } = useTranslation();
  return (
    <FooterWrapper>
      <Localize />
      <ShowSpan>{t('ShowSpan')}: </ShowSpan>
      {Object.values(VisibilityFilters).map((filter) => (
        <FilterLink key={filter} filter={filter}>
          {t(`Filters.${filter}`)}
        </FilterLink>
      ))}
    </FooterWrapper>
  );
}

export default Footer;
