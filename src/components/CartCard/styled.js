import styled from 'styled-components'

export const Container = styled.div`
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

export const Row = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: ${({ flexEnd }) => flexEnd ? 'flex-end' : 'flex-start'};
  > div {
    display: flex;
    padding: .5rem;
    width: 50%;
    > button {
      margin: 0 .2rem;
    }
    > h4 {
      color: ${({ theme: { colors } }) => colors.primary};
    }
    > span:first-child {
      margin-right: .2rem;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    > div {
      flex-direction: column;
      > button {
        margin: .5rem;
      }
    }
  }
`
