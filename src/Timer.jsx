import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton.jsx";
import PauseButton from "./PauseButton.jsx";
import SettingsButton from "./SettingsButton.jsx";

const red = "#f54e4e";
const green = "#4aec8c";
export default function () {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={"60%"}
        styles={buildStyles({
          textColor: "#fff",
          tailColor: "rgba(255,255,255,.2)",
          pathColor: red,
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton />
      </div>
    </div>
  );
}
