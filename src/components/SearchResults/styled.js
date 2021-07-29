import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    aling-items: center;
  }
`

export const Card = styled.div`
  box-sizing: border-box;
  width: 250px;
  margin: .5rem 1rem .5rem 0;
  padding: .5rem .4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.09);
  border-radius: 3px;
  > div {
    padding: .4rem .5rem;
    display: flex;
    aling-items: center;
    > .title {
      font-weight: 600;
      margin-right: .5rem;
    }
    > span:last-child {
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 940px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h4`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.primary};
`
