import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  // use o  "headers" para pegar dado por parametro
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  //Com arrow function executara o getUsers somente quando a Query for lançada
  //O useQueryguarda um valor em cache utilizando uma chave, ex:'users'
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minuntos
  });
}
