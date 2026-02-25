import Logo from "../Logo";
import OpcoesHeader from "../menuHeader";
import IconesHeader from "../iconesTopo";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-around;

`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
      <Logo/>
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
