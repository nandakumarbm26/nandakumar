import Projects from '@/Components/pageComp/Projects';
import { Heading, VStack } from '@chakra-ui/react';

export default function ProjectsPage() {
  return (
    <>
      <VStack className='main' overflowX='hidden' rowGap='40px'>
        <Heading as='h2' color='blush' borderBottom='1px solid orange'>Projects</Heading>
        <Projects />
      </VStack>
    </>
  );
}
