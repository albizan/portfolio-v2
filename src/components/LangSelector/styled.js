import styled from 'styled-components';

export const Switch = styled.div`
  border-radius: 50%;
  right: ${(props) => (props.lang === 'it' ? '44px' : '6px')};
  bottom: 0;
  top: 0;
  margin: auto;
  height: 30px;
  width: 30px;
  border: 2px solid ${(props) => props.theme.langSelector.switchColor};
  background-color: ${(props) => props.theme.langSelector.switchColor};
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SwitchWrapper = styled.div`
  background-color: ${(props) => props.theme.langSelector.backgroundColor};
`;
