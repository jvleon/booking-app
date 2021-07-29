import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Label = styled.span`
  color: ${({ theme: { colors } }) => colors.inputBorder};
  margin-bottom: .3rem;
`

export const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: ${({ flex }) => flex || 10};
  margin: 0 .2rem;
  > div {
    max-width: 100%;
  }
  .react-datepicker__input-container input {
    border: none;
  }
  > .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 100%;
    height: 38px;
    background: transparent;
    outline: none;
  }
  > .datePicker {
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    background: white;
    border: 1px solid ${({ theme: { colors } }) => colors.inputBorder} !important;
  }
  @media screen and (max-width: 768px) {
    margin: .5rem 0;
  }
`
