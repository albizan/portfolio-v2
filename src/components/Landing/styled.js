import styled from 'styled-components';

export const Background = styled.section`
  height: ${(props) => `${props.innerHeight}px`};
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.landing.bg2};
  background: ${(p) =>
    `linear-gradient(45deg, ${p.theme.landing.bg1} 0%, ${p.theme.landing.bg2} 100%)`};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: ${(props) => props.theme.landing.overlayOpacity};
  width: 100%;
  background-color: ${(props) => props.theme.landing.overlayColor};
`;

export const EnterButton = styled.a`
  margin-top: 20px;
  display: inline-block;
  border: 2px solid ${(props) => props.theme.landing.buttonColor};
  background-color: ${(props) => props.theme.landing.buttonColor};
  color: ${(props) => props.theme.landing.buttonText};
  transition: background-color 0.2s, color 0.2s;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.landing.buttonText};
    color: ${(props) => props.theme.landing.buttonColor};
  }

  @media screen and (max-height: 650px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  color: ${(props) => props.theme.landing.textColor};
  @media screen and (max-height: 650px) {
    margin-top: -160px;
    font-size: 18px;
  }
`;
