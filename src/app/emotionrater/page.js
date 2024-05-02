"use client";
import supabase from "../config/supabaseClient.js";
import HeadingComponent from "../components/HeadingComponent.jsx";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar.jsx";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { UserIdContext } from "../context/useridcontext.js";
import Footer from "../components/Footer.jsx";
import Bubble from "../../../public/assets/Bubble.png";
import "../page.module.css";
import Rating from "../components/Rating.jsx";

const RatingButtons = () => {
  const { uuid } = useContext(UserIdContext);

  const toast = useToast();
  const router = useRouter();
  //Retrieving a value
  // const uniqueID = localStorage.getItem('uniqueid');
  // console.log(uniqueID); // Output: uuid

  const [happinessRating, setHappinessRating] = useState(null);
  // console.log(`This is the happiness rating ${happinessRating}`);
  const [sadnessRating, setSadnessRating] = useState(null);
  // console.log(`This is the sadness rating ${sadnessRating}`);
  const [angryRating, setAngryRating] = useState(null);
  // console.log(`This is the angry rating ${angryRating}`);
  const [cheekyRating, setCheekyRating] = useState(null);
  //console.log(`This is the cheeky rating ${cheekyRating}`);
  const [tiredRating, setTiredRating] = useState(null);
  //console.log(`This is the tired rating ${tiredRating}`);
  const [worriedRating, setWorriedRating] = useState(null);
  // console.log(
  //   `This is the happiness rating ${happinessRating} This is the sadness rating ${sadnessRating} This is the angry rating ${angryRating} This is the cheeky rating ${cheekyRating} This is the tired rating ${tiredRating}  This is the worried rating ${worriedRating}`
  // );

  const handleHappinessRatingChange = async (rating) => {
    setHappinessRating(rating);
  };
  const handleSadnessRatingChange = async (rating) => {
    setSadnessRating(rating);
  };
  const handleAngryRatingChange = async (rating) => {
    setAngryRating(rating);
  };
  const handleCheekyRatingChange = async (rating) => {
    setCheekyRating(rating);
  };
  const handleTiredRatingChange = async (rating) => {
    setTiredRating(rating);
  };
  const handleWorriedRatingChange = async (rating) => {
    setWorriedRating(rating);
  };

  const SubmitEvent = async () => {
    if (
      !happinessRating ||
      !sadnessRating ||
      !angryRating ||
      !cheekyRating ||
      !tiredRating ||
      !worriedRating
    ) {
      toast({
        position: "top",
        duration: 6000,
        render: () => (
          <Flex justifyContent="center" textAlign="center">
            <Box color="white" p={3} bg="#4258A6" borderRadius="md">
              <Text fontSize="xl" as="em">
                Oops not all of them have been selected! Double-check
                you&apos;ve picked a bubble for each question!
              </Text>
            </Box>
          </Flex>
        ),
      });
    } else {
      const { error } = await supabase
        .from("mood")
        .update({
          happy: happinessRating,
          sad: sadnessRating,
          angry: angryRating,
          cheeky: cheekyRating,
          tired: tiredRating,
          worried: worriedRating,
        })
        .eq("uuid", uuid);

      if (error) {
        console.log(error);
      }

      router.push("/reflection");
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        pb="50px"
      >
        <HeadingComponent />
        <Rating emotion="happy" />
        <Rating emotion="sad" />
        <Rating emotion="angry" />
        <Rating emotion="tired" />
        <Rating emotion="cheeky" />
        <Rating emotion="worried" />
        <Button
          bg="brand.purple"
          boxShadow="lg"
          size="lg"
          mb="10px"
          mt="10px"
          onClick={() => SubmitEvent()}
        >
          <Text size="xl">Next</Text>
        </Button>
      </Flex>
      <Footer />
    </>
  );
};

export default RatingButtons;
{
  /* <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacingX={7}>
          <Box>
            <Box
              bg="brand.green"
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
                How happy do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Text
                    align="center"
                    w="65px"
                    size="sm"
                    fontWeight="bold"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "center",
                      },
                    }}
                  >
                    Not Happy
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: happinessRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleHappinessRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={happinessRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: happinessRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleHappinessRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={happinessRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: happinessRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleHappinessRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={happinessRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: happinessRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleHappinessRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={happinessRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: happinessRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleHappinessRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={happinessRating === 5 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      marginLeft: "3px",
                    },
                  }}
                >
                  Very Happy
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              bg="brand.purple"
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
                How sad do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Text
                    textAlign="center"
                    w="65px"
                    fontWeight="bold"
                    size="sm"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    Not <br></br>
                    Sad
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: sadnessRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleSadnessRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={sadnessRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: sadnessRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleSadnessRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={sadnessRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: sadnessRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleSadnessRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={sadnessRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: sadnessRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleSadnessRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={sadnessRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: sadnessRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleSadnessRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={sadnessRating === 5 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      marginLeft: "3px",
                    },
                  }}
                >
                  Very Sad
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              bg="brand.pink"
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
                How angry do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Text
                    align="center"
                    w="65px"
                    fontWeight="bold"
                    size="sm"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    Not Angry
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: angryRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleAngryRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={angryRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: angryRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleAngryRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={angryRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: angryRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleAngryRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={angryRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: angryRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleAngryRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={angryRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: angryRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleAngryRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={angryRating === 5 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      marginLeft: "3px",
                    },
                  }}
                >
                  Very Angry
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              bg="brand.yellow"
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
                How cheeky do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Text
                    align="center"
                    w="65px"
                    fontWeight="bold"
                    size="sm"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    Not Cheeky
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: cheekyRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleCheekyRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={cheekyRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: cheekyRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleCheekyRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={cheekyRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: cheekyRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleCheekyRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={cheekyRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: cheekyRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleCheekyRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={cheekyRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: cheekyRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleCheekyRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={cheekyRating === 5 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                    },
                  }}
                >
                  Very Cheeky
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              bg="brand.orange"
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
                How tired do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box
                  display="flex"
                  css={{
                    "@media (max-width: 480px)": {
                      marginBottom: "10px",
                    },
                  }}
                >
                  <Text
                    align="center"
                    w="65px"
                    fontWeight="bold"
                    size="sm"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    Not <br></br> Tired
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: tiredRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleTiredRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={tiredRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: tiredRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleTiredRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={tiredRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: tiredRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleTiredRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={tiredRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: tiredRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleTiredRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={tiredRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: tiredRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleTiredRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={tiredRating === 5 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      marginLeft: "3px",
                    },
                  }}
                >
                  Very Tired
                </Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              bg="brand.blue"
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
                How worried do you feel?
              </Heading>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Text
                    align="center"
                    w="65px"
                    fontWeight="bold"
                    size="sm"
                    css={{
                      "@media (max-width: 480px)": {
                        fontSize: "13px",
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    Not Worried
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble1"
                    width={50}
                    height={50}
                    style={{
                      filter: worriedRating !== 1 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleWorriedRatingChange(1)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={worriedRating === 1 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    1
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble2"
                    width={50}
                    height={50}
                    style={{
                      filter: worriedRating !== 2 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleWorriedRatingChange(2)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={worriedRating === 2 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    2
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble3"
                    width={50}
                    height={50}
                    style={{
                      filter: worriedRating !== 3 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleWorriedRatingChange(3)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={worriedRating === 3 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    3
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble4"
                    width={50}
                    height={50}
                    style={{
                      filter: worriedRating !== 4 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleWorriedRatingChange(4)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={worriedRating === 4 ? "black" : "grey"}
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    4
                  </Text>
                </Box>
                <Box position="relative" display="inline-block">
                  <Image
                    src={Bubble}
                    alt="Bubble5"
                    width={50}
                    height={50}
                    style={{
                      filter: worriedRating !== 5 ? "opacity(50%)" : "none",
                    }}
                    cursor="pointer"
                  />

                  <Text
                    onClick={() => handleWorriedRatingChange(5)}
                    pt={{ base: "0", md: "1", lg: "1" }}
                    pb={{ base: "0", md: "1", lg: "1" }}
                    pl={{ base: "2.5", md: "3", lg: "3" }}
                    pr={{ base: "2.5", md: "3", lg: "3" }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="lg"
                    fontWeight="bold"
                    color={worriedRating === 5 ? "black" : "grey"}
                    borderRadius="md"
                    cursor="pointer"
                    css={{
                      "@media (max-width: 480px)": {
                        top: "18px",
                        fontSize: "18px",
                      },
                    }}
                  >
                    5
                  </Text>
                </Box>

                <Text
                  align="center"
                  w="65px"
                  fontWeight="bold"
                  size="sm"
                  css={{
                    "@media (max-width: 480px)": {
                      fontSize: "13px",
                      marginLeft: "3px",
                    },
                  }}
                >
                  Very Worried
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid> */
}
