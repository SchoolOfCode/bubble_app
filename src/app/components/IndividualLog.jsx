import React from "react";
import { Text, Box, Heading, Flex, Square } from "@chakra-ui/react";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";
import Image from "next/image";
import CalendarIcon from "../../../public/assets/icons/CalendarIcon.png";
export default function IndividualLog(props) {
  let imageUrl;
  let colorCard;
  let emojiName;

  switch (props.data.emoji) {
    case "../../../public/assets/emojis/Happy.svg":
      imageUrl = Happy;
      colorCard = "brand.green";
      emojiName = "Happy";
      break;
    case "../../../public/assets/emojis/Sad.svg":
      imageUrl = Sad;
      colorCard = "brand.purple";
      emojiName = "Sad";
      break;
    case "../../../public/assets/emojis/Cheeky.svg":
      imageUrl = Cheeky;
      colorCard = "brand.yellow";
      emojiName = "Cheeky";
      break;
    case "../../../public/assets/emojis/Angry.svg":
      imageUrl = Angry;
      colorCard = "brand.pink";
      emojiName = "Angry";
      break;
    case "../../../public/assets/emojis/Worried.svg":
      imageUrl = Worried;
      colorCard = "brand.blue";
      emojiName = "Worried";
      break;
    case "../../../public/assets/emojis/Tired2.svg":
      imageUrl = Tired;
      colorCard = "brand.orange";
      emojiName = "Tired";
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
      width={{ base: 300, md: 600, lg: 600 }}
      mx="auto"
      // mx="auto"
      borderRadius="20"
      textAlign="center"
      bg={colorCard}
      p={[2, 4, 6]}
      mt="5"
      mb="5"
      boxShadow="lg"
    >
      <Flex justifyContent="right">
        <Flex direction="row">
          <Square w={[22, 33, 33]}>
            <Image src={CalendarIcon} alt="Calendar Icon" />
          </Square>
          <Text
            fontSize={{ base: "md", md: "xl", lg: "xl" }}
            as="b"
            m={[0.5, 2, 2]}
          >
            {formattedDate}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Box
          flex="1"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
        >
          <Image
            className="emoji-image"
            justifyContent="center"
            pl="9"
            src={imageUrl}
            alt={`${emojiName} Image`}
          />
          <Text fontSize="xl" as="b">
            {emojiName}
          </Text>
        </Box>
        <Flex
          direction="column"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          flex="2"
        >
          <Text
            width={{ base: 200, md: 400, lg: 400 }}
            fontSize={{ base: "md", md: "xl", lg: "xl" }}
          >
            {props.data.reflection}
          </Text>
        </Flex>
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
