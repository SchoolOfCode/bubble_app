"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import HeadingCard from "./HeadingCard";
import { usePathname } from "next/navigation";

export default function HeadingComponent() {
  const pathname = usePathname();

  const headingArray = [
    {
      id: 1,
      title: "Bubble Breathing",
      color: "brand.pink",
      pathKeyword: "breathing",
    },
    {
      id: 2,
      title: "How are you feeling?",
      desc: "(click an emoji)",
      color: "brand.green",
      pathKeyword: "emojis",
    },
    {
      id: 3,
      title: "Let's dive deeper...",
      desc: "(rate your emotions - click on the bubbles)",
      color: "brand.blue",
      pathKeyword: "emotionrater",
    },
    {
      id: 4,
      title: "Now let's think about these feelings!",
      color: "brand.purple",
      pathKeyword: "reflection",
    },
    {
      id: 5,
      title: "Your thinking journey",
      color: "brand.pink",
      pathKeyword: "childlog",
    },
    {
      id: 6,
      title: "Bubble Breathing",
      color: "brand.pink",
      pathKeyword: "exercise",
    },
    {
      id: 7,
      title: "Parent Zone",
      color: "brand.yellow",
      pathKeyword: "pzhomepage",
    },
    {
      id: 8,
      title: "Reflection History",
      color: "brand.purple",
      pathKeyword: "parentzonelogs",
    },
    {
      id: 9,
      title: "Reflection Analytics",
      color: "brand.green",
      pathKeyword: "parentcharts",
    },
  ];

  // Find the heading data based on the current route
  const currentHeading = headingArray.find((heading) =>
    pathname.includes(`/${heading.pathKeyword}`)
  );

  // Render the found heading or null if not found
  return (
    <Box>
      {currentHeading && (
        <HeadingCard
          key={currentHeading.id}
          title={currentHeading.title}
          color={currentHeading.color}
          desc={currentHeading.desc}
        />
      )}
    </Box>
  );
}
