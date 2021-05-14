
type User = {
  permissions: string[];
  roles: string[];
}

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams){
  
  if(permissions?.length > 0){
    //Metodo every, Só retorna true caso as permições sejam iguais as do usuario logado
    const hasAllPermissions = permissions.every(permission => {
      return user.permissions.includes(permission);
    })
    
    if(!hasAllPermissions){
      return false;
    }
  }

  if(roles?.length > 0){
    //Metodo every, Só retorna true caso as permições sejam iguais as do usuario logado
    const hasAllRoles = roles.every(role => {
      return user.roles.includes(role);
    })

    if(!hasAllRoles){
      return false;
    }
  }

  return true;
}