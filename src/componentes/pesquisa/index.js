import Input from '../input';
import styled from 'styled-components';
import { useState } from 'react';
import { Lista } from '../pesquisa/dadosPesquisa';

const PesquisarContainer = styled.section``;
function Pesquisar (){
    const [pesquisaDigitado, setPesquisaDigitado] = useState([ ])
    return(
        <PesquisarContainer> 
    <Input
        placeholder="Pesquise por um produto"    
        onBlur={evento => {
            const textoDigitado = evento.target.value
            const resultadoPesquisa = Lista.filter(Lista => Lista.nome.includes (textoDigitado))
            setPesquisaDigitado(resultadoPesquisa)
        }}
        />
        {pesquisaDigitado.map (Lista => (
            <div> 
                <p>{Lista.nome}</p>
            <img src= {Lista.src} 
            style={{ width: '60px', height: 'auto' }}
            ></img>
       
            </div>
     ))}
        </PesquisarContainer>   

       

    );
}
export default Pesquisar