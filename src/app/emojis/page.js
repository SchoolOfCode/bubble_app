"use client";
import supabase from "../config/supbaseClient";
import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired.svg";

export default function Emojis() {
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
          <Image src={Happy} alt="Happy" />
        </div>
        <div>
          <Image src={Sad} alt="Sad" />
        </div>
        <div>
          <Image src={Cheeky} alt="Cheeky" />
        </div>
        <div>
          <Image src={Angry} alt="Angry" />
        </div>
        <div>
          <Image src={Worried} alt="Worried" />
        </div>
        <div>
          <Image src={Tired} alt="Tired" />
        </div>
      </SimpleGrid>
    </>
  );
}
