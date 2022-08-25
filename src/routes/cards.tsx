import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Invoice } from "../data";
import { getInvoices } from "../data";
import { CardModel } from "../models/Card";
import QueryNavLink from "./queryNavLink";
import { Box, Divider, Spinner } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export default function Cards() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filterStr, setFilterStr] = useState("");
  let [filteredCards, setFilteredCards] = useState<CardModel[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setFilteredCards(
  //     cards.filter((card) => {
  //       let filter = searchParams.get("filter");
  //       if (!filter) return true;
  //       let name = card.title.toLowerCase();
  //       return name.startsWith(filter.toLowerCase());
  //     })
  //   );
  // }, [searchParams]);

  useEffect(() => {
    fetch(
      "https://mockend.com/SantFdez/the-communicator-app-react/cards?limit=40"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setFilteredCards(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(error);
        console.log(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    let loading = !isLoaded ? (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={40} spacing="6" />
      </Box>
    ) : null;

    return (
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1em 0 0 2em", borderRight: "inset 1px" }}>
          {loading}
          <Input
            variant="flushed"
            placeholder="Search Card"
            value={filterStr || ""}
            onChange={(event) => {
              let filter = event.target.value;
              setFilterStr(filter);
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {filteredCards.map((card) => (
            <QueryNavLink to={`/cards/${card.id}`} key={card.id}>
              {card.title}
            </QueryNavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }
}
