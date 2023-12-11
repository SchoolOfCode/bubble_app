//retrieve the data from child logs and pass the props down to individual log

import IndividualLog from "./IndividualLog";

export default function ListOfLogs(props) {
  //   const { logs, deleteLog, editLog } = props;
//   if (props.data.length < 1) {
//    console.log(props.data)
//     return (
//       <main className={styles.container}>
//         <h2>No Logs yet! 🫢</h2>
//       </main>
//     );
//   }
console.log(`data in the ListOfLogs${props.mood}`)
  return (
    <main>
      {/**
       * Create a new empty array (this is where you'll store your React elements)
       * Loop over the array of flash card objects. For each flashcard object:
       *    Create a new FlashcardItem component (for the current flashcard object)
       *    Add the newly created component instance to the array of React elements
       */}
      {/* {props.data.map((data) => (
        <IndividualLog key={data.uuid} data={data} />
      ))} */}
      <IndividualLog />
    </main>
  );
}
