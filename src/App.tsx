import React from "react";
import "./App.css";
import { CustomPlayerContextProvider } from "./components/CustomPlayer/CustomPlayerContextProvider";
import { CustomPlayerControl } from "./components/CustomPlayer/CustomPlayerControl";
import { Video } from "./components/Audio";

function App() {
  return (
    <div className="App">
      <CustomPlayerContextProvider>
        <CustomPlayerControl />
        <Video />
      </CustomPlayerContextProvider>
    </div>
  );
}

export default App;
