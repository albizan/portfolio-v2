import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectCard = styled.div`
  height: 30rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.projectCard.backgroundColor};

  @media screen and (min-width: 748px) {
    height: 30rem;
  }
  @media screen and (min-width: 1024px) {
    height: 32rem;
  }
  @media screen and (min-width: 1280px) {
    height: 32rem;
  }
`;

export const ProjectButton = styled(Link)`
  color: ${(props) => props.theme.accent};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.textColorInverse};
  }
`;
