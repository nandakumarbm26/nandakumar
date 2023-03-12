import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { HLink } from "./Types";
function Header() {
  return (
    <>
      <Stack
        // position="fixed"
        className="main"
        mt="30px"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        height="50px"
      >
        <Text
          h="100%"
          color="white"
          // fontFamily="open-sans"
          fontWeight="bold"
          fontSize="30px"
          _hover={{ color: "fanta" }}
        >
          NandaKumar.
        </Text>
        <IconButton
          display={{ b: "block", md: "none" }}
          background="none"
          height="50px"
          width="50px"
          _hover={{ background: "blush" }}
          icon={<HamburgerIcon height="30px" width="30px" color="white" />}
        />
        <HStack
          width="35%"
          maxWidth="600px"
          display={{ b: "none", md: "flex" }}
          justifyContent="space-evenly"
        >
          <HLink href="/">home</HLink>
          <HLink href="#">Work</HLink>
          <HLink href="#projects">Projects</HLink>
          {/* <HLink href="#">Blogs</HLink> */}
          <Button
            bg="none"
            as="a"
            href="#contactme"
            border="1px solid white"
            borderRadius="0"
            fontFamily="roboto"
            textAlign="center"
            h="40px"
            w="100px"
            color="white"
            _hover={{ color: "black", bg: "white" }}
          >
            Contact
          </Button>
        </HStack>
      </Stack>
      <Box></Box>
    </>
  );
}

export default Header;
