import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginTitle>
        <h1>Log in</h1>
      </S.BoxLoginTitle>
      <S.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <ButtonLarge value="Entrar" type="button" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
