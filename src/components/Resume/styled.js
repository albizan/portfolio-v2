import styled from 'styled-components';

export const Subtitle = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 2.4rem;
  margin-top: 20px;
  border-bottom: 2px solid ${(props) => props.theme.accent};
`;
