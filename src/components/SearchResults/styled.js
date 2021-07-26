import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  heigth: 300px;
  display: flex;
  margin: 1rem 0;
  flex-wrap: wrap;
`

export const Card = styled.div`
  width: 250px;
  margin: .5rem 1rem .5rem 0;
  padding: .5rem .2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  border-radius: 3px;
  > div {
    padding: .2rem;
    display: flex;
    aling-items: center;
    > .title {
      font-weight: 600;
      margin-right: .5rem;
    }
  }
  > button {
    width: 95%;
    margin: auto;
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`

export const Title = styled.h4`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.primary};
`
