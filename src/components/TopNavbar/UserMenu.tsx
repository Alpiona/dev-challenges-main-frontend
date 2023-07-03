import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

type UserMenuProps = {
  accessType: string;
};

const UserMenu: React.FC<UserMenuProps> = ({ accessType }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<ChevronDownIcon />}
        variant="outline"
      />
      <MenuList
        py={0}
        borderColor="gray.300"
        textColor="gray.600"
        borderWidth={1}
        rounded={0}
      >
        <MenuGroup
          title="EXPLORE"
          m={0}
          py="7px"
          px="3"
          borderBottomWidth={1}
          borderColor="gray.300"
          bgColor="gray.100"
        >
          <MenuItem as="a" href="/library">
            My Library
          </MenuItem>
        </MenuGroup>
        {accessType === "developer" && (
          <MenuGroup
            title="CREATE"
            m={0}
            py="7px"
            px="3"
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor="gray.300"
            bgColor="gray.100"
          >
            <MenuItem as="a" href="/new-game">
              Create new game
            </MenuItem>
          </MenuGroup>
        )}
        <MenuGroup
          title="ACCOUNT"
          m={0}
          py="7px"
          px="3"
          borderTopWidth={1}
          borderBottomWidth={1}
          borderColor="gray.300"
          bgColor="gray.100"
        >
          <MenuItem>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
