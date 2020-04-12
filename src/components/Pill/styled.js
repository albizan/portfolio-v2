import styled from 'styled-components';

export const PillWrapper = styled.span`
  color: ${(props) => props.theme.textColorInverse};
  background-color: ${(props) => props.theme.accent};
  padding: 6px 8px 4px 8px;
  margin-right: 7px;
`;
