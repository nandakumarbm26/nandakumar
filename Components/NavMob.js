import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

const NavMob = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex zIndex={40}>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        bgColor="dark"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => changeDisplay("flex")}
        display={{ b: "flex", md: "none" }}
      />

      {/* Mobile Content */}
      <Flex
        w="100vw"
        bgColor="dark"
        zIndex={40}
        h="100vh"
        pos="fixed"
        top="0"
        left={display === "flex" ? "0" : "100vw"}
        transition="width 2ms"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            bgColor="dark"
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button
              onClick={() => {
                changeDisplay("none");
              }}
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              About
            </Button>
          </NextLink>

          <NextLink href="#work" passHref>
            <Button
              onClick={() => {
                changeDisplay("none");
              }}
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              Work
            </Button>
          </NextLink>

          <NextLink href="#projects" passHref>
            <Button
              onClick={() => {
                changeDisplay("none");
              }}
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Projects
            </Button>
          </NextLink>
          <NextLink
            href="https://drive.google.com/file/d/147RU1xQE23GD4hWGpofPTf-14yAMrxLH/view?usp=sharing"
            passHref
          >
            <Button
              onClick={() => {
                changeDisplay("none");
              }}
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Resume
            </Button>
          </NextLink>
          <NextLink href="#contactme" passHref>
            <Button
              onClick={() => {
                changeDisplay("none");
              }}
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavMob;
