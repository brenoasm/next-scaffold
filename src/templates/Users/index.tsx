import useFetchUsers from 'services/useFetchUsers';
import Base from 'templates/Base';
import { User } from 'types';

export type UsersTemplateProps = {
  users?: User[];
};

const Users = ({ users }: UsersTemplateProps) => {
  const { data, error } = useFetchUsers({ initialData: users });

  return (
    <Base>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Users Page</p>
          {data?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </>
      )}
    </Base>
  );
};

export default Users;
