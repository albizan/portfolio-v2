import styled from 'styled-components';

export const ProjectCard = styled.div`
  height: 38rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.projectCard.backgroundColor};

  /* @media screen and (min-width: 38rem) {
    height: 38rem;
  } */
`;

export const ProjectImage = styled.img`
  height: 19rem;
  width: 100%;
`;

export const ProjectButton = styled.a`
  color: ${(props) => props.theme.accent};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.textColorInverse};
  }
`;
