import Image from "next/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Logo from "/public/assets/Logo.svg";

export default function Home() {
  return (
    <Box
      position="relative"
      bgGradient="linear(to-b, brand.700, brand.900 50%)"
      h="100vh"
    >
      <Flex direction="column" align="center" justify="flex-start" pt="20vh">
        <Box>
          <Image src={Logo} alt="Logo" />
        </Box>
        <Box pt="15vh">
          <Button>Bubble Breathing</Button>
          <Button>Record Your Mood</Button>
          <Button>Earlier Logs</Button>
        </Box>
      </Flex>
      <Box position="absolute" bottom="0" left="0" p="4">
        <Button>Parent Zone</Button>
      </Box>
    </Box>
  );
}
