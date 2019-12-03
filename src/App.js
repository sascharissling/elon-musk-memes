import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

//STYLE Start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

//STYLE End

function App() {
  return <AppContainer>Memes</AppContainer>;
}

export default App;
