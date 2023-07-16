import { useApi } from "@/hooks/useApi";
import { GameService } from "@/services/Game/GameService";
import { Genre } from "@/services/Game/GameType";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import sub from "date-fns/sub";
import React, { useEffect, useState } from "react";
import { TiShoppingCart, TiStar, TiStopwatch } from "react-icons/ti";

type FilterMenuProps = {
  onFilterUpdate: (data: Record<string, unknown>) => void;
  isLoading: boolean;
};

const FilterMenu: React.FC<FilterMenuProps> = ({
  onFilterUpdate,
  isLoading,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const getGenresApi = useApi(GameService.getGenres);

  useEffect(() => {
    getGenresApi.request();
  }, []);

  useEffect(() => {
    if (getGenresApi.success && getGenresApi.data) {
      setGenres(getGenresApi.data);
    }
  }, [getGenresApi.data]);

  return (
    <VStack width="300px">
      <Text as="b" my={2} alignSelf="start" mx={3} mt={3}>
        FILTER RESULTS
      </Text>
      <Accordion
        alignItems="start"
        width="inherit"
        allowMultiple
        defaultIndex={[0]}
      >
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon mr={3} />
            <Box as="span" flex="1" textAlign="left">
              Price
            </Box>
          </AccordionButton>
          <AccordionPanel gap={3}>
            <VStack alignItems="start" gap={5}>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({ maxPrice: 0 });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiStar} />
                <Text fontWeight="400">{"Free"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({ onSale: true });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiStar} />
                <Text fontWeight="400">{"On Sale"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({ hasBought: true });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiShoppingCart} />
                <Text fontWeight="400">{"Paid"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({ maxPrice: 5 });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiShoppingCart} />
                <Text fontWeight="400">{"$5 or less"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({ maxPrice: 15 });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiShoppingCart} />
                <Text fontWeight="400">{"$15 or less"}</Text>
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon mr={3} />
            <Box as="span" flex="1" textAlign="left">
              When
            </Box>
          </AccordionButton>
          <AccordionPanel gap={3}>
            <VStack alignItems="start" gap={5}>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({
                    createdAt: sub(new Date(), { days: 1 }).toISOString(),
                  });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last Day"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({
                    createdAt: sub(new Date(), { days: 7 }).toISOString(),
                  });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last 7 days"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
                onClick={() => {
                  onFilterUpdate({
                    createdAt: sub(new Date(), { days: 30 }).toISOString(),
                  });
                }}
                isDisabled={isLoading}
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last 30 days"}</Text>
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon mr={3} />
            <Box as="span" flex="1" textAlign="left">
              Genre
            </Box>
          </AccordionButton>
          <AccordionPanel gap={3}>
            <VStack alignItems="start" gap={5}>
              {genres.map((genre) => (
                <Button
                  key={genre.id}
                  bgColor="gray.200"
                  gap={3}
                  alignItems="center"
                  height="auto"
                  onClick={() => {
                    onFilterUpdate({
                      genre: genre.id,
                    });
                  }}
                  isDisabled={isLoading}
                >
                  <Icon boxSize={4} as={TiStar} />
                  <Text fontWeight="400">{genre.name}</Text>
                </Button>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
export default FilterMenu;
