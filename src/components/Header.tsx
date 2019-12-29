import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { HorizontalList } from './HorizontalList'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const HomepageLink = styled(Link)`
  color: ${colors.black};
  font-size: 1.5rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
  menu: {
    display: string
    to: string
  }[]
}

const Header: React.FC<HeaderProps> = ({ title, menu }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <HorizontalList>
        {menu.map(menuItem => (
          <HomepageLink to={menuItem.to}>{menuItem.display}</HomepageLink>
        ))}
      </HorizontalList>
    </HeaderInner>
  </StyledHeader>
)

export default Header
