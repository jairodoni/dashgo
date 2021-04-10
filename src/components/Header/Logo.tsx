import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      //letterSpacing diminui o espaçamento entre as letras
      letterSpacing="tight"
      W="64"
    >
      dashgo
     <Text as="span" ml="1" color="pink.500">.</Text>
  </Text>
  )
}