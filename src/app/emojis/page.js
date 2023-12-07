"use client";
import supabase from "../config/supbaseClient.js";
import { useEffect, useState } from "react";
import { useLink } from "next/router";
import { SimpleGrid, Button } from "@chakra-ui/react";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";
import Link from "next/link.js";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Emojis() {
  //trying to get the emoji to link to the next page
  //   const router = useRouter();
  // router.push("../page.js");
  //define the date
  const date = new Date().toLocaleString();
  console.log(date);
  async function emojiClickHandler(emoji) {
    console.log(emoji);
    const { data, error } = await supabase
      .from("mood")
      .insert([{ emoji, date: new Date().toLocaleString() }]);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("this has worked, check supabase");
    }
    // router.push("/");
  }

  return (
    //set up a div to contain the text - "How are you feeling? (just pick one)
    //need to display the 6 emoji images in a grid - chakra ui grid
    <>
      <Navbar />
      <Box>
        <Box
          maxW="500px"
          mx="auto"
          borderRadius="20"
          textAlign="center"
          bg="brand.green"
          p="2"
          mb="10"
          boxShadow="lg"
        >
          <Heading>How are you feeling?</Heading>
          <Text fontSize="lg">(click an emoji)</Text>
        </Box>

        <Flex justify="center" alignItems="center">
          <SimpleGrid columns={3} spacing={10} mx="auto">
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Happy}
                    alt="Happy-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler(
                        "../../../public/assets/emojis/Happy.svg"
                      )
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Happy
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Sad}
                    alt="Sad-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler("../../../public/assets/emojis/Sad.svg")
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Sad
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Cheeky}
                    alt="Cheeky-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler(
                        "../../../public/assets/emojis/Cheeky.svg"
                      )
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Cheeky
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Angry}
                    alt="Angry-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler(
                        "../../../public/assets/emojis/Angry.svg"
                      )
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Angry
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Worried}
                    alt="Worried-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler(
                        "../../../public/assets/emojis/Worried.svg"
                      )
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Worried
                </Text>
              </Box>
            </Flex>
            <Flex justify="flex-start" alignItems="flex-start" h="100%">
              <Box>
                <Link href="/reflection">
                  <Image
                    src={Tired}
                    alt="Tired-Emoji"
                    priority
                    onClick={() =>
                      emojiClickHandler(
                        "../../../public/assets/emojis/Tired2.svg"
                      )
                    }
                  />
                </Link>
                <Text mt={2} textAlign="center" color="white" fontSize="xl">
                  Tired
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>

          <Link href="/reflection">
            <Button>Next</Button>
          </Link>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
