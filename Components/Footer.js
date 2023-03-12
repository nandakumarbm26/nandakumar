import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <Box
      className="main"
      color="white"
      bg="url(/polybg.jpg)"
      borderTop="5px solid black"
      mt="30px"
      bgSize="cover"
    >
      <Stack
        direction={{ b: "column", md: "row" }}
        justifyContent="space-between"
        p="5% 0"
      >
        <Box>
          <Image src="/icon_nk_white.png" width={100} height={50} />
          <Text>Nanda Kumar B M</Text>
          <Box>
            <Link href="mailto:nandakumarbm26@gmail.com">
              nandakumarbm26@gmail.com
            </Link>
          </Box>
          <Box>
            <Link href="tel:+919538727397">+919538727397</Link>
          </Box>
        </Box>
        {/* <Stack>
          <Box>
            <Text>Projects</Text>
            <Text>Projects</Text>
            <Text>Projects</Text>
            <Text>Projects</Text>
            <Text>Projects</Text>
          </Box>
        </Stack> */}
        <Stack direction="row">
          <Box width="300px" position="relative">
            <Input
              h="40px"
              placeholder="Your Email"
              width="100%"
              type="email"
              borderRightRadius="10px"
              borderLeftRadius="10px"
              _focus={{ borderSize: "2px", borderColor: "sagegreen" }}
            />
            <Button
              position="absolute"
              right="0"
              color="sagegreen"
              bg="none"
              _hover={{ bg: "none" }}
              marginInlineStart="none"
              m="0px"
              w="80px"
              h="40px"
              bgColor="none"
              borderRadius="10px"
              type="submit"
            >
              Reach me!
            </Button>
          </Box>
        </Stack>
      </Stack>
      {/* <Stack alignContent={"center"}>
        <Stack direction={"row"}>
          <ChatIcon />
          <ChatIcon />
          <ChatIcon />
          <ChatIcon />
          <ChatIcon />
        </Stack>
        <Text>Made with Love By Nanda Kunar</Text>
      </Stack> */}
    </Box>
  );
}

export default Footer;
