import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Informatie = () => {
  return (
    <section>
    {/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center tracking-widest">
  {/* text */}
    <div className="text-[50px] lg:text-[120px] font-bold uppercase pt-20 lg:pt-0">Informatie</div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</section>

{/* INFORMATION*/}
<section className="w-screen py-20">
  <div className="px-10 lg:px-20">
  {/* oprichters */}
    <div>
      <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest">oprichters</h1>
      <p>
<span className="font-bold">RE-MOVE Coaching</span> is opgezet door:
      <br /><br />
<span className="font-bold">Rein van Bedaf</span> (muziektherapeut/bokstrainer) 
<br />
 en
<br />
<span className="font-bold">Evi Schut</span> (sociaal pedagogisch hulpverlener / teamleider in de GGZ).
      </p>
    </div>

  {/* container programma en doelroep */}
    <div className="py-10 flex justify-center items-start flex-col lg:flex-row">
      {/* programma */}
      <div className="lg:w-1/2">
      <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest">programma</h1>
      <p className="tracking-wider">Dit programma is ontworpen om individuen te helpen bij het verbeteren van hun emotionele welzijn, zelfvertrouwen en sociale vaardigheden. Het combineert de fysieke voordelen van boksen met de kracht van emotionele begeleiding om een holistische ontwikkelingservaring te bieden.</p>
      </div>
      {/* doelgroep */}
      <div className="lg:w-1/2 text-right py-5 lg:py-0">
        <p className="order-last lg:order-first tracking-wider">Onze doelgroep omvat kinderen en jongvolwassenen van 8 t/m 21 jaar die geïnteresseerd zijn in het verbeteren van hun sociaal-emotionele vaardigheden en op zoek zijn naar persoonlijke groei en ontwikkeling.</p>
        <h1 className="order-first lg:order-last text-[35px] lg:text-[50px] uppercase font-bold tracking-widest">onze <br />doelgroep</h1>
      </div>
    </div>
  </div>

  {/* ONS COACHING TRAJECT */}
  <section className="w-screen p-10 lg:p-20">
    <div className="flex flex-col">
    <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest text-center">Ons coaching traject</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:p-10 py-10">
          <p>
          Ons coaching traject biedt een combinatie van bokstraining en emotionele coachingsessies met inzet van sport en spel. Deelnemers zullen bokstechnieken leren terwijl ze ook werken aan het begrijpen en beheersen van hun emoties, stressvermindering en het ontwikkelen van sociale vaardigheden. Het programma is gemaakt om deelnemers op een spelende, bewegende manier hun emoties te voelen en leren uiten op een voor hun prettige manier. De volgende 4 punten zijn hierin belangrijk:
          </p>
        </div>
        <div className="lg:w-1/2 lg:p-10 py-10">
          <p>
              <span className="font-bold">Holisme</span>: Wij benaderen ontwikkeling holistisch, waarbij fysieke en emotionele aspecten samenkomen om een volledig programma te creëren. <br /><br />
              <span className="font-bold">Ervaringsgericht leren</span>: Deelnemers leren door actief bezig te zijn, waardoor de toepassing van emotionele vaardigheden in het dagelijks leven wordt vergemakkelijkt. <br /><br />
              <span className="font-bold">Deskundige begeleiding</span>: Onze coaches zijn getraind in het zowel boksen als emotionele begeleiding, waardoor ze een unieke expertise bieden. <br /><br />
              <span className="font-bold">Maatwerk</span>: We passen het programma aan de individuele behoeften van deelnemers aan, met aandacht voor de persoonlijke groei.
              </p>
        </div>
      </div>
    </div>
  </section>
</section>
{/* VOLGENDE PAGINA */}
<section className="w-screen">
    <div className="w-full px-10 lg:px-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <p className="flex items-center justify-center text-right uppercase font-bold tracking-wider">Diensten</p>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
</section>
    )
};

export default Informatie;
