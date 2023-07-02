"use client";

import FilterMenu from "@/components/Browse/FilterMenu";
import GameList from "@/components/Browse/GameList";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex>
      <FilterMenu />
      <GameList />
    </Flex>
  );
}
