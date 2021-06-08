import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/core";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0"
      bg="#7e888c"
    >
      <div style={{marginLeft:'50%'}}>
      <a href="/">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png' style={{width:'40px'}}></img>
      </a>
      </div>
    </Flex>
  );
};

export default Header;
