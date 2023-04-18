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
              <div className="explanation">
                  <p className="paragraph">
                      Este 22 de abril, en Climate Reality América Latina, nos
                      unimos a la icónica y potente campaña del Día de la
                      Tierra, una celebración que, año tras año, convoca a
                      personas, empresas y gobiernos de todos los ámbitos para
                      unirse en un esfuerzo colectivo y audaz en pro de la
                      sostenibilidad y la acción climática. Este año, la
                      temática que inspira la campaña a nivel mundial es
                      "Invierte en el Planeta" y desde nuestras oficinas de
                      América Latina lanzamos el llamado para que toda la región
                      se una a la demostración masiva #BilletesPorLaVida porque
                      tenemos la fiel convicción de que la mejor inversión de
                      todas, es invertir en nuestro planeta.
                      <strong>
                          ¡Que los recursos de todo el mundo sirvan a la vida!
                      </strong>
                      <br></br>
                      <strong>“Invierte en el Planeta”</strong>, es un mensaje
                      para movilizar recursos financieros a la acción climática
                      pero también es una misiva para recordar que podemos
                      destinar nuestro tiempo y nuestras acciones a favor del
                      planeta. Este es un llamado a todos los niveles: empresas,
                      gobiernos, organizaciones y cualquiera de nosotros
                      ¡podemos hacer que los recursos sirvan a la vida!
                  </p>
              </div>
              <Campaign />
              <Question showText={true} imageSrc={whyInvest} />
              <Materials />
              <Question
                  title="#BilletesPorLaVida en toda América Latina"
                  imageSrc={logo}
              />
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
