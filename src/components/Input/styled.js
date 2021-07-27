import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid${({ error, theme: { colors } }) => error ? 'red' : colors.inputBorder };
  border-radius: 5px;
  outline: none;
  font-size: .9rem;
  color: ${({ theme: { colors } }) => colors.primary};
  padding: .2rem .5rem;
  box-sizing: border-box;
`

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: .4rem;
  color: ${({ theme: { colors } }) => colors.altern};
  font-weight: 600;

`
