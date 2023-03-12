import Intro from "@/Components/pageComp/Intro";
import Projects from "@/Components/pageComp/Projects";
import TechStack from "@/Components/pageComp/TechStack";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VStack className="main" rowGap="40px">
        <Intro />
        <Projects />
        <Heading as="h2" color="blush" borderBottom="1px solid orange">
          Tech Stack
        </Heading>
        <TechStack />
        <Heading
          as="h2"
          color="blush"
          id="contactme"
          borderBottom="1px solid orange"
        >
          Contact Me!
        </Heading>
        <Stack
          gap="0px"
          columnGap="0px"
          direction={{ b: "column", md: "row" }}
          width="100%"
        >
          <Box
            w={{ b: "100%", md: "50%" }}
            p="5%"
            bg="dark"
            borderRadius="10px"
          >
            <Heading color="baby">Have an Idea? </Heading>
            <form action="POST">
              <InputGroup flexDirection="column">
                <FormLabel>
                  Name
                  <Input type="text" />
                </FormLabel>
                <FormLabel>
                  Email
                  <Input type="email" />
                </FormLabel>
                <FormLabel>
                  Phone Number
                  <Input type="tel" />
                </FormLabel>
                <FormLabel>
                  Message
                  <Textarea noOfLines={5} />
                </FormLabel>
              </InputGroup>
              <Button
                type="submit"
                width="120px"
                as="a"
                fontSize={{ b: "12px", md: "16px" }}
                bg="fanta"
                _hover={{ bg: "blush" }}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Box
            display={{ b: "none", md: "block" }}
            width="50%"
            bg="url(/hello.png)"
            bgSize="contain"
            transform="scale(0.8)"
            animation="upupdowndown .7s linear infinite alternate"
            bgPos="center"
            bgRepeat="no-repeat"
          ></Box>
        </Stack>
      </VStack>
    </>
  );
}
