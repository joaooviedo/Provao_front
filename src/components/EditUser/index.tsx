import { useEffect, useState } from "react";
import { User, UserResponse, UserUpdate } from "types/api/user";
import * as S from "./style";

interface EditUserProps {
  user: UserResponse;
  onCancel: boolean;
  onDelete: (data: UserResponse) => void;
  onEdit: (data: UserUpdate) => void;
}

const EditUser = ({ user, onCancel, onDelete, onEdit }: EditUserProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = {
    id: user.id,
    email: user.email,
    name: user.name,
    pass: "",
    passConfirm: "",
  };

  const [state, setState] = useState(form);

  const userEditFormatter = (toFormat: typeof form): User => ({
    email: toFormat.email,
    name: toFormat.name,
    password: toFormat.pass,
    passwordConfirm: toFormat.passConfirm,
  });

  const handleChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
    const userFormatted = { user: userEditFormatter(state), id: user.id };
    onEdit(userFormatted);
  };

  const onEditClick = () => {
    setIsEditing(true);
    const userFormatted = { user: userEditFormatter(state), id: user.id };
    onEdit(userFormatted);
  };

  useEffect(() => {
    setIsEditing(false);
  }, [onCancel]);

  return (
    <S.EditUser role="listitem">
      {!isEditing ? (
        <>
          <S.EditUserDetails>
            <S.EditUserDetailsTitle>{user.name}</S.EditUserDetailsTitle>
            <S.EditUserDetailsText>
              <b>usuário: </b> {user.email}
            </S.EditUserDetailsText>
          </S.EditUserDetails>

          <S.EditUserAction onClick={() => onEditClick()}> 
          Editar
          </S.EditUserAction>
        </>
      ) : (
        <S.EditFormGroup>
          <S.EditForm
            type="text"
            placeholder="Nome"
            value={state.name}
            onChange={({ target }) => handleChange("name", target.value)}
          />

          <S.EditForm
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={({ target }) => handleChange("email", target.value)}
          />

          <S.EditForm
            type="password"
            placeholder="Senha"
            value={state.pass}
            onChange={({ target }) => handleChange("pass", target.value)}
          />

          <S.EditForm
            type="password"
            error={Boolean(state.passConfirm.length &&state.pass.length &&state.pass !== state.passConfirm)}
            placeholder="Confirmar senha"
            value={state.passConfirm}
            onChange={({ target }) => handleChange("passConfirm", target.value)}
          />

          <S.Delete onClick={() => onDelete(user)}>Deletar</S.Delete>
        </S.EditFormGroup>
      )}
    </S.EditUser>
  );
};

export default EditUser;
