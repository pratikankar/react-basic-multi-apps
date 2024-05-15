export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <h3>{header ? header : "Modal Header"}</h3>
          <div className="close-modal" onClick={onClose}>
            X
          </div>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h3>Modal Footer</h3>}</div>
      </div>
    </div>
  );
}
