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
  background: ${({ primary, disabled, theme: { colors } }) => {
    if(primary && !disabled) {
      return `
        background: -webkit-linear-gradient(
          to right,
          ${colors.altern},
          ${colors.secondary}
        );
        background: linear-gradient(
          to right,
          ${colors.altern},
          ${colors.secondary}
        );
      `;
    } else if(disabled) {
      return 'background: gray;';
    } else {
      return `
        background: -webkit-linear-gradient(
          to right,
          ${colors.primary},
          ${colors.altern}
        );
        background: linear-gradient(
          to right,
          ${colors.primary},
          ${colors.altern}
        );
      `;
    }
  }};
  :hover {
    ${({ disabled }) => {
      if(!disabled) {
        return`
          box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
          -webkit-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
          -moz-box-shadow: 1px 1px 16px -1px rgba(0,0,0,0.3);
        `
      }
    }};
    background: ${({ primary, disabled, theme: { colors } }) => {
     if(primary && !disabled) {
        return `
          background: -webkit-linear-gradient(
            to right,
            ${colors.primary},
            ${colors.altern}
          );
          background: linear-gradient(
            to right,
            ${colors.primary},
            ${colors.altern}
          );
       `;
     } else if (disabled) {
        return 'background: gray;';
     } else {
        return `
          background: -webkit-linear-gradient(
            to right,
            ${colors.altern},
            ${colors.secondary}
          );
          background: linear-gradient(
            to right,
            ${colors.altern},
            ${colors.secondary}
          );
        `;
     }
    }};
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
