import styled from 'styled-components';

export const Background = styled.section`
  height: ${(props) => `${props.innerHeight}px`};
  position: relative;
  background: url('https://ik.imagekit.io/albizan/bg_fo3KEpBQu.jpg') no-repeat center center;
  background-size: cover;
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
  background-color: ${(props) => props.theme.landing.buttonColor};
  color: ${(props) => props.theme.landing.buttonText};
  transition: background-color 0.2s, color 0.2s;
  border-radius: 14px;

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
