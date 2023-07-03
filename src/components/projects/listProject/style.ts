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

  h2 {
    font-size: 1rem;
  }

  .buttonModal {
    font-weight: 700;
    font-size: 1rem;
    color: var(--grey0);
    background: var(--yellow4);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;

  width: 500px;
  padding: 20px;

  box-shadow: 0px 4px 30px -8px rgba(0, 0, 0, 0.25);

  .data-project {
    display: flex;
    flex-direction: column;
  }

  /* ------- */
  h3 {
    font-size: 1rem;
    margin-bottom: 4px;
    color: var(--grey3);
  }

  p {
    font-size: 1rem;
    margin: 10px;
    font-style: italic;
  }

  h4 {
    font-size: 1rem;
    font-style: italic;
    text-align: center;
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    color: var(--grey3);
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
    text-align: center;
  }

  .numberRooms,
  .numberBathrooms,
  .amountFloors {
    font-size: 0.8rem;
  }

  /* --------------------- */

  .data-list-materials {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 2px solid var(--whiteFixed);
  }

  li {
    overflow-y: scroll;
    list-style: none;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }

  .list-materials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 0px;
  }

  .p-list-materials {
    padding: 0px 10px;
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
`;
