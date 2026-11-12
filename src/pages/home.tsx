import PlanoPopup from "@/components/popup/plano-popup";
import Amenidades from "./home/components/amenidades";
import Cotiza from "./home/components/cotiza";
import ExploraCX from "./home/components/explora-cx";
import FHA from "./home/components/fha";
import Hero from "./home/components/hero";
import Historia from "./home/components/historia";
import Modelos from "./home/components/modelos";
import PlanoConjunto from "./home/components/plano";
import Ubicacion from "./home/components/ubicacion";
import { useSearchParams } from "react-router";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const popup = searchParams.get("popup");

  const cerrarPopup = () => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("popup");
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  };

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

      {popup === "plano-conjunto" && <PlanoPopup onClose={cerrarPopup} />}
    </main>
  );
}
