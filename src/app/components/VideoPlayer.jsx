"use client";
import React from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Flex,
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

const VideoPlayer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bubble Breathing Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box zIndex={1} mb="20px" w="100%" h="400px">
              <ReactPlayer
                url="https://youtu.be/FpUNhx1IFec"
                controls
                width="100%"
                height="100%"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
{
  /* <Box zIndex={1} mb="20px" w={[300, 400, 600]} h={[200, 200, 350]}>
    <ReactPlayer
      url="https://youtu.be/FpUNhx1IFec"
      controls
      title="Bubble Breathing Video"
      width="100%"
      height="100%"
    />
  </Box> */
}
//   <div>
//     <Box zIndex={1} mb="20px">
//       <Flex justify="center" alignItems="center">
//         <ReactPlayer
//           url="https://youtu.be/FpUNhx1IFec"
//           controls
//           width="600px"
//           height="300px"
//         />
//       </Flex>
//     </Box>
//   </div>
// );

export default VideoPlayer;
