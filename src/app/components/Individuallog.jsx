import React from "react";
import { Text, Box, Heading, Flex } from "@chakra-ui/react";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";
import Image from "next/image";

export default function IndividualLog(props) {
  let imageUrl;

  switch (props.data.emoji) {
    case "../../../public/assets/emojis/Happy.svg":
      imageUrl = Happy;
      break;
    case "../../../public/assets/emojis/Sad.svg":
      imageUrl = Sad;
      break;
    case "../../../public/assets/emojis/Cheeky.svg":
      imageUrl = Cheeky;
      break;
    case "../../../public/assets/emojis/Angry.svg":
      imageUrl = Angry;
      break;
    case "../../../public/assets/emojis/Worried.svg":
      imageUrl = Worried;
      break;
    case "../../../public/assets/emojis/Tired2.svg":
      imageUrl = Tired;
      break;
    default:
      imageUrl = null; // Set a default image if no matching emotion is found
      break;
  }
  console.log(imageUrl);

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
      <Flex gap="10px" direction="row" alignItems="center">
        <Image src={imageUrl} alt="Image-From-Supabase" width="50px" />

        <Text>
          {props.data.date}
          {props.data.reflection}
        </Text>
      </Flex>
    </Box>
  );
}
