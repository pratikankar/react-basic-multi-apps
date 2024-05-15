import { useEffect, useState } from "react";

export default function StoreTheme(key, val) {
  const [value, setValue] = useState(() => {
    let tempValue;

    try {
      tempValue = JSON.parse(localStorage.getItem(key) || String(val));
    } catch (error) {
      console.log(error);
      tempValue = val;
    }
    return tempValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
