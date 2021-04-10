import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex>
      <Box mr="4" textAlign="right">
        <Text>Jairo Doni</Text>
        <Text color="gray.300"fontSize="small">
          jairo.doni@gmail.com
        </Text>
      </Box>
      
      <Avatar size="md" name="Jairo Doni" src="https://avatars.githubusercontent.com/u/38520302?v=4"/>
    </Flex>
  )
}