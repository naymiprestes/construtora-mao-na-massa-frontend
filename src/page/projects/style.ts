import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 40px 40px;
    border-bottom: 1px solid var(--yellow4);
  }

  .button-back-projects {
    display: flex;
    gap: 40px;
    margin: 0px 40px;
  }

  .button-back,
  .button-projects {
    width: 120px;
    margin: 6px 0px;
    padding: 8px;

    text-decoration: none;
    font-size: 1rem;
    text-align: center;
    color: var(--grey0);

    border-radius: 4px;
    background-color: var(--yellow4);
  }

  .template {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 350px;
  padding: 20px;

  box-shadow: 0px 4px 30px -8px rgba(0, 0, 0, 0.25);

  label {
    font-size: 1rem;
    margin: 10px 0px 4px 0px;
  }

  option {
    background-color: var(--grey2);
  }

  input,
  select,
  textarea {
    border: none;
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
  }

  p {
    font-weight: 600;
    font-size: 0.6rem;

    margin-bottom: 26px;
    line-height: 0px;
    color: #b42529;
  }

  .data {
    color: var(--whiteFixed);
    font-size: 1rem;
    font-style: italic;
    font-weight: 700;
    margin: 0px 0px 10px 10px;
  }

  .div-house-data {
    display: flex;
    gap: 20px;
  }

  .numberRooms,
  .numberBathrooms,
  .amountFloors {
    width: 70px;
    font-size: 0.8rem;
  }

  li {
    overflow-y: scroll;
    list-style: none;
    height: 120px;
    border-bottom: 1px solid var(--whiteFixed);
    margin-bottom: 12px;
  }

  .button-create-projects {
    margin: 20px 00px;
    padding: 12px;
    font-size: 1rem;
    font-weight: 700;
    background-color: var(--yellow4);
  }
`;
