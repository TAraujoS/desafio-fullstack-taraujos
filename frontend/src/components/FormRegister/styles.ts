import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: var(--color-white);
  background-color: var(--color-graydark);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-white);
  }
  &:active {
    background-color: var(--color-white);
    color: var(--color-grayform);
  }
`;

export const HeaderForm = styled.header`
  height: 100px;
  gap: 12rem;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 90%;
  width: 350px;
  padding: 30px 25px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: var(--color-white);
  gap: 15px;
  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: var(--color-whitetext);
    margin: 0 auto;
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.4rem;
    color: var(--color-graydark);
    margin: 0 auto;
  }
  label {
    display: flex;
    align-items: flex-start;
    color: var(--color-graydark);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0px;
  }
  > button {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    color: var(--color-white);
    background-color: var(--grey-1);
    cursor: pointer;
    &:hover {
      border: 1px solid var(--color-white);
    }
  }
`;
