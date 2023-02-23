import ManageUsers from "components/ManageUsers";
import UserItemList from "components/UserItemList";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>
                Management Users
              </S.HomeHeaderDetailsLogo>
            </div>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeUserTitle>
            <b>Usuários</b>
          </S.HomeUserTitle>
          <S.HomeUserList>
              <UserItemList>
              <ManageUsers />
              </UserItemList>
          </S.HomeUserList>
        </div>
        <div>
          <S.ItemLogout> Clique aqui para deslogar </S.ItemLogout>
        </div>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
