"use client";

import FilterMenu from "@/components/Browse/FilterMenu";
import GameList from "@/components/Browse/GameList";
import { useApi } from "@/hooks/useApi";
import { GameService } from "@/services/Game/GameService";
import { Game } from "@/services/Game/GameType";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const getGamesApi = useApi(GameService.getGamesList);

  const handleFilterUpdate = (data: Record<string, unknown>) => {
    getGamesApi.request(data);
  };

  useEffect(() => {
    getGamesApi.request({});
  }, []);

  useEffect(() => {
    if (getGamesApi.data) {
      setGames(getGamesApi.data);
    }
  }, [getGamesApi.data]);

  return (
    <Flex>
      <FilterMenu onFilterUpdate={handleFilterUpdate} />
      <GameList games={games} />
    </Flex>
  );
}
