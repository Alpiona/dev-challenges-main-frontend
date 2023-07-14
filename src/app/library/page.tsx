"use client";

import GameInfo from "@/components/Library/GameInfo";
import { useApi } from "@/hooks/useApi";
import { GameService } from "@/services/Game/GameService";
import { Game } from "@/services/Game/GameType";
import { Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Library: React.FC = () => {
  const gameListApi = useApi(GameService.getGamesList);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    gameListApi.request({ hasBought: true });
  }, []);

  useEffect(() => {
    if (gameListApi.success && gameListApi.data) {
      setGames(gameListApi.data);
    }
  }, [gameListApi.data]);

  return (
    <VStack
      bgColor="white"
      width="1400px"
      mx="auto"
      my={1}
      alignItems="start"
      p={8}
      gap={8}
    >
      <Text as="b" fontSize={28} textColor="gray.600">
        My Library
      </Text>
      <Wrap spacing="15px">
        {games.map((game) => (
          <WrapItem key={game.id}>
            <GameInfo game={game} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Library;
