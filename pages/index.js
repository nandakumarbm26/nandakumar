import Contact from "@/Components/pageComp/Contact";
import Intro from "@/Components/pageComp/Intro";
import Projects from "@/Components/pageComp/Projects";
import TechStack from "@/Components/pageComp/TechStack";
import Work from "@/Components/pageComp/work";
import { Heading, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <VStack className="main" overflowX="hidden" rowGap="40px">
        <Intro />
        <Projects />
        <Heading as="h2" color="blush" borderBottom="1px solid orange">
          Tech Stack
        </Heading>
        <TechStack />
        <Work />
        <Contact />
      </VStack>
    </>
  );
}
