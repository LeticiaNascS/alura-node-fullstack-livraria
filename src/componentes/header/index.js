<<<<<<< HEAD
import Logo from "../Logo";
import OpcoesHeader from "../menuHeader";
import IconesHeader from "../iconesTopo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
=======
import Logo from '../Logo';
import Menu from '../menuHeader';
import IconesTopo from '../iconesTopo';
import styled from 'styled-components';
import Pesquisar from '../pesquisa';

const HeaderContainer = styled.header`
position: fixed;
    top: 0;
    width: 100%; 
    left: 0;
    height: 80px;

    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: left;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`
function componentesHeader() {
    return (
        <HeaderContainer>
        <Logo />
        <Menu />
        <Pesquisar/>
        <IconesTopo />
       </HeaderContainer>
    );
}
export default componentesHeader;
>>>>>>> origin/master
