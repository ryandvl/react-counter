import { useEffect, useState } from "react";

import { addLeadingZero } from "./utils/leading-zero";
import { CounterButton } from "./components/counter-button";
import { Header } from "./components/header/header";

export function App() {
  const [count, setCount] = useState(0);
  const [decreaseButtonDisabled, setDecreaseButtonDisabled] = useState(true);
  const [increaseButtonDisabled, setIncreaseButtonDisabled] = useState(true);

  useEffect(() => {
    const counterTextElement = document.getElementById(
      "decrease-amount"
    ) as HTMLInputElement;

    checkCounterTextValue(counterTextElement.value, "decrease-amount");

    setCounterInTitle();
  }, [count]);

  function setCounterInTitle() {
    document.title = `React Counter (${addLeadingZero(count)})`;
  }

  function handleCounterCopyClick() {
    const counterTextElement = document.getElementById("counter-text");

    if (!counterTextElement?.textContent) return;

    navigator.clipboard
      .writeText(Number(counterTextElement.textContent).toString())
      .catch((err) => {
        alert("Clipboard API is not supported in this navigator.");
        console.error("Navigator not support Clipboard API", err);
      });
  }

  function checkCounterTextValue(valueString: string, targetId: string) {
    const value = Number(valueString);

    if (targetId == "decrease-amount") {
      setDecreaseButtonDisabled(value < 1 || value > count);
    } else {
      setIncreaseButtonDisabled(value < 1);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    checkCounterTextValue(event.target.value, event.target.id);
  }

  return (
    <>
      <Header />
      <main>
        <span id="counter-text">{addLeadingZero(count)}</span>

        <div className="counter-buttons">
          <CounterButton
            setState={setCount}
            buttonType="decrease-amount"
            disabled={decreaseButtonDisabled}
          />
          <CounterButton
            setState={setCount}
            buttonType="decrease"
            disabled={count == 0}
          />
          <CounterButton setState={setCount} buttonType="increase" />
          <CounterButton
            setState={setCount}
            buttonType="increase-amount"
            disabled={increaseButtonDisabled}
          />
        </div>

        <div className="counter-options-buttons">
          <input
            onChange={handleInputChange}
            id="decrease-amount"
            type="number"
            placeholder="Decrease"
          />

          <input
            onChange={handleInputChange}
            id="increase-amount"
            type="number"
            placeholder="Increase"
          />
        </div>

        <button id="counter-copy" onClick={handleCounterCopyClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v4" />
            <path d="M21 14H11" />
            <path d="m15 10-4 4 4 4" />
          </svg>

          <span>Copy Number to Clipboard</span>
        </button>
      </main>
    </>
  );
}
