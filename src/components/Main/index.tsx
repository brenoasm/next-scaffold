import * as S from './styles'

const Main = ({
  title = 'Example',
  description = 'Some description'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
