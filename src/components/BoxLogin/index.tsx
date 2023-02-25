import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { email: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { email, password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginTitle>
        <h1>Log in</h1>
      </S.BoxLoginTitle>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="E-mail"
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>

      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;
