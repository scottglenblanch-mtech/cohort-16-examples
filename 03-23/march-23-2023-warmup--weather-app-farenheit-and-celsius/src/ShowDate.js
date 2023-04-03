export default function ShowDate() {
  const dateText = getDateText();

  return (
    <div id="date">
      <label>Today's Date</label>
      <p>{dateText}</p>
    </div>
  );
}

function getDateText() {
  return new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
