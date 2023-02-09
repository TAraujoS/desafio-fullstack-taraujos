import styled from "styled-components";

const EditForm = styled.form`
  background-color: var(--color-grayform);
  padding: 0.75rem 1.25rem;
  label {
    color: var(--color-whitetext);
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.495rem;
  }
  input {
    width: 100%;
    height: 38px;
    border: 1px solid var(--color-grayinput);
    border-radius: 3px;
    margin-bottom: 0.5rem;
    padding-left: 0.8rem;
    color: var(--grey-2);
    background: var(--color-grayinput);
    transition: 0.2s;
  }
  input:focus {
    border: 1px solid var(--color-whitetext);
  }

  .btnDiv {
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 6px;
    gap: 2rem;
    margin-top: 5px;
  }
  .btnDiv button {
    height: 100%;
    width: 60%;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-white);
    background-color: var(--color-graydark);
    cursor: pointer;
  }
  .btnDiv button:hover {
    background-color: var(--color-grayform);
    border: 1px solid var(--color-white);
  }
  .btnDiv span {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 30%;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-white);
    background-color: var(--color-graydark);
    cursor: pointer;
  }
  .btnDiv span:hover {
    background-color: var(--color-grayform);
    border: 1px solid var(--color-white);
  }
`;

export default EditForm;
