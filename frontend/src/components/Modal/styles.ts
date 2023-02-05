import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 75vh;
  .modal {
    width: 100%;
    max-width: 300px;
    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;
    opacity: 1;
    animation: showUp 0.4s;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
  }

  .modal section {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-1);
    padding: 0.75rem 1.25rem;
    border-radius: 4px 4px 0px 0px;
  }

  .modal section h3 {
    display: flex;
    align-items: center;
    color: var(--color-whitetext);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
  .modal section button {
    background: none;
    border: none;
    color: var(--color-whitetext);
    font-size: 15px;
    cursor: pointer;
  }
  .modal section button:hover {
    color: var(--color-blackt);
  }
`;

export default Container;
