import styled from 'styled-components'

export const Container = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  width: 92%;
  box-sizing: border-box;
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  border-radius: 10px;
`

export const Placesbox = styled.div`
  width: 100%;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr)
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr)
  }
  @media screen and (max-width: 645px) {
    grid-template-columns: repeat(1, 1fr)
  }
`

export const Title = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.altern};
`

export const Box = styled.div`
  height: 300px;
  max-width: 380px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  > img {
    width: 100%;
    height: 200px;
  }
  > h3 {
    margin: 1rem;
    color: ${({ theme: { colors } }) => colors.primary};
  }
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  @media screen and (max-width: 645px) {
    height: auto;
    margin: 1rem auto;
    width: 100%;
    > img {
      width: 100%;
    }
  }
`
