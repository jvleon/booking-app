import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors.inputBorder};
  box-sizing: border-box;
`

export const IconContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  > svg {
    color: ${({ theme: { colors } }) => colors.inputBorder};
  }
`

export const StyledInput = styled.input`
  width: 1.5rem;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-color: ${({ theme: { colors } }) => colors.inputBorder};
  border-left-width: 1px;
  border-left-style: solid;
  border-right-width: 1px;
  border-right-style: solid;
`
