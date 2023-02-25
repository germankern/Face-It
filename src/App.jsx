import './App.css';
import Navbar from './components/Navbar'
import ButtonLinksContainer from './components/ButtonLinksContainer';
import DescriptionSection from './components/DescriptionSection';
import EventContainer from './components/EventContainer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DescriptionSection></DescriptionSection>
      <ButtonLinksContainer></ButtonLinksContainer>
      <EventContainer></EventContainer>
    </div>
  );
}

export default App;
