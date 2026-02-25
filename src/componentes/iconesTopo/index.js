<<<<<<< HEAD
import perfil from "../../Imagens/perfil.svg";
import sacola from "../../Imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="Ícone"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
=======

import perfil from '../../Imagens/perfilcerto.png';
import carrinho from '../../Imagens/carrinhocerto.png';
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: 1px; 
`;

const IconeItem = styled.li`
    width: 130px; 

    img {
        width: 100%;
        height: auto;
    }
`;

const iconesTopo = [carrinho, perfil];


function ComponentesIconesTopo() {
  return (  
<Icones>
        {iconesTopo.map ((icone) => (
          <IconeItem><img src={icone} alt='icone topo'/></IconeItem>
        ))}
        </Icones>
    );  
}
export default ComponentesIconesTopo;
>>>>>>> origin/master
