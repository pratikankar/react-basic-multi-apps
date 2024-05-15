import { useState, useRef } from "react";
import useOnClickOutsideHook from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);

  useOnClickOutsideHook(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>What is a hook?</h1>
          <p>
            A Hook is a special function that lets you “hook into” React
            features. For example, useState is a Hook that lets you add React
            state to function components.
          </p>
          <p style={{ color: "red" }}>
            Custom OnClick Hook is used here, you will have to click away from
            content to close the above description
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
