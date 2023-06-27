import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background-color: var(--grey0);

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 16px;

    background-color: var(--grey1);

    border-radius: 4px;
    box-shadow: 0px 4px 30px -8px rgba(0, 0, 0, 0.25);
  }

  .headeModal {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    gap: 8px;
    width: 100%;

    color: var(--grey0);
    background: var(--yellow4);
    border-radius: 4px 4px 0px 0px;
  }

  .addEngineer {
    font-weight: 700;
    font-size: 0.9rem;
  }

  .buttonModal {
    font-weight: 700;
    font-size: 1rem;
    color: var(--grey0);
    background: var(--yellow4);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0px 10px 24px 10px;
  margin: 10px;
  border-radius: 4px;

  input {
    border: none;
    font-size: 0.8rem;
    opacity: 60%;

    width: 240px;
    height: 38px;
    margin-bottom: 6px;
  }

  label {
    font-size: 0.8rem;
    line-height: 2px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
    font-size: 0.7rem;

    margin-bottom: 26px;
    line-height: 2px;
    color: #b42529;
  }

  .registerEngineer {
    width: 240px;
    height: 38px;

    font-weight: 700;
    font-size: 0.9rem;
    background-color: var(--yellow4);
  }

  .registerEngineer:hover {
    background-color: var(--yellow4);
    border: 1px solid var(--whiteFixed);
    opacity: 60%;
  }
`;
