"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const NewGamePage: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  return (
    <Center>
      <VStack
        width="1080px"
        marginTop={3}
        bgColor="white"
        borderColor="gray.300"
        borderWidth={1}
        gap={0}
      >
        <Center
          bgColor="gray.200"
          width="full"
          borderBottomWidth={1}
          borderColor="gray.300"
          p={2}
        >
          <Text as="b" ml={5} width="full" textColor="gray.500">
            Dashboard
          </Text>
        </Center>
        <Center
          width="full"
          px={2}
          py={7}
          borderBottomWidth={1}
          borderColor="gray.300"
        >
          <Text as="b" ml={5} width="full" textColor="gray.600" fontSize={20}>
            Create a new game
          </Text>
        </Center>
        <Flex width="full" p={7} gap={5} fontSize={14} textColor="gray.600">
          <VStack alignItems="start" width="60%" gap={7}>
            <VStack alignItems="start" gap={1} width="full">
              <Text as="b">Title</Text>
              <Input onChange={() => {}} size="sm" borderWidth={2} />
            </VStack>
            <VStack alignItems="start" gap={1} width="full">
              <Text as="b">Project URL</Text>
              <Input
                onChange={() => {}}
                placeholder="https://localhost:3000/"
                size="sm"
                borderWidth={2}
              />
            </VStack>
            <VStack alignItems="start" gap={1} width="full">
              <Text as="b">Short description or tagline</Text>
              <Text>
                {
                  "Shown when we link to your pojects. Avoid duplicating your project's title"
                }
              </Text>
              <Input
                onChange={() => {}}
                placeholder="Optional"
                size="sm"
                borderWidth={2}
              />
            </VStack>
            <VStack alignItems="start" gap={1} width="full">
              <Text as="b">Release status</Text>
              <Select>
                <option value="option1">Released</option>
                <option value="option2">Early Access</option>
              </Select>
            </VStack>
            <VStack alignItems="start" gap={5} width="full" mt={5}>
              <Text as="b" fontSize={20}>
                Pricing
              </Text>
              <Flex width="full" gap={3}>
                <Flex
                  width="50%"
                  borderWidth={2}
                  height="30px"
                  p={2}
                  alignItems="center"
                >
                  <Checkbox colorScheme="red" />
                  <Center width="full">
                    <Text alignSelf="center">$0</Text>
                  </Center>
                </Flex>
                <Flex
                  width="50%"
                  borderWidth={2}
                  height="30px"
                  p={2}
                  alignItems="center"
                >
                  <Checkbox colorScheme="red" />
                  <Center width="full">
                    <Text alignSelf="center">Paid</Text>
                  </Center>
                </Flex>
              </Flex>
            </VStack>

            <VStack alignItems="start" gap={5} width="full" mt={5}>
              <Text as="b" fontSize={20}>
                Uploads
              </Text>

              <Button bgColor="red" textColor="white">
                Upload files
              </Button>
              <Text>File size limit: 1GB.</Text>
            </VStack>

            <VStack alignItems="start" gap={2} width="full" mt={5}>
              <Text as="b" fontSize={20} mb={2}>
                Details
              </Text>
              <Text>
                Description - This will make up the content of your game page.
              </Text>
              <Textarea />
            </VStack>

            <VStack alignItems="start" gap={1} width="full">
              <Text as="b">Genre</Text>
              <Text>
                Select the category that best describes your game. You can pick
                additional genres with tags below
              </Text>
              <Flex width="full">
                <Menu closeOnSelect={false}>
                  <MenuButton
                    as={Button}
                    width="full"
                    bgColor="white"
                    borderColor="gray.300"
                    borderWidth={2}
                    rightIcon={<ChevronDownIcon />}
                    textAlign="start"
                  >
                    {selectedGenres.join(", ") || "No genre"}
                  </MenuButton>
                  <MenuList width="full">
                    <MenuOptionGroup
                      type="checkbox"
                      onChange={setSelectedGenres as any}
                    >
                      <MenuItemOption value="Horror">Horror</MenuItemOption>
                      <MenuItemOption value="Adventure">
                        Adventure
                      </MenuItemOption>
                      <MenuItemOption value="RPG">RPG</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Flex>
            </VStack>
            <Button bgColor="red" textColor="white" mt={4}>
              Save & view page
            </Button>
          </VStack>

          <VStack alignItems="start" width="40%" gap={5}>
            <Center
              width="full"
              height="300px"
              border="dashed"
              borderColor="gray.400"
              borderWidth={1}
            >
              <Button bgColor="red" textColor="white">
                Upload Cover Image
              </Button>
            </Center>
            <Text>
              The cover image is used whenever itch.io wants to link to your
              project from another part of the site. Required (Minimum: 315x250,
              Recommended: 630:500)
            </Text>
            <VStack alignItems="start">
              <Text as="b">Screenshots</Text>
              <Text>
                {
                  "Screenshots will appear on your game's page. Optional but highly recommended. Upload 3 to 5 for best results"
                }
              </Text>
            </VStack>
            <Button bgColor="red" textColor="white">
              Add screenshots
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </Center>
  );
};

export default NewGamePage;
