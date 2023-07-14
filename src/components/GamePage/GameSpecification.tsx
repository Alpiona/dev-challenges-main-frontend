import { Game } from "@/services/Game/GameType";
import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import React from "react";
import { TiStopwatch } from "react-icons/ti";

type GameSpecificationProps = {
  game: Game;
  operatingSystems: string[];
};

const GameSpecification: React.FC<GameSpecificationProps> = ({
  game,
  operatingSystems,
}) => {
  console.log(operatingSystems);

  return (
    <VStack bgColor="gray.200" width="inherit" p={4}>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Updated at
        </Text>
        <Flex>
          <Icon as={TiStopwatch} boxSize={5} />
          <Text textAlign="start">
            {formatDistance(new Date(game.updatedAt), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Flex>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Created at
        </Text>
        <Flex>
          <Icon as={TiStopwatch} boxSize={5} />
          <Text textAlign="start">
            {formatDistance(new Date(game.createdAt), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Flex>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Status
        </Text>
        <Text as="u" textColor="red" textAlign="start">
          {game.status}
        </Text>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          OS
        </Text>
        <Text textAlign="start">
          {operatingSystems.map((os, index) => (
            <>
              {index > 0 && ", "}
              <Text key={os} as="u" textColor="red">
                {os}
              </Text>
            </>
          ))}
        </Text>
      </Flex>
      <Flex width="full" gap={3}>
        <Text width="20%" textAlign="end">
          Author
        </Text>
        <Text as="u" textColor="red" textAlign="start">
          {game.authorUsername}
        </Text>
      </Flex>
      <Flex width="full">
        <Text width="20%" textAlign="end" mr={3}>
          Genre
        </Text>

        {game.genres.map((genre, index) => (
          <>
            {index > 0 && ", "}
            <Text as="u" textColor="red" textAlign="start" key={genre.id}>
              {genre.name}
            </Text>
          </>
        ))}
      </Flex>
    </VStack>
  );
};

export default GameSpecification;
