import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import NavMob from "./NavMob";
import { HLink } from "./Types";
function Header() {
  return (
    <div style={{display:"flex",width:"100%",overflow:"auto"}}>
      <Stack
        top={0}
        width="100%"
        position="sticky"
        className="main"
        mt="30px"
        background="#fff3"
        borderRadius="10px"
        padding="15px"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        alignSelf="flex-start"
        overflowY="auto"
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
          fontSize="20px"
          fontWeight="bold"
        >
          <HLink href="/">About</HLink>
          <HLink href="#work">Work</HLink>
          <HLink href="#projects">Projects</HLink>
          <HLink
            href="https://drive.google.com/file/d/1iCMzSL1Nn1Q4xYFT4cfgC241KVCw-xKr/view?usp=sharing"
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
            fontSize="20px"
            fontWeight="bold"
            w="100px"
            color="white"
            _hover={{ color: "black", bg: "white" }}
          >
            Contact
          </Button>
        </HStack>
      </Stack>
    </div>
  );
}

export default Header;
