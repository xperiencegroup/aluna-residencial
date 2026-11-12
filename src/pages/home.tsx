import Amenidades from "./home/components/amenidades";
import Hero from "./home/components/hero";
import Historia from "./home/components/historia";
import PlanoConjunto from "./home/components/plano";

export default function Home() {
  return (
    <main>
      <Hero />
      <Historia />
      <PlanoConjunto />
      <Amenidades />
    </main>
  );
}
