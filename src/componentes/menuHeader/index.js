<<<<<<< HEAD
import styled from "styled-components";

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
=======
import styled from 'styled-components';

const menuItens = ['Buquê de Flores', 'Arranjos', 'Flores', 'Adubo', 'Contato'];
const Menu = styled.ul`
    display: flex;
    flex: 3;
    gap: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #6B8E6E;
    justify-content: center;
`;
const Icone = styled.li`
list-style: none;
`;


function componentesHeaderMenu() {
    return (
        <Menu>
        {menuItens.map ((texto) => (
          <Icone>{texto}</Icone>
        ))}
        </Menu> 
    );
}
export default componentesHeaderMenu;
>>>>>>> origin/master
