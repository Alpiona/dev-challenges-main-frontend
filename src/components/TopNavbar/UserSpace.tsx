import { userState } from "@/atoms/userAtom";
import { Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useRecoilState } from "recoil";
import UserMenu from "./UserMenu";

const UserSpace: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <Flex align="center" gap={2}>
      {user ? (
        <Flex alignItems="center" gap={3}>
          <Icon
            as={FaUser}
            boxSize="40px"
            color="blue.300"
            backgroundColor="yellow.200"
          />
          <Text>{"UserName"}</Text>
          <UserMenu />
        </Flex>
      ) : (
        <>
          <Link as={NextLink} href="/log-in">
            <Button
              size="sm"
              bg="white"
              borderColor="gray.300"
              rounded={0}
              borderWidth={2}
              onClick={() => {}}
            >
              {"Log In"}
            </Button>
          </Link>
          <Link as={NextLink} href="/sign-up">
            <Button
              size="sm"
              bg="white"
              borderColor="gray.300"
              rounded={0}
              borderWidth={2}
              onClick={() => {}}
            >
              {"Register"}
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
};

export default UserSpace;
