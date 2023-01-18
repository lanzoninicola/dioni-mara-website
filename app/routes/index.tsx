import MobileFullScreenImage from "~/client/components/full-screen-image/full-screen-image";
import InnerContent from "~/client/components/layout/inner-content/inner-content";
import { Button, Video } from "~/client/components/primitives";

export default function Index() {
  return (
    <div>
      <section id="hero" className="bg-tea-600 pb-8 md:pt-0 md:pb-16">
        <div className="lg:-mt-18 lg:pt-18 relative z-50 -mt-16 flex flex-col pt-20 lg:-mt-20 lg:pt-20">
          <HeroVideoBackground />
          <Headlines />
        </div>
      </section>
      {/* <section id="massagens-preface" className=" h-screen w-screen">
        <div className="relative h-screen w-screen">
          <div className="absolute inset-0 h-full w-full bg-tea-700 bg-massage-preface bg-cover bg-right-bottom bg-no-repeat bg-blend-lighten"></div>
          <span className="absolute bottom-8 left-8 w-[20ch] font-body text-sm font-extrabold uppercase text-tea-50">
            Sinta-se renovado e revigorado. Desfrute de uma experiência de
            relaxamento
          </span>
        </div>
      </section> */}
      <section id="massagens" className="h-screen w-screen bg-tea-50">
        <InnerContent clazzName="mb-16">
          <h2 className="font-title pt-12 pb-4 text-5xl">Massagens</h2>
          <p className="max-w-[30ch] font-body">
            As terapias manuais aplicadas{" "}
            <span className="font-bold">são personalizadas</span> para ajudar a
            administrar o estresse e a dor crônica. Descubra como posso ajudar a
            relaxar seu corpo e sua mente.
          </p>
        </InnerContent>
        <div className="relative h-[450px] w-[350px]">
          <div className="h-full w-full rounded-br-[50px] bg-tea-800 bg-massage bg-cover bg-right-bottom bg-no-repeat hover:bg-blend-luminosity"></div>
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-br-[50px] bg-black bg-fixed opacity-30"></div>
        </div>
      </section>
    </div>
  );
}

function Headlines() {
  return (
    <InnerContent>
      <div className="mb-12 mt-64 border-white/5  md:mt-40 lg:my-52 lg:border-y lg:py-2 ">
        <h1 className="text-3xl font-semibold tracking-tighter text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em] lg:tracking-[-0.0375em]">
          Alivie o estresse e a tensão <br />
          com nossas massagens <br />e tratamentos holísticos
        </h1>
        <div className="mt-8 mb-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
          <p className="font-body tracking-normal">
            Descubra como nossas massagens e terapias holísticas podem ajudá-lo
            a alcançar um estado de relaxamento profundo e equilíbrio interior,
            ao mesmo tempo em que tratamos suas necessidades específicas de
            saúde e bem-estar
          </p>
        </div>
        <Button label="Agende sua sessão" />
      </div>
    </InnerContent>
  );
}
