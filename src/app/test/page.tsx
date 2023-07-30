"use client";

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Test: React.FC = () => {
  return (
    <Center bgColor="blackAlpha.900" height="800px">
      <VStack
        textColor="gray.300"
        width="400px"
        height="inherit"
        gap={7}
        py="100px"
      >
        <VStack gap={0}>
          <Text as="b" fontSize={60} height="auto">
            OPPAIMAN
          </Text>
          <Text as="b" fontSize={60} height="auto">
            LAUNCHER
          </Text>
        </VStack>

        <Spacer />

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input borderColor="gray.800" bgColor="black" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input borderColor="gray.800" bgColor="black" type="password" />
        </FormControl>
        <Button
          bgColor="red.500"
          textColor="gray.300"
          width="250px"
          height="60px"
          fontSize={24}
        >
          LOGIN
        </Button>
        <Text>Sign-up</Text>
      </VStack>
    </Center>
  );
};
export default Test;
