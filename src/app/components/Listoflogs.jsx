//retrieve the data from child logs and pass the props down to individual log

import IndividualLog from "./IndividualLog";

export default function Listoflogs(props) {
  const { logs, deleteLog, editLog } = props;

  return (
    <div>
      {logs.map((log) => (
        <>
          <IndividualLog
            key={log.id}
            log={log}
            deleteLog={deleteLog}
            editLog={editLog}
          />
          <p>This is a list of logs</p>
        </>
      ))}
    </div>
  );
}
