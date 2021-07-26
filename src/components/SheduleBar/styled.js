import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Box = styled.div`
  box-sizing: border-box;
  flex-direction: column;
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
    height: 100%;
    background: transparent;
  }
  > .datePicker {
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    background: white;
    border: 1px solid ${({ theme: { colors } }) => colors.inputBorder} !important;
  }
`
