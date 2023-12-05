import Image from "next/image";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
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

        <SimpleGrid columns={2} spacing={10} >
        <Box pt="15vh">
          <Button size="lg" style={{width:"35%", height: "100px"}} bg= "brand.pink">Bubble Breathing</Button>
          </Box>
          <Box pt="15vh">
          <Button bg= "brand.green">Record Your Mood</Button>
        
        </Box>
        </SimpleGrid>

        <Box> <Button bg= "brand.purple">Earlier Logs</Button> </Box>

      </Flex>
      <Box position="absolute" bottom="0" left="0" p="4">
        <Button bg= "brand.yellow">Parent Zone</Button>
      </Box>
    </Box>
  );
}
