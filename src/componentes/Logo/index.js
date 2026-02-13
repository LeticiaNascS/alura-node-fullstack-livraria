import logo from '../../Imagens/logotransp.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
   height: 130px;
   display: flex;
   align-items: right;
   margin-left: 20px;
    `;
    
    const LogoImage = styled.img`
    height: 100%;
    `;  

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo' />
        </LogoContainer>
    );
}
export default Logo;