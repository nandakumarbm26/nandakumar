import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <Box
      className="main"
      color="white"
      bg="url(/polybg.jpg)"
      borderTop="5px solid black"
      mt="25px"
      bgSize="cover"
    >
      <Stack
        direction={{ b: "column", md: "row" }}
        justifyContent="space-between"
        p="5% 0"
        gap="20px"
      >
        <Box>
          <Image src="/icon_nk_white.png" width={100} height={50} />
          <Text>Nanda Kumar B M</Text>
          <Box>
            <Link href="mailto:nandakumarbm26@gmail.com">
              nandakumarbm26@gmail.com
            </Link>
          </Box>
          <Box>
            <Link href="tel:+919538727397">+919538727397</Link>
          </Box>
        </Box>
        <Box
          textAlign="center"
          p="30px"
          borderLeft={{ md: "1px solid white" }}
          borderBottom={{ b: "1px solid white", md: "none" }}
          borderTop={{ b: "1px solid white", md: "none" }}
          borderRight={{ md: "1px solid white" }}
        >
          If u wanna fly high,
          <br /> give up on those things which weighs you down
        </Box>
        <Stack direction="column">
          <Stack direction={"column"}>
            <Link
              href="https://github.com/nandakumarbm26"
              target="_blank"
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                h="25px"
                w="25px"
                mr="10px"
                bg="url(./icons/github.svg)"
                display="inline-block"
                bgSize="contain"
              />
              GitHub/nandakumarbm26
            </Link>
            <Link
              href="https://instagram.com/llnk26ll?igshid=ZDdkNTZiNTM="
              target="_blank"
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                h="25px"
                w="25px"
                mr="10px"
                bg="url(./icons/instagram.png)"
                display="inline-block"
                bgSize="contain"
              />
              instagram/llnk26ll
            </Link>
            <Link
              href="https://github.com/nandakumarbm26"
              target="_blank"
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                h="25px"
                w="25px"
                mr="10px"
                bg="url(./icons/facebook.png)"
                display="inline-block"
                bgSize="contain"
              />
              facebook/nandakumarbm
            </Link>
            <Link
              href="https://www.linkedin.com/in/nandakumarbm"
              target="_blank"
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                h="25px"
                w="25px"
                mr="10px"
                bg="url(./icons/linkedin.png)"
                display="inline-block"
                bgSize="contain"
              />
              linkedin/nandakumarbm
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Text
        pb="10px"
        color="dark"
        width="100%"
        fontSize="10px"
        textAlign="center"
      >
        copyrights &#169; 2023
      </Text>
      <Text pb="10px" width="100%" fontSize="10px" textAlign="center">
        Made with ❤️ by NK
      </Text>
    </Box>
  );
}

export default Footer;
