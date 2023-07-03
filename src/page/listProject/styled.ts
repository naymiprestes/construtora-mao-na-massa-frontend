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
  display: flex;
  justify-content: space-around;

  h3 {
    font-size: 1.5rem;
  }

  .data-project {
    display: flex;
    gap: 40px;
  }

  .div-icon-area,
  .div-icon-room,
  .div-icon-bathroom,
  .div-icon-floors {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-area,
  .icon-room,
  .icon-bathroom,
  .icon-floors {
    margin: 10px 0px;
    width: 40px;
    height: 40px;
  }
`;

export const ListMaterials = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: var(--yellow2);
  color: var(--grey0);
  width: 350px;
  height: 400px;

  .button-list-materials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 6px 20px 6px;
  }

  .text-list-materials {
    font-size: 1rem;
  }

  .button-list {
    height: 34px;
    padding: 0px 6px;
    background-color: var(--yellow4);
  }

  .list-materials {
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    list-style: none;
    background-color: var(--yellow3);
    margin: 6px 10px;
    border-radius: 8px;
  }

  h4 {
    font-size: 1rem;
    padding: 10px 6px;
  }

  p {
    font-size: 1rem;
    padding: 4px 6px;
    text-transform: uppercase;
    color: var(--grey1);
  }
`;
