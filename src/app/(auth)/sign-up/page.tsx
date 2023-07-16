"use client";

import { useApi } from "@/hooks/useApi";
import { UserService } from "@/services/User/UserService";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingUp() {
  const [redirectSeconds, setRedirectSeconds] = useState<number>(3);
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const toast = useToast();
  const router = useRouter();
  const signUpApi = useApi(UserService.signUp);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signUpForm.password !== signUpForm.passwordConfirmation) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    await signUpApi.request({
      email: signUpForm.email,
      username: signUpForm.username,
      password: signUpForm.password,
      passwordConfirmation: signUpForm.passwordConfirmation,
    });
  };

  useEffect(() => {
    if (signUpApi.success) {
      setTimeout(() => {
        setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
      }, 1000);
    }

    if (redirectSeconds === 0) {
      router.push("/log-in");
    }
  }, [signUpApi.success, redirectSeconds]);

  useEffect(() => {
    if (!signUpApi.loading && signUpApi.success) {
      toast({
        title: "Success",
        description: "Your account has been created!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [signUpApi.success]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
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
              {"Create an account"}
            </Text>
          </Center>
          <Flex direction="column" m={10} gap={7}>
            <FormControl isRequired>
              <FormLabel>{"Username"}</FormLabel>
              <Input
                name="username"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{"Password"}</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{"Repeat password"}</FormLabel>
              <Input
                name="passwordConfirmation"
                type="password"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{"Your email address"}</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={onChange}
                placeholder="name@example.com"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <Checkbox required>
              <Text>
                {"I accept the "}
                <Text as="u" textColor="red">
                  {"Terms of Service"}
                </Text>
              </Text>
            </Checkbox>

            <Flex align="center" gap={2}>
              <Button bgColor="red" textColor="white" rounded={4} type="submit">
                <Text>{"Create account"}</Text>
              </Button>
              <Text>{"or already have an account?"}</Text>
              <Link href="/log-in">
                <Text as="u">{"Log in"}</Text>
              </Link>
            </Flex>
          </Flex>
        </form>
      </Box>
    </Center>
  );
}
