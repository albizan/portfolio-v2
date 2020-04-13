import styled from 'styled-components';

export const FooterBackground = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 100%;
  color: ${(props) => props.theme.footer.textColor};
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  background: ${(p) =>
    `linear-gradient(45deg, ${p.theme.footer.bg1} 0%, ${p.theme.footer.bg2} 75%)`};
`;
