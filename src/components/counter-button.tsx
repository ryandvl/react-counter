interface CounterButtonProps {
  type: "decrease-amount" | "decrease" | "increase" | "increase-amount";
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export function CounterButton({ type, setState }: CounterButtonProps) {
  function handleDecrease() {
    setState((count) => {
      if (count < 1) return 0;

      return count - 1;
    });
  }

  function handleIncrease() {
    setState((count) => count + 1);
  }

  function handleDecreaseAmount() {
    setState((count) => {
      if (count < 1) return 0;

      return count - 1;
    });
  }

  function handleIncreaseAmount() {
    setState((count) => count + 1);
  }

  switch (type) {
    case "decrease-amount":
      return (
        <button onClick={handleDecreaseAmount}>
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
        <button onClick={handleDecrease}>
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
        <button onClick={handleIncrease}>
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
        <button onClick={handleIncreaseAmount}>
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
