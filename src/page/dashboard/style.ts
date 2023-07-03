import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100vh;

  background-image: url(https://i.ibb.co/XbS1Ymb/fundo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 3rem;
    background-color: #212529c7;
    padding: 10px;
    border-radius: 8px;
  }
`;

export const Div = styled.div`
  .engineer,
  .materials,
  .construction-project {
    padding: 20px;
    margin: 20px;

    color: var(--grey0);
    background-color: var(--grey6);
    border-radius: 8px;
    text-decoration: none;
  }

  .engineer:hover,
  .materials:hover,
  .construction-project:hover {
    background-color: var(--yellow4);
  }
`;
