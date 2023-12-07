import { useToast, Button, Box } from "@chakra-ui/react";

export default function FinishButton() {
  const toast= useToast();
  // Or via trigger
  // Style here will overwrite the entire style above
  
  return (
    <Button
      bg="brand.purple"
      maxW="600px"
      boxShadow="lg"
      onClick={() => {
        toast({
          position: "top",
          duration: 3000,
          render: () => (
            <Box color='black' p={3} bg='brand.purple' borderRadius="md" height="50">
              That&apos;s been saved why not try bubble breathing?
            </Box>
          )

        });
      }}
    >
      Finish
    </Button>
  );
}
