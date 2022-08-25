import React, { useEffect, useState } from "react";
import { InstructionModel } from "../models/Instruction";
import { Box, SkeletonText, Spinner } from "@chakra-ui/react";

export default function Instructions() {
  let [instruction, setInstruction] = useState<InstructionModel>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

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
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main style={{ padding: "1rem 0", width: "100%" }}>
      {isLoaded ? (
        <h2>{instruction?.howToPlay}</h2>
      ) : (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText mt="4" noOfLines={2} spacing="6" />
        </Box>
      )}
    </main>
  );
}
