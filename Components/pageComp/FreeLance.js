import { Box, Heading, Stack, Text } from "@chakra-ui/react";

function FreeLance() {
  return (
    <Box className="main" color="white" bg="dark" p="5%" borderRadius="10px" mt="20px">
      <Heading as="h2" color="blush" borderBottom="1px solid orange" mb="20px">
        Freelance Work Showcase
      </Heading>
      <Stack spacing="30px">
        <Box>
          <Heading as="h3" color="fanta" mb="10px">Overall Experience</Heading>
          <Text fontSize="16px">
            With over 3 years of experience in freelance web development, I have worked with diverse clients
            across various industries, delivering customized solutions that meet their unique needs.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color="fanta" mb="10px">Projects</Heading>
          <Text fontSize="16px">
            - Developed a full-stack eCommerce platform using MERN stack.
            <br />
            - Built a responsive portfolio site for a graphic designer.
            <br />
            - Implemented SEO optimization for several web applications.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" color="fanta" mb="10px">Client Testimonials</Heading>
          <Text fontSize="16px" fontStyle="italic">
            "Outstanding work! Delivered beyond expectations and on time. Highly recommend."
            <br />
            "Great communication and technical skills. Will hire again for future projects."
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default FreeLance;
