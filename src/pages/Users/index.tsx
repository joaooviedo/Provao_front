import ManageUsers from "components/ManageUsers";
import UserItemList from "components/UserItemList";
import * as S from "./style";

const Users = () => {
  return (
    <S.Users>
      <S.UsersContent>
        <header>
          <S.UsersHeaderDetails>
            <div>
              <S.UsersHeaderDetailsLogo>
                Management Users
              </S.UsersHeaderDetailsLogo>
            </div>
          </S.UsersHeaderDetails>
        </header>
        <div>
          <S.UsersUserTitle>
            <b>Usuários</b>
          </S.UsersUserTitle>
          <S.UsersUserList>
              <UserItemList>
              <ManageUsers />
              </UserItemList>
          </S.UsersUserList>
        </div>
        <div>
          <S.ItemLogout> Clique aqui para deslogar </S.ItemLogout>
        </div>
      </S.UsersContent>
    </S.Users>
  );
};

export default Users;
