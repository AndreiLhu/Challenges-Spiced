export default function Counter({
  onHandleAddingPeople,
  onHandleSubstractingPeople,
  onCount,
}) {
  let buttonDisabled = false;
  onCount <= 0 ? (buttonDisabled = true) : (buttonDisabled = false);
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onHandleAddingPeople}
        >
          +
        </button>
        <button
          disabled={buttonDisabled}
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onHandleSubstractingPeople}
        >
          -
        </button>
      </div>
    </>
  );
}
