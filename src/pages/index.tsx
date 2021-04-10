import { Button, Flex, Stack } from "@chakra-ui/react";
import { InputBox } from "../components/Form/InputBox";

export default function Home() {
  return (
      <Flex 
        w="100vw" 
        h="100vh" 
        align="center" 
        justify="center"
      >
        <Flex 
          as="form" 
          width="100%" 
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">
            <InputBox type="email" name="email" label="E-mail" />
            <InputBox type="password" name="password" label="Senha" />
          </Stack>

          <Button 
            type="submit" 
            mt="6" 
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>

            
          
        </Flex>
      </Flex>
  )
}
