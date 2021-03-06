import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Flex)`
  background-color: antiquewhite;
  flex-direction: row;
  width: 100vw;
  height: 3rem;
  justify-content: space-around;
  align-items: center;
`

export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: gray;
`
