import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TiStopwatch } from "react-icons/ti";

const GameSpecification: React.FC = () => {
  return (
    <VStack bgColor="gray.200" width="inherit" p={4}>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Updated at
        </Text>
        <Flex>
          <Icon as={TiStopwatch} boxSize={5} />
          <Text textAlign="start">16 days ago</Text>
        </Flex>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Created at
        </Text>
        <Flex>
          <Icon as={TiStopwatch} boxSize={5} />
          <Text textAlign="start">Jun 29, 2018</Text>
        </Flex>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Status
        </Text>
        <Text as="u" textColor="red" textAlign="start">
          Released
        </Text>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          OS
        </Text>
        <Text textAlign="start">
          <Text as="u" textColor="red">
            Windows
          </Text>
          ,{" "}
          <Text as="u" textColor="red">
            macOS
          </Text>
          ,{" "}
          <Text as="u" textColor="red">
            Linux
          </Text>
          ,{" "}
          <Text as="u" textColor="red">
            Android
          </Text>
        </Text>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Author
        </Text>
        <Text as="u" textColor="red" textAlign="start">
          Author Name
        </Text>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Genre
        </Text>
        <Text as="u" textColor="red" textAlign="start">
          Visual Novel
        </Text>
      </Flex>
    </VStack>
  );
};

export default GameSpecification;
