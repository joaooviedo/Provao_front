import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes } from "react";

type BoxRegisterType = HTMLAttributes<HTMLDivElement>;

type BoxRegisterProps = {} & BoxRegisterType;


const BoxRegister = ({ ...props }: BoxRegisterProps) => {
  return (
    <S.BoxLogin>
      <S.BoxLoginTitle>
        <h1> Cadastrar </h1>
      </S.BoxLoginTitle>
      <S.BoxLoginForm>
      <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a Senha" />
        <ButtonLarge value="Cadastrar" type="button" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxRegister;
