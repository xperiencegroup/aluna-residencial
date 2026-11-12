import Amenidades from "./home/components/amenidades";
import Cotiza from "./home/components/cotiza";
import ExploraCX from "./home/components/explora-cx";
import Hero from "./home/components/hero";
import Historia from "./home/components/historia";
import Modelos from "./home/components/modelos";
import PlanoConjunto from "./home/components/plano";

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
    </main>
  );
}
