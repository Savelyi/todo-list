import React from 'react';
import { VisibilityFilters } from '@constants/VisibilityFilters';
import FilterLink from '@components/Link/index';
import { GetFilterName } from '@helpers/GetFilterName';
import Localize from '@components/Localize';
import { ShowSpan, FooterWrapper } from './styled';

function Footer() {
  return (
    <FooterWrapper>
      <Localize />
      <ShowSpan>Show: </ShowSpan>
      {Object.values(VisibilityFilters).map((filter) => (
        <FilterLink key={filter} filter={filter}>
          {GetFilterName(filter)}
        </FilterLink>
      ))}
    </FooterWrapper>
  );
}

export default Footer;
