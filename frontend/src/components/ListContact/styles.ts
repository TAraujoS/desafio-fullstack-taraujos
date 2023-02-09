import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20px;
  border-top: 1px solid var(--grey-1);
  width: 85%;
  h3 {
    margin-top: 10px;
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

  .contactData {
    display: flex;
    flex-direction: column;
    gap: 10px;

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
