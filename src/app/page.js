import Image from "next/image";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import Logo from "/public/assets/Logo.svg";
import Link from "next/link";
import ShieldIcon from "/public/assets/icons/ShieldIcon.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box position="relative">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Box mb="10">
          <Image src={Logo} priority={true} alt="Logo" />
        </Box>

        <SimpleGrid columns={2} spacing={5} mt="10vh">
          <Box>
            <Button size="lg" w="100%" h="100px" bg="brand.pink">
              Bubble Breathing
            </Button>
          </Box>
          <Box>
            <Link href="/emojis">
              <Button size="lg" w="100%" h="100px" bg="brand.green">
                Record Your Mood
              </Button>
            </Link>
          </Box>
        </SimpleGrid>

        <Box mt="10">
          <Button size="lg" w="100%" h="100px" bg="brand.purple">
            Earlier Logs
          </Button>
        </Box>
      </Flex>

      <Box position="fixed" bottom="10" left="0" p="4">
        <Button
          size="lg"
          bg="brand.yellow"
          leftIcon={<Image src={ShieldIcon} alt="Parent Zone Icon" />}
        >
          Parent Zone
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
