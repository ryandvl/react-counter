interface CounterButtonProps {
  type: "decrease" | "increase";
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export function CounterButton({ type, setState }: CounterButtonProps) {
  function handleDecrease() {
    setState((count) => count - 1);
  }

  function handleIncrease() {
    setState((count) => count + 1);
  }

  return type == "decrease" ? (
    <button onClick={handleDecrease}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
  ) : (
    <button onClick={handleIncrease}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
}
