import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Logo from "/public/assets/BubbleLogo.svg";

export default function Home() {
  return (
    <Box bg="brand.900" h="100vh">
      <h1>Homepage</h1>
      <Image src={Logo} alt="Logo" />
    </Box>
  );
}
