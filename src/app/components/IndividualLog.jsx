import React from "react";
import { Text, Box, Heading, Flex } from "@chakra-ui/react";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";
import Image from "next/image";

//renaming commment to change file
export default function IndividualLog(props) {
  let imageUrl;
  let colorCard

  switch (props.data.emoji) {
    case "../../../public/assets/emojis/Happy.svg":
      imageUrl = Happy;
      colorCard = "brand.green";
      break;
    case "../../../public/assets/emojis/Sad.svg":
      imageUrl = Sad;
      colorCard = "brand.purple";
      break;
    case "../../../public/assets/emojis/Cheeky.svg":
      imageUrl = Cheeky;
      colorCard = "brand.yellow";
      break;
    case "../../../public/assets/emojis/Angry.svg":
      imageUrl = Angry;
      colorCard = "brand.pink";
      break;
    case "../../../public/assets/emojis/Worried.svg":
      imageUrl = Worried;
      colorCard = "brand.blue";
      break;
    case "../../../public/assets/emojis/Tired2.svg":
      imageUrl = Tired;
      colorCard = "brand.orange";
      break;
    default:
      imageUrl = null; // Set a default image if no matching emotion is found
      break;
  }
  // console.log(imageUrl);

  // Convert the timestamp to a Date object
  const date = new Date(props.data.date);

  // Get the day of the month
  const day = date.getDate();

  // Get the month name
  const month = date.toLocaleString("default", { month: "long" });

  // Create the formatted date string
  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}`;

  return (
    <Box
      maxW="600px"
      mx="auto"
      borderRadius="20"
      textAlign="center"
      bg={colorCard}
      p="2"
      mt="5"
      mb="5"
      boxShadow="lg"
    >
      <Flex gap="10px" direction="row" alignItems="center">
        <Image src={imageUrl} alt="Image-From-Supabase" width="50px" />

        <Text fontSize="xl">
          {formattedDate}
          {"  "}
          {props.data.reflection}
        </Text>
      </Flex>
    </Box>
  );
}

function getOrdinalSuffix(day) {
  const suffixes = ["th", "st", "nd", "rd"];
  const relevantDigits = day < 30 ? day % 20 : day % 30;
  const suffixIndex =
    relevantDigits <= 3 && relevantDigits >= 1 && (day < 10 || day > 20)
      ? relevantDigits
      : 0;
  return suffixes[suffixIndex];
}
