"use client"
import { useState } from "react";
import { Textarea, Box, Button, useToast, Text, Flex } from "@chakra-ui/react";
import supabase from "../config/supbaseClient";
import { useContext } from "react";
import { UserIdContext } from "../context/useridcontext";
// import useValue from "../hooks/useValue"

export default function Textbox() {

  const { uuid } = useContext(UserIdContext);

  const toast = useToast();

  let [value, setValue] = useState("");
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
            <Box color="black" p={3} bg="#F58484" borderRadius="md">
              <Text fontSize="lg" as="em">
                Oops, nothing has been filled! If you&apos;re stuck just write
                about a positive interaction with someone instead!
              </Text>
            </Box>
          </Flex>
        ),
      });
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
        w="600px"
        mx="auto"
        borderRadius="20"
        textAlign="center"
        p="2"
        mb="3"
        boxShadow="lg"
      >
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="If you’re stuck, that’s okay start by writing about your day...what happened?"
          border="none"
          size="lg"
          h="325px"
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
