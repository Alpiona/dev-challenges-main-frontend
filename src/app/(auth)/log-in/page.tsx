"use client";

import { userState } from "@/atoms/userAtom";
import { useApi } from "@/hooks/useApi";
import { UserService } from "@/services/User/UserService";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

export default function LogIn() {
  const [, setUser] = useRecoilState(userState);
  const [loginForm, setLoginForm] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [, setCookie] = useCookies(["token"]);
  const router = useRouter();
  const logInApi = useApi(UserService.logIn);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginParam = isValidEmail(loginForm.usernameOrEmail)
      ? { email: loginForm.usernameOrEmail }
      : { username: loginForm.usernameOrEmail };

    await logInApi.request({
      password: loginForm.password,
      ...loginParam,
    });
  };

  useEffect(() => {
    if (logInApi.data) {
      setCookie("token", logInApi.data.token, {
        path: "/",
        expires: new Date(logInApi.data.expiresAt),
      });

      setUser({
        username: logInApi.data.username,
        accessType: logInApi.data.accessType,
      });

      router.push("/");
    }
  }, [logInApi.data]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
        <form onSubmit={onSubmit}>
          <Center height="100px" borderBottomWidth={1} borderColor="gray.300">
            <Text as="b" width="full" mx={10} fontSize={24}>
              {"Log in to your account"}
            </Text>
          </Center>
          <Flex direction="column" m={10} gap={7}>
            <FormControl isRequired>
              <FormLabel>{"Username or email:"}</FormLabel>
              <Input
                name="usernameOrEmail"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{"Password:"}</FormLabel>
              <Input
                name="password"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <Flex align="center" gap={2}>
              <Button bgColor="red" textColor="white" rounded={4} type="submit">
                <Text>{"Log In"}</Text>
              </Button>
              <Text>{"or"}</Text>
              <Link href="/sign-up">
                <Text as="u">{"Create account"}</Text>
              </Link>
            </Flex>
          </Flex>
        </form>
      </Box>
    </Center>
  );
}
