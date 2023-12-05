"use client";
import supabase from "../config/supbaseClient.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired.svg";


export default function Emojis() {
  
  //trying to get the emoji to link to the next page
  // const router = useRouter();
  // router.push("../page.js");
  //define the date 
    const date = new Date().toLocaleString();
    console.log(date);
  async function emojiClickHandler(emoji) {
    console.log(emoji);
    const { data, error } = await supabase.from("mood").insert([{ emoji, date: new Date().toLocaleString() }])

    if (error){
      console.log(error);
    }
    if (data) {
      console.log("this has worked, check supabase");
    }
  }

  return (
    //set up a div to contain the text - "How are you feeling? (just pick one)
    //need to display the 6 emoji images in a grid - chakra ui grid
    <>
      <div>
        <h3>How are you feeling?</h3>
        <p>(just pick one)</p>
      </div>
      <SimpleGrid columns={2} spacing={10}>
        <div>
          <Image src={Happy} alt="Happy-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Happy.svg")}/>
        </div>
        <div>
          <Image src={Sad} alt="Sad-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Sad.svg")}/>
        </div>
        <div>
          <Image src={Cheeky} alt="Cheeky-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Cheeky.svg")}/>
        </div>
        <div>
          <Image src={Angry} alt="Angry-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Angry.svg")}/>
        </div>
        <div>
          <Image src={Worried} alt="Worried-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Worried.svg")}/>
        </div>
        <div>
          <Image src={Tired} alt="Tired-Emoji" priority onClick={() => emojiClickHandler("../../../public/assets/emojis/Tired.svg")}/>
        </div>
      </SimpleGrid>
    </>
  );
}
