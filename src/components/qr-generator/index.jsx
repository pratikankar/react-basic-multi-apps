import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function generateQR() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qrcode"
          value={input}
          placeholder="Enter value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={generateQR}
        >
          Generate
        </button>
      </div>
      <div className="add-input">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#FFF" />
      </div>
    </div>
  );
}
