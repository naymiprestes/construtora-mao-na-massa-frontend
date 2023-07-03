import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background-color: #212529c7;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 16px;

    background-color: var(--grey0);
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .headeModal {
    display: flex;
    justify-content: right;

    width: 100%;
  }

  .buttonModal {
    font-size: 1.2rem;
    background: var(--grey0);
    border: none;
    color: var(--whiteFixed);
    padding: 8px 8px 0px 0px;
  }
`;

export const DivButton = styled.div`
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
  padding: 0px 10px 24px 10px;

  h2 {
    font-size: 1rem;
    text-align: center;
  }
  .divModal {
    display: flex;
    flex-direction: row;

    gap: 24px;
    margin-top: 16px;

    font-weight: 500;
    line-height: 26px;
  }

  .editEngineer {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 22px;
    background-color: var(--yellow4);

    width: 90px;
    height: 38px;

    font-size: 0.8rem;
  }

  .deleteEngineer {
    padding: 0px 22px;
    background-color: var(--yellow4);

    width: 90px;
    height: 38px;

    font-size: 0.8rem;
  }

  .editEngineer:hover,
  .deleteEngineer:hover {
    opacity: 60%;
  }
`;
