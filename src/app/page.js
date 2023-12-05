import Image from "next/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Logo from "/public/assets/Logo.svg";

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
        <Image src={Logo} alt="Logo" h={600} w={600} />
        <Button>Bubble Breathing</Button>
        <Button>Record Your Mood</Button>
        <Button>Earlier Logs</Button>
        <Button>Parent Zone</Button>
      </Box>
    </Flex>
  );
}
