"use client";
import React from "react";
import {
  Text,
  Box,
  Flex,
  Center,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import ReactPlayer from "react-player";
// import BackgroundBox from "./BackgroundBox";
// import VideoPlayer from "./VideoPlayer";

export default function Bubble() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <BackgroundBox /> */}
      <Center>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="15px"
        >
          <Box
            width={[300, 400, 600]}
            bg="brand.blue"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Just like bubbles float away, this magical breathing helps your
              worries and busy thoughts float away too.
            </Text>
          </Box>
          <Box
            width={[300, 400, 600]}
            bg="brand.yellow"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              In moments of distraction, Bubble Breathing becomes a magical key
              to unlocking better concentration.
            </Text>
          </Box>
          <Box
            width={[300, 400, 600]}
            bg="brand.green"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              Just imagine yourself blowing bubbles...
              <br></br>Tap Ready to begin!
            </Text>
          </Box>
          <Box>
            <Link href="/exercise" target="_self">
              <Button
                bg="brand.purple"
                boxShadow="lg"
                size={{ base: "md", md: "lg", lg: "lg" }}
                mb={12}
              >
                <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                  Ready
                </Text>
              </Button>
            </Link>
            <Button
              bg="brand.orange"
              boxShadow="lg"
              size={{ base: "md", md: "lg", lg: "lg" }}
              mb={12}
              ml={5}
              onClick={onOpen}
            >
              <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
            How to Bubble Breathe
              </Text>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={{ base: "md", md: "xl", lg: "xl" }} isCentered>
              <ModalOverlay />
              <ModalContent bg="brand.orange">
                <Flex justifyContent="center" alignItems="center" flexDirection="column" >
                <ModalHeader>Bubble Breating Video</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Center>
                <Box w={{ base: 300, md: 400, lg: 500 }} h={{ base: 200, md: 200, lg: 350 }}>
                    <ReactPlayer
                      url="https://youtu.be/FpUNhx1IFec"
                      controls
                      width="100%"
                      height="100%"
                    />
                </Box>
                </Center>
                  <Text fontSize={{ base: "md", md: "md", lg: "lg" }} p="5" textAlign="center">
                    A quick video to show you how to Bubble Breathe!
                  </Text>
                  <Flex justifyContent="center" alignItems="center" >
                  <Button size={{ base: "md", md: "md", lg: "lg" }}colorScheme="orange" mr={3} onClick={onClose}>
                  <Text>
                    Close
                  </Text>
                  </Button>
                  </Flex>
                </ModalBody>
                </Flex>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
      </Center>
    </>
  );
}
