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
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
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

  .addListMaterial {
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
    margin-bottom: 10px;

    width: 240px;
    height: 38px;
  }

  label {
    font-size: 0.8rem;
    line-height: 2px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 600;
    font-size: 0.6rem;

    margin-bottom: 26px;
    line-height: 0px;
    color: #b42529;
  }

  select {
    width: 240px;
    height: 38px;
    margin-bottom: 14px;

    border: none;
    font-size: 0.8rem;
  }

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: 6px 0px;
  }

  .registerMaterial {
    width: 240px;
    height: 38px;
    font-weight: 700;
    font-size: 0.9rem;
    margin-top: 20px;
    background-color: var(--yellow4);
  }

  .registerMaterial:hover {
    background-color: var(--yellow4);
    border: 1px solid var(--whiteFixed);
    opacity: 60%;
  }
`;
