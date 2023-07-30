import { OperatingSystemIcon } from "@/constants/OperatingSystemIcon";
import { Game } from "@/services/Game/GameType";
import { Box, HStack, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

type GameInfoProps = {
  game: Game;
};

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  const [uniqueOperatingSystems, setUniqueOperatingSystems] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (game.builds.length > 0)
      setUniqueOperatingSystems([
        ...new Set(game.builds.map((build) => build.operatingSystem)),
      ]);
  }, []);

  return (
    <Box>
      <Link as={NextLink} href={`/game/${game.platformUrlPath}`}>
        <VStack alignItems="start" fontSize={15} gap={1}>
          <Image
            src={game.coverImageUrl}
            width="300px"
            height="300px"
            alt="coverImage"
            objectFit="cover"
          />
          <Text as="b" fontSize={18} textColor="gray.700">
            {game.title}
          </Text>
          <Text textColor="gray.600">{game.tagline}</Text>
          <Text textColor="gray.600">{game.authorUsername}</Text>
          <HStack textColor="gray.500">
            {uniqueOperatingSystems.map((os) => (
              <Icon
                key={os}
                as={OperatingSystemIcon[os as keyof typeof OperatingSystemIcon]}
              />
            ))}
          </HStack>
        </VStack>
      </Link>
    </Box>
  );
};

export default GameInfo;
