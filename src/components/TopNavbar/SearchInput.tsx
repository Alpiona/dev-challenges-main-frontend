import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const SearchInput: React.FC = () => {
  return (
    <Flex flexGrow={1} maxWidth={"500px"} mr={2} align="center">
      <InputGroup>
        <Input
          placeholder="Search for games"
          fontSize="10pt"
          _placeholder={{ color: "gray.700" }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.100"
        />
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.400" mb={1} />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
