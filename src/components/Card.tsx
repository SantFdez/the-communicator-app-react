import React, { useEffect, useState, useContext, createContext } from "react";
import { NotFound } from "./NotFound";
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
import { AppCtx, useAppCtx } from "./App";

interface props {
  cardObj?: CardModel;
  updateCurrentCard?: (cardId: string) => void;
}

export const Card: React.FC<props> = ({ cardObj, updateCurrentCard }) => {

  const appContext = useContext(AppCtx); // preferible

  // Which is the difference?
  console.log("Received context", appContext);
  console.log("Global context", useAppCtx());

  console.log("cardObj", cardObj);

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState<CardModel>();
  const colorGray = useColorModeValue("gray.700", "white");
  const colorWhite = useColorModeValue("white", "gray.900");

  const params = useParams<{ cardId: string }>();

  // mock service worker
  // test, al tipear en busqueda que vaya al API

  // useEffect to update useContext var
  useEffect(() => {
    if (cardObj !== undefined) {
      // setCard(appContext);
      setCard(cardObj);
      setIsLoaded(true);
      console.log("Loading card from appContext");
    } else {
      console.log("Receiving undefined card appContext");
      let url = window.location.pathname;
      let currentIdCard = url.split("/")[2];
      console.log(url.split("/"));
      console.log(currentIdCard);
      if (updateCurrentCard) {
        updateCurrentCard(currentIdCard);
      }
      // setIsLoaded(false);
    }
  }, [appContext]);

  // useEffect to update using Props
  // useEffect(() => {
  //   if (cardObj !== undefined) {
  //     setCard(cardObj);
  //     setIsLoaded(true);
  // console.log("Loading card from Props");
  //   } else {
  // console.log("Receiving undefined card from Props");
  //     // setIsLoaded(false);
  //   }
  // }, [cardObj]);

  // usseEffect to Fetch API and get Card information based on CardId
  // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch(
  //     "https://mockend.com/SantFdez/the-communicator-app-react/card/" +
  //       params.cardId
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setIsLoaded(true);
  //       setCard(data);
  //     })
  //     .catch((err) => {
  //       setIsLoaded(true);
  //       setError(error);
  //       console.log(err.message);
  //       toast({
  //         title: `API error! Please try again.`,
  //         status: "error",
  //         isClosable: true,
  //       });
  //     });
  // }, [params.cardId]);

  // if (!params.cardId) return <NotFound />;

  if (error) {
    return <div></div>;
  }

  console.log("CARD ACTUAL", card);
  return (
    <main style={{ padding: "1rem", width: "100%" }}>
      <>
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={colorWhite}
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
                    data-testid="categoryName"
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {card?.categoryName}
                  </Text>
                  <Heading
                    data-testid="cardTitle"
                    color={colorGray}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {card?.title}
                  </Heading>
                  <Text data-testid="cardQuestion" color={"gray.500"}>
                    {card?.question}
                  </Text>
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
};
