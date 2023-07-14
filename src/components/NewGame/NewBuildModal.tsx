import { OperatingSystemIcon } from "@/constants/OperatingSystemIcon";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

type NewBuildModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleApiRequest: (
    file: File,
    operatingSystem: string,
    version: string
  ) => void;
};

const NewBuildModal: React.FC<NewBuildModalProps> = ({
  isOpen,
  onClose,
  handleApiRequest,
}) => {
  const [buildFile, setBuildFile] = useState<File | null>(null);
  const [newBuildForm, setNewBuildForm] = useState({
    version: "",
    operatingSystem: "",
    size: "???",
  });
  const buildInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!buildFile) {
      return;
    }

    handleApiRequest(
      buildFile,
      newBuildForm.operatingSystem,
      newBuildForm.version
    );

    onClose();
  };

  const handleAddFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    setBuildFile(file);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewBuildForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {}, [buildFile]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent borderWidth={2} borderColor="gray.400">
        <ModalHeader>Add Build</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody fontSize={14}>
          <VStack gap={5}>
            <FormControl isRequired>
              <FormLabel>{"Version"}</FormLabel>
              <Input
                name="version"
                onChange={onChange}
                placeholder="Required"
                size="sm"
                borderWidth={2}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>{"Operating System"}</FormLabel>
              <Select
                name="operatingSystem"
                onChange={onChange}
                placeholder="Select operating system"
                size="sm"
              >
                {Object.keys(OperatingSystemIcon).map((os) => (
                  <option key={os} value={os}>
                    {os}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Input
              mt={3}
              type="file"
              ref={buildInputRef}
              onChange={handleAddFile}
              pt="7px"
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red" color="white" onClick={handleSubmit}>
            {"Add New Build"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default NewBuildModal;
