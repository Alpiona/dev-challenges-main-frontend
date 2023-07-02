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
import React from "react";
import { TiShoppingCart, TiStar, TiStopwatch } from "react-icons/ti";

const FilterMenu: React.FC = () => {
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
              >
                <Icon boxSize={4} as={TiStar} />
                <Text fontWeight="400">{"Free"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
              >
                <Icon boxSize={4} as={TiStar} />
                <Text fontWeight="400">{"On Sale"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
              >
                <Icon boxSize={4} as={TiShoppingCart} />
                <Text fontWeight="400">{"Paid"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
              >
                <Icon boxSize={4} as={TiShoppingCart} />
                <Text fontWeight="400">{"$5 or less"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
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
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last Day"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last 7 days"}</Text>
              </Button>
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
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
              <Button
                bgColor="gray.200"
                gap={3}
                alignItems="center"
                height="auto"
              >
                <Icon boxSize={4} as={TiStopwatch} />
                <Text fontWeight="400">{"Last Day"}</Text>
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
export default FilterMenu;
