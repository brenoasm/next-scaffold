import UsersTemplate, { UsersTemplateProps } from 'templates/Users';
import httpClient from 'utils/httpClient';
import { NextSeo } from 'next-seo';

export default function UsersPage(props: UsersTemplateProps) {
  return (
    <>
      <NextSeo title="Users page" description="A page that renders users" />
      <UsersTemplate {...props} />
    </>
  );
}

export async function getServerSideProps() {
  const users = await httpClient(`${process.env.NEXT_USERS_API}`);

  return { props: { users } };
}
