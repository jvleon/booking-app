import styled from 'styled-components'

export const Container = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  width: 92%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.21);
  border-radius: 10px;
`

export const Title = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.altern};
`

export const Box = styled.div`
  height: 300px;
  max-width: 380px;
  flex-grow: 1;
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
`
