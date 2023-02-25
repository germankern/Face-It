import './App.css';
import Navbar from './components/Navbar'
import ButtonLinksContainer from './components/ButtonLinksContainer';
import DescriptionSection from './components/DescriptionSection';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DescriptionSection></DescriptionSection>
      <ButtonLinksContainer></ButtonLinksContainer>
    </div>
  );
}

export default App;
