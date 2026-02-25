<<<<<<< HEAD
import Header from "./componentes/header";
import Pesquisa from "./componentes/pesquisa";
import UltimosLancamentos from "./componentes/ultimosLancamentos";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
=======

import Header from './componentes/header';
import  UltimosLancamentos from './componentes/ultimosLancamentos';  

function App(){
  return (
    <div className="App">
      <Header />
      <UltimosLancamentos/>
    </div>
>>>>>>> origin/master
  );
}

export default App;
