import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleSelection(getId) {
    setSelected(getId === selected ? null : getId);
  }

  function multipleSelection(getId) {
    let tempMultiple = [...multiple];
    const currentIndex = tempMultiple.indexOf(getId);

    if (currentIndex === -1) {
      tempMultiple.push(getId);
    } else {
      tempMultiple.splice(currentIndex, 1);
    }

    setMultiple(tempMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => multipleSelection(dataItem.id)
                    : () => singleSelection(dataItem.id)
                }
                className="question"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
