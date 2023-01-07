import React from 'react';
import { VisibilityFilters } from '../../constants/VisibilityFilters';
import { ShowSpan, FooterWrapper } from './styled';
import FilterLink from '../Link/index';

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
