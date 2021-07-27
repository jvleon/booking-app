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
  width: 100%;
  height: 100%;
  transitions: .3s;
  border: none;
  cursor: pointer;
  > svg {
    color: ${({ theme: { colors } }) => colors.inputBorder};
  }

  :active > svg {
    color: black;
  }

  :active {
    ${({ disabled }) => {
      if(!disabled) {
        return`
          box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
          -webkit-box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
          -moz-box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
        `
      }
    }};
  }
`

export const StyledInput = styled.input`
  text-align: center;
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
