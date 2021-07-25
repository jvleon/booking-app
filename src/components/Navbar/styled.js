import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPlaneArrival } from 'react-icons/fa'

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme: {colors} }) => colors.primary}
`

export const ButtonsContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ButtonNavigation = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.primary};
  : hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`

export const Brand = styled.div`
    display: flex;
  > span {
    font-weight: 600;
    padding-left: 1rem;
    font-size: 1.3rem;
    background-image: linear-gradient(
      45deg,
      ${({ theme: { colors } }) => colors.primary},
      ${({ theme: { colors } }) => colors.altern}
    );
    background-size: 100%;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`

export const Icon = styled(FaPlaneArrival).attrs({
  size: '1.3em'
})`
  margin-top: .1rem;
  margin-left: .2rem;
  color: ${({ theme: { colors } }) => colors.secondary};
`
