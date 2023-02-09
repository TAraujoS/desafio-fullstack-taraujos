import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 40%;
  width: 90%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid var(--color-graydark);
  border-radius: 8px;
  padding: 1rem;
  min-width: 260px;
  min-height: 185px;
  max-width: 350px;
  max-height: 280px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    gap: 10px;
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 20%;
      width: 100%;
      label {
        width: 40%;
        font-size: 14px;
        font-weight: 600;
        color: var(--grey-1);
      }
      input {
        width: 95%;
        height: 40px;
        padding-left: 10px;
        cursor: pointer;
        border-radius: 8px;

        :hover {
          border: 1px solid var(--grey-1);
        }
      }

      svg {
        color: #f10;
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
