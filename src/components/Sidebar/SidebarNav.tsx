import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine}>
          Usuarios
        </NavLink> 
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiGitMergeLine}>
            Formularios
          </NavLink>
          <NavLink icon={RiInputMethodLine}>
            Automação
          </NavLink>
      </NavSection>
    </Stack>
  );
}