import {
  Button,
  Divider,
  Flex,
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
};

const PurchasingModal: React.FC<PurchasingModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent borderWidth={2} borderColor="gray.400">
        <ModalHeader>Buy Game Title</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody fontSize={14}>
          <VStack alignItems="start" mt={3}>
            <Input value="$8.00" />
            <Divider variant="dashed" my={2} />
            <Text alignSelf="center">File</Text>
            <Text>
              <Text as="b">Fear & Hunger WINDOWS Version 1.4.1</Text> (690 MB)
            </Text>
            <Text>
              <Text as="b">Fear & Hunger MAC Version 1.4.1</Text> (820 MB)
            </Text>
            <Text>
              <Text as="b">Fear & Hunger LINUX Version 1.4.1</Text> (731 MB)
            </Text>
            <Divider variant="dashed" mb={3} />
            <Flex gap={3}>
              <Button bgColor="red" textColor="white" rounded={5} gap={2}>
                <Icon as={SlPaypal} color="white" />
                <Text>PayPal</Text>
              </Button>
              <Button bgColor="red" textColor="white" rounded={5} gap={2}>
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
