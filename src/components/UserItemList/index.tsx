import * as S from "./style";

interface UserItemListProps {
  children: React.ReactNode;
}

const UserItemList = ({ children }: UserItemListProps) => {
  return (
    <section>
      <S.UserItemListHeader>
        <S.UserItemListHeaderTitle>Escolha o Usuário</S.UserItemListHeaderTitle>
      </S.UserItemListHeader>
      <S.UserItemList>{children}</S.UserItemList>
    </section>
  );
};

export default UserItemList;
