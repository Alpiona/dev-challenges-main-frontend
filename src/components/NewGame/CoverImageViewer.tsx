import {
  AspectRatio,
  Button,
  Center,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsTrashFill } from "react-icons/bs";

type CoverImageViewerProps = {
  coverImage: File | null;
  setCoverImage: React.Dispatch<React.SetStateAction<File | null>>;
};

const CoverImageViewer: React.FC<CoverImageViewerProps> = ({
  coverImage,
  setCoverImage,
}) => {
  const coverImageInputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setCoverImage(file);
  };

  return (
    <>
      {coverImage ? (
        <>
          <AspectRatio ratio={315 / 250} width="full">
            <Image src={URL.createObjectURL(coverImage)} alt="coverImage" />
          </AspectRatio>
          <Button
            size="xs"
            bgColor="red"
            color="white"
            onClick={() => setCoverImage(null)}
          >
            <Icon as={BsTrashFill} />
          </Button>
        </>
      ) : (
        <Center
          width="full"
          aspectRatio={315 / 250}
          border="dashed"
          borderColor="gray.400"
          borderWidth={1}
        >
          <Input
            hidden
            type="file"
            ref={coverImageInputRef}
            onChange={onChange}
          />
          <Button
            bgColor="red"
            textColor="white"
            onClick={() => coverImageInputRef.current!.click()}
          >
            {"Upload Cover Image"}
          </Button>{" "}
        </Center>
      )}
      <Text>
        {"The cover image is used whenever itch.io wants to link to " +
          "your project from another part of the site. Required" +
          " (Minimum: 315x250, Recommended: 630:500)"}
      </Text>
    </>
  );
};
export default CoverImageViewer;
