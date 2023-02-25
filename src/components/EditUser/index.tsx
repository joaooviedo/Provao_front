import * as S from "./style";

const EditUser = () => {
  return (
    <S.EditUser>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Nome" />
        <S.EditForm type="text" placeholder="Email" />
        <S.EditForm type="password" placeholder="Senha" />
        <S.EditForm type="password" placeholder="Confirmar Senha" />
        <>
          <S.EditUserAction>Editar</S.EditUserAction>
        </>
        <S.Delete>Deletar</S.Delete>
      </S.EditFormGroup>
    </S.EditUser>
  );
};

export default EditUser;
