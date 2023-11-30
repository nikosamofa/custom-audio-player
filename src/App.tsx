import React from "react";
import "./App.css";
import { CustomPlayerContextProvider } from "./components/CustomPlayer/CustomPlayerContextProvider";
import { CustomPlayerControl } from "./components/CustomPlayer/CustomPlayerControl";
import { Video } from "./components/Audio";
import { AudioLinkLoader } from "./components/AudioLinkLoader";

function App() {
  return (
    <div className="App">
      <CustomPlayerContextProvider>
        <AudioLinkLoader />
        <CustomPlayerControl />
        <Video />
      </CustomPlayerContextProvider>
    </div>
  );
}

export default App;
