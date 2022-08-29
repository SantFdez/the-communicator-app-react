import React, { useEffect, useState } from "react";
import { NotFound } from "../components/NotFound";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CardModel } from "../models/Card";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SkeletonText,
  useToast,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import "../css/main.css";

export function Card() {
  let navigate = useNavigate();
  let location = useLocation();

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState<CardModel>();

  const params = useParams<{ cardId: string }>();
 

  const toast = useToast();

  // const invoice = getInvoice(parseInt(params.cardId, 10));
  // if (!invoice) return <NotFound />;

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      "https://mockend.com/SantFdez/the-communicator-app-react/card/" +
        params.cardId
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setCard(data);
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
  }, [params.cardId]);

  if (!params.cardId) return <NotFound />;
  
  if (error) {
    return <div></div>;
  }

  return (
    <main style={{ padding: "1rem", width: "100%" }}>
      <>
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Skeleton fadeDuration={1.5} isLoaded={isLoaded}>
                <div
                  className="fill"
                  style={{ width: "445px", height: "210px" }}
                >
                  <img src={card?.categoryImg} />
                </div>
              </Skeleton>
            </Box>
            <Stack>
              {isLoaded ? (
                <>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {card?.categoryName}
                  </Text>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {card?.title}
                  </Heading>
                  <Text color={"gray.500"}>{card?.question}</Text>
                </>
              ) : (
                <SkeletonText mt="10" noOfLines={4} spacing="4" />
              )}
            </Stack>
          </Box>
        </Center>

        <p>
          {/* <button
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate("/invoices" + location.search);
            }}
          >
            Delete
          </button> */}
        </p>
      </>
    </main>
  );
}
