import { useApi } from "@/hooks/useApi";
import { FileService } from "@/services/File/FileService";
import {
  AspectRatio,
  Button,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

type ScreenShotsViewerProps = {
  screenShots: Array<{ fileName: string; url: string }>;
  setScreenShots: React.Dispatch<
    React.SetStateAction<Array<{ fileName: string; url: string }>>
  >;
};

const ScreenShotsViewer: React.FC<ScreenShotsViewerProps> = ({
  screenShots,
  setScreenShots,
}) => {
  const screenShotInputRef = useRef<HTMLInputElement>(null);
  const uploadFileApi = useApi(FileService.uploadFile);

  const handleAddScreenShot = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];

    await uploadFileApi.request({
      file: file!,
      type: "GAME_IMAGE",
    });
  };

  useEffect(() => {
    if (uploadFileApi.success) {
      const { fileName, url } = uploadFileApi.data!;

      setScreenShots((prev) => [...prev, { url, fileName }]);
    }
  }, [uploadFileApi.data]);

  return (
    <>
      <VStack alignItems="start">
        <Text as="b">{"Screenshots"}</Text>
        <Text>
          {"Screenshots will appear on your game's page. Optional " +
            "but highly recommended. Upload 3 to 5 for best results"}
        </Text>
      </VStack>
      <Button
        bgColor="red"
        textColor="white"
        onClick={() => screenShotInputRef.current!.click()}
      >
        {"Add screenshots"}
      </Button>
      <Input
        hidden
        type="file"
        ref={screenShotInputRef}
        onChange={handleAddScreenShot}
      />
      {screenShots.map((screenShot) => (
        <AspectRatio key={screenShot.fileName} ratio={16 / 9} width="full">
          <Image src={screenShot.url} alt={screenShot.fileName} />
        </AspectRatio>
      ))}
    </>
  );
};
export default ScreenShotsViewer;
