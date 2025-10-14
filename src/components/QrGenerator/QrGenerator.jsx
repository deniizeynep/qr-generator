import "./style.css";
import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator({ qrValue }) {
  return (
    <div>
      <h3 className="title">Qr Generator</h3>
      <div className="box">
        {qrValue ? (
          <QRCodeCanvas value={qrValue} size={400} />
        ) : (
          <p>{qrValue}</p>
        )}
      </div>
    </div>
  );
}
