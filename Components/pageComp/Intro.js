import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

function Intro() {
  return (
    <>
      <Box borderTop="1px solid white" width="100%" mt="20px">
        <Stack
          direction={{ b: "column-reverse", md: "row" }}
          justifyContent="center"
          h="85vh"
        >
          <Stack
            width={{ b: "100%", md: "60%" }}
            textAlign={{ b: "center", md: "left" }}
            padding={{ b: "1em 0", md: "3em 0" }}
            height={{ b: "50%", md: "100%" }}
            justifyContent="center"
            alignItems={{ b: "center", md: "start" }}
          >
            <Heading
              typeof="h1"
              color="white"
              fontSize={{ b: "8vw", md: "4.5vw", "2xl": "100px" }}
            >
              Hi, I Am
              <br />
              Nanda Kumar
            </Heading>
            <Heading
              fontSize={{ b: "6vw", md: "3.5vw", "2xl": "80px" }}
              color="blush"
            >
              Software Dev
            </Heading>
            <Text fontSize="14px">MERN stack | Web dev | Shopify</Text>
            <HStack>
              <Button
                fontFamily="roboto"
                background="fanta"
                color="black"
                _hover={{ background: "blush" }}
                rightIcon={<ExternalLinkIcon />}
              >
                Hire Me!
              </Button>
              <Button
                as="a"
                href="#projects"
                background="none"
                fontFamily="roboto"
                border="1px solid white"
                _hover={{ background: "none" }}
                rightIcon={<ExternalLinkIcon />}
              >
                Projects
              </Button>
            </HStack>
          </Stack>
          <Stack
            width={{ b: "100%", md: "40%" }}
            justifyContent={{ b: "end", md: "center" }}
            alignItems="center"
            height={{ b: "50%", md: "100%" }}
          >
            <Box
              background="fanta"
              _hover={{ bg: "blush" }}
              h={{ b: "55vw", md: "40vw" }}
              maxH="400px"
              width={{ b: "55vw", md: "40vw" }}
              backgroundPosition="center"
              maxW="400px"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              borderRadius="100%"
            >
              <Box
                background="url(nk.png)"
                h="100%"
                maxH="400px"
                width="100%"
                backgroundPosition="center"
                maxW="400px"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                borderRadius="100%"
              ></Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Intro;
