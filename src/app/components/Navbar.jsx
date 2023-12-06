"use client";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../../../public/assets/BubbleLogoSmall.svg";
import BackButton from "../../../public/assets/icons/BackButton.svg";
import { useRouter } from "next/navigation";

import React from "react";

export default function Navbar() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <Flex as="nav" alignItems="center" p="15px">
        <Box onClick={goBack}>
          <Link href="/">
            <Image src={BackButton} alt="Back Button" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Image src={SmallLogo} alt="Logo" />
        </Box>
      </Flex>
    </>
  );
}
