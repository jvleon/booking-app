import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 1rem;
  align-items: center;
  box-sizing: border-box;
`

export const Main = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  min-height: 50px;
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  border-radius: 10px;
`
export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.altern};
`
