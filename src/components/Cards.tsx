import React, { useEffect, useState, useCallback } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { CardModel } from "../models/Card";
import QueryNavLink from "./QueryNavLink";
import { Box, useToast } from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import debounce from "lodash.debounce";

interface props {
  onCardClick: (card: CardModel) => void;
  updateCardId: string | undefined;
}

export const Cards: React.FC<props> = ({ onCardClick, updateCardId }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filterStr, setFilterStr] = useState("");
  let [filteredCards, setFilteredCards] = useState<CardModel[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();

  const debouncedFilter = useCallback(
    debounce((filter: string) => {
      console.log("====>ASAS", filter);
      setSearchParams({ filter });
    }, 500),
    []
  );

  const doCardsFilter = (filter: string) => {
    setFilterStr(filter);
    if (!filter) return setSearchParams({});
    debouncedFilter(filter);
  };

  const updateSelectedCard = () => {
    console.log("Received updateCardId at cards.tsx ", updateCardId);
    if (updateCardId) {
      const selectedCard = filteredCards.find((card) => {
        return card.id == Number(updateCardId);
      });
      if (selectedCard) {
        onCardClick(selectedCard);
      }
    }
  };

  // obtener id del URL

  useEffect(() => {
    let URL;
    if (searchParams.get("filter") != null) {
      URL = `https://mockend.com/SantFdez/the-communicator-app-react/cards?limit=40&title_contains=${searchParams.get(
        "filter"
      )}`;
      if (filterStr != null) {
        setFilterStr(searchParams.get("filter") ?? "");
      }
    } else {
      URL =
        "https://mockend.com/SantFdez/the-communicator-app-react/cards?limit=40";
    }
    setIsLoaded(false);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilteredCards(data);
      })
      .catch((err) => {
        setError(error);
        console.log(err.message);
        toast({
          title: `API error! Please try again.`,
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [searchParams]);

  useEffect(() => {
    updateSelectedCard();
  }, [filteredCards]);

  console.log(filteredCards);

  if (error) {
    return <div></div>;
  } else {
    let loading = !isLoaded ? (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={40} spacing="6" />
      </Box>
    ) : null;

    return (
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1em 0 0 2em", borderRight: "inset 1px" }}>
          <Input
            variant="flushed"
            placeholder="Search Card"
            value={filterStr || ""}
            onChange={(event) => {
              doCardsFilter(event.target.value);
            }}
          />
          {loading}
          {filteredCards.map((card) => (
            <QueryNavLink
              to={`/cards/${card.id}`}
              key={card.id}
              onCardClick={onCardClick}
              cardObj={card}
              data-testid="card-list"
            >
              {card.title}
            </QueryNavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }
};
