import Image from "next/image";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Logo from "/public/assets/Logo.svg";
import Link from "next/link";
import Head from "next/head";
import ShieldIcon from "/public/assets/icons/ShieldIcon.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Flex direction="column" align="center" justify="center">
            <Box>
              <Image src={Logo} priority={true} alt="Logo" />
            </Box>

            {/* <SimpleGrid
            columns={2}
            spacing={{ base: "5", md: "8", lg: "10" }}
            mt={{ base: "15px", md: "10px", lg: "10px" }}
          >
            <Box>
              <Image src={Logo} priority={true} alt="Logo" />
            </Box> */}

            <SimpleGrid
              columns={2}
              spacing={{ base: "3", md: "8", lg: "10" }}
              mt={{ base: "50px", md: "10px", lg: "10px" }}
            >
              <Box>
                <Link href="/breathing" target="_self">
                <Button
                  size={{ base: "lg", md: "lg", lg: "lg" }}
                  w={{ base: "175px", md: "250px", lg: "300px" }}
                  h={{ base: "50px", md: "100px", lg: "100px" }}
                  bg="brand.pink"
                  boxShadow="lg"
                  tabIndex="-1"
                >
                  <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                    Bubble Breathing
                  </Text>
                </Button>
                </Link> 
              </Box>
              <Box>
                <Link href="/emojis" target="_self">
                  <Button
                    size={{ base: "lg", md: "lg", lg: "lg" }}
                    w={{ base: "175px", md: "250px", lg: "300px" }}
                    h={{ base: "50px", md: "100px", lg: "100px" }}
                    bg="brand.green"
                    boxShadow="lg"
                    tabIndex="-1"
                  >
                    <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                      Record Your Mood
                    </Text>
                  </Button>
                </Link>
              </Box>
            </SimpleGrid>
            <Box
              minW="268px"
              mt={{ base: "20px", md: "40px", lg: "30px" }}
              align="center"
            >
              <Link href="/childlog" target="_self">
                <Button
                  size={{ base: "lg", md: "lg", lg: "lg" }}
                  w={{ base: "180px", md: "250px", lg: "300px" }}
                  h={{ base: "50px", md: "100px", lg: "100px" }}
                  bg="brand.purple"
                  boxShadow="lg"
                  tabIndex="-1"
                >
                  <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                    Earlier Logs
                  </Text>
                </Button>
              </Link>
            </Box>
          </Flex>
        <Box bottom={{ base: "10"}} ml="5" position="absolute">
          <Button
            size="lg"
            bg="brand.yellow"
            w={{ base: "200px", md: "230px", lg: "250px" }}
            h={{ base: "40px", md: "60px", lg: "60px" }}
            left={{ base: "0", md: "5", lg: "10" }}
            bottom={{ base: "10"}}
            leftIcon={<Image src={ShieldIcon} alt="Parent Zone Icon" />}
            boxShadow="lg"
            tabIndex="-1"
          >
            <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              Parent Zone
            </Text>
          </Button>   
        </Box>
      <Footer />
    </>
  );
}
