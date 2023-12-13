"use client";
import { useState } from "react";
import { Textarea, Box, Button, useToast, Text, Flex, FormLabel } from "@chakra-ui/react";
import supabase from "../config/supabaseClient";
import { useContext } from "react";
import { UserIdContext } from "../context/useridcontext";
// import useValue from "../hooks/useValue"

export default function Textbox() {
  const { uuid } = useContext(UserIdContext);

  const toast = useToast();

  let [value, setValue] = useState("");
  const [textBorder, setTextBorder] = useState("none");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  async function sendDataToDB(value) {
    if (!value) {
      toast({
        position: "top",
        duration: 5000,
        render: () => (
          <Flex justifyContent="center" textAlign="center">
            <Box color="white" p={3} bg="#4258A6" borderRadius="md">
              <Text fontSize="lg" as="em">
                Oops, nothing has been filled! If you&apos;re stuck just write
                about a positive interaction with someone instead!
              </Text>
            </Box>
          </Flex>
        ),
      }),
        setTextBorder("3px solid red");
      setTimeout(() => {
        setTextBorder("none");
      }, 5000);
    } else {
      console.log(value);
      const { data, error } = await supabase
        .from("mood")
        .update([{ reflection: value }])
        .eq("uuid", uuid)
        .select();

      if (error) {
        console.log(error);
      }
      if (data) {
        console.log("this has worked, check supabase");
        toast({
          position: "top",
          duration: 3000,
          render: () => (
            <Flex justifyContent="center" textAlign="center">
              <Box color="black" p={3} bg="#C2F2BA" borderRadius="md">
                <Text fontSize="lg" as="em">
                  That&apos;s been saved, thanks for filling that out! Have you
                  tried bubble breathing?
                </Text>
              </Box>
            </Flex>
          ),
        });
      }

      setValue("");
    }
  }

  return (
    <>
      <Box
        bg="brand.blue"
        w={[350, 600]}
        mx="auto"
        borderRadius="20"
        textAlign="center"
        p="2"
        mb="3"
        boxShadow="lg"
      >
      <FormLabel htmlFor="textarea" p="2">Please write in the space below:-</FormLabel>
        <Textarea
          id="textarea"
          value={value}
          onChange={handleInputChange}
          placeholder="If you’re stuck, that’s okay start by writing about your day...what happened?"
          border={textBorder}
          size="lg"
          h="325px"
          _placeholder={{ color: 'gray.600' }} //placeholder color
        />
      </Box>
      <Button
        bg="brand.purple"
        maxW="600px"
        boxShadow="lg"
        onClick={() => {
          sendDataToDB(value);
        }}
      >
        Finish
      </Button>
    </>
  );
}
