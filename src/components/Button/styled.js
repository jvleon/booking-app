import styled from 'styled-components'

export const StyledButton = styled.button`
  width: ${({ width }) => width || '100%'};
  align-self: flex-end;
  font-size: 1.2rem;
  font-weight: 600;
  height: 38px;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: .5s;
  background: -webkit-linear-gradient(
    to right,
    ${({ primary, theme: { colors } }) => primary ? colors.altern : colors.primary},
    ${({ primary, theme: { colors } }) => primary ? colors.secondary : colors.altern}
  );
  background: linear-gradient(
    to right,
    ${({ primary, theme: { colors } }) => primary ? colors.altern : colors.primary},
    ${({ primary, theme: { colors } }) => primary ? colors.secondary : colors.altern}
  );
  :hover {
    box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
    -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
    background: -webkit-linear-gradient(
      to right,
      ${({ primary, theme: { colors } }) => primary ? colors.primary : colors.altern},
      ${({ primary, theme: { colors } }) => primary ? colors.altern : colors.secondary}
    );
    background: linear-gradient(
      to right,
      ${({ primary, theme: { colors } }) => primary ? colors.primary : colors.altern},
      ${({ primary, theme: { colors } }) => primary ? colors.altern : colors.secondary}
    );
  }
  :active {
    box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
    -moz-box-shadow: inset 1px 1px 16px -1px rgba(0,0,0,0.3);
  }
`
