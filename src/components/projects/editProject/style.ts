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
  justify-content: center;

  width: 500px;
  padding: 20px;

  box-shadow: 0px 4px 30px -8px rgba(0, 0, 0, 0.25);

  .teste {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .teste2 {
    display: flex;
    flex-direction: column;
  }

  .teste3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 2px solid var(--whiteFixed);
  }

  /* ------- */
  label {
    font-size: 1rem;
    margin-bottom: 4px;
  }

  input,
  select,
  textarea {
    border: none;
    margin-bottom: 20px;
    resize: none;
  }

  .data,
  .list-materials {
    font-size: 1rem;
    font-style: italic;
    font-weight: 700;
    margin: 0px 0px 10px 10px;
  }

  .div-house-data {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .div-number-rooms,
  .div-number-bathrooms,
  .div-amount-floors {
    display: flex;
    flex-direction: column;
  }

  .numberRooms,
  .numberBathrooms,
  .amountFloors {
    width: 70px;
    font-size: 0.8rem;
  }

  /* --------------------- */

  li {
    overflow-y: scroll;
    list-style: none;
    width: 200px;

    height: 200px;
    margin-bottom: 12px;
  }

  .materials-delete {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 0px;
  }

  .p-list-materials {
    padding: 10px;
  }

  .button-delete {
    background-color: var(--grey1);
    border: 1px solid var(--grey2);
    padding: 6px 4px;
    margin-bottom: 10px;
    color: var(--whiteFixed);
  }

  .div-quant {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
  }

  span {
    margin-bottom: 10px;
    border-bottom: 1px solid var(--grey2);
  }

  .button-create-projects {
    margin: 20px 80px 0px 80px;
    padding: 10px;

    font-size: 1rem;
    font-weight: 700;
    background-color: var(--yellow4);
  }
`;
