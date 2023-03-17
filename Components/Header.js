import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import NavMob from "./NavMob";
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

        <NavMob />
        <HStack
          width="60%"
          maxWidth="600px"
          display={{ b: "none", md: "flex" }}
          justifyContent="space-evenly"
        >
          <HLink href="/">About</HLink>
          <HLink href="#work">Work</HLink>
          <HLink href="#projects">Projects</HLink>
          <HLink
            href="https://drive.google.com/file/d/147RU1xQE23GD4hWGpofPTf-14yAMrxLH/view?usp=sharing"
            traget="_blank"
          >
            Resume
          </HLink>
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
