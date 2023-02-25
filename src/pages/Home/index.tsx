import BoxHome from "components/BoxHome";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";


const Home = () => {

  return (
    <S.Home>
      <S.HomeContent>
        {" "}
        <BoxHome/>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
