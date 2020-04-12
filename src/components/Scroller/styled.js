import styled from 'styled-components';

export const MouseBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  left: 0;
  margin: auto;
  margin-bottom: 20px;
  width: 40px;

  @media screen and (max-height: 650px) {
    display: none;
  }
`;

export const MouseIcon = styled.div`
  height: 55px;
  width: 35px;
  padding: 5px;
  border: 2px solid #fff;
  border-radius: 17px;
  display: flex;
  justify-content: center;
`;

export const ScrollingItem = styled.div`
  width: 4px;
  height: 7px;
  margin-top: 5px;
  border-radius: 35%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
`;
