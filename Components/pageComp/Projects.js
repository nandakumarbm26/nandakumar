import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Carousel, { Slide } from "../Carousel";

const data = [
  {
    title: "Virtual Try On",
    github: "#",
    live: "https://vison-express-ui.vercel.app",
    desc: `Virtual Try-on lets you to see what you’ll look like in new
    glasses or sunglasses via your webcam. Simply submit a photo
    and the Virtual Try-on software will digitally position frames
    over your face. You can even share the results with friends to
    help decide if the new specs or shades suit you. Narrow down
    your choices to find frames that match your face shape and
    personal style without ever leaving home.`,
    tech: `Tech Stack : ReactJS, MaterialUI, Flask, Algorithms and
    opensource libraries(mediapipe,opencv)`,
    imageurl: "/proj1.png",
  },
  {
    title: "Resume Builder",
    github: "#",
    live: "https://resume-builder-five.vercel.app/",
    desc: `Resume builder is an online tool that you can use to quickly create a resume. Resume builders allow you to pick a pre-formatted resume template, fill in your contact and background information, and select pre-written work history bullet points — saving you a lot of time.`,
    tech: `Tech Stack : NextJS, ChakraUI, NodeJS, ExpressJS`,
    imageurl: "/proj2.png",
  },
  {
    title: "Passport PhotoTool",
    github: "#",
    live: "https://pass-git-ui2-nandakumarbm26.vercel.app/",
    desc: `Passport PhotoTool is a very useful and easy solution to make passport size photo. It supports lot of countries and different sizes of passport photo. This Passport PhotoTool is a very easy and user-friendly application which makes your life easy.`,
    tech: `Tech Stack : ReactJS, MaterialUI, Flask, Algorithms and
    opensource libraries(mediapipe,opencv)`,
    imageurl: "/proj3.png",
  },
];

function Projects() {
  return (
    <>
      <Box mb="20px" id="projects">
        <Heading as="h2" color="blush" borderBottom="1px solid orange">
          PROJECTS
        </Heading>
      </Box>
      <Box w="100%">
        <Carousel count={data.length}>
          {data.map((d, i) => (
            <SlideCard d={d} />
          ))}
        </Carousel>
      </Box>
    </>
  );
}

function SlideCard({ d }) {
  return (
    <Slide>
      <Card bg="dark" color="white" className="shadow" height="100%">
        <Stack
          border="2% solid black"
          direction={{ b: "column-reverse", md: "row" }}
          width="100%"
          p="5% 5%"
        >
          <Stack
            sx={{
              userSelect: "element",
              width: "100%",
              "@bp1": {
                width: "60%",
              },
              transition: "ease-in-out",
            }}
          >
            <Heading as="h3" color="fanta" bold letterSpacing={"l"}>
              {d.title}
            </Heading>
            <Text
              sx={{
                textAlign: "left",
                fontSize: { b: "12px", md: "16px" },
              }}
            >
              {d.desc}
            </Text>
            <Text
              fontStyle="italic"
              fontSize={{ b: "12px", md: "16px" }}
              borderRadius="5px"
            >
              {d.tech}
            </Text>
            <HStack>
              <Button
                width="120px"
                as="a"
                fontSize={{ b: "12px", md: "16px" }}
                bg="fanta"
                _hover={{ bg: "blush" }}
                href={d.live}
                target="_blank"
                rightIcon={<ExternalLinkIcon />}
              >
                Try Out
              </Button>
              <Button
                as="a"
                href={d.github}
                background="none"
                fontSize={{ b: "12px", md: "16px" }}
                fontFamily="roboto"
                border="1px solid white"
                _hover={{ background: "none" }}
                target="_blank"
                rightIcon={<ExternalLinkIcon />}
              >
                Github repo
              </Button>
            </HStack>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={d.imageurl} width={500} height={100} />
          </Box>
        </Stack>
      </Card>
    </Slide>
  );
}

export default Projects;
