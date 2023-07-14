import { useApi } from "@/hooks/useApi";
import { GameService } from "@/services/Game/GameService";
import { Genre } from "@/services/Game/GameType";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type GenresMultiSelectProps = {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
};

const GenresMultiSelect: React.FC<GenresMultiSelectProps> = ({
  genres,
  setGenres,
}) => {
  const [allGenres, setAllGenres] = useState<Genre[]>([]);
  const getGenresApi = useApi(GameService.getGenres);

  const handleChange = (value: string[]) => {
    const genres = allGenres.filter((genre) => value.includes(genre.name));

    setGenres(genres);
  };

  useEffect(() => {
    getGenresApi.request();
  }, []);

  useEffect(() => {
    if (getGenresApi.data) {
      setAllGenres(getGenresApi.data);
    }
  }, [getGenresApi.success]);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        width="full"
        bgColor="white"
        borderColor="gray.300"
        borderWidth={2}
        rightIcon={<ChevronDownIcon />}
        textAlign="start"
      >
        {genres.length
          ? genres.map((genre) => genre.name).join(", ")
          : "No genre"}
      </MenuButton>
      <MenuList width="full">
        <MenuOptionGroup type="checkbox" onChange={handleChange as any}>
          {allGenres.map((genre) => (
            <MenuItemOption key={genre.id} value={genre.name}>
              {genre.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
export default GenresMultiSelect;
