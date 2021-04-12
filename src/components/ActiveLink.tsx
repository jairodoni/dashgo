import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { cloneElement, ReactElement } from 'react';

//Se for receber um "componente" no children, use ReactElement
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shoudMatchExactHref?: boolean;
}

export function ActiveLink({ children, shoudMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (shoudMatchExactHref && (asPath === rest.href || asPath == rest.as)) {
    isActive = true;
  }
  // verifica se a url é diferente de shoudMatchExactHref e 
  // se for ele verifica se ela começa com shoudMatchExactHref,
  // assim o link continua como ativo se ele ainda estiver em tal categoria
  if (!shoudMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as)))) {

    isActive = true;

  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}