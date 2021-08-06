import { Fragment } from 'react';
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
        <Fragment>
          <p>Users Page</p>
          {data?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </Fragment>
      )}
    </Base>
  );
};

export default Users;
