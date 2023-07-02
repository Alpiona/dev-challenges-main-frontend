import { Box, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SiWindows } from "react-icons/si";

const GameInfo: React.FC = () => {
  return (
    <Box>
      <VStack alignItems="start" fontSize={15} gap={1}>
        <Image
          src="/placeholder-thumb.jpg"
          width="300px"
          height="300px"
          alt="test"
        />
        <Text as="b" fontSize={18} textColor="gray.700">
          Game Title
        </Text>
        <Text textColor="gray.600">Game Short Description</Text>
        <Text textColor="gray.600">Author</Text>
        <Text textColor="gray.500">Game Genre</Text>
        <Icon as={SiWindows} color="gray.500" mb={5} />
      </VStack>
    </Box>
  );
};

export default GameInfo;
