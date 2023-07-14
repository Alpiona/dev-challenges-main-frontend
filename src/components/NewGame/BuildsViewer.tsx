import { BuildState } from "@/app/new-game/page";
import { OperatingSystemIcon } from "@/constants/OperatingSystemIcon";
import { useApi } from "@/hooks/useApi";
import { FileService } from "@/services/File/FileService";
import { Button, Icon, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import NewBuildModal from "./NewBuildModal";

type BuildsViewerProps = {
  setBuilds: Dispatch<SetStateAction<BuildState[]>>;
  builds: BuildState[];
};

const BuildsViewer: React.FC<BuildsViewerProps> = ({ builds, setBuilds }) => {
  const uploadBuildApi = useApi(FileService.uploadBuild);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNewBuildSubmit = (
    file: File,
    operatingSystem: string,
    version: string
  ) => {
    uploadBuildApi.request({ file, operatingSystem, version });
  };

  useEffect(() => {
    if (uploadBuildApi.success && uploadBuildApi.data) {
      const { fileName, size, url, operatingSystem, version } =
        uploadBuildApi.data;
      setBuilds((prev) => [
        ...prev,
        { fileName, operatingSystem, size, url, version },
      ]);
    }
  }, [uploadBuildApi.data]);

  return (
    <VStack alignItems="start" gap={5} width="full" mt={5}>
      <NewBuildModal
        isOpen={isOpen}
        onClose={onClose}
        handleApiRequest={handleNewBuildSubmit}
      />
      <Text as="b" fontSize={20}>
        {"Uploads"}
      </Text>

      <Button bgColor="red" textColor="white" onClick={onOpen}>
        {"Upload files"}
      </Button>
      <Text>{"File size limit: 1GB."}</Text>
      {builds.map((build) => (
        <Text key={build.fileName}>
          <Icon
            as={
              OperatingSystemIcon[
                build.operatingSystem as keyof typeof OperatingSystemIcon
              ]
            }
            mr={3}
          />
          {`${build.version} (${build.size})`}
        </Text>
      ))}
    </VStack>
  );
};
export default BuildsViewer;
