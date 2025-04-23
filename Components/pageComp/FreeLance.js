import { Box, Heading, Text, Stack } from "@chakra-ui/react";

function FreeLance() {
  return (
    <Box className="main" id="freelance" p="5%">
      <Heading as="h2" color="blush" borderBottom="1px solid orange">
        Freelance Work
      </Heading>
      <Stack direction={{ b: "column", md: "row" }} gap="40px" mt="20px">
        <Box flex="1" bg="dark" p="20px" borderRadius="10px">
          <Heading as="h3" color="fanta">Overall Experience</Heading>
          <Text mt="10px">With over 3 years of freelance experience, I have successfully delivered multiple projects across various domains including web development, AI/ML, and data engineering.</Text>
        </Box>
        <Box flex="1" bg="dark" p="20px" borderRadius="10px">
          <Heading as="h3" color="fanta">Projects</Heading>
          <Text mt="10px">Some of my notable freelance projects include a full-stack e-commerce platform and a custom AI solution for automated data analysis.</Text>
        </Box>
        <Box flex="1" bg="dark" p="20px" borderRadius="10px">
          <Heading as="h3" color="fanta">Client Testimonials</Heading>
          <Text mt="10px">"Exceptional service and support throughout the project. Delivered high-quality work on time." - Client A</Text>
          <Text mt="10px">"Highly recommend for any web development needs. Great communication and results." - Client B</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default FreeLance;
