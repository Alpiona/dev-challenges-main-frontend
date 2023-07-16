"use client";

import BuildsViewer from "@/components/NewGame/BuildsViewer";
import CoverImageViewer from "@/components/NewGame/CoverImageViewer";
import GenresMultiSelect from "@/components/NewGame/GenresMultiSelect";
import ScreenShotsViewer from "@/components/NewGame/ScreenShotsViewer";
import { useApi } from "@/hooks/useApi";
import { FileService } from "@/services/File/FileService";
import { GameService } from "@/services/Game/GameService";
import { Genre } from "@/services/Game/GameType";
import {
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type ScreenShotState = { fileName: string; url: string };

export type BuildState = {
  fileName: string;
  operatingSystem: string;
  size: string;
  url: string;
  version: string;
};

const NewGamePage: React.FC = () => {
  const [redirectSeconds, setRedirectSeconds] = useState<number>(3);
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [screenShots, setScreenShots] = useState<ScreenShotState[]>([]);
  const [builds, setBuilds] = useState<BuildState[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [gameForm, setGameForm] = useState({
    title: "",
    description: "",
    projectUrl: "",
    tagline: "",
    status: "Released",
    price: "0",
    priceType: "",
  });

  const toast = useToast();
  const router = useRouter();

  const uploadFileApi = useApi(FileService.uploadFile);
  const createGameApi = useApi(GameService.createGame);

  const handleSubmit = () => {
    if (!coverImageFile) {
      return;
    }

    uploadFileApi.request({
      file: coverImageFile,
      type: "GAME_COVER_IMAGE",
    });
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    setGameForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (uploadFileApi.success) {
      const { fileName: coverImageFileName } = uploadFileApi.data!;

      const fetchApi = async () => {
        await createGameApi.request({
          ...gameForm,
          price: gameForm.priceType === "free" ? 0 : Number(gameForm.price),
          images: screenShots.map((screenShot) => screenShot.fileName),
          coverImage: coverImageFileName,
          genresIds: selectedGenres.map((genre) => genre.id),
          builds: builds.map((build) => build.fileName),
        });
      };

      fetchApi();
    }
  }, [uploadFileApi.data]);

  useEffect(() => {
    if (createGameApi.success) {
      setTimeout(() => {
        setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
      }, 1000);
    }

    if (redirectSeconds === 0) {
      const { platformUrlPath } = createGameApi.data!;
      router.push(`/${platformUrlPath}`);
    }
  }, [createGameApi.success, redirectSeconds]);

  useEffect(() => {
    if (createGameApi.success) {
      toast({
        title: "Success",
        description:
          "Your game page was created! You will be redirected to the page",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [createGameApi.success]);

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
            {"Dashboard"}
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
            {"Create a new game"}
          </Text>
        </Center>
        <Flex width="full" p={7} gap={5} fontSize={14} textColor="gray.600">
          <VStack alignItems="start" width="60%" gap={7}>
            <FormControl>
              <Text as="b">{"Title"}</Text>
              <Input
                name="title"
                onChange={onChange}
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl>
              <Text as="b">{"Project URL"}</Text>
              <Input
                onChange={onChange}
                name="projectUrl"
                placeholder="https://localhost:3000/"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl>
              <Text as="b">{"Short description or tagline"}</Text>
              <Text>
                {"Shown when we link to your projects. Avoid duplicating " +
                  "your project's title"}
              </Text>
              <Input
                onChange={onChange}
                name="tagline"
                placeholder="Optional"
                size="sm"
                borderWidth={2}
              />
            </FormControl>

            <FormControl>
              <Text as="b">{"Release status"}</Text>
              <Select name="status" onChange={onChange}>
                <option selected value="Released">
                  {"Released"}
                </option>
                <option value="Early Access">{"Early Access"}</option>
              </Select>
            </FormControl>

            <Text as="b" fontSize={20}>
              {"Pricing"}
            </Text>
            <FormControl>
              <RadioGroup name="priceType">
                <Flex width="full" gap={3}>
                  <Flex
                    width="50%"
                    borderWidth={2}
                    height="30px"
                    p={2}
                    alignItems="center"
                  >
                    <Radio value="free" onChange={onChange} />
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
                    <Radio value="paid" onChange={onChange} />
                    <Center width="full">
                      <Text alignSelf="center">{"Paid"}</Text>
                    </Center>
                  </Flex>
                </Flex>
              </RadioGroup>
            </FormControl>
            {gameForm.priceType === "paid" && (
              <NumberInput
                name="price"
                onChange={(value) =>
                  setGameForm((prev) => ({
                    ...prev,
                    price: value.replace(/^\$/, ""),
                  }))
                }
                value={`$${gameForm.price}`}
              >
                <NumberInputField />
              </NumberInput>
            )}

            <BuildsViewer builds={builds} setBuilds={setBuilds} />

            <FormControl>
              <Text as="b" fontSize={20} mb={2}>
                {"Details"}
              </Text>
              <Text>
                {"Description - This will make up the content of your " +
                  "game page."}
              </Text>
              <Textarea name="description" onChange={onChange} />
            </FormControl>

            <FormControl>
              <Text as="b">{"Genre"}</Text>
              <Text>
                {"Select the category that best describes your game. You " +
                  "can pick additional genres with tags below"}
              </Text>
              <Flex width="full">
                <GenresMultiSelect
                  genres={selectedGenres}
                  setGenres={setSelectedGenres}
                />
              </Flex>
            </FormControl>
            <Button
              bgColor="red"
              textColor="white"
              mt={4}
              onClick={handleSubmit}
              isLoading={uploadFileApi.loading || createGameApi.loading}
            >
              {"Save & view page"}
            </Button>
          </VStack>

          <VStack alignItems="start" width="40%" gap={5}>
            <CoverImageViewer
              setCoverImage={setCoverImageFile}
              coverImage={coverImageFile}
            />
            <ScreenShotsViewer
              setScreenShots={setScreenShots}
              screenShots={screenShots}
            />
          </VStack>
        </Flex>
      </VStack>
    </Center>
  );
};

export default NewGamePage;
