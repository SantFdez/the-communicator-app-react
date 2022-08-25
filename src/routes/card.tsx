import React, { useEffect, useState } from "react";
import { NotFound } from "../components/NotFound";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import { Box, SkeletonText, Spinner } from "@chakra-ui/react";
import { CardModel } from "../models/Card";

export function Card() {
  let navigate = useNavigate();
  let location = useLocation();

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState<CardModel>();

  const params = useParams<{ cardId: string }>();
  if (!params.cardId) return <NotFound />;

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
      });
  }, [params.cardId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main style={{ padding: "1rem", width: "100%" }}>
      {isLoaded ? (
        <>
          <h1>
            <b>{card?.title}</b>
          </h1>
          <p>{card?.question}</p>
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
      ) : (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText mt="4" noOfLines={2} spacing="6" />
        </Box>
      )}
    </main>
  );
}
