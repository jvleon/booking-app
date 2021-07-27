import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPlaneArrival } from 'react-icons/fa'

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.altern};
  box-shadow: -2px 26px 21px -11px rgba(0,0,0,0.15);
  -webkit-box-shadow: -2px 26px 21px -11px rgba(0,0,0,0.15);
  -moz-box-shadow: -2px 26px 21px -11px rgba(0,0,0,0.15);
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 .5rem;
  }
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
  transition: .3s;
  color: ${({ theme: { colors } }) => colors.altern};
  :hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`

export const Brand = styled.div`
  padding-left: 1rem;
  > a {
    display: flex;
    text-decoration: none;
  }
  > a > h1 {
    font-weight: 600;
    padding-left: .3rem;
    font-size: 1.3rem;
    background-image: linear-gradient(
      45deg,
      ${({ theme: { colors } }) => colors.altern},
      ${({ theme: { colors } }) => colors.primary}
    );
    background-size: 100%;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  > a > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: .3rem;
  }
`

export const IconPlane = styled(FaPlaneArrival).attrs({
  size: '1.3em'
})`
  margin-top: .1rem;
  margin-left: .2rem;
  color: ${({ theme: { colors } }) => colors.secondary};
`
