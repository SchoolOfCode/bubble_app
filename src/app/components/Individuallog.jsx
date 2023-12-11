import React from "react";
import { Text, Box } from "@chakra-ui/react";



async function logEntryRetrieval() {
    const { data, error } = await supabase
      .from("mood")
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("this has worked, check supabase");
      router.push("/emotionrater");
      setUuid(data[0].uuid);
    }
  }


export default function Individuallog() {
  return (
    <Box>
      <Text>This a log</Text>
    </Box>
  );
}
