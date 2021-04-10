import { Icon, Text, Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    //o ...rest neste caso permite usar todas as outras propriedades q o link permite usar
    //como por exemplo mudar de tela
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link> 
  )
}