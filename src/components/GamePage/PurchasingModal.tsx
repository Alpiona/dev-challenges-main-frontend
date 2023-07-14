import { Build } from "@/services/Game/GameType";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { SlPaypal } from "react-icons/sl";

type PurchasingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  price: number;
  gameTitle: string;
  builds: Build[];
  handlePayment: (method: string) => void;
};

const PurchasingModal: React.FC<PurchasingModalProps> = ({
  isOpen,
  onClose,
  price,
  builds,
  gameTitle,
  handlePayment,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent borderWidth={2} borderColor="gray.400">
        <ModalHeader>{`Buy '${gameTitle}'`}</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody fontSize={14}>
          <VStack alignItems="start" mt={3}>
            <Input value={price > 0 ? `$${price}` : "Free"} isReadOnly />
            <Divider variant="dashed" my={2} />
            <Text alignSelf="center">File</Text>
            {builds.map((build) => (
              <HStack key={build.url} gap={1}>
                <Text as="b">{gameTitle}</Text>
                <Text as="b">{build.operatingSystem.toUpperCase()}</Text>
                <Text as="b">{`Version ${build.version}`}</Text>
                <Text>{`(${build.size})`}</Text>
              </HStack>
            ))}
            <Divider variant="dashed" mb={3} />
            <Flex gap={3}>
              <Button
                bgColor="red"
                textColor="white"
                rounded={5}
                gap={2}
                onClick={() => handlePayment("paypal")}
              >
                <Icon as={SlPaypal} color="white" />
                <Text>PayPal</Text>
              </Button>
              <Button
                bgColor="red"
                textColor="white"
                rounded={5}
                gap={2}
                onClick={() => handlePayment("credit_card")}
              >
                <Icon as={FaRegCreditCard} color="white" />
                <Text>Card</Text>
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PurchasingModal;
