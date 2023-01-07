import React from 'react';
import { VisibilityFilters } from '@constants/VisibilityFilters';
import FilterLink from '@components/Link/index';
import { ShowSpan, FooterWrapper } from './styled';

function Footer() {
  return (
    <FooterWrapper>
      <ShowSpan>Show: </ShowSpan>
      {Object.values(VisibilityFilters).map((filter) => (
        <FilterLink key={filter} filter={filter}>
          {filter}
        </FilterLink>
      ))}
    </FooterWrapper>
  );
}

export default Footer;
