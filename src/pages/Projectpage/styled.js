import styled from 'styled-components';

export const LinkButton = styled.a`
  display: inline-block;
  border: 2px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${(props) => '#FFF'};
    background-color: ${(props) => props.theme.accent};
  }
`;

export const ColoredLink = styled.a`
  color: ${(props) => props.theme.accent};
`;
