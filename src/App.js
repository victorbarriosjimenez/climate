import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Materials from "./modules/Materials/Materials";
import Campaign from './modules/Campaign/Campaign';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Materials />
      <Campaign />
    </div>
  );
}

export default App;
