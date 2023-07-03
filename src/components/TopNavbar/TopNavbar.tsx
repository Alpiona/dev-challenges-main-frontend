"use client";

import { Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScriptProps } from "next/script";
import React from "react";
import SearchInput from "./SearchInput";
import UserSpace from "./UserSpace";

const TopNavbar: React.FC<ScriptProps> = () => {
  const pathname = usePathname();

  return (
    <Flex
      padding="6px 12px"
      bg="white"
      height="55px"
      align="center"
      gap={4}
      borderBottomWidth={1}
      borderColor="gray.300"
    >
      <Image src="/placeholder-logo.jpg" alt="placeholder" width="200px" />
      <Button
        key="browse"
        height="inherit"
        bg="white"
        borderColor="red"
        paddingX="0px"
        borderTopColor="white"
        borderWidth={pathname === "/" ? "4px 0px" : "1px 0px"}
        borderBottomColor={pathname === "/" ? "red" : "gray.300"}
        textAlign="start"
        rounded="0"
        variant="unstyled"
      >
        <Link href="/">
          <Text as="b">{"Browse Games"}</Text>
        </Link>
      </Button>
      <SearchInput />

      <Spacer />

      <UserSpace />
    </Flex>
  );
};
export default TopNavbar;
