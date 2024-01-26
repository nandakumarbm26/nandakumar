import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

function Intro() {
  return (
    <>
      <Box width="100%" mt="20px">
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
              animation="0.5s ease-out 0s 1 slideInLeft"
              fontSize={{ b: "8vw", md: "4.5vw", "2xl": "64px" }}
            >
              Hi, I Am
              <br />
              Nanda Kumar
            </Heading>
            <Heading
              fontSize={{ b: "6vw", md: "3.5vw", "2xl": "80px" }}
              color="blush"
              animation="0.5s ease-out 0s 1 slideInRight"
            >
              Software Dev
            </Heading>
            <Text
              sx={{
                "@keyframes fadeIn": {
                  "0%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
                animation: "fadeIn 3s",
              }}
              fontSize="18px"
            >
              MERN stack | Web dev | AI/ML | Data Engineering<br/>Graduate Engineer Trainee, Mercedes-Benz R&D India
            </Text>
            <HStack
              sx={{
                "@keyframes fadeIn": {
                  "0%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
                animation: "fadeIn 5s",
              }}
            >
              <Button
                fontFamily="roboto"
                background="fanta"
                color="black"
                as="a"
                href="mailto:nandakumarbm26@gmail.com?subject=Reaching out to Hire Software dev/freelance project contract&body=Please mention JD/project requirements[delete this line]"
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
              animation="0.5s ease-out 0s 1 slideInRight"
              background="fanta"
              _hover={{ bg: "blush" }}
              h={{ b: "55vw", md: "40vw" }}
              maxH="400px"
              width={{ b: "55vw", md: "40vw" }}
              backgroundPosition="center"
              maxW="400px"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              overflow="clip"
              borderRadius="100%"
            >
              <Box
                animation="1s ease-out 0s 1 slideInRight"
                background="url(nk.png)"
                h="100%"
                width="100%"
                maxW="400px"
                maxH="400px"
                backgroundPosition="center"
                backgroundSize="contain"
                transform="scale(1.3)"
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
