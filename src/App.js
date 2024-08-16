import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import People from './components/People';


function App() {
  return (
    <div className="App">
			<Header />
			<People title="Panelists" />
			<People title="Organizers" />
			<Footer />

    </div>
  );
}

export default App;
