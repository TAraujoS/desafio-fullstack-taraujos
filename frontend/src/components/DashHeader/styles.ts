import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 20%;
  gap: 20px;
  border-bottom: 1px solid var(--grey-1);
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

    .logout {
      display: flex;
      gap: 10px;
    }

    button {
      border: 1px solid var(--grey-1);
      font-size: 14px;
      font-weight: 600;
      color: var(--grey-1);

      :hover {
        border: 1px solid var(--color-black);
        color: var(--color-black);
      }
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
