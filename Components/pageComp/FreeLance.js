import { Box, Heading, Stack, Text } from '@chakra-ui/react';

function FreeLance() {
  return (
    <>
      <Heading as='h2' color='blush' borderBottom='1px solid orange'>
        Freelance Work Showcase
      </Heading>
      <Stack spacing={5} mt={5}>
        <Box bg='dark' p='5%' borderRadius='10px'>
          <Heading as='h3' color='fanta'>Overall Experience</Heading>
          <Text mt={2}>I have worked on various freelance projects ranging from web development to data analytics. My main focus has been on delivering high-quality solutions that meet client needs.</Text>
        </Box>
        <Box bg='dark' p='5%' borderRadius='10px'>
          <Heading as='h3' color='fanta'>Projects</Heading>
          <Text mt={2}>1. E-commerce website development for small businesses.<br/>2. Data visualization dashboards for market analysis.<br/>3. Custom CRM solutions for client management.</Text>
        </Box>
        <Box bg='dark' p='5%' borderRadius='10px'>
          <Heading as='h3' color='fanta'>Client Testimonials</Heading>
          <Text mt={2}>'Nanda provided exceptional service and delivered the project ahead of schedule. Highly recommended!'</Text>
          <Text mt={2}>'The quality of work was outstanding and communication was seamless throughout the project.'</Text>
        </Box>
      </Stack>
    </>
  );
}

export default FreeLance;