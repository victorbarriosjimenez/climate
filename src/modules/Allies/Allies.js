import React from 'react';
import OurClients from '../../components/OurClients/OurClients';
import logoMotum from '../../assets/motum.png';
import carbonoNeutral from '../../assets/carbono_neutral.png';
import wyc from '../../assets/WY4CJ.png';



const Allies = () => {
  const logos = [
      {
          image: carbonoNeutral,
          altText: 'Camino hacia carbono neutral',
      },
      {
          image: logoMotum,
          altText: "MOTUM",
      },
      {
          image: wyc,
          altText: "World's Youth For Climate Justice WWF Colombia",
      },
  ];

  return (
      <OurClients title="Nuestros Aliados" clients={logos} />
  );
};

export default Allies;
