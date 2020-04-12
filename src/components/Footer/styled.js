import styled from 'styled-components';

export const FooterBackground = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 100%;
  color: ${(props) => props.theme.textColorInverse};
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  background: ${(p) =>
    `linear-gradient(45deg, ${p.theme.toolCard.bg1} 0%, ${p.theme.toolCard.bg2} 75%)`};
`;
