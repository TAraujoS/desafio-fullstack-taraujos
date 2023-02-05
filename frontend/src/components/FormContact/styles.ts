import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 40%;
  width: 60%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid var(--color-graydark);
  border-radius: 8px;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    div {
      display: flex;
      align-items: center;
      gap: 20px;
      height: 20%;
      label {
        width: 50px;
        font-size: 14px;
        font-weight: 600;
        color: var(--grey-1);
      }
      input {
        height: 100%;
        padding-left: 10px;
        cursor: pointer;
        border-radius: 8px;

        :hover {
          border: 1px solid var(--grey-1);
        }
      }
    }

    button {
      margin-top: 10px;
      border: 1px solid var(--grey-1);
      font-size: 14px;
      font-weight: 600;
      color: var(--grey-1);

      :hover {
        border: 1px solid var(--grey-2);
        color: var(--grey-2);
      }
    }
  }
`;
