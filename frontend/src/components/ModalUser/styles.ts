import styled from "styled-components";

const ModalForm = styled.form`
  background-color: var(--color-grayform);
  padding: 0.75rem 1.25rem;
  label {
    color: var(--color-whitetext);
    display: block;
    font-size: 0.9rem;
    margin: 0.495rem 0;
  }
  div {
    display: flex;
    align-items: center;
    padding: 2px;
    background-color: var(--color-grayinput);
    border: 1px solid var(--color-grayinput);
    border-radius: 4px;
    &:hover {
      border: 1px solid var(--color-black);
    }
    input {
      height: 2rem;
      width: 100%;
      padding-left: 0.8rem;
      color: var(--grey-2);
      background-color: var(--color-grayinput);
      border: none;
      border-radius: 4px;
    }
    svg {
      display: flex;
      align-items: center;
      margin-right: 10px;
      color: #f10;
    }
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    margin-bottom: 1rem;
    margin-top: 15px;
    color: var(--color-whitetext);
    background: var(--grey-1);
    transition: 0.2s;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--grey-2);
    border: 1px solid var(--color-whitetext);
  }
  button:active {
    transform: scale(1);
  }
  span {
    color: var(--color-whitetext);
  }

  .delete {
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #e17a7a;
    border-radius: 4px;
    cursor: pointer;

    :hover {
      border: 1px solid red;
      background-color: var(--color-grayform);
    }
  }
`;

export default ModalForm;
