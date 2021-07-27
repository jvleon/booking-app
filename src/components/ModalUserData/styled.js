import styled from 'styled-components'

export const Base = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.25);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${({ show }) => show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  width: 700px;
  height: 60%;
  background-color: white;
  border-radius: 10px;
  padding: 4rem 0;
`

export const ModalForm = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const ModalRow = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  > button {
    width: 45%;
  }
`
