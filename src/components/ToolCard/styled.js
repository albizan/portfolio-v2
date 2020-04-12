import styled from 'styled-components';

export const ToolCardBackground = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  overflow: hidden;
  background: ${(p) =>
    `linear-gradient(45deg, ${p.theme.toolCard.bg1} 0%, ${p.theme.toolCard.bg2} 75%)`};
  margin-bottom: 1rem;
  height: 15rem;
  width: 100%;
  color: white;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
`;

export const Button = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: ${(p) =>
    `linear-gradient(45deg, ${p.theme.toolCard.bg1} 0%, ${p.theme.toolCard.bg2} 75%)`};
  border-top-left-radius: 50%;
  cursor: pointer;
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition-property: opacity, width, height, border-radius, position;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: none;
    opacity: 1;
    bottom: 0rem;
    right: 0rem;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
export const Hint = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Button}:hover & {
    display: none;
  }
`;

export const ToolDescription = styled.div`
  font-size: 0.1rem;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 0s;
  padding: 1.1rem;
  ${Button}:hover & {
    transition-delay: 0.4s;
    font-size: 1rem;
    opacity: 1;
  }
`;
