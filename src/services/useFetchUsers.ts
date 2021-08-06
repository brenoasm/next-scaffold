import useSWR from 'swr';
import { User } from 'types';

export type UseFetchUsersType = {
  initialData?: User[];
};

const defaultProps: UseFetchUsersType = {};

const useFetchUsers = ({ initialData } = defaultProps) => {
  const { data, error } = useSWR<User[], string>(
    `${process.env.NEXT_USERS_API}`,
    null,
    {
      initialData,
    },
  );

  return { data, error };
};

export default useFetchUsers;
