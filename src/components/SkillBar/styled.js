import styled from 'styled-components';

export const Bar = styled.div`
  width: ${(props) => props.width + '%'};
  height: 4px;
  background-color: ${(props) => props.theme.accent};
`;

export const BarWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 3px;
  border: 1px solid ${(props) => props.theme.accent};
`;
