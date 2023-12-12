//retrieve the data from child logs and pass the props down to individual log

import IndividualLog from "./IndividualLog";

export default function ListOfLogs(props) {
  //   const { logs, deleteLog, editLog } = props;
  console.log(props.data);
  console.log(`data in the ListOfLogs${props.data}`);
  if (props.data.length < 1) {
    return (
      <main>
        <h2>No Logs yet! 🫢</h2>
      </main>
    );
  }
  const sortedArray = props.data.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main>
      {sortedArray.map((data) => (
        <IndividualLog key={data.uuid} data={data} />
      ))}
    </main>
  );
}
