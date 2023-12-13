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
      <Head>
        <title>Bubble App. Helping children's emotions</title>
        <meta
          name="description"
          content="Bubble App. Helping children's emotions"
        />
        <link rel="alternate" hrefLang="en" href="https://bubble-app-two.vercel.app/" />
      </Head>
      <Flex direction="column" h="100%">
        <Box mb="20">
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
              spacing={{ base: "5", md: "8", lg: "10" }}
              mt={{ base: "15px", md: "10px", lg: "10px" }}
            >
              <Box>
                <Button
                  size={{ base: "lg", md: "lg", lg: "lg" }}
                  w={{ base: "180px", md: "250px", lg: "300px" }}
                  h={{ base: "50px", md: "100px", lg: "100px" }}
                  bg="brand.pink"
                  boxShadow="lg"
                >
                  <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                    Bubble Breathing
                  </Text>
                </Button>
              </Box>
              <Box>
                <Link href="/emojis">
                  <Button
                    size={{ base: "lg", md: "lg", lg: "lg" }}
                    w={{ base: "180px", md: "250px", lg: "300px" }}
                    h={{ base: "50px", md: "100px", lg: "100px" }}
                    bg="brand.green"
                    boxShadow="lg"
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
              <Link href="/childlog">
                <Button
                  size={{ base: "lg", md: "lg", lg: "lg" }}
                  w={{ base: "180px", md: "250px", lg: "300px" }}
                  h={{ base: "50px", md: "100px", lg: "100px" }}
                  bg="brand.purple"
                  boxShadow="lg"
                >
                  <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
                    Earlier Logs
                  </Text>
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box bottom={{ base: "10", lg: "15" }} p="10" position="fixed">
          <Button
            size="lg"
            bg="brand.yellow"
            w={{ base: "200px", md: "230px", lg: "250px" }}
            h={{ base: "40px", md: "60px", lg: "60px" }}
            leftIcon={<Image src={ShieldIcon} alt="Parent Zone Icon" />}
            boxShadow="lg"
          >
            <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              Parent Zone
            </Text>
          </Button>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
