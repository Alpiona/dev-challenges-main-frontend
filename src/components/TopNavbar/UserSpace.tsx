import { userState } from "@/atoms/userAtom";
import { useApi } from "@/hooks/useApi";
import { UserService } from "@/services/User/UserService";
import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { FaUser } from "react-icons/fa";
import { useRecoilState } from "recoil";
import UserMenu from "./UserMenu";

const UserSpace: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [cookies] = useCookies(["token"]);
  const getSessionApi = useApi(UserService.getSession);

  useEffect(() => {
    if (!user && cookies.token) {
      const fetchApi = async () => {
        await getSessionApi.request(cookies.token);
      };

      fetchApi();
    }
  }, []);

  useEffect(() => {
    if (getSessionApi.data) {
      const { username, accessType } = getSessionApi.data;
      console.log(getSessionApi.data);
      setUser({ username, accessType });
    }
  }, [getSessionApi.data]);

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
          {user.username}
          <UserMenu accessType={user.accessType} />
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
