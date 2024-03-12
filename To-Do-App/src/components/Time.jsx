export function Time() {
  let time = new Date();

  return (
    <>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </>
  );
}
