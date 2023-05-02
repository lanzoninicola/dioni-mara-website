import Container from "~/client/components/layout/container/container";
import Main from "~/client/components/layout/main/main";
import massages from "../content/massages.json"
import ServiceBox from "~/client/components/service-box/service-box";
import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Massage {
  id: number,
  name: string,
  imageUrl: string,
  shortDescription: string,
  duration: number | number[],
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dioni Mara Yoga & Terapias - Massagens",
  description: "As terapias manuais aplicadas são personalizadas para ajudar a administrar o estresse e a dor crônica. Descubra como posso ajudar a relaxar seu corpo e sua mente.",
  viewport: "width=device-width,initial-scale=1",
});

export function loader() {

  // TODO: Move the infoMessage and scheduleMessage here

  return json(massages)
}


// TODO: implement a sort order to spotlight some services
// TODO: add an explanation of preparation and aftercare
export default function ServicosMassagens() {
  const massages: Massage[] = useLoaderData();

  return <Main>
    <Container>
      <h1 className="font-bold text-4xl mb-8">Massagens</h1>
      <p>As terapias manuais aplicadas são personalizadas para ajudar a administrar o estresse e a dor crônica. Descubra como posso ajudar a relaxar seu corpo e sua mente.</p>
    </Container>
    <Container>
      <div className="flex flex-col gap-4 lg:gap-8 mt-8">
        {massages.map((massage) => {

          const infoMessage = `Olá, gostaria de saber mais sobre a massagem ${massage.name}. <Faça sua pergunta>`
          const scheduleMessage = `Olá, gostaria de agendar uma massagem ${massage.name}.`

          return <ServiceBox
            key={massage.id}
            name={massage.name}
            imageUrl={massage.imageUrl}
            shortDescription={massage.shortDescription}
            infoMessage={infoMessage}
            scheduleMessage={scheduleMessage}
          />
        })}

      </div>

    </Container>
  </Main>
}
