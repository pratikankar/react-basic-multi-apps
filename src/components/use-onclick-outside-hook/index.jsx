import { useEffect } from "react";

export default function useOnClickOutsideHook(ref, handler) {
  useEffect(() => {
    function eventListener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", eventListener);
    document.addEventListener("touchstart", eventListener);

    return () => {
      document.removeEventListener("mousedown", eventListener);
      document.removeEventListener("touchstart", eventListener);
    };
  }, [handler, ref]);
}
