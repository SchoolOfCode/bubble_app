import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Bubble() {

    return (
        <Box
        maxW={[350, 600]}
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        mb="5"
        boxShadow="lg"
      >
            <Text>Here are a few reasons why Bubble Breathing is a great thing to do...

1. It can help you feel more relaxed when you're feeling a bit worried or upset.
2. It can help you concentrate if you feel distracted.
3. Pretending you are really blowing bubbles is great for helping to keep your breathing slow and steady.
4. The blood flow around your body is improved which makes you feel healthier. </Text>
        </Box>
    );
}