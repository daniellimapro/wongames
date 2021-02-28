import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Title>React Avançado</S.Title>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />

    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de uma pessoa trabalhando em um computador."
    />
  </S.Wrapper>
);

export default Main;
