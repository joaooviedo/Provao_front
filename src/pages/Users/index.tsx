import ButtonLarge from "components/ButtonLarge";
import ManageUsers from "components/ManageUsers";
import UserItemList from "components/UserItemList";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Users = () => {
  const navigate = useNavigate();
  const handleSubmit = (): void => {
    navigate(RoutePath.MANAGEUSERS);
  };

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
      </S.UsersContent>
    </S.Users>
  );
};

export default Users;
