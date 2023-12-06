import { useState } from "react";
import { Textarea, Box, Button } from "@chakra-ui/react";
import supabase from "../config/supbaseClient";
// import useValue from "../hooks/useValue"

export default function Textbox() {
    
  let [value, setValue] = useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  async function sendDataToDB(value) {
    console.log(value);
    const { data, error } = await supabase
      .from("mood")
      .update([{ reflection: value } ])
      .eq( "uuid", "91689b2d-decd-48c6-837f-ae029f4102e4")
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("this has worked, check supabase");
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
        mb="5"
        boxShadow="lg"
      >
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="If you’re stuck, that’s okay start by writing about your day...what happened?"
          border="none"
        />
      </Box>
      <Button
        bg="brand.purple"
        maxW="600px"
        boxShadow="lg"
        onClick={() => sendDataToDB(value)}
      >
        Finish
      </Button>
    </>
  );
}
