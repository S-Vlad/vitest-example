import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { USERS_LINK } from '../../constants/general';

export const Users = () => {
  const { data, error, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response: AxiosResponse<User[]> = await axios.get(USERS_LINK);
      return response.data;
    },
  });

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>Users</h1>

      <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

type User = {
  id: number;
  name: string;
};
