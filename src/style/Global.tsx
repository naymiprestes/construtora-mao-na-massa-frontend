import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{

  //grey scale

  --grey0: #0B0D0D;
  --grey1: #212529;
  --grey2: #495057;
  --grey3: #868E96;
  --grey4: #ADB5BD;
  --grey5: #CED4DA;
  --grey6: #DEE2E6;
  --grey7: #E9ECEF;
  --grey8: #F1F3F5;
  --grey9: #F8F9FA;
  --grey10: #FDFDFD;
  --whiteFixed: #FFFFFF;

  --yellow0: #fff9ec;
  --yellow1:#ffebc4;
  --yellow2: #ffe2a7;
  --yellow3: #ffd47f;
  --yellow4: #ffcc66;
  --yellow5: #ffbf40;
  --yellow6: #e8ae3a;
  --yellow7: #b5882d;
  --yellow8: #8c6923;
  --yellow9: #FDE8C2;


  // typogrady

  --body-1-400: 400;
  --body-2-500: 500;

  --input-placeholder: 400;
  --input-label: 500;

  --heading: 'Lexend';
  --body: 'Inter';
  --button: 'Inter';
  --input: 'Inter';


}

*{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;   
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
    background-color: var(--grey0);
    color: var(--whiteFixed);
    width: 100%;
    overflow-x: hidden;
    font-family: var(--body);
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: var(--heading);
} 

button{
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-family: var(--button);
}

input, textarea, select {
  font-family: var(--input);
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  
  background-color: #343b41;
  color: var(--whiteFixed);
}


::-webkit-scrollbar{
    width: 6px;
    border-radius: 20px;
    background-color: var(--whiteFixed);
}


::-webkit-scrollbar-thumb {
  border-radius: 40px;
  width: 5px;
}
`;

export default GlobalStyle;
