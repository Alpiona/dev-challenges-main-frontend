"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function LogIn() {
  return (
    <Center>
      <Box
        bgColor="white"
        width="640px"
        mt={5}
        borderWidth={1}
        borderColor="gray.300"
        borderRadius={3}
      >
        <Center height="100px" borderBottomWidth={1} borderColor="gray.300">
          <Text as="b" width="full" mx={10} fontSize={24}>
            Log in to your account
          </Text>
        </Center>
        <Flex direction="column" m={10} gap={7}>
          <VStack alignItems="start" gap={1}>
            <Text>Username or email:</Text>
            <Input
              onChange={() => {}}
              placeholder="Required"
              size="sm"
              borderWidth={2}
            />
          </VStack>
          <VStack alignItems="start" gap={1}>
            <Text>Password:</Text>
            <Input
              onChange={() => {}}
              placeholder="Required"
              size="sm"
              borderWidth={2}
            />
          </VStack>
          <Flex align="center" gap={2}>
            <Button bgColor="red" textColor="white" rounded={4}>
              <Text>Log In</Text>
            </Button>
            <Text>or</Text>
            <Text as="u">Create account</Text>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
