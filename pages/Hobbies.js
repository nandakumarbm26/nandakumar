import { Box, Heading, Stack, Text } from "@chakra-ui/react";

function Hobbies() {
  return (
    <Box className="main" p="5%" bg="white" color="black">
      <Heading as="h1" color="blush" borderBottom="2px solid orange" mb="20px">My Hobbies</Heading>
      <Heading as="h2" fontSize="2xl" mb="10px">🎯 Hobbies & Interests</Heading>
      <Text mb="20px">
        Outside of work, I dive into a variety of hobbies that keep me inspired, curious, and energized. Here's a glimpse into what fuels my creativity and focus when I'm away from the screen:
      </Text>
      <Stack spacing="20px">
        <Box>
          <Heading as="h3" fontSize="xl">🏍️ Motorcycle Touring</Heading>
          <Text>
            There’s nothing quite like hitting the open road on two wheels. I love planning long-distance rides across India — from the coastal stretches of Kerala to the high-altitude roads of Ladakh. Riding gives me a deep sense of freedom and connection with nature.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl">📸 Travel & Photography</Heading>
          <Text>
            Every place has a story, and I enjoy capturing it through my lens. Whether it’s street photography in local towns or scenic landscapes on my rides, photography lets me relive and share those moments.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl">🎮 Gaming & Strategy</Heading>
          <Text>
            Gaming is where my inner strategist comes out. I enjoy games that involve decision-making, resource management, and long-term thinking. It’s fun and often surprisingly good for sharpening mental agility.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl">📚 Reading & Learning</Heading>
          <Text>
            I'm an avid reader of non-fiction, especially around topics like psychology, technology trends, productivity, and biographies. I also explore technical blogs and research papers to keep my skills sharp.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl">💡 Building Side Projects</Heading>
          <Text>
            When inspiration strikes, I love experimenting with side projects — especially those involving AI, data, or automation. It’s my playground for learning, testing ideas, and building tools that might just come in handy someday.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" fontSize="xl">🧘‍♂️ Mindfulness & Well-being</Heading>
          <Text>
            In a fast-paced digital world, I’ve found practices like yoga and meditation helpful to reset and recharge. They’ve become an essential part of my weekly rhythm.
          </Text>
        </Box>
      </Stack>
      <Text mt="20px" fontStyle="italic">
        I believe our hobbies shape who we are just as much as our careers do — they keep us grounded, curious, and human.
      </Text>
    </Box>
  );
}

export default Hobbies;
