import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxHome = () => {
  return (
    <S.BoxHome>
      <S.BoxHomeTitle>
        <h1>Bem vindo(a)</h1>
      </S.BoxHomeTitle>
        <ButtonLarge value="Fazer Login" type="button" />
        <ButtonLarge value="Se cadastrar" type="button" />
    </S.BoxHome>
  );
};

export default BoxHome;
