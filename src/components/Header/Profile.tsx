import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Menezes</Text>
          <Text color="gray.300" fontSize="small">
            matheus.mm
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus MM"
        src="https://github.com/Manfrinmm.png"
      />
    </Flex>
  );
}
