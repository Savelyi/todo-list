import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/VisibilityFilters'
import styled from 'styled-components'

const FooterWrapper=styled.div`
margin-top:42%;
position:fixed;
`
const ShowSpan=styled.span`
position: relative;
top:8px;
`


const Footer = () => (
  <FooterWrapper>
    <ShowSpan>Show: </ShowSpan>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </FooterWrapper>
)

export default Footer