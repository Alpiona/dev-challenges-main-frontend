import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const GameInfo: React.FC = () => {
  return (
    <Box>
      <VStack alignItems="start" fontSize={15} gap={1}>
        <Image
          src="/placeholder-thumb.jpg"
          width="200px"
          height="200px"
          alt="test"
        />
        <Text as="b" fontSize={15} textColor="gray.700">
          Game Title
        </Text>
        <Text textColor="gray.600">Author</Text>
      </VStack>
    </Box>
  );
};

export default GameInfo;
