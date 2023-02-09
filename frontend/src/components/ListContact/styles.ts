import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20px;
  border-top: 1px solid var(--grey-1);
  width: 85%;
  padding-bottom: 4rem;
  h3 {
    margin-top: 10px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-graydark);
    margin: 1rem;
  }
  .contactTitle {
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
    > li {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-graydark);
      border-bottom: 1px solid var(--grey-1);
    }
  }

  .noContact {
    font-weight: 600;
    font-size: 18px;
    color: var(--color-grayform);
    margin-top: 2rem;
  }

  .contactData {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1.5rem;

    > li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 35px;

      border: 1px solid var(--grey-1);
      border-radius: 8px;
      cursor: pointer;

      > p {
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        color: var(--grey-2);

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      :hover {
        border: 1px solid var(--grey-2);
      }
    }
  }
`;
