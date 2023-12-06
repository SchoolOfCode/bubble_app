import { useToast, Button } from "@chakra-ui/react";

export default function FinishButton() {
  // Via instantiation
  const toast = useToast({
    position: "bottom",
    title: "That's been saved, why not try bubble breathing!",
    duration: 2000,
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });
  // Or via trigger
  // Style here will overwrite the entire style above
  return (
    <Button
      bg="brand.purple"
      maxW="600px"
      boxShadow="lg"
      onClick={() => {
        toast({
          position: "bottom",
          title: "That's been saved, why not try bubble breathing!",
          duration: 2000,
          containerStyle: {
            width: "800px",
            maxWidth: "100%",
          },
        });
      }}
    >
      Finish
    </Button>
  );
}
