import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  background-color: var(--color-grayinput);
  border: 1px solid var(--color-graydark);
  border-radius: 4px;
  &:hover {
    border: 1px solid var(--grey-2);
  }
  input {
    height: 40px;
    width: 100%;
    padding: 5px;
    color: var(--grey-2);
    background-color: var(--color-grayinput);
    border: none;
    border-radius: 4px;
  }
  svg {
    color: #f10;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;
  &:hover span {
    opacity: 1;
  }
  span {
    position: absolute;
    color: var(--color-whitetext);
    background-color: #f83456;
    padding: 4px 15px;
    border-radius: 3px;
    left: 25px;
    top: -1px;
    opacity: 0;
    transition: opacity 0.4s;
    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #f13456 transparent;
      position: absolute;
      top: 4px;
      left: -7px;
    }
  }
`;
