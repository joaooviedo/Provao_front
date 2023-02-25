import * as S from "./style";

interface UserItemListProps {
  children: React.ReactNode;
}

const UserItemList = ({ children }: UserItemListProps) => {
  return (
    <section>
      <S.UserItemListHeader>
      </S.UserItemListHeader>
      <S.UserItemList>{children}</S.UserItemList>
    </section>
  );
};

export default UserItemList;
