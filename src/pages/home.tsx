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
import FormPopup from "@/components/popup/form-popup";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const popup = searchParams.get("popup");
  const form = searchParams.get("form");

  const cerrar = (param: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete(param);
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

      {popup === "plano-conjunto" && (
        <PlanoPopup onClose={() => cerrar("popup")} />
      )}
      {form === "xperience" && <FormPopup onClose={() => cerrar("form")} />}
      {form === "brochure" && <FormPopup onClose={() => cerrar("form")} />}
    </main>
  );
}
