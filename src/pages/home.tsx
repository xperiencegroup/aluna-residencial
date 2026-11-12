import Amenidades from "./home/components/amenidades";
import Cotiza from "./home/components/cotiza";
import ExploraCX from "./home/components/explora-cx";
import FHA from "./home/components/fha";
import Hero from "./home/components/hero";
import Historia from "./home/components/historia";
import Modelos from "./home/components/modelos";
import PlanoConjunto from "./home/components/plano";
import Ubicacion from "./home/components/ubicacion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Historia />
      <PlanoConjunto />
      <Amenidades />
      <Modelos />
      <ExploraCX />
      <Cotiza />
      <Ubicacion />
      <FHA />
    </main>
  );
}
