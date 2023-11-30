import "./styles.css";
import React from "react";
import Timer from "./Timer.jsx";
import Settings from "./Settings.jsx";
import SettingsContext from "./SettingsContext";
export default function App() {
  const [showSettings, setShowSettings] = React.useState(0);
  const [workMinutes, setWorkMinutes] = React.useState(45);
  const [breakMinutes, setBreakMinutes] = React.useState(15);
  return (
    <SettingsContext.Provider
      value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}
    >
      <main className="App">{showSettings ? <Settings /> : <Timer />}</main>
    </SettingsContext.Provider>
  );
}
