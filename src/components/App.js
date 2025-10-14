import { useState } from "react";
import AddLink from "./AddLink/AddLink";
import ConvertButton from "./Buttons/ConvertButton";
import QrGenerator from "./QrGenerator/QrGenerator";
import "./app.css";

export default function App() {
  const [link, setLink] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    if (link.trim() === "") return;
    setQrValue(link);
  };
  return (
    <div className="container">
      <AddLink link={link} setLink={setLink} />
      <ConvertButton handleGenerate={handleGenerate} />
      <QrGenerator qrValue={qrValue} />
    </div>
  );
}
