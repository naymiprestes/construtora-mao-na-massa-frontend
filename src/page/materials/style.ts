import styled from "styled-components";

export const DivMaterials = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;

  h2 {
    font-size: 2rem;
    border-bottom: 2px solid var(--yellow4);
    width: 100vw;
  }

  .register-back-materials {
    display: flex;
    justify-content: space-around;
    margin: 40px;
  }

  .registerMaterials,
  .back {
    width: 160px;
    height: 40px;

    background-color: var(--grey0);
    border: 1px solid var(--whiteFixed);
    color: var(--whiteFixed);
    font-size: 1rem;
  }

  .registerMaterials:hover,
  .back:hover {
    background-color: var(--yellow4);
    color: var(--grey1);
    opacity: 60%;
  }

  .back {
    text-align: center;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
  }
`;

export const Div = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
    margin: 0px 100px 20px 100px;
  }

  h3 {
    text-align: center;
    background-color: var(--yellow4);
    color: var(--grey1);
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
  }

  p {
    margin: 14px;
  }

  li {
    display: flex;
    flex-direction: column;

    list-style: none;
    line-height: 26px;
    font-size: 1rem;
    border: 1px solid var(--whiteFixed);
    border-radius: 8px;
  }
`;

export const ButtonMaterials = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 40px;

  .buttonEdit,
  .buttonDelete {
    width: 80px;
    height: 40px;

    background-color: var(--grey0);
    border: 1px solid var(--whiteFixed);
    color: var(--whiteFixed);
    font-size: 1rem;
  }

  .buttonEdit:hover,
  .buttonDelete:hover {
    background-color: var(--yellow4);
    color: var(--grey1);
    opacity: 60%;
  }
`;
