import React, { useEffect, useState } from "react";
import { InstructionModel } from "../models/Instruction";
import {
  Box,
  Heading,
  SkeletonText,
  Text,
  useToast,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function Instructions() {
  let [instruction, setInstruction] = useState<InstructionModel>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetch(
      "https://mockend.com/SantFdez/the-communicator-app-react/instruction/1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setInstruction(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(error);
        console.log(err.message);
        toast({
          title: `API error! Please try again.`,
          status: "error",
          isClosable: true,
        });
      });
  }, []);

  if (error) {
    return <div></div>;
  }
  return (
    <main style={{ padding: "1rem 0", width: "100%" }}>
      {isLoaded ? (
        <Box textAlign="center" py={10} px={6}>
          <InfoIcon boxSize={"50px"} color={"blue.500"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            How to play?
          </Heading>
          <Text color={"gray.500"}>{instruction?.howToPlay}</Text>
        </Box>
      ) : (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText mt="4" noOfLines={8} spacing="6" />
        </Box>
      )}
    </main>
  );
}
