import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

function Contact() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Heading
        as="h2"
        color="blush"
        id="contactme"
        borderBottom="1px solid orange"
      >
        Get In Touch
      </Heading>
      <Stack
        gap="0px"
        columnGap="0px"
        direction={{ b: "column", md: "row" }}
        width="100%"
      >
        <Box
          w={{ b: "100%", md: "50%" }}
          p="3% 5%"
          bg="dark"
          borderRadius="10px"
        >
          <Heading color="baby" mb="20px">
            Have an Idea?{" "}
          </Heading>
          {open && (
            <form
              style={{
                display: "flex",
                rowGap: "10px",
                flexDirection: "column",
              }}
              method="POST"
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                var data = {
                  phone: e.target[2].value,
                  email: e.target[1].value,
                  name: e.target[0].value,
                  msg: e.target[3].value,
                };

                console.log(e);
                fetch("http://localhost:3000/api/hello", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((data) => {
                    setLoading(false);
                    setOpen(false);
                  })
                  .catch((error) =>
                    alert(
                      "error occurred at our backend. We regret the inconvenience."
                    )
                  );
              }}
            >
              <InputGroup gap="10px" flexDirection="column">
                <FormLabel>
                  Name *
                  <Input type="text" required />
                </FormLabel>
                <FormLabel>
                  Email *
                  <Input type="email" required />
                </FormLabel>
                <FormLabel>
                  Phone Number
                  <Input type="tel" />
                </FormLabel>
                <FormLabel>
                  Message *
                  <Textarea noOfLines={5} required />
                </FormLabel>
              </InputGroup>
              <Button
                type="submit"
                width="120px"
                fontSize={{ b: "12px", md: "16px" }}
                bg="fanta"
                _hover={{ bg: "blush" }}
                onClick={(e) => {}}
                isLoading={loading}
              >
                Submit
              </Button>
            </form>
          )}
          {!open && (
            <Text fontSize="20px">
              Thank You for your intrest. I will get back to you. &#128516;
            </Text>
          )}
        </Box>
        <Box
          display={{ b: "none", md: "block" }}
          width="50%"
          bg="url(/hello.png)"
          bgSize="contain"
          transform="scale(0.8)"
          animation="upupdowndown .7s linear infinite alternate"
          bgPos="center"
          bgRepeat="no-repeat"
        ></Box>
      </Stack>
    </>
  );
}

export default Contact;
