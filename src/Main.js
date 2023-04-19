import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Question from "./components/QuestionHighlighted/QuestionHighlighted";
import Materials from "./modules/Materials/Materials";
import Campaign from './modules/Campaign/Campaign';
import ContentSection from "./components/ContentSection/ContentSection";
import Investments from './modules/Investments/Investments';
import Allies from './modules/Allies/Allies';
import logo from './assets/invertiryo.png';
import whyInvest from './assets/11.png';
import campagin from './assets/billetes-por-la-vida-en-toda-america-latina.png';


function Main() {
  return (
      <div>
          <Header />
          <div className="container">
              <Hero />
              <Campaign />
              <Question showText={true} imageSrc={whyInvest} />
              <Materials />
              <Question imageSrc={logo} />
              <Investments />
              <ContentSection
                  contentDirection="right"
                  image={campagin}
                  title="#BilletesPorLaVida en toda América Latina"
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

export default Main;
