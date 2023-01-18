import InnerContent from "~/client/components/layout/inner-content/inner-content";
import LogoWhite from "~/client/components/logos/logo-white/logo-white";
import FadeIn from "~/client/components/primitives/fade-in/fade-in";
import useSteps from "~/client/hooks/useSteps";

export default function Index() {
  return (
    <section id="hero" className="relative h-screen w-screen py-16 md:py-36">
      <div className="absolute inset-0 -z-10 bg-hero-image bg-cover bg-center">
        <div className="absolute inset-0 bg-hero-radial-gradient"></div>
      </div>
      <InnerContent>
        <div className="grid h-full w-full grid-rows-[_1fr_.25fr] items-center md:h-max md:grid-cols-[1fr_.25fr] md:grid-rows-1">
          <Headlines />
          <div className="w-full self-end">
            <button
              type="button"
              title="agende um horario"
              className="grid h-[150px] w-[150px] place-items-center rounded-full bg-white"
            >
              <span className="text-center tracking-wider text-black">
                Agende um horário
              </span>
            </button>
          </div>
        </div>
      </InnerContent>
    </section>
  );
}

function Headlines() {
  const headlines = [
    "Liberte-se do stress e ansiedade",
    "Desperte a calma interior e se livre do stress e ansiedade",
    "Encontre a tranquilidade e alivie o stress e ansiedade",
  ];

  const { currentActiveStep } = useSteps({
    steps: headlines.length,
    interval: 5000,
    startOnStep: 0,
  });

  return (
    <div className="flex w-full flex-col">
      {/* <FadeIn key={currentActiveStep}> */}
      <h1 className="text-lg font-medium tracking-widest text-white">
        {headlines[0]}
      </h1>
      {/* </FadeIn> */}
      <div className="md:items-left grid w-full grid-rows-3 items-center justify-items-start md:grid-cols-3 md:grid-rows-1">
        <h2 className="text-3xl tracking-widest text-white">Massagens</h2>
        <h2 className="text-3xl tracking-widest text-white">
          Terapia holística
        </h2>
        <h2 className="text-3xl tracking-widest text-white">Yoga</h2>
      </div>
    </div>
  );
}
