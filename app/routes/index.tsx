import { ButtonLink, ButtonLinkSpotted } from "~/client/components/primitives/button-link/button-link";
import deals from "../content/deals.json"
import Container from "~/client/components/layout/container/container";
import { useLoaderData } from "@remix-run/react";
import Deals from "~/client/components/deals/deals";
import { Deal, DealUI } from "~/types";
import { json } from "@remix-run/node";

export function loader() {

  // TODO: Check the validation of the deals

  const dealsUI: DealUI[] = deals.map(t => {
    return {
      ...t,
      infoMessage: `Olá, gostaria de saber mais sobre a promoção ${t.title}. <Faça sua pergunta>`,
      bookingMessage: `Olá, gostaria de agendar em relação a promoção ${t.title}.`
    }
  })

  return json(dealsUI)
}

export default function Index() {
  const deals: Deal[] = useLoaderData();

  return <>
    <Container>
      <div className="flex flex-col gap-4 md:gap-8 mb-16">
        <ButtonLinkSpotted label="Agende um horário" to="#" />
        <ButtonLink label="Massagens" to="/massagens" />
        <ButtonLink label="Terapias Holísticas" to="/terapias-holisticas" />
        <ButtonLink label="Yoga" to="/yoga" />
        {/* <ButtonLink label="Tour da sala" to="#" />
        <ButtonLink label="Quem é Dioni Mara" to="#" /> */}
      </div>
    </Container>
    <Deals deals={deals} />
  </>
}

function BackgroundHomeImage() {
  return <div className="absolute top-0 left-0 md:inset-0 bg-cover bg-left-bottom lg:bg-cover lg:bg-right-top bg-no-repeat opacity-80 -z-10" style={{ backgroundImage: "url('https://res.cloudinary.com/cloudnila/image/upload/v1682558715/dioni-mara-website/home-bg.png')" }}></div>
}
