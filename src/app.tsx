import { useEffect, useState } from "react";

import { addLeadingZero } from "./utils/leading-zero";
import { CounterButton } from "./components/counter-button";
import { Header } from "./components/header/header";

export function App() {
  const [count, setCount] = useState(0);

  function setCounterInTitle() {
    document.title = `React Counter (${addLeadingZero(count)})`;
  }

  useEffect(() => {
    setCounterInTitle();
  }, [count]);

  return (
    <>
      <Header />
      <main>
        <span>{count}</span>
        <CounterButton setState={setCount} type="decrease" />
        <CounterButton setState={setCount} type="increase" />
      </main>
    </>
  );
}
