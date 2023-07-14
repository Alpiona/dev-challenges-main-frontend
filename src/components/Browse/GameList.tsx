import { Game } from "@/services/Game/GameType";
import { Box, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import GameInfo from "./GameInfo";

type GameListProps = {
  games: Game[];
};

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <VStack width="full" mb={5}>
      <Box bgColor="white" width="inherit" height="auto">
        <Wrap margin="20px" spacing="10px">
          {games.map((game) => (
            <WrapItem key={game.id}>
              <GameInfo game={game} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </VStack>
  );
};

export default GameList;
