"use client";

import GameSpecification from "@/components/GamePage/GameSpecification";
import PurchasingModal from "@/components/GamePage/PurchasingModal";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const GamePage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PurchasingModal isOpen={isOpen} onClose={onClose} />

      <VStack width="1080px" margin="auto" bgColor="white" gap={5}>
        <Center>
          <Image
            src="/placeholder-thumb.jpg"
            alt="logo"
            width="auto"
            height="320px"
            alignSelf="center"
          />
        </Center>
        <VStack p={5} alignItems="start" width="inherit" gap={5}>
          <Text>A downloadable game for Windows, macOS, Linux and Android</Text>
          <Flex align="center" gap={3}>
            <Button bgColor="red.400" textColor="white" rounded={5}>
              <Text mx={4}>BUY</Text>
            </Button>
            <Text as="b" fontSize={20}>
              $24.99 USD
            </Text>
          </Flex>
          <Flex width="inherit">
            <VStack width="60%" alignItems="start">
              <Text>
                Donec vulputate elit feugiat lectus porta, sit amet cursus arcu
                suscipit. Cras placerat aliquet libero, sagittis pellentesque
                lacus faucibus in. Etiam a nisl nisi. Donec maximus odio quis
                risus iaculis sollicitudin. In hac habitasse platea dictumst.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Duis dictum scelerisque justo et mollis.
                Sed nec magna eros. Mauris ac volutpat felis. Praesent feugiat
                augue ac tempor sodales. Vestibulum sollicitudin dapibus lacus
                in pretium. Ut nibh nibh, porttitor sit amet ultrices ut,
                euismod sed tortor. Nam neque justo, pulvinar quis gravida a,
                rhoncus eget quam.
              </Text>
              <Accordion width="full" my={10}>
                <AccordionItem borderWidth={0}>
                  <AccordionButton p={0} mb={3}>
                    <Text as="u" textColor="red">
                      More Info
                    </Text>
                    <AccordionIcon mr={3} />
                  </AccordionButton>
                  <AccordionPanel gap={3} p={0}>
                    <GameSpecification />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Text as="b" fontSize={28}>
                Comprar
              </Text>
              <Flex align="center" gap={3} mt={3}>
                <Button
                  bgColor="red.400"
                  textColor="white"
                  rounded={5}
                  onClick={onOpen}
                >
                  <Text mx={4}>BUY</Text>
                </Button>
                <Text as="b" fontSize={20}>
                  $24.99 USD
                </Text>
              </Flex>
            </VStack>
            <VStack width="40%" gap={3}>
              <Image src="/game-image-space.jpg" alt="image1" />
              <Image src="/game-image-space.jpg" alt="image2" />
              <Image src="/game-image-space.jpg" alt="image3" />
              <Image src="/game-image-space.jpg" alt="image4" />
              <Image src="/game-image-space.jpg" alt="image5" />
            </VStack>
          </Flex>
        </VStack>
      </VStack>
    </>
  );
};

export default GamePage;
