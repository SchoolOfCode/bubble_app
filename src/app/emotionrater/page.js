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
import Bubble from "../../../public/assets/Bubble.svg";

import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HappinessRatingButtons = () => {
  const [happinessRating, setHappinessRating] = useState(null);
console.log(`This is the happiness rating ${happinessRating}`);
  const handleHappinessRatingChange = async (rating) => {
    console.log(rating);
    setHappinessRating(rating);
  };

  SubmitEvent = async () => {
    const { error  } = await supabase
      .from("mood")
      .update({happy: happinessRating})
      .eq("uuid", `135086d0-9c0e-4444-b110-9a964710cff3`);
  };

  return (
    <Box position="relative">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Box size="lg" w="70%" h="100px" bg="brand.blue" borderRadius="md">
          <Heading>Let’s dive deeper (rate your emotions)</Heading>
        </Box>

        <Box>
          <Box
            bg="brand.lightBlue"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How happy do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Happy</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Happy</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.yellow"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How sad do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Sad</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Sad</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.green"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How angry do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Angry</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Angry</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.pink"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How cheeky do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Cheeky</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Cheeky</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.purple"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How tired do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Tired</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Tired</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.green"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
          >
            <Heading align="center">How worried do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text size="sm">Not Worried</Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color="black"
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text size="sm">Very Worried</Text>
            </Box>
          </Box>
        </Box>

      </Flex>
      
      <Button onClick={() => SubmitEvent()}>Submit</Button>
    </Box>
  );
};

export default HappinessRatingButtons;
