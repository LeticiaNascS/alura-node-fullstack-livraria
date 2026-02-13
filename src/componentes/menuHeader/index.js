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