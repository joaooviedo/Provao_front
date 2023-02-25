import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";


const BoxHome = () => {

    const navigate = useNavigate();
    const handleSubmit = (): void => {
      navigate(RoutePath.LOGIN);
    };
    return (
      <S.BoxHome>
        <S.BoxHomeTitle>
          <h1>Bem vindo(a)</h1>
        </S.BoxHomeTitle>
        <ButtonLarge value="Fazer Login" type="button" onClick={handleSubmit}/>
      </S.BoxHome>
    );
  };

export default BoxHome;
