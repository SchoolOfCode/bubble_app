// replace emotion rater page with component
// needs section with heading
//beneath this 5 bubble images each with a number 1-5
// when clicked, the number is stored in state
// below the bubbles, a button to submit the rating
// when clicked, the rating is sent to the server
//either side of the bubbles a space for a label - this will be called using an object with the different emotions as keys and the labels as values

import React, { useState, useContext } from "react";
import Image from "next/image";
import { Box, Button, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import Bubble from "../../../public/assets/Bubble.png";
import "../page.module.css";

const Rating = ({ emotion, onRatingChange }) => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
    onRatingChange(value); // Call the parent component's handler function
  };

  // Define color mappings for each emotion
  const colorMappings = {
    happy: "brand.green",
    sad: "brand.purple",
    angry: "brand.pink",
    cheeky: "brand.yellow",
    tired: "brand.orange",
    worried: "brand.blue",
  };

  // Get the color based on the emotion
  const backgroundColor = colorMappings[emotion];

  return (
    <>
      <SimpleGrid columns={{base: 1, sm: 1, md: 1, lg: 1}} spacingX={7}>
        <Box
          bg={backgroundColor}
          borderRadius="20"
          p="1rem"
          my="0.5rem"
          w={[300, 400, 500]}
          h={[100, 125, 125]}
        >
          <Heading
            align="center"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            mb="10px"
          >
            How {emotion} do you feel?
          </Heading>
          <Flex alignItems="center" justifyContent="center">
            <Text
              align="center"
              w="60px"
              h="65px"
              size="sm"
              fontWeight="bold"
              noOfLines={2}
              css={{
                "@media (max-width: 480px)": {
                  fontSize: "13px",
                  alignSelf: "center",
                },
              }}
            >
              Not {emotion}
            </Text>
            {[1, 2, 3, 4, 5].map((num) => (
              <Box
                key={num}
                position="relative"
                display="inline-block"
                onClick={() => handleRatingChange(num)}
              >
                <Image
                  src={Bubble}
                  alt={`Bubble${num}`}
                  width={50}
                  height={50}
                  style={{
                    filter: rating !== num ? "opacity(50%)" : "none",
                  }}
                  cursor="pointer"
                />
                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={rating === num ? "black" : "grey"}
                  cursor="pointer"
                  css={{
                    "@media (max-width: 480px)": {
                      top: "18px",
                      fontSize: "18px",
                    },
                  }}
                >
                  {num}
                </Text>
              </Box>
            ))}
            <Text
              align="center"
              w="65px"
              h="65px"
              fontWeight="bold"
              size="sm"
              css={{
                "@media (max-width: 480px)": {
                  fontSize: "13px",
                  marginLeft: "3px",
                },
              }}
            >
              Very {emotion}
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Rating;
