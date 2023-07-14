import { Game } from "@/services/Game/GameType";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

type GameInfoProps = {
  game: Game;
};

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <Box>
      <VStack alignItems="start" fontSize={15} gap={1}>
        <Image
          src={game.coverImageUrl}
          width="200px"
          height="200px"
          alt="CoverImage"
        />
        <Text as="b" fontSize={15} textColor="gray.700">
          {game.title}
        </Text>
        <Text textColor="gray.600">{game.authorUsername}</Text>
      </VStack>
    </Box>
  );
};

export default GameInfo;
