import Contact from '@/Components/pageComp/Contact';
import Intro from '@/Components/pageComp/Intro';
import Projects from '@/Components/pageComp/Projects';
import TechStack from '@/Components/pageComp/TechStack';
import Work from '@/Components/pageComp/work';
import { Heading, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <VStack className='main' overflowX='hidden' rowGap='40px' width='100%' maxWidth={{ b: '100%', md: '1600px' }} padding={{ b: '20px', md: '5%' }} margin='auto'>
        <Intro />
        <Projects />
        <Heading as='h2' color='blush' borderBottom='1px solid orange'>
          Tech Stack
        </Heading>
        <TechStack />
        <Work />
        <Contact />
      </VStack>
    </>
  );
}
