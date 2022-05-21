import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Menezes</Text>
        <Text color="gray.300" fontSize="small">
          matheus.mm
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Matheus MM"
        src="https://github.com/Manfrinmm.png"
      />
    </Flex>
  );
}
