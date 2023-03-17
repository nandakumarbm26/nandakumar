import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export function HLink({ children, href, target }) {
  return (
    <Box>
      <Link href={href} target={target}>
        <Text
          color="white"
          _hover={{ color: "fanta", textDecoration: "underline" }}
        >
          {children}
        </Text>
      </Link>
    </Box>
  );
}
