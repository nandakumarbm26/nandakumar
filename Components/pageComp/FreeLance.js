import { Box, Heading, Stack, Text } from "@chakra-ui/react";

function FreeLance() {
  const experiences = [
    {
      title: "Web Development for XYZ Corp",
      description: "Developed a full-fledged e-commerce website using MERN stack.",
    },
    {
      title: "AI Chatbot for ABC Ltd",
      description: "Created an AI-driven chatbot to enhance customer support.",
    },
  ];

  const testimonials = [
    {
      client: "John Doe, CEO of XYZ Corp",
      feedback: "Outstanding work! Our sales increased by 30% after the new website launch.",
    },
    {
      client: "Jane Smith, CTO of ABC Ltd",
      feedback: "The AI chatbot has significantly improved our customer service operations.",
    },
  ];

  return (
    <Box>
      <Heading as="h2" color="blush" borderBottom="1px solid orange">
        Freelance Work Showcase
      </Heading>
      <Stack spacing={8} mt={4}>
        <Box>
          <Heading as="h3" fontSize="xl" color="fanta">
            Overall Experience
          </Heading>
          <Text>
            I have worked on various freelance projects ranging from web development to AI solutions. Below are some of my notable projects and client testimonials.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl" color="fanta">
            Projects
          </Heading>
          <Stack spacing={4}>
            {experiences.map((exp, index) => (
              <Box key={index} border="1px solid white" p={4} borderRadius="md" bg="dark">
                <Heading as="h4" fontSize="lg" color="white">
                  {exp.title}
                </Heading>
                <Text>{exp.description}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl" color="fanta">
            Client Testimonials
          </Heading>
          <Stack spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} border="1px solid white" p={4} borderRadius="md" bg="dark">
                <Heading as="h4" fontSize="lg" color="white">
                  {testimonial.client}
                </Heading>
                <Text fontStyle="italic">"{testimonial.feedback}"</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default FreeLance;
