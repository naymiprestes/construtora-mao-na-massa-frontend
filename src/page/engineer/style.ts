import styled from "styled-components";

export const DivEngineer = styled.div`
  h2 {
    font-size: 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 40px 40px;
    border-bottom: 1px solid var(--yellow4);
  }

  .button-back-engineers {
    display: flex;
    gap: 40px;
    margin: 0px 40px;
  }

  .button-back,
  .button-engineers {
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
`;

export const Div = styled.div`
  margin-top: 60px;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 60px;
    margin: 0px 115px;
  }

  h3 {
    text-align: center;
    background-color: var(--yellow4);
    color: var(--grey1);
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    text-transform: capitalize;
  }

  p {
    margin: 14px;
  }

  li {
    display: flex;
    flex-direction: column;

    list-style: none;
    line-height: 24px;
    font-size: 1rem;
    border: 1px solid var(--whiteFixed);
    border-radius: 8px;
  }
`;

export const ButtonEngineer = styled.div`
  display: flex;

  justify-content: space-around;
  padding: 20px;
  gap: 40px;

  .buttonEdit,
  .buttonDelete {
    width: 80px;
    height: 40px;

    background-color: var(--grey0);
    border: 1px solid var(--grey2);
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
