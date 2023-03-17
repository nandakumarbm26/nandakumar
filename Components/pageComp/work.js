import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import Timeline from "../TimeLine";

function Work() {
  return (
    <>
      <Heading id="work" as="h2" color="blush" borderBottom="1px solid orange">
        WORK EXP
      </Heading>
      <HStack
        overflow="clip"
        justifyContent="center"
        fontSize={{ b: "20px", md: "30px" }}
        fontFamily="sans"
        fontWeight={100}
        w="100%"
        p="5vh 5vh"
      >
        <Grid
          gridTemplateColumns={{ b: "1fr", md: "1fr 1fr 1fr" }}
          // gridTemplateRows="1fr 1fr "
          w="100%"
          maxW="800px"
          height="70vh"
          gap="20px"
        >
          <GridItem
            borderRadius="10px"
            display="flex"
            height={"100%"}
            rowSpan={{ md: 2 }}
            bg="fanta"
            animation="0.5s ease-out 0s 1 slideInRight"
          >
            <Box
              width={"100%"}
              alignSelf="center"
              textAlign="center"
              alignItems="center"
            >
              1 +
              <br />
              Year
              <br />
              Of
              <br />
              Development
            </Box>
          </GridItem>
          <GridItem
            borderRadius="10px"
            height={"100%"}
            bg="dark"
            display="flex"
            animation="0.2s ease-out 0s 1 slideInLeft"
          >
            <Box
              width={"100%"}
              alignSelf="center"
              textAlign="center"
              alignItems="center"
            >
              Web development
            </Box>
          </GridItem>
          <GridItem
            animation="0.5s ease-out 0s 1 slideInRight"
            borderRadius="10px"
            height={"100%"}
            bg="dark"
            display="flex"
          >
            <Box
              width={"100%"}
              alignSelf="center"
              textAlign="center"
              alignItems="center"
            >
              Shopify
            </Box>
          </GridItem>
          <GridItem
            borderRadius="10px"
            height={"100%"}
            bg="dark"
            display="flex"
            colSpan={{ md: 2 }}
            animation="2s ease-out 0s 1 fadeIn"
          >
            <Box
              width={"100%"}
              alignSelf="center"
              textAlign="center"
              alignItems="center"
            >
              2 freelance projects
            </Box>
          </GridItem>
        </Grid>
      </HStack>
      <Timeline />
    </>
  );
}

export default Work;
