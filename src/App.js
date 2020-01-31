import React from "react";
import "./App.css";
import Main from "./Main";
import ButtonAppBar from "./ButtonAppBar";
import CountdownTimer from "./CountdownTimer";
import StickyFooter from "./StickyFooter";
// import LinkRouter from "./LinkRouter";

function App() {
  return (
    <div className="App">
      <div>
        <ButtonAppBar />
        {/* <LinkRouter /> */}
        <Main />
        <CountdownTimer />
        <StickyFooter />
      </div>
    </div>
  );
}

export default App;
