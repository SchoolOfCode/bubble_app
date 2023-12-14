import React from "react";
import {
  Text,
  Box,
  Circle,
  AbsoluteCenter,
  Flex,
  Heading,
  Center,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Bubble() {
  return (
    <>
      <Box
        width="80%"
        height="70vh"
        mx="auto"
        borderRadius="20px"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        mb="5"
        boxShadow="lg"
      >
        <Heading paddingTop="3" as="h1" size={{ base: "lg", md: "lg", lg: "xl" }}>
          Bubble Breathing!
        </Heading>
      </Box>
      <Center>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="20px"
          position="absolute"
          top="35%"
        >
          <Box
            width="70%"
            bg="brand.blue"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
              Just like bubbles float away, this magical breathing helps your
              worries and busy thoughts float away too.
            </Text>
          </Box>
          <Box
            width="70%"
            bg="brand.yellow"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
              In moments of distraction, Bubble Breathing becomes a magical key
              to unlocking better concentration.
            </Text>
            </Box>
            <Box
            width="70%"
            bg="brand.green"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
            >
                <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Imagining yourself blowing
              bubbles adds a delightful touch to keeping your breath slow and
              steady...
              <br></br>Tap Ready to begin!
                </Text>
            </Box>
          <Box>
            <Link href="/exercise" target="_self">
              <Button
                bg="brand.purple"
                boxShadow="lg"
                size={{ base: "md", md: "lg", lg: "lg" }}
              >
                <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                  Ready
                </Text>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Center>
    </>
  );
}
