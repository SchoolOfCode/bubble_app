"use client";
import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio, Box, Flex } from "@chakra-ui/react";

const VideoPlayer = () => {
  return (
    <Flex justify="center" alignItems="center">
    <Box zIndex={1} mb="20px" w={[300, 400, 600]} h={[200, 200, 350]}>
      <ReactPlayer
        url="https://youtu.be/FpUNhx1IFec"
        controls
        title="Bubble Breating Video"
        width="100%"
        height="100%"
      />
    </Box>
    </Flex>
  );
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
};

export default VideoPlayer;
