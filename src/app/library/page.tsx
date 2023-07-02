"use client";

import GameInfo from "@/components/Library/GameInfo";
import { Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Library: React.FC = () => {
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
        <WrapItem>
          <GameInfo />
        </WrapItem>
      </Wrap>
    </VStack>
  );
};

export default Library;
