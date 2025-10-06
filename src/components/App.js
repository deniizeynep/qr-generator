import AddLink from "./AddLink/AddLink";
import ConvertButton from "./Buttons/ConvertButton";
import QrGenerator from "./QrGenerator/QrGenerator";

export default function App() {
  return (
    <div className={{display: "flex", flexDirection: "row"}}>
      <AddLink />
      <ConvertButton />
      <QrGenerator />
    </div>
  );
}
