import ConvertButtonIcon from "./ButtonIcon";
import "./style.css";

export default function ({ handleGenerate }) {
  return (
    <>
      <button className="btnConvert" onClick={handleGenerate}>
        <ConvertButtonIcon /> CONVERT
      </button>
    </>
  );
}
