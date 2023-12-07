import Image from "next/image";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Logo from "/public/assets/Logo.svg";
import Link from "next/link";
import ShieldIcon from "/public/assets/icons/ShieldIcon.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Flex direction="column" h="100%">
      <Box mb-20>
        <Flex direction="column" align="center" justify="center">
          <Box>
            <Image src={Logo} priority={true} alt="Logo" />
          </Box>

          <SimpleGrid
            columns={2}
            spacing={{ base: "5", md: "8", lg: "10" }}
            mt={{ base: "15px", md: "20px", lg: "20px" }}
          >
            <Box>
              <Button
                size={{ base: "lg" }}
                w="100%"
                h="100px"
                bg="brand.pink"
                boxShadow="lg"
              >
                <Text fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>
                  Bubble Breathing
                </Text>
              </Button>
            </Box>
            <Box>
              <Link href="/emojis">
                <Button
                  size="lg"
                  w="100%"
                  h="100px"
                  bg="brand.green"
                  boxShadow="lg"
                >
                  <Text fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>
                    Record Your Mood
                  </Text>
                </Button>
              </Link>
            </Box>
          </SimpleGrid>

          <Box minW="268px" mt={{ base: "20px", md: "40px", lg: "40px" }}>
            <Button
              size="lg"
              w="100%"
              h="100px"
              bg="brand.purple"
              boxShadow="lg"
            >
              <Text fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}>
                Earlier Logs
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bottom={{ base: "10", lg: "15" }} p="10" position="fixed">
        <Button
          size="lg"
          bg="brand.yellow"
          leftIcon={<Image src={ShieldIcon} alt="Parent Zone Icon" />}
          boxShadow="lg"
        >
          <Text fontSize="xl">Parent Zone</Text>
        </Button>

        <Footer />
      </Box>
    </Flex>
  );
}
