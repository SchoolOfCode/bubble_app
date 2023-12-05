import Image from "next/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Logo from "/public/assets/BubbleLogo.svg";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bgGradient="linear(to-b, brand.700, brand.900 50%)"
      h="100vh"
    >
      <Box>
        <Image src={Logo} alt="Logo" />
        <Text color="white">where mindful moments are made...</Text>
        <Button>Bubble Breathing</Button>
        <Button>Record Your Mood</Button>
        <Button>Earlier Logs</Button>
        <Button>Parent Zone</Button>
      </Box>
    </Flex>
  );
}
