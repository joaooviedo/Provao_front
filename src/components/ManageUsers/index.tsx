import EditUser from "components/EditUser";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersContent>
          <S.UserItemName>Nome do Usuário</S.UserItemName>
          <S.UserItemEmail>Email do Usuário</S.UserItemEmail>
          <S.UserItemPassword> Senha do Usuário </S.UserItemPassword>
        <EditUser />
      </S.ManageUsersContent>
    </S.ManageUsers>
  );
};

export default ManageUsers;
