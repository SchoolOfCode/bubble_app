//retrieve the data from child logs and pass the props down to individual log

import IndividualLog from "./IndividualLog";
import { Spinner, Flex, Text } from "@chakra-ui/react";

export default function ListOfLogs(props) {
  //   const { logs, deleteLog, editLog } = props;
  console.log(props.data);
  console.log(`data in the ListOfLogs${props.data}`);
  if (props.data.length < 1) {
    return (
      <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Spinner m="20" size="xl" />
        <Text fontSize="2xl">Getting your logs...</Text>
      </Flex>
      </>
    );
  }
  const sortedArray = props.data.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      {sortedArray.map((data) => (
        <IndividualLog key={data.uuid} data={data} />
      ))}
    </>
  );
}
