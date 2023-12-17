import React from 'react'
import { Box, Flex, Text, Button, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function BubbleBody() {
  return (
    <Center>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="20px"
          position="absolute"
          top="35%"
        >
          <Box
            width={[300, 400, 600]}
            bg="brand.yellow"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            Well done you are one step closer to feeling happier & calm! Why don't you record your mood now? Or better yet, talk to someone about your day!
            </Text>
          </Box>
          <Button 
          bg="brand.purple"
          boxShadow="lg"
          size="lg">
            <Link href="/emojis" target="_self">
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Record Mood
              </Text>
            </Link>
          </Button>
          <Button 
          bg="brand.blue"
          boxShadow="lg"
          size="lg">
            <Link href="/breathing" target="_self">
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Do it Again!
              </Text>
            </Link>
          </Button>
            </Flex>
    </Center>
  )
}
