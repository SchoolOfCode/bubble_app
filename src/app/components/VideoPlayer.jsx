"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Box, Flex } from "@chakra-ui/react";

const VideoPlayer = () => {
  return (
    <div>
      <Box zIndex={1} mb="20px">
        <Flex justify="center" alignItems="center">
          <ReactPlayer
            url="https://youtu.be/FpUNhx1IFec"
            controls
            width="600px"
            height="300px"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default VideoPlayer;
