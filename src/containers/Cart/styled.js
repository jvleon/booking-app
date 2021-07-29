import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 1rem 2rem 1rem;
  align-items: center;
  box-sizing: border-box;
`

export const Title = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.primary};
`