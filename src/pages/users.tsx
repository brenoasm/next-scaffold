import UsersTemplate, { UsersTemplateProps } from 'templates/Users';
import httpClient from 'utils/httpClient';

export default function UsersPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} />;
}

export async function getServerSideProps() {
  const users = await httpClient(`${process.env.NEXT_USERS_API}`);

  return { props: { users } };
}
