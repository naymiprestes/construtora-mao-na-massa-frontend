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
`;

export const Div = styled.div`
  box-shadow: 0px 4px 30px -8px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 20px 40px;
    flex-wrap: wrap;
  }

  li {
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid var(--grey2);
    cursor: pointer;
  }

  li:hover {
    background-color: var(--yellow4);
    opacity: 60%;
    color: var(--grey0);
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  .data {
    text-align: start;
    font-size: 1rem;
    font-style: italic;
    margin: 10px 0px 10px 12px;
  }

  .div-area-rooms,
  .div-bathroom-floors {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .div-area-icons,
  .div-rooms-icons,
  .div-bathroom-icons,
  .div-floors-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-area,
  .icon-room,
  .icon-bathroom,
  .icon-floors {
    width: 30px;
    height: 40px;
  }

  .div-area,
  .div-rooms,
  .div-bathrooms,
  .div-floors {
    display: flex;
    gap: 10px;
    padding: 4px 0px;
  }

  .area,
  .numberRooms,
  .numberBathrooms,
  .amountFloors {
    width: 60px;
    font-size: 0.8rem;
  }
`;
