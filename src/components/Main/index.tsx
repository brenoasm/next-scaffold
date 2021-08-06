import * as S from './styles';
import Link from 'next/link';

const Main = ({ title = 'Example', description = 'Some description' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Link href="/users">Go to Users</Link>
  </S.Wrapper>
);

export default Main;
