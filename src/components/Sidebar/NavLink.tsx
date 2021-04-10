import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    //ele cria uma ancora pra identificar o link da pagina q vai ser renderizado ao clica-lo
    //isso de forma forçada
    <ActiveLink href={href} passHref>
      {/* //o ...rest neste caso permite usar todas as outras propriedades q o link permite usar
      //como por exemplo mudar de tela */}
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink> 
    </ActiveLink>
  )
}