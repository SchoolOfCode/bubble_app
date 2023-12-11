import React from "react";
import { Text, Box, Heading } from "@chakra-ui/react";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";

export default function IndividualLog(props) {
  return (
    <Box
        maxW="600px"
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.green"
        p="2"
        mt="5"
        mb="5"
        boxShadow="lg"
      >
        <Heading size="md">
          {props.data.emoji} {props.data.date}
        </Heading>
        <Text>{props.data.reflection}</Text>
      </Box>
  );
}
