"use client";
import GameSpecification from "@/components/GamePage/GameSpecification";
import PurchasingModal from "@/components/GamePage/PurchasingModal";
import { useApi } from "@/hooks/useApi";
import { GameService } from "@/services/Game/GameService";
import { Game } from "@/services/Game/GameType";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";

const GamePage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uniqueOperatingSystems, setUniqueOperatingSystems] = useState<
    string[]
  >([]);
  const { game: gameUrlPath } = useParams();
  const [game, setGame] = useState<Game>();
  const getGameApi = useApi(GameService.getOneGame);
  const router = useRouter();
  const buyGameApi = useApi(GameService.buyGame);

  const handlePayment = (method: string) => {
    buyGameApi.request({ gameId: game!.id });
  };

  useEffect(() => {
    getGameApi.request({ platformUrlPath: gameUrlPath });
  }, []);

  useEffect(() => {
    if ((getGameApi.success, getGameApi.data)) {
      const game = getGameApi.data;
      setGame(game);

      if (game.builds.length > 0)
        setUniqueOperatingSystems([
          ...new Set(game.builds.map((build) => build.operatingSystem)),
        ]);
    }
  }, [getGameApi.data]);

  useEffect(() => {
    onClose();
    router.refresh();
  }, [buyGameApi.success]);

  return (
    <>
      {game && (
        <>
          <PurchasingModal
            isOpen={isOpen}
            onClose={onClose}
            price={game.price}
            gameTitle={game.title}
            builds={game.builds}
            handlePayment={handlePayment}
          />

          <VStack width="1080px" margin="auto" bgColor="white" gap={5}>
            <Center height="320px" width="full">
              <Image
                src={game.coverImageUrl}
                alt="logo"
                width="full"
                height="320px"
                objectFit={"fill"}
              />
            </Center>
            <VStack p={5} alignItems="start" width="inherit" gap={5}>
              <Text>
                {`A downloadable game for ${[
                  ...new Set(game.builds.map((build) => build.operatingSystem)),
                ].join(", ")}`}
              </Text>
              {!game.hasBought && (
                <Flex align="center" gap={3}>
                  <Button
                    bgColor="red.400"
                    textColor="white"
                    rounded={5}
                    onClick={onOpen}
                  >
                    <Text mx={4}>BUY</Text>
                  </Button>
                  <Text as="b" fontSize={20}>
                    {game.price > 0 ? `$${game.price} USD` : "Free"}
                  </Text>
                </Flex>
              )}

              <Flex width="inherit">
                <VStack width="60%" alignItems="start">
                  <Text>{game.description}</Text>
                  <Accordion width="full" my={10}>
                    <AccordionItem borderWidth={0}>
                      <AccordionButton p={0} mb={3}>
                        <Text as="u" textColor="red">
                          More Info
                        </Text>
                        <AccordionIcon mr={3} />
                      </AccordionButton>
                      <AccordionPanel gap={3} p={0}>
                        <GameSpecification
                          game={game}
                          operatingSystems={uniqueOperatingSystems}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <VStack width="full">
                    {game.hasBought &&
                      game.builds.map((build) => (
                        <Link
                          as={NextLink}
                          href={build.url}
                          isExternal
                          fontSize={14}
                          key={build.url}
                          mx="auto"
                        >
                          <HStack gap={1}>
                            <Icon as={HiOutlineDownload} boxSize={6} />
                            <Text as="b">{game.title}</Text>
                            <Text as="b">
                              {build.operatingSystem.toUpperCase()}
                            </Text>
                            <Text as="b">{`Version ${build.version}`}</Text>
                            <Text>{`(${build.size})`}</Text>
                          </HStack>
                        </Link>
                      ))}
                  </VStack>
                </VStack>
                <VStack width="40%" gap={3}>
                  {game.images.map((image) => (
                    <AspectRatio
                      key={image.url}
                      ratio={315 / 250}
                      width="320px"
                    >
                      <Image src={image.url} alt={image.url} />
                    </AspectRatio>
                  ))}
                </VStack>
              </Flex>
            </VStack>
          </VStack>
        </>
      )}
    </>
  );
};

export default GamePage;
