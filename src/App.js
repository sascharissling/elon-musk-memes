import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

//STYLE Start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const SubmitButton = styled.button`
  width: 30%;
  height: 10%;
  font-family: monospace;
  font-size: 2rem;
  background: transparent;
  border-radius: 15px;
  background: linear-gradient(to right, #544a7d, #ffd452);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  color: white;
  &:hover {
    color: whitesmoke;
    background: linear-gradient(to top, #ff416c, #ff4b2b);
    box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
  }
`;

const RandomButton = styled.button`
  width: 55%;
  height: 15%;
  font-family: monospace;
  background: transparent;
  font-size: 4rem;
  border-radius: 15px;
  background: linear-gradient(to top, #8a2387, #e94057, #f27121);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  color: white;
  &:hover {
    color: whitesmoke;
    background: linear-gradient(to right, #009fff, #ec2f4b);
    box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
  }
`;

const Elon = styled.img`
  width: 70%;
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

//STYLE End

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <SubmitButton>SUBMIT</SubmitButton>
        <Elon src="https://i.imgur.com/T3KlU0U.jpg" />
        <RandomButton>GIVE</RandomButton>
      </AppContainer>
    </>
  );
}
export default App;

// On Random Button click => Background changes & Meme changes
// On Submit Button click => Meme URL submit + background color
