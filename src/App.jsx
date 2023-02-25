import './App.css';
import Navbar from './components/Navbar'
import ButtonLinksContainer from './components/ButtonLinksContainer';
import DescriptionSection from './components/DescriptionSection';
import EventContainer from './components/EventContainer';
import Contact from './components/Contac';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DescriptionSection></DescriptionSection>
      <ButtonLinksContainer></ButtonLinksContainer>
      <EventContainer></EventContainer>
      <Contact></Contact>
    </div>
  );
}

export default App;
