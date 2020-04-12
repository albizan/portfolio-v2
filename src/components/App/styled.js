import styled from 'styled-components';

export const GlobalStyles = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
