import { Box, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import GameInfo from "./GameInfo";

const GameList: React.FC = () => {
  return (
    <VStack width="full" mb={5}>
      <Box bgColor="white" width="inherit" height="auto">
        <Wrap margin="20px" spacing="10px">
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
          <WrapItem>
            <GameInfo />
          </WrapItem>
        </Wrap>
      </Box>
      <Text textColor="red" as="u">
        {"Next page ->"}
      </Text>
    </VStack>
  );
};

export default GameList;
