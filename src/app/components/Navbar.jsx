"use client";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import SmallLogo from "../../../public/assets/BubbleLogoSmall.svg";
import BackButton from "../../../public/assets/icons/BackButton.svg";
import HomeIcon from "../../../public/assets/icons/HomeIcon.svg";
import { useRouter, usePathname } from "next/navigation";

import React from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const goBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push("/");
  };

  const isHomeButtonVisible = pathname !== "/emojis";

  return (
    <>
      <Flex as="nav" alignItems="center" p="10px">
        <Box onClick={goBack} pl="20px">
            <Image src={BackButton} alt="Back Button" />
        </Box>
        {isHomeButtonVisible && (
          <Box pl="20px" onClick={goHome}>
              <Image src={HomeIcon} alt="Home Button" />
          </Box>
        )}
        <Spacer />
        <Box pr="20px">
          <Image src={SmallLogo} alt="Logo" />
        </Box>
      </Flex>
    </>
  );
}
