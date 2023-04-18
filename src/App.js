import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Question from "./components/QuestionHighlighted/QuestionHighlighted";
import Materials from "./modules/Materials/Materials";
import Campaign from './modules/Campaign/Campaign';
import ContentSection from "./components/ContentSection/ContentSection";
import Investments from './modules/Investments/Investments';
import Allies from './modules/Allies/Allies';
import logo from './assets/6.png';
import whyInvest from './assets/11.png';
import campagin from './assets/4.png';


function App() {
  return (
      <div>
          <Header />
          <div className="container">
              <Hero />
              <Campaign />
              <Question
                  title="¿Por qué invertir en América Latina?"
                  subtitle="América Latina Unida"
                  imageSrc={whyInvest}
              />
              <Materials />
              <Question
                  title="¿Cómo puedo invertir yo?"
                  subtitle="Acciones Individuales Por El Planeta"
                  imageSrc={logo}
              />
              <Investments />
              <ContentSection
                  title="#BilletesPorLaVida en toda América Latina"
                  contentDirection="left"
                  image={campagin}
              >
                  <p>
                      Climate Reality América Latina, está presentes en 22
                      países de la región con una comunidad de más de 5600
                      personas activistas apasionadas por la acción climática.
                      ¡Sé parte de nuestra comunidad de líderes por la acción
                      climática! Queremos alentar a cada individuo a utilizar
                      sus recursos y talentos en beneficio de nuestro hogar
                      común desde sus países. Únete a nuestra intervención
                      masiva de #BilletesPorLaVida e invita a tu comunidad local
                      a ser parte de esta campaña del Día de la Tierra. Replica
                      el mensaje en tu ciudad, universidad o centro de trabajo.
                  </p>
              </ContentSection>
              <Allies />
              <Footer />
          </div>
      </div>
  );
}

export default App;
