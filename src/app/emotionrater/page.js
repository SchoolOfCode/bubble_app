"use client";
import supabase from "../config/supbaseClient.js";
import { useEffect, useState } from "react";
import { useLink } from "next/router";
import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired.svg";
import Link from "next/link.js";

import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HappinessRatingButtons = () => {
  const [happinessRating, setHappinessRating] = useState(null);

  const handleHappinessRatingChange = async (rating) => {
    await supabase.rpc("update_happiness_rating", { rating });
    setHappinessRating(rating);
  };

  return (
    <Box position="relative">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Box size="lg" w="70%" h="100px" bg="brand.blue">
          <Heading>Let’s dive deeper (rate your emotions)</Heading>
        </Box>

        <Box>
          <Heading>How happy do you feel?</Heading>
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={() => handleHappinessRatingChange(1)}
              colorScheme="red"
              size="sm"
            >
              Not Happy
            </Button>
            <Button
              onClick={() => handleHappinessRatingChange(2)}
              colorScheme="orange"
              size="sm"
            >
              1
            </Button>
            <Button
              onClick={() => handleHappinessRatingChange(3)}
              colorScheme="yellow"
              size="sm"
            >
              2
            </Button>
            <Button
              onClick={() => handleHappinessRatingChange(4)}
              colorScheme="green"
              size="sm"
            >
              3
            </Button>
            <Button
              onClick={() => handleHappinessRatingChange(5)}
              colorScheme="teal"
              size="sm"
            >
              4
            </Button>
            <Button
              onClick={() => handleHappinessRatingChange(6)}
              colorScheme="blue"
              size="sm"
            >
              Very Happy
            </Button>
          </Box>
          <Text>Your happiness rating: {happinessRating}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HappinessRatingButtons;
