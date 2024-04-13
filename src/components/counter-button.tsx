import { ComponentProps } from "react";

interface CounterButtonProps extends ComponentProps<"button"> {
  buttonType: "decrease-amount" | "decrease" | "increase" | "increase-amount";
  setState: React.Dispatch<React.SetStateAction<number>>;
  amount?: number;
}

export function CounterButton({
  buttonType,
  setState,
  disabled,
}: CounterButtonProps) {
  function animateText(direction: "left" | "right") {
    const counterTextElement = document.getElementById("counter-text")!;
    const inDarkMode = document.documentElement.classList.contains("dark");
    const theme = inDarkMode ? "dark" : "light";
    const themeTextColor = `var(--${theme}-text-color)`;

    try {
      counterTextElement.animate(
        [
          {
            color: `var(--${theme}-counter-${direction})`,
          },
          {
            color: themeTextColor,
          },
        ],

        300
      );
    } catch (err) {
      console.error("Navigator not support Animate API");
    }
  }

  function handleDecreaseAmount() {
    const decreaseAmountElement = document.getElementById(
      "decrease-amount"
    ) as HTMLInputElement;
    const decreaseAmount = Number(decreaseAmountElement.value ?? 0);

    setState((count) => {
      if (count < decreaseAmount || decreaseAmount < 1 || isNaN(decreaseAmount))
        return count;

      animateText("left");

      return count - decreaseAmount;
    });
  }

  function handleDecrease() {
    setState((count) => {
      if (count < 1) return 0;

      animateText("left");

      return count - 1;
    });
  }

  function handleIncrease() {
    animateText("right");
    setState((count) => count + 1);
  }

  function handleIncreaseAmount() {
    const increaseAmountElement = document.getElementById(
      "increase-amount"
    ) as HTMLInputElement;
    const increaseAmount = Number(increaseAmountElement.value ?? 0);

    setState((count) => {
      if (increaseAmount < 1 || isNaN(increaseAmount)) return count;

      animateText("right");

      return count + increaseAmount;
    });
  }

  switch (buttonType) {
    case "decrease-amount":
      return (
        <button disabled={disabled} onClick={handleDecreaseAmount}>
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
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
        </button>
      );

    case "decrease":
      return (
        <button disabled={disabled} onClick={handleDecrease}>
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      );

    case "increase":
      return (
        <button disabled={disabled} onClick={handleIncrease}>
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      );

    case "increase-amount":
      return (
        <button disabled={disabled} onClick={handleIncreaseAmount}>
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
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>
      );
  }
}
