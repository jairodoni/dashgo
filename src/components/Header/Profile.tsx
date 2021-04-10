import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && 
      (
        <Box mr="4" textAlign="right">
          <Text>Jairo Doni</Text>
          <Text color="gray.300"fontSize="small">
            jairo.doni@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar size="md" name="Jairo Doni" src="https://avatars.githubusercontent.com/u/38520302?v=4"/>
    </Flex>
  )
}