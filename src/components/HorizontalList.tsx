import * as React from 'react'
import styled from '@emotion/styled'

const StyledHorizontalList = styled.div`
  display: flex;
  justify-content: space-evenly;
  & > * {
    margin: 10px;
  }
`

export const HorizontalList: React.FC = ({ children }) => {
  return <StyledHorizontalList>{children}</StyledHorizontalList>
}
